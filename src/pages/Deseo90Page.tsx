import { useState, useEffect } from 'react';
import { ArrowLeft, Check, ChevronRight } from 'lucide-react';
import { useRouter } from '../router';

const deseo90LogoGlob = import.meta.glob('../assets/Deseo_90_Logo.png', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;
const deseo90Logo: string = deseo90LogoGlob['../assets/Deseo_90_Logo.png'] ?? '';

const WHATSAPP_LINK =
  'https://api.whatsapp.com/send?phone=+573144713413&text=Quiero%20saber%20m%C3%A1s%20de%20DESEO%2090';

const etapas = [
  {
    num: '00',
    name: 'BIENVENIDA AL VIAJE INTERIOR',
    quote: 'No eres un proyecto que necesita corregirse. Eres una grandeza que está esperando revelarse.',
    desc: 'Te preparo para el camino: qué esperar, cómo usar el material, y por qué la Ruta DESEO es el mapa que necesitas.',
    accion: null,
    intro: true,
  },
  {
    num: '01',
    name: 'DESMITIFICACIÓN RADICAL',
    quote: 'No soy mi historia: soy quien tiene el poder de contarla distinto.',
    desc: 'Identificas las creencias y narrativas que han definido tu vida sin que tú las eligieras. Aprendes a romper los mitos familiares, culturales y personales que ya no te sirven.',
    accion: 'La historia de quién "debías" ser.',
    accionLabel: 'Lo que soltarás',
    intro: false,
  },
  {
    num: '02',
    name: 'EXPLORACIÓN AUTÉNTICA',
    quote: 'Gestionar el ego no es eliminarlo, es integrarlo.',
    desc: 'Reconoces tus fronteras internas, integras la sombra (lo que rechazas de ti mismo) y descubres tu propósito como manifestación auténtica de tu ser.',
    accion: 'Tu verbo, tu talento, tu deseo verdadero.',
    accionLabel: 'Lo que encontrarás',
    intro: false,
  },
  {
    num: '03',
    name: 'SANACIÓN INTERIOR',
    quote: 'No eres lo que sientes. Solo estás sintiendo. Y eso, como todo, pasará.',
    desc: 'Aprendes que las emociones son estados temporales, no definiciones de quién eres. Sueltas cargas del pasado, cierras duelos y cultivas tu jardín emocional.',
    accion: 'Lo que ya no necesitas cargar.',
    accionLabel: 'Lo que liberarás',
    intro: false,
  },
  {
    num: '04',
    name: 'EXPANSIÓN EXISTENCIAL',
    quote: 'Tu filosofía determina tu actitud, tu actitud determina tu ritmo, tu ritmo crea tu realidad.',
    desc: 'Diseñas una vida con dirección, ritmo y coherencia. Aprendes a manifestar tu deseo interior con productividad con sentido y foco sostenido.',
    accion: 'Tu manifiesto personal y tu ritual de enfoque.',
    accionLabel: 'Lo que construirás',
    intro: false,
  },
  {
    num: '05',
    name: 'OPTIMIZACIÓN VITAL',
    quote: 'Cuando EL DESEO despierta, la vida deja de ser una carga. Se convierte en una creación consciente.',
    desc: 'Sintonizas con el campo de posibilidades, vives en presente y diseñas tu misión personal de impacto. Integras todo el proceso en tu vida cotidiana.',
    accion: 'Identidad integrada. Ya no solo entiendes. Vives distinto.',
    accionLabel: 'Lo que lograrás',
    intro: false,
  },
];

const includes = [
  '90 videos de guía diaria (15–20 minutos cada uno)',
  'Cuaderno de trabajo estructurado para cada etapa',
  'Ejercicios de escritura consciente y reflexión profunda',
  'Rituales de integración al cierre de cada etapa',
  'Evaluación de inicio y cierre del proceso',
  'Acceso permanente a todos los materiales',
];

const forWho = [
  'Llevas años creciendo por fuera pero algo por dentro no crece al mismo ritmo',
  'Tienes logros que te dan estabilidad, pero no te dan sentido',
  'Sientes que estás viviendo la vida de alguien más — correcta, pero no tuya',
  'Estás dispuesto a recorrer un proceso real, no solo consumir contenido',
  'Quieres un programa a tu ritmo, profundo y sin compromisos de horario fijo',
  'Sabes que el cambio que buscas viene de adentro, no de afuera',
];

const problemaBullets = [
  'Has conseguido metas importantes, pero la alegría se ha vuelto intermitente',
  'Cumples con todo, pero algo en ti se siente desalineado',
  'Te preguntas si esto es todo... y la pregunta no se va',
  'Sabes pensar, decidir, liderar... pero no sabes qué hacer con lo que sientes',
  'Sientes que algo profundo quiere cambiar, pero no sabes cómo ni hacia dónde',
];

const diferenciadores = [
  {
    title: 'No es un curso de motivación',
    body: 'No te damos energía prestada que dura tres días. Trabajamos las raíces: creencias, patrones, historia.',
  },
  {
    title: 'No es terapia',
    body: 'No exploramos el pasado para analizarlo — lo recorremos para soltar lo que ya no te sirve y avanzar.',
  },
  {
    title: 'No es coaching de metas',
    body: 'No te ayudamos a conseguir más cosas. Te acompañamos a convertirte en más de quien ya eres.',
  },
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
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-deseo90-waitlist`,
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
        {deseo90Logo && (
          <img
            src={deseo90Logo}
            alt="DESEO 90"
            className="h-12 w-auto mx-auto mb-6 brightness-0 invert opacity-80"
          />
        )}
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 leading-tight">
          DESEO 90 está en desarrollo.
        </h2>
        <p className="font-sans text-white/70 leading-relaxed mb-8 text-base">
          Déjame tu email para avisarte cuando esté disponible.
          Quienes estén en lista de espera tendrán acceso prioritario y precio de lanzamiento.
        </p>

        {sent ? (
          <div className="bg-white/10 border border-white/20 rounded-2xl px-8 py-6">
            <p className="font-serif text-lg font-semibold text-terra-300 mb-1">¡Gracias!</p>
            <p className="font-sans text-white/70 text-sm">
              Te avisaremos cuando DESEO 90 esté listo.
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
                {submitting ? 'Enviando...' : 'Avísame cuando esté disponible'}
              </button>
            </div>
            {error && <p className="font-sans text-red-300 text-xs text-center">{error}</p>}
          </form>
        )}

        <p className="font-sans text-white/40 text-xs mb-8">
          No comparto tu correo con nadie. Solo recibirás novedades de DESEO 90.
        </p>

        <div className="border-t border-white/10 pt-8">
          <p className="font-sans text-white/50 text-sm mb-4">
            Mientras tanto, puedes comenzar tu camino interior ahora mismo:
          </p>
          <button
            onClick={() => navigate('/bitacora-21')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans font-medium text-sm rounded-xl transition-colors"
          >
            Comenzar con Bitácora 21 (gratis) <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Deseo90Page() {
  const { navigate } = useRouter();

  useEffect(() => {
    document.title = 'DESEO 90 · Revela tu grandeza · Ever Vega';
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
          {deseo90Logo ? (
            <img src={deseo90Logo} alt="DESEO 90" className="h-8 w-auto" />
          ) : (
            <span className="font-serif font-bold text-earth-800 text-sm tracking-wide">DESEO 90</span>
          )}
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-earth-100 text-earth-500 text-xs font-medium rounded-full border border-earth-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-earth-400 animate-pulse" />
            Próximamente
          </span>
          {deseo90Logo ? (
            <div className="flex justify-center mb-6">
              <img src={deseo90Logo} alt="DESEO 90 — Revela tu grandeza" className="h-16 md:h-20 w-auto" />
            </div>
          ) : (
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-earth-800 mb-2">DESEO 90</h1>
          )}
          <p className="font-sans text-terra-500 text-sm tracking-widest uppercase mb-5">
            Revela tu grandeza en 90 días
          </p>
          <p className="font-serif text-lg md:text-xl text-earth-700 leading-relaxed max-w-2xl mx-auto mb-8">
            Un curso profundo de transformación interior para personas que han logrado mucho afuera...
            pero saben que la verdadera expansión comienza dentro.
          </p>
          <div className="inline-flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-sans text-earth-400 uppercase tracking-widest border-t border-cream-200 pt-6">
            <span><strong className="text-earth-600 font-medium">Duración:</strong> 90 días</span>
            <span className="text-cream-300">·</span>
            <span><strong className="text-earth-600 font-medium">Formato:</strong> Autoguiado (a tu ritmo)</span>
            <span className="text-cream-300">·</span>
            <span><strong className="text-earth-600 font-medium">Incluye:</strong> Videos + Bitácora + Ejercicios + Meditaciones</span>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="py-16 px-6 bg-cream-50">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-terra-400" />
            <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
              El problema real
            </span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-earth-800 leading-snug mb-8">
            ¿Te suena esto?
          </h2>
          <ul className="flex flex-col gap-4 mb-8">
            {problemaBullets.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-terra-400 flex-shrink-0 mt-2" />
                <span className="font-sans text-base text-earth-600 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-cream-200 pt-8">
            <p className="font-serif text-lg font-semibold text-earth-800 mb-3">
              Eso no es un problema. Es una señal de evolución.
            </p>
            <p className="font-sans text-earth-600 leading-relaxed">
              Y esa señal tiene un nombre:{' '}
              <strong className="text-earth-800 font-semibold">EL DESEO</strong>{' '}
              — el impulso vital que te habita y que está pidiendo expansión.
            </p>
          </div>
        </div>
      </section>

      {/* Qué es */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-terra-400" />
            <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
              Qué es DESEO 90
            </span>
          </div>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-earth-800 leading-snug mb-5">
            Un programa de 90 días de transformación interior profunda
          </h2>
          <p className="font-sans text-earth-600 leading-relaxed mb-4">
            DESEO 90 es un viaje interior estructurado en 5 etapas, desde la desmitificación de lo que creías
            cierto hasta la integración de una identidad nueva que se vive diferente. Cada etapa tiene su propio
            propósito, su cita guía y un resultado concreto que te llevas.
          </p>
          <p className="font-sans text-earth-600 leading-relaxed mb-4">
            Basado en el método Ruta DESEO, combina videos de guía diaria, ejercicios de escritura
            consciente, rituales de integración y herramientas de reflexión profunda —
            todo diseñado para que el cambio ocurra a tu propio ritmo, pero con la estructura
            que un proceso real requiere.
          </p>
          <p className="font-sans text-earth-600 leading-relaxed">
            No necesitas un horario fijo. No necesitas conexión en vivo. Solo necesitas
            20 minutos al día y la disposición genuina de hacer el trabajo interior.
          </p>
        </div>
      </section>

      {/* Etapas */}
      <section className="py-16 px-6 bg-cream-50">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-terra-400" />
            <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
              Cómo funciona
            </span>
          </div>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-earth-800 mb-8">
            Cinco etapas. Un solo camino.
          </h2>
          <div className="flex flex-col gap-5">
            {etapas.map((e) => (
              <div
                key={e.num}
                className={`rounded-2xl border p-5 ${e.intro ? 'border-cream-200 bg-cream-50' : 'border-cream-200 bg-white'}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 ${e.intro ? 'border-cream-300 bg-cream-100 text-earth-300' : 'border-earth-200 bg-earth-50 text-earth-400'}`}>
                    <span className="font-serif text-xs font-bold">{e.num}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-sm font-bold text-earth-800 mb-1">{e.name}</h3>
                    <p className="font-sans text-xs text-terra-500 italic mb-3">"{e.quote}"</p>
                    <p className="font-sans text-sm text-earth-600 leading-relaxed mb-3">{e.desc}</p>
                    {e.accion && (
                      <div className="text-xs font-sans bg-earth-50 border border-earth-100 px-3 py-1.5 rounded-lg inline-block text-earth-600">
                        <span className="font-semibold text-earth-700">{e.accionLabel}:</span> {e.accion}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <blockquote className="border-l-2 border-terra-300 pl-4 mt-8">
            <p className="font-sans text-sm italic text-earth-500 leading-relaxed">
              "No se trata de acumular herramientas. Se trata de recorrer un proceso. Y cuando sabes dónde estás, avanzar se vuelve posible."
            </p>
          </blockquote>
        </div>
      </section>

      {/* Para quién */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-terra-400" />
            <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
              Para quién es
            </span>
          </div>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-earth-800 mb-6">
            DESEO 90 es para ti si...
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
      <section className="py-16 px-6 bg-cream-50">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-terra-400" />
            <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
              El programa incluye
            </span>
          </div>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-earth-800 mb-6">
            Un proceso completo, no contenido suelto
          </h2>
          <ul className="flex flex-col gap-3 mb-8">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check size={16} className="text-terra-500 flex-shrink-0 mt-0.5" />
                <span className="font-sans text-sm text-earth-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Diferenciador */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-terra-400" />
            <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
              Lo que lo hace diferente
            </span>
          </div>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-earth-800 mb-6">
            DESEO 90 no es lo que ya conoces
          </h2>
          <div className="flex flex-col gap-5">
            {diferenciadores.map((d) => (
              <div key={d.title} className="flex items-start gap-4">
                <div className="w-1 h-12 rounded-full bg-terra-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-base font-semibold text-earth-800 mb-1">{d.title}</h3>
                  <p className="font-sans text-sm text-earth-600 leading-relaxed">{d.body}</p>
                </div>
              </div>
            ))}
          </div>
          <blockquote className="border-l-2 border-terra-300 pl-4 mt-8">
            <p className="font-sans text-sm italic text-earth-500 leading-relaxed">
              "Noventa días no cambia tu vida. Cambia quien eres. Y eso cambia todo lo demás."
            </p>
            <cite className="font-sans text-xs text-earth-400 not-italic mt-2 block">— Ever Vega</cite>
          </blockquote>
        </div>
      </section>

      {/* CTA intermedia */}
      <section className="py-10 px-6 bg-cream-50">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-earth-500 text-sm leading-relaxed mb-4">
            ¿Tienes preguntas sobre DESEO 90 antes de unirte a la lista de espera?
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
          {deseo90Logo ? (
            <img src={deseo90Logo} alt="DESEO 90" className="h-7 w-auto opacity-50" />
          ) : (
            <p className="font-serif font-bold text-white text-sm tracking-wide">DESEO 90 · Ever Vega</p>
          )}
          <p className="font-sans text-xs text-white/30">
            &copy; {new Date().getFullYear()} Ever Vega. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
