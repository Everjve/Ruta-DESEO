import { useState, useEffect } from 'react';
import { ArrowLeft, Check, ChevronRight } from 'lucide-react';
import { useRouter } from '../router';

const travesiaLogoGlob = import.meta.glob('../assets/Travesia_Deseo_logo.png', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;
const travesiaLogo: string = travesiaLogoGlob['../assets/Travesia_Deseo_logo.png'] ?? '';

const WHATSAPP_LINK =
  'https://api.whatsapp.com/send?phone=+573144713413&text=Quiero%20saber%20m%C3%A1s%20de%20Traves%C3%ADa%20DESEO';

const problemaBullets = [
  'Sigues cayendo en los mismos patrones',
  'La claridad que tuviste en un taller se diluye a los 15 días',
  'Sabes qué hacer, pero no lo haces',
  'Te sientes solo en el proceso, aunque estés rodeado de gente',
];

const fases = [
  {
    num: '01',
    name: 'DESMITIFICACIÓN RADICAL',
    subtitle: 'Lo que creía cierto... ya no lo es',
    tension: 'He construido mi vida sobre cosas que nunca cuestioné.',
    desc: 'Cuestionas las creencias que has dado por sentadas durante décadas. Revisas tu historia personal con una mirada nueva. Aparece una incomodidad consciente que te indica que algo está cambiando.',
    resultado: 'He estado viviendo desde un guion que nunca elegí.',
    diferencial: false,
  },
  {
    num: '02',
    name: 'EXPLORACIÓN AUTÉNTICA',
    subtitle: '¿Qué es realmente mío?',
    tension: 'Si suelto lo anterior... ¿quién soy?',
    desc: 'Tomas contacto con emociones reales que habías evitado. Reconoces vacíos que no querías mirar. Empiezan a emerger primeras verdades personales.',
    resultado: 'Ahora empiezo a entender qué es mío y qué no.',
    diferencial: false,
  },
  {
    num: '03',
    name: 'SANACIÓN INTERIOR',
    subtitle: 'Esto ya no tiene que seguir pesando',
    tension: 'Hay cosas que siguen afectándome aunque ya no quiero.',
    desc: 'Procesamiento emocional profundo. Resignificación de experiencias dolorosas. Aparece un alivio progresivo que se siente en el cuerpo.',
    resultado: 'Ya no estoy cargando lo mismo.',
    diferencial: false,
  },
  {
    num: '04',
    name: 'EXPANSIÓN EXISTENCIAL',
    subtitle: 'Puedo vivir distinto',
    tension: 'Si ya no soy lo anterior... ¿qué soy ahora?',
    desc: 'Se abre un campo de nuevas posibilidades. La identidad empieza a redefinirse. El DESEO profundo emerge con claridad.',
    resultado: 'Empiezo a elegirme de otra manera.',
    diferencial: false,
  },
  {
    num: '05',
    name: 'OPTIMIZACIÓN VITAL',
    subtitle: 'Esto ahora se vive',
    tension: '¿Cómo sostengo esto en mi vida real?',
    desc: 'Tomas decisiones concretas. Los cambios se vuelven visibles. La coherencia entre interior y exterior empieza a manifestarse.',
    resultado: 'Ya no solo entiendo... estoy viviendo distinto.',
    diferencial: false,
  },
  {
    num: '06',
    name: 'INTEGRACIÓN',
    subtitle: 'Ahora me sostengo',
    tension: 'No quiero volver a lo de antes.',
    desc: 'Consolidación interna. La claridad se vuelve estable. Aparece una seguridad personal que antes no estaba.',
    resultado: 'Identidad integrada. Ya no necesitas el curso. Te tienes a ti mismo.',
    diferencial: true,
  },
];

const includes = [
  'Sesión inaugural de integración grupal (2 horas)',
  'Sesiones mensuales en vivo con Ever Vega (90 minutos)',
  'Círculos de grupo entre sesiones (facilitados)',
  'Acompañamiento individual entre sesiones por WhatsApp',
  'Materiales de trabajo para cada fase',
  'Evaluación de inicio y cierre del proceso',
  'Grupos de máximo 9 personas',
  'Acceso a grabaciones de todas las sesiones',
];

const forWho = [
  'Sientes que vivir en automático es la mayor trampa en la que has caído',
  'Quieres transformación real, no contenido a consumir solo',
  'Estás dispuesto a ser visto y a ver con honestidad',
  'Valoras la inteligencia colectiva: aprendes tanto de los demás como de ti mismo',
  'Llevas tiempo con las mismas preguntas y sabes que responderlas solo ya no funciona',
  'Estás preparado para un proceso de 6 meses con compromiso genuino',
];

function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { navigate } = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setError('');
    setSubmitting(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-travesia-waitlist`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ email }),
        }
      );
      if (!res.ok) throw new Error('Request failed');
      setSent(true);
    } catch {
      setError('Hubo un error. Por favor, intenta de nuevo más tarde.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-earth-800 text-white">
      <div className="max-w-2xl mx-auto text-center">
        {travesiaLogo && (
          <img
            src={travesiaLogo}
            alt="Travesía DESEO"
            className="h-12 w-auto mx-auto mb-6 brightness-0 invert opacity-80"
          />
        )}
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 leading-tight">
          La Travesía DESEO abre por cohortes.
        </h2>
        <p className="font-sans text-white/70 leading-relaxed mb-2 text-base">
          Grupos pequeños de 5–9 personas. Déjame tu email para la lista de espera prioritaria.
        </p>
        <p className="font-sans text-terra-300 text-sm mb-8">
          Las personas en lista de espera tienen acceso preferencial y precio de lanzamiento.
        </p>

        {sent ? (
          <div className="bg-white/10 border border-white/20 rounded-2xl px-8 py-6">
            <p className="font-serif text-lg font-semibold text-terra-300 mb-1">¡Gracias!</p>
            <p className="font-sans text-white/70 text-sm">
              Te avisaremos cuando abran las convocatorias.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto mb-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                required
                className="flex-1 px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl font-sans text-sm text-white placeholder-white/40 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-400/30 transition-colors"
              />
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-3.5 bg-terra-500 hover:bg-terra-600 disabled:bg-terra-300 text-white font-sans font-semibold text-sm rounded-xl whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5"
              >
                {submitting ? 'Enviando...' : 'Quiero ser de los primeros'}
              </button>
            </div>
            {error && <p className="font-sans text-red-300 text-xs text-center">{error}</p>}
          </form>
        )}

        <p className="font-sans text-white/40 text-xs mb-10">
          No comparto tu correo. Solo recibirás novedades de la Travesía DESEO.
        </p>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate('/bitacora-21')}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans font-medium text-sm rounded-xl transition-colors"
          >
            Explorar Bitácora 21 (gratis) <ChevronRight size={15} />
          </button>
          <button
            onClick={() => navigate('/mentoria-evolutiva')}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans font-medium text-sm rounded-xl transition-colors"
          >
            Conocer Mentoría Evolutiva <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function TravesiaPage() {
  const { navigate } = useRouter();

  useEffect(() => {
    document.title = 'Travesía DESEO · Mastermind de transformación · Ever Vega';
    return () => {
      document.title = 'Ever Vega - Transformación Interior Profunda';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Top bar */}
      <div className="bg-cream-50 border-b border-cream-200 py-3 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 font-sans text-sm text-earth-600 hover:text-terra-500 transition-colors"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </button>
          {travesiaLogo ? (
            <img src={travesiaLogo} alt="Travesía DESEO" className="h-8 w-auto" />
          ) : (
            <span className="font-serif font-bold text-earth-800 text-sm tracking-wide">TRAVESÍA DESEO</span>
          )}
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-earth-100 text-earth-500 text-xs font-medium rounded-full border border-earth-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-earth-400 animate-pulse" />
            Próximamente · Por cohortes
          </span>
          {travesiaLogo ? (
            <div className="flex justify-center mb-6">
              <img src={travesiaLogo} alt="Travesía DESEO — Mastermind Evolutivo" className="h-16 md:h-20 w-auto" />
            </div>
          ) : (
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-earth-800 mb-2">Travesía DESEO</h1>
          )}
          <p className="font-sans text-terra-500 text-sm tracking-widest uppercase mb-8">
            Mastermind Evolutivo
          </p>
          <p className="font-serif text-2xl md:text-3xl font-bold text-earth-800 leading-snug mb-3">
            No vienes a mejorar tu vida.
          </p>
          <p className="font-serif text-2xl md:text-3xl font-bold text-earth-800 leading-snug mb-8">
            Vienes a reconstruir la relación contigo mismo.
          </p>
          <p className="font-sans text-base md:text-lg text-earth-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Travesía DESEO es un mastermind de transformación interior para personas que han logrado mucho
            afuera, pero saben que la verdadera expansión comienza dentro.
          </p>
          <div className="inline-flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-sans text-earth-400 uppercase tracking-widest border-t border-cream-200 pt-6">
            <span><strong className="text-earth-600 font-medium">Duración:</strong> 6 meses</span>
            <span className="text-cream-300">·</span>
            <span><strong className="text-earth-600 font-medium">Formato:</strong> Grupos pequeños (5–9 personas)</span>
            <span className="text-cream-300">·</span>
            <span><strong className="text-earth-600 font-medium">Incluye:</strong> Encuentro semanal + Bitácora digital + Comunidad privada</span>
          </div>
        </div>
      </section>

      {/* El problema que el Mastermind resuelve */}
      <section className="py-16 px-6 bg-cream-50">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-terra-400" />
            <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
              El problema que el Mastermind resuelve
            </span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-earth-800 leading-snug mb-6">
            ¿Por qué solo no alcanza?
          </h2>
          <p className="font-sans text-earth-600 leading-relaxed mb-6">
            Has leído libros. Has hecho cursos. Has ido a retiros.
          </p>
          <p className="font-sans text-sm text-earth-500 uppercase tracking-widest mb-4 font-medium">
            Y aún así:
          </p>
          <ul className="flex flex-col gap-4 mb-8">
            {problemaBullets.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-terra-400 flex-shrink-0 mt-2" />
                <span className="font-sans text-base text-earth-600 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-white rounded-2xl border border-cream-200 p-6">
            <p className="font-serif text-base font-semibold text-earth-800 mb-2">
              El problema no es falta de información ni de esfuerzo.
            </p>
            <p className="font-sans text-sm text-earth-600 leading-relaxed">
              El problema es que lo has hecho <strong className="text-earth-800 font-semibold">solo</strong>.
              Y la transformación profunda no ocurre en soledad — ocurre en contacto,
              en fricción segura, en presencia de otros que también están dispuestos a ver.
            </p>
          </div>
        </div>
      </section>

      {/* La experiencia grupal */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-terra-400" />
            <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
              La experiencia
            </span>
          </div>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-earth-800 leading-snug mb-5">
            Un grupo pequeño. Un proceso profundo.
          </h2>
          <p className="font-sans text-earth-600 leading-relaxed mb-4">
            La Travesía DESEO no es un curso grupal donde escuchas a un instructor. Es un proceso
            de transformación donde <strong className="text-earth-800 font-semibold">el grupo es el método</strong>.
          </p>
          <p className="font-sans text-earth-600 leading-relaxed mb-4">
            Grupos de 5 a 9 personas, seleccionados por afinidad de momento vital. Personas que están
            en un punto de inflexión real — no por crisis, sino por conciencia — y que han decidido
            no recorrer ese punto solos.
          </p>
          <p className="font-sans text-earth-600 leading-relaxed">
            Ever Vega facilita y acompaña el proceso, pero el grupo opera como catalizador.
            Lo que se produce en ese espacio de confianza y honestidad colectiva no puede
            conseguirse en ningún proceso individual.
          </p>
          <blockquote className="border-l-2 border-terra-300 pl-4 mt-8">
            <p className="font-sans text-sm italic text-earth-500 leading-relaxed">
              "No vengas a la Travesía a ser ayudado. Ven a ser transformado. Hay una diferencia enorme."
            </p>
            <cite className="font-sans text-xs text-earth-400 not-italic mt-2 block">— Ever Vega</cite>
          </blockquote>
        </div>
      </section>

      {/* El ritmo */}
      <section className="py-16 px-6 bg-cream-50">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-terra-400" />
            <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
              El ritmo
            </span>
          </div>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-earth-800 mb-6">
            Cómo funciona el proceso
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: 'Sesiones en vivo', detail: '1 sesión mensual de 90 min con Ever + el grupo completo' },
              { label: 'Círculos de grupo', detail: 'Encuentros entre sesiones, facilitados por los propios miembros' },
              { label: 'Acompañamiento', detail: 'Canal directo con Ever entre sesiones para lo que surja' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl border border-cream-200 p-5">
                <p className="font-serif text-sm font-bold text-earth-800 mb-2">{item.label}</p>
                <p className="font-sans text-xs text-earth-500 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fases */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-terra-400" />
            <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
              Las fases
            </span>
          </div>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-earth-800 mb-8">
            Seis meses. Seis fases.
          </h2>
          <div className="flex flex-col gap-6">
            {fases.map((f) => (
              <div key={f.num} className={`rounded-2xl border p-5 ${f.diferencial ? 'border-terra-300 bg-terra-50' : 'border-cream-200 bg-white'}`}>
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 ${f.diferencial ? 'border-terra-400 bg-terra-100 text-terra-600' : 'border-earth-200 bg-earth-50 text-earth-400'}`}>
                    <span className="font-serif text-xs font-bold">{f.num}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
                      <h3 className="font-serif text-sm font-bold text-earth-800">{f.name}</h3>
                      {f.diferencial && (
                        <span className="font-sans text-xs text-terra-600 font-medium bg-terra-100 px-2 py-0.5 rounded-full">El diferencial</span>
                      )}
                    </div>
                    <p className="font-sans text-xs text-terra-500 italic mb-3">"{f.subtitle}"</p>
                    <p className="font-sans text-xs text-earth-400 mb-2">
                      <span className="font-medium text-earth-500">Tensión:</span> {f.tension}
                    </p>
                    <p className="font-sans text-sm text-earth-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <blockquote className="border-l-2 border-terra-300 pl-4 mt-8">
            <p className="font-sans text-sm italic text-earth-500 leading-relaxed">
              "Pasas de vivir desde lo aprendido... a vivir desde lo elegido."
            </p>
            <cite className="font-sans text-xs text-earth-400 not-italic mt-2 block">— Ever Vega</cite>
          </blockquote>
        </div>
      </section>

      {/* Para quién */}
      <section className="py-16 px-6 bg-cream-50">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-terra-400" />
            <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
              Para quién es
            </span>
          </div>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-earth-800 mb-6">
            La Travesía DESEO es para ti si...
          </h2>
          <ul className="flex flex-col gap-3">
            {forWho.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-terra-100 border border-terra-200 flex items-center justify-center flex-shrink-0 mt-0.5 text-terra-500 text-xs font-bold">
                  ✓
                </span>
                <span className="font-sans text-sm text-earth-600 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Lo que incluye */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-terra-400" />
            <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
              Lo que incluye
            </span>
          </div>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-earth-800 mb-6">
            Un proceso completo de 6 meses
          </h2>
          <ul className="flex flex-col gap-3">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check size={16} className="text-terra-500 flex-shrink-0 mt-0.5" />
                <span className="font-sans text-sm text-earth-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 p-6 bg-cream-50 rounded-2xl border border-cream-200 text-center">
            <p className="font-sans text-xs text-earth-400 uppercase tracking-widest mb-1">Selección</p>
            <p className="font-sans text-sm text-earth-600 leading-relaxed">
              Los grupos se forman por proceso de selección. No cualquier persona puede unirse a cualquier cohorte.
              La compatibilidad del grupo es parte del diseño.
            </p>
          </div>
        </div>
      </section>

      {/* CTA previa */}
      <section className="py-10 px-6 bg-cream-50">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-earth-500 text-sm leading-relaxed mb-4">
            ¿Tienes preguntas sobre la Travesía antes de unirte a la lista de espera?
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-earth-300 hover:border-terra-400 text-earth-600 hover:text-terra-500 font-sans font-medium text-sm rounded-xl transition-all duration-200"
          >
            Escribirle a Ever por WhatsApp <ChevronRight size={15} />
          </a>
        </div>
      </section>

      {/* Waitlist */}
      <WaitlistSection />

      {/* Footer */}
      <footer className="bg-earth-900 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          {travesiaLogo ? (
            <img src={travesiaLogo} alt="Travesía DESEO" className="h-7 w-auto opacity-50" />
          ) : (
            <p className="font-serif font-bold text-white text-sm tracking-wide">TRAVESÍA DESEO · Ever Vega</p>
          )}
          <p className="font-sans text-xs text-white/30">
            &copy; {new Date().getFullYear()} Ever Vega. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
