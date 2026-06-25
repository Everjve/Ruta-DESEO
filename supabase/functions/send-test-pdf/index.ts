import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const STAGE_NAMES: Record<string, string> = {
  D: "Desmitificación Radical",
  ExA: "Exploración Auténtica",
  S: "Sanación Interior",
  ExE: "Expansión Existencial",
  O: "Optimización Vital",
};

const STAGE_PDF: Record<string, string> = {
  D: "etapa-d.pdf",
  ExA: "etapa-e-exploracion.pdf",
  S: "etapa-s.pdf",
  ExE: "etapa-e-expansion.pdf",
  O: "etapa-o.pdf",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { name, email, stage, siteUrl } = await req.json();

    if (!name?.trim() || !email?.trim() || !stage) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 503,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const stageName = STAGE_NAMES[stage] ?? stage;
    const pdfFile = STAGE_PDF[stage];

    let attachments: Array<{ filename: string; content: string }> | undefined;
    if (siteUrl && pdfFile) {
      try {
        const pdfRes = await fetch(`${siteUrl}/pdfs/${pdfFile}`);
        if (pdfRes.ok) {
          const buffer = await pdfRes.arrayBuffer();
          const bytes = new Uint8Array(buffer);
          let binary = "";
          for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
          attachments = [{ filename: pdfFile, content: btoa(binary) }];
        }
      } catch {
        // PDF not yet available; send email without attachment
      }
    }

    const emailPayload: Record<string, unknown> = {
      from: "Ever Vega · Ruta DESEO <contacto@evervega.com>",
      to: [email],
      subject: `Tu guía de la etapa ${stageName} - Ruta DESEO`,
      html: `
        <p>Hola <strong>${name}</strong>,</p>
        <p>Gracias por completar el Test DESEO Evolutivo.</p>
        <p>Adjunto encontrarás la guía completa de tu etapa <strong>${stageName}</strong> con ejercicios prácticos para avanzar desde donde estás hoy.</p>
        <p>— Ever Vega</p>
      `,
    };

    if (attachments) emailPayload.attachments = attachments;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailPayload),
    });

    if (!resendRes.ok) {
      const errorText = await resendRes.text();
      console.error("Resend error:", errorText);
      throw new Error(errorText);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
