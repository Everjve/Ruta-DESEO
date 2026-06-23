import { useEffect } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { useRouter } from '../router';
import everPhoto from '../assets/Ever-cercano.png';
import conferencePhoto from '../assets/Conferencia-ever.jpeg';

const mentoriaLogoNegroGlob = import.meta.glob('../assets/3.png', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const mentoriaLogoBlancoGlob = import.meta.glob('../assets/4.png', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const mentoriaIconNegroGlob = import.meta.glob('../assets/M2.png', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const mentoriaIconBlancoGlob = import.meta.glob('../assets/M1.png', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

const mentoriaLogoNegro: string = mentoriaLogoNegroGlob['../assets/3.png'] ?? '';
const mentoriaLogoBlanco: string = mentoriaLogoBlancoGlob['../assets/4.png'] ?? '';
const mentoriaIconNegro: string = mentoriaIconNegroGlob['../assets/M2.png'] ?? '';
const mentoriaIconBlanco: string = mentoriaIconBlancoGlob['../assets/M1.png'] ?? '';

const WHATSAPP_LINK =
  'https://api.whatsapp.com/send?phone=+573144713413&text=Solicitar%20mi%20proceso';

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const symptoms = [
  'Has logrado mucho, pero la alegría se ha vuelto intermitente',
  'Cumples con todo, pero algo en ti se siente desalineado',
  'Sabes pensar, decidir, liderar… pero no sabes qué hacer con lo que sientes',
  'Te preguntas si esto es todo… y la pregunta no se va',
  'Sientes que algo profundo quiere cambiar, pero no sabes cómo ni hacia dónde',
];

const needs = [
  { bold: 'claridad', rest: ', no más información' },
  { bold: 'espejo', rest: ', no consejos genéricos' },
  { bold: 'proceso', rest: ', no más herramientas sueltas' },
  { bold: 'acompañamiento', rest: ', no solo contenido para consumir' },
];

const includes = [
  '6 sesiones individuales de 60–75 minutos',
  'Método Ruta DESEO personalizado a tu historia',
  'Acompañamiento entre sesiones por WhatsApp',
  'Evaluación y cierre del proceso al final',
  'Confidencialidad total',
];

const forWho = [
  'Estás en la mitad de la vida y sientes que algo necesita cambiar profundamente',
  'Tienes logros externos pero vives una sensación de vacío o falta de propósito',
  'Llevas tiempo con las mismas preguntas sin respuesta real',
  'Estás dispuesto a recorrer un proceso genuino de transformación interior',
];

export default function MentoriaPage() {
  const { navigate } = useRouter();

  useEffect(() => {
    document.title = 'Mentoría Evolutiva · Transformación Interior · Ever Vega';
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
          <button onClick={() => navigate('/')}>
            <img src={mentoriaLogoNegro} alt="Mentoría Evolutiva" className="h-9 w-auto" />
          </button>
        </div>
      </div>

      {/* Hero — titular */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo oficial */}
          <div className="flex justify-center mb-8">
            <img
              src={mentoriaLogoNegro}
              alt="Mentoría Evolutiva — Evolución a Propósito"
              className="h-16 md:h-20 w-auto"
            />
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-earth-800 leading-tight mb-4">
            Transformación interior<br className="hidden md:block" /> profunda, guiada y consciente
          </h1>
          <p className="font-sans text-earth-400 text-sm tracking-widest uppercase mb-10">
            con Ever Vega
          </p>
          <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-2xl mx-auto">
            <img
              src={conferencePhoto}
              alt="Ever Vega — Mentoría Evolutiva"
              className="w-full h-64 md:h-80 object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-900/60 via-transparent to-transparent" />
            {/* Icon badge */}
            <div className="absolute bottom-5 right-5 w-12 h-12 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center">
              <img src={mentoriaIconBlanco} alt="" className="w-8 h-8 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* El momento */}
      <section className="py-16 px-6 bg-cream-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-earth-800 leading-snug mb-6">
            Hay un momento en la vida en el que uno debe levantar la mano
          </h2>
          <div className="space-y-2 mb-6">
            <p className="font-sans text-earth-600">No porque esté roto.</p>
            <p className="font-sans text-earth-600">No porque haya fracasado.</p>
            <p className="font-sans text-earth-600">No porque "no pueda más".</p>
          </div>
          <p className="font-serif text-lg font-semibold text-earth-800 mb-10">
            Sino porque ya no quiere seguir solo con preguntas que pesan.
          </p>

          <h3 className="font-serif text-base font-bold text-earth-700 mb-4">
            Ese momento suele verse así:
          </h3>
          <ul className="flex flex-col gap-3">
            {symptoms.map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-terra-400 font-bold text-sm flex-shrink-0 mt-0.5">•</span>
                <span className="font-sans text-earth-600 leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Herramientas sueltas */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-earth-800 leading-snug mb-4">
            Cuando la vida pide proceso, no basta con herramientas sueltas
          </h2>
          <p className="font-sans text-earth-600 leading-relaxed mb-2">
            Libros, cursos, retiros, charlas, meditaciones…
          </p>
          <p className="font-sans text-earth-600 leading-relaxed mb-8">
            Todo puede ayudar, pero{' '}
            <strong className="text-earth-800 font-semibold">
              no sustituye un proceso guiado
            </strong>{' '}
            cuando estás en un punto de inflexión real.
          </p>

          <h3 className="font-serif text-base font-bold text-earth-700 mb-4">
            Hay momentos en los que:
          </h3>
          <ul className="flex flex-col gap-3">
            {needs.map((n, i) => (
              <li key={i} className="font-sans text-earth-600">
                Necesitas{' '}
                <strong className="text-earth-800 font-semibold">{n.bold}</strong>
                {n.rest}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Qué es */}
      <section className="py-16 px-6 bg-cream-50">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-5">
            <img src={mentoriaIconNegro} alt="" className="w-6 h-6 object-contain" />
            <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
              Para eso existe esto
            </span>
          </div>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-earth-800 leading-tight mb-5">
            La Mentoría Evolutiva no es terapia.<br />No es coaching tradicional.
          </h2>
          <p className="font-sans text-earth-600 leading-relaxed mb-4">
            Es un proceso de acompañamiento personalizado donde recorremos juntos las capas más
            profundas de tu historia, tus patrones, tus creencias y tu propósito.
          </p>
          <p className="font-sans text-earth-600 leading-relaxed mb-4">
            Con el método Ruta DESEO, en 6 sesiones individuales, te acompaño a transformar lo
            que ya no te sirve y a construir una vida desde tu identidad más auténtica.
          </p>
          <blockquote className="border-l-2 border-terra-300 pl-4 mt-6">
            <p className="font-sans text-sm italic text-earth-500 leading-relaxed">
              "No te ayudo a conseguir algo. Te acompaño a convertirte en quien realmente eres."
            </p>
            <cite className="font-sans text-xs text-earth-400 not-italic mt-2 block">— Ever Vega</cite>
          </blockquote>
        </div>
      </section>

      {/* Includes + precio */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-terra-400" />
            <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
              El proceso incluye
            </span>
          </div>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-earth-800 mb-7">
            Un acompañamiento completo, no sesiones sueltas
          </h2>
          <ul className="flex flex-col gap-3 mb-10">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check size={16} className="text-terra-500 flex-shrink-0 mt-0.5" />
                <span className="font-sans text-sm text-earth-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          {/* Precio */}
          <div className="rounded-2xl border border-terra-200 bg-cream-50 p-8 text-center shadow-md shadow-terra-100/50">
            <p className="font-sans text-xs text-earth-400 uppercase tracking-widest mb-2">
              Inversión total
            </p>
            <div className="flex items-baseline justify-center gap-2 mb-1">
              <span className="font-serif text-5xl font-bold text-earth-800">USD 497</span>
            </div>
            <p className="font-sans text-sm text-earth-400 mb-6">
              6 sesiones · Pago único · Disponibilidad limitada
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-terra-500 hover:bg-terra-600 text-white font-sans font-bold text-base rounded-xl shadow-md shadow-terra-300/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <WhatsAppIcon size={18} />
              Solicitar mi proceso
            </a>
            <p className="font-sans text-xs text-earth-400 mt-4">
              Me pondré en contacto contigo para coordinar una llamada exploratoria gratuita.
            </p>
          </div>
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
          <h2 className="font-serif text-xl md:text-2xl font-bold text-earth-800 mb-6 leading-tight">
            Este proceso es para ti si...
          </h2>
          <ul className="flex flex-col gap-4">
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

      {/* Ever Vega */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-28 h-28 rounded-full overflow-hidden shadow-xl ring-4 ring-terra-200 flex-shrink-0">
              <img
                src={everPhoto}
                alt="Ever Vega"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <p className="font-serif font-bold text-earth-800 text-lg mb-0.5">Ever Vega</p>
              <p className="font-sans text-xs text-terra-500 uppercase tracking-widest mb-3">
                Guía de Transformación Interior
              </p>
              <p className="font-sans text-sm text-earth-600 leading-relaxed mb-3">
                No acompaño desde la teoría. Lo hago desde el camino propio. He atravesado mi
                propia crisis de la mitad de la vida y he encontrado en ese proceso la claridad
                que ahora comparto.
              </p>
              <p className="font-sans text-sm text-earth-600 leading-relaxed">
                He acompañado a personas y líderes en más de 15 países. La Mentoría Evolutiva
                es el espacio más íntimo y personalizado de todo lo que ofrezco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 px-6 bg-earth-800 text-white text-center">
        <div className="max-w-xl mx-auto">
          <div className="flex justify-center mb-6">
            <img
              src={mentoriaLogoBlanco}
              alt="Mentoría Evolutiva"
              className="h-14 w-auto"
            />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight">
            ¿Estás listo para dejar de cargar<br className="hidden md:block" /> esas preguntas solo?
          </h2>
          <p className="font-sans text-white/60 text-base leading-relaxed mb-8">
            Los cupos son limitados. Si sientes que este es tu momento, da el paso.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-terra-500 hover:bg-terra-600 text-white font-sans font-bold text-base rounded-xl shadow-lg shadow-terra-900/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            <WhatsAppIcon size={20} />
            Solicitar mi proceso
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-earth-900 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <img src={mentoriaLogoBlanco} alt="Mentoría Evolutiva" className="h-8 w-auto opacity-70" />
          <p className="font-sans text-xs text-white/30">
            &copy; {new Date().getFullYear()} Ever Vega. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
