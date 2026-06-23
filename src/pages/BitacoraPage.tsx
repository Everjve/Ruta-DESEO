import { useEffect } from 'react';
import { Check, ArrowLeft, ChevronRight } from 'lucide-react';
import { useRouter } from '../router';
import everPhoto from '../assets/Ever-cercano.png';

const bitacoraLogoGlob = import.meta.glob('../assets/logo-negro copy.png', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;
const bitacoraLogo: string = bitacoraLogoGlob['../assets/logo-negro copy.png'] ?? '';

const BITACORA_LINK = 'https://www.bitacora21.com/';

const includes = [
  '21 videos de guía diaria',
  'Bitácora estructurada en PDF',
  'Ejercicios de escritura consciente',
  'Rituales de integración interior',
  'Acceso inmediato y permanente',
];

const steps = [
  {
    num: '01',
    title: 'Accede al programa',
    desc: 'Haz clic en "Comenzar ahora" y recibirás acceso inmediato a todos los materiales.',
  },
  {
    num: '02',
    title: 'Un día a la vez',
    desc: 'Cada día: un video breve de guía + un ejercicio de escritura consciente. No más de 20 minutos.',
  },
  {
    num: '03',
    title: 'Integra y transforma',
    desc: 'Al final de los 21 días habrás reconectado con lo que realmente importa en tu vida.',
  },
];

const forWho = [
  'Sientes que algo no encaja, aunque tengas todo lo que "se supone" que debías tener',
  'Estás en la mitad de la vida y quieres recalibrar tu rumbo desde adentro',
  'Buscas un proceso práctico, profundo y a tu propio ritmo',
  'No tienes tiempo para compromisos largos pero sí para 20 minutos diarios de tu vida interior',
];

export default function BitacoraPage() {
  const { navigate } = useRouter();

  useEffect(() => {
    document.title = 'Bitácora 21 · Redescubre tu DESEO · Ever Vega';
    return () => {
      document.title = 'Ever Vega - Transformación Interior Profunda';
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream-50 font-sans antialiased">
      {/* Top bar */}
      <div className="bg-white border-b border-cream-200 py-3 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 font-sans text-sm text-earth-600 hover:text-terra-500 transition-colors"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </button>
          <img src={bitacoraLogo} alt="Bitácora 21 — Redescubre tu DESEO" className="h-9 w-auto" />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-earth-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-terra-400" />
            <span className="font-sans text-terra-300 text-xs tracking-[0.2em] uppercase font-medium">
              Disponible ahora
            </span>
          </div>
          <div className="flex justify-center mb-4">
            <img
              src={bitacoraLogo}
              alt="Bitácora 21"
              className="h-20 md:h-28 w-auto brightness-0 invert"
            />
          </div>
          <p className="font-sans text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            21 días para reconectar con la vida desde dentro
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="font-serif text-2xl line-through text-white/30 font-semibold">
              USD 27
            </span>
            <span className="font-sans text-lg font-bold text-terra-300 bg-terra-500/20 border border-terra-500/40 px-5 py-2 rounded-full">
              Acceso Temporalmente GRATIS
            </span>
          </div>
          <a
            href={BITACORA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-terra-500 hover:bg-terra-600 text-white font-sans font-bold text-base rounded-xl shadow-lg shadow-terra-900/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            Comenzar ahora
            <ChevronRight size={18} />
          </a>
        </div>
      </section>

      {/* Opening hook — exact content from document */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-earth-800 leading-snug mb-6">
            Hay un momento —silencioso, incómodo, honesto—
          </h2>
          <p className="font-sans text-earth-600 mb-2">en el que te das cuenta de algo:</p>
          <div className="space-y-1 mb-6">
            <p className="font-sans text-earth-600">Has logrado mucho.</p>
            <p className="font-sans text-earth-600">Has resistido, construido, cumplido.</p>
          </div>
          <p className="font-serif text-base font-bold text-earth-800 mb-3">
            Pero la vida ya no te sabe igual.
          </p>
          <div className="space-y-2 mb-6">
            <p className="font-sans text-earth-600">No es depresión.</p>
            <p className="font-sans text-earth-600">No es falta de capacidad.</p>
            <p className="font-sans text-earth-600">No es que "todo esté mal".</p>
          </div>
          <p className="font-sans text-earth-600 mb-5">Es otra cosa.</p>
          <p className="font-sans text-earth-600 leading-relaxed mb-6">
            Es una <strong className="text-earth-800 font-semibold">desconexión sutil</strong> entre
            lo que vives y lo que eres. Una sensación de vacío, de cansancio interior, de estar
            funcionando… pero no habitando tu vida.
          </p>
          <div className="mb-10">
            <p className="font-serif text-base font-bold text-earth-800 mb-1">
              Y lo más desconcertante es esto:
            </p>
            <p className="font-sans text-terra-500 font-medium">
              desde afuera, nadie lo notaría.
            </p>
          </div>

          <div className="border-t border-cream-200 pt-10">
            <h3 className="font-serif text-lg font-bold text-earth-800 mb-2">
              El problema no es lo que te falta
            </h3>
            <p className="font-sans text-sm italic text-earth-400 mb-5">
              El problema es lo que se fue apagando
            </p>
            <div className="space-y-3 mb-6">
              <p className="font-sans text-earth-600">No has perdido el rumbo.</p>
              <p className="font-sans text-earth-600">
                Has perdido el{' '}
                <strong className="text-earth-800 font-semibold">contacto con tu centro</strong>.
              </p>
              <p className="font-sans text-earth-600">
                Con aquello que antes te daba impulso, curiosidad, gozo.
              </p>
              <p className="font-sans text-earth-600">
                Con lo que te hacía sentir vivo, no solo productivo.
              </p>
            </div>
          </div>

          <div className="bg-cream-50 rounded-2xl border border-cream-200 p-7 mt-4">
            <h3 className="font-serif text-lg font-bold text-earth-800 mb-2">
              A eso lo llamo EL DESEO
            </h3>
            <p className="font-sans text-sm text-earth-500 italic">
              (no los deseos pasajeros, sino el impulso vital profundo que te habita)
            </p>
            <div className="h-px bg-cream-200 my-5" />
            <p className="font-sans text-earth-600 leading-relaxed mb-3">
              EL DESEO no es ambición. No es lo que quieres tener. Es la fuerza que te crea.
              El llamado que no se calla aunque lleves años intentando silenciarlo.
            </p>
            <p className="font-sans text-earth-600 leading-relaxed">
              Cuando EL DESEO se apaga, la vida se vuelve correcta… pero no viva.
              Funcional… pero no plena. Exitosa… pero no tuya.
            </p>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="py-20 px-6 bg-cream-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-8 bg-terra-400" />
                <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
                  Para eso existe esto
                </span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-earth-800 leading-tight mb-5">
                La Bitácora 21 es un camino.<br />No un curso.
              </h2>
              <p className="font-sans text-earth-600 leading-relaxed mb-4">
                21 días para volver a ti. Cada día recibes una guía en video de Ever Vega, un
                ejercicio de escritura consciente y un ritual de integración interior.
              </p>
              <p className="font-sans text-earth-600 leading-relaxed mb-4">
                No necesitas más de 20 minutos. No necesitas haber hecho nada parecido antes.
                Solo necesitas estar dispuesto a mirar hacia adentro.
              </p>
              <blockquote className="border-l-2 border-terra-300 pl-4 mt-6">
                <p className="font-sans text-sm italic text-earth-500 leading-relaxed">
                  "No te enseño a tener más. Te acompaño a reconectar con lo que ya eres."
                </p>
                <cite className="font-sans text-xs text-earth-400 not-italic mt-2 block">
                  — Ever Vega
                </cite>
              </blockquote>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                  alt="Bitácora 21 — proceso interior"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg p-3 border border-cream-200 flex items-center gap-2">
                <img src="/icon-192.png" alt="Bitácora 21" className="w-8 h-8 object-contain" />
                <div>
                  <p className="font-serif text-sm font-bold text-earth-800 leading-none">21 días</p>
                  <p className="font-sans text-xs text-earth-400 mt-0.5">de transformación</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-terra-400" />
              <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
                Qué incluye
              </span>
              <div className="h-px w-8 bg-terra-400" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-earth-800">
              Todo lo que necesitas para recorrer el camino
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {includes.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-cream-50 rounded-xl p-5 border border-cream-200 shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-terra-50 border border-terra-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={13} className="text-terra-500" />
                </div>
                <span className="font-sans text-sm text-earth-700 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-cream-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-terra-400" />
              <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
                Cómo funciona
              </span>
              <div className="h-px w-8 bg-terra-400" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-earth-800">
              Simple. Profundo. A tu ritmo.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-terra-50 border border-terra-200 mb-5">
                  <span className="font-serif text-lg font-bold text-terra-500">{s.num}</span>
                </div>
                <h3 className="font-serif text-base font-bold text-earth-800 mb-2">{s.title}</h3>
                <p className="font-sans text-sm text-earth-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For who */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-8 bg-terra-400" />
                <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
                  Para quién es
                </span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-earth-800 mb-6 leading-tight">
                Para ti, si...
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
            <div className="flex flex-col items-center gap-4">
              <div className="w-28 h-28 rounded-full overflow-hidden shadow-xl ring-4 ring-terra-200">
                <img
                  src={everPhoto}
                  alt="Ever Vega"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-center">
                <p className="font-serif font-bold text-earth-800">Ever Vega</p>
                <p className="font-sans text-xs text-earth-400 mt-1">
                  Guía de Transformación Interior
                </p>
              </div>
              <p className="font-sans text-sm text-earth-600 text-center leading-relaxed max-w-xs">
                He acompañado a personas y líderes en más de 15 países. La Bitácora 21 es el primer
                paso del camino. El más honesto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-earth-800 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-8">
            <img
              src={bitacoraLogo}
              alt="Bitácora 21"
              className="h-16 w-auto brightness-0 invert opacity-90"
            />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Empieza hoy. Es gratis.
          </h2>
          <p className="font-sans text-white/60 text-base leading-relaxed mb-3">
            El camino interior no tiene fecha de inicio perfecta. El momento es ahora.
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="font-serif text-xl line-through text-white/30 font-semibold">
              USD 27
            </span>
            <span className="font-sans text-base font-bold text-terra-300 bg-terra-500/20 border border-terra-500/40 px-4 py-1.5 rounded-full">
              Acceso Temporalmente GRATIS
            </span>
          </div>
          <a
            href={BITACORA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-terra-500 hover:bg-terra-600 text-white font-sans font-bold text-base rounded-xl shadow-lg shadow-terra-900/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            Comenzar ahora
            <ChevronRight size={18} />
          </a>
          <p className="font-sans text-xs text-white/30 mt-5">
            Sin compromisos. Sin tarjeta de crédito. Solo 21 días hacia adentro.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-earth-900 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <img
            src={bitacoraLogo}
            alt="Bitácora 21"
            className="h-7 w-auto brightness-0 invert opacity-60"
          />
          <p className="font-sans text-xs text-white/30">
            &copy; {new Date().getFullYear()} Ever Vega · Ruta DESEO. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
