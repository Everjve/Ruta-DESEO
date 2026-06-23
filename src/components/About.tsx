import { ChevronRight } from 'lucide-react';

// Vite glob import — resolves at build time without requiring files to exist at declaration
const clientImages = import.meta.glob('../assets/clients/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const clients: { key: string; alt: string }[] = [
  { key: '../assets/clients/bimbo.jpeg',   alt: 'Bimbo' },
  { key: '../assets/clients/Haceb.jpeg',   alt: 'Haceb' },
  { key: '../assets/clients/Coomeva.png',  alt: 'Coomeva' },
  { key: '../assets/clients/SDG.png',      alt: 'Secretaría de Gobierno de Bogotá' },
  { key: '../assets/clients/SJD.png',      alt: 'Secretaría Jurídica Distrital de Bogotá' },
  { key: '../assets/clients/RMBC.png',     alt: 'Región Metropolitana Bogotá-Cundinamarca' },
  { key: '../assets/clients/Tiba.webp',    alt: 'TIBA' },
];

// Vite glob import for Ever photo
const everPhotos = import.meta.glob('../assets/Ever-cercano.png', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const EVER_PHOTO: string = everPhotos['../assets/Ever-cercano.png'] ?? '';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-cream-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={EVER_PHOTO}
                alt="Ever Vega — Guía de Transformación Interior"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-800/30 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-lg p-5 border border-cream-200 max-w-[200px]">
              <p className="font-serif text-2xl font-bold text-earth-800 leading-none">+500</p>
              <p className="font-sans text-xs text-earth-500 mt-1 leading-snug">
                personas acompañadas en su transformación
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-terra-400" />
              <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
                Sobre Ever Vega
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-earth-800 leading-tight mb-6">
              Un camino vivido desde adentro
            </h2>

            <p className="font-sans text-earth-600 leading-relaxed mb-5">
              Me llamo Ever Vega. He acompañado a directivos y equipos de organizaciones como{' '}
              <strong className="text-earth-800">Bimbo, Haceb, Coomeva, TIBA</strong>, la{' '}
              <strong className="text-earth-800">Secretaría de Gobierno de Bogotá</strong>, la{' '}
              <strong className="text-earth-800">Secretaría Jurídica Distrital</strong> y la{' '}
              <strong className="text-earth-800">Región Metropolitana Bogotá-Cundinamarca</strong>{' '}
              — personas que un día sintieron que algo no encajaba, a pesar de tener todo lo que
              "se supone" que debían tener.
            </p>
            <p className="font-sans text-earth-600 leading-relaxed mb-5">
              Mi formación en Filosofía, Teología y Coaching me da herramientas. Pero mi historia
              personal me da empatía. Porque yo también recorrí ese camino de cuestionamiento
              profundo. Por eso creé la{' '}
              <strong className="text-earth-800">Ruta DESEO</strong>: para que no tengas que
              recorrer el camino de la transformación solo.
            </p>
            <p className="font-sans text-earth-600 leading-relaxed mb-8">
              No soy terapeuta. No soy motivador. Soy un guía que ha caminado el sendero y conoce
              sus atajos, sus sombras y sus recompensas.
            </p>

            {/* Client logos — grayscale */}
            <div className="mb-8">
              <p className="font-sans text-xs text-earth-400 uppercase tracking-widest mb-5">
                Han confiado en mi acompañamiento
              </p>
              <div className="flex flex-wrap items-center gap-6">
                {clients.map((c) => {
                  const src = clientImages[c.key];
                  if (!src) return null;
                  return (
                    <img
                      key={c.alt}
                      src={src}
                      alt={c.alt}
                      title={c.alt}
                      className="h-10 w-auto max-w-[110px] object-contain grayscale opacity-60 hover:opacity-90 transition-opacity duration-200"
                    />
                  );
                })}
              </div>
            </div>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-earth-700 text-earth-700 hover:bg-earth-700 hover:text-white font-sans font-semibold text-sm rounded-xl transition-all duration-200"
            >
              Conoce más sobre mí <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
