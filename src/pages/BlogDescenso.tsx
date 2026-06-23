import { useEffect } from 'react';
import { BookOpen, ArrowLeft, ChevronRight } from 'lucide-react';
import { useRouter } from '../router';
import everPhoto from '../assets/Ever-cercano.png';

const bitacoraLogoGlob = import.meta.glob('../assets/logo-negro copy.png', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;
const bitacoraLogo: string = bitacoraLogoGlob['../assets/logo-negro copy.png'] ?? '';

const WHATSAPP_LINK =
  'https://api.whatsapp.com/send?phone=+573144713413&text=Solicitar%20mi%20proceso';

const articleSections: Array<{ heading?: string; subheading?: string; body: string; bold?: string }> = [
  {
    body: 'Te habita EL DESEO, en singular y con mayúsculas: el impulso vital que nos lanza a crecer, a crear, a amar y a salir de nosotros mismos hacia la vida.',
  },
  {
    body: 'Cuando EL DESEO está despierto, la vida tiene dirección, profundidad y encanto. Cuando se confunde o se olvida, no ocurre una tragedia inmediata... ocurre algo más silencioso y peligroso:',
    bold: 'la vida empieza a vaciarse de sentido.',
  },
  {
    body: 'El sufrimiento humano no aparece de golpe. Se instala como un proceso de desconexión progresiva entre lo que somos en esencia y la vida que estamos viviendo.',
  },
  {
    heading: 'El proceso de descenso: cómo se pierde la vida sin notarlo',
    body: '',
  },
  {
    subheading: 'Primera etapa: la pérdida de sentido y alegría',
    body: 'Aquí no hay crisis visibles. La persona sigue funcionando, cumpliendo, logrando. Pero algo se apaga: la motivación profunda, la curiosidad, el gozo sereno. La vida se vuelve correcta, pero no viva.',
  },
  {
    body: 'Si en esta etapa se hace conciencia y se reorienta la vida, el proceso se detiene. El dolor puede existir, pero el sufrimiento no se instala.',
  },
  {
    subheading: 'Segunda etapa: comportamientos compensatorios o autodestructivos',
    body: 'Cuando el vacío interior no se reconoce, se intenta llenar desde fuera. Aparecen hábitos compulsivos, adicciones visibles o sofisticadas, decisiones incoherentes, relaciones que distraen pero no nutren.',
  },
  {
    body: 'No son actos de debilidad: son',
    bold: 'intentos desesperados del ser por recuperar vitalidad sin volver a su centro.',
  },
  {
    subheading: 'Tercera etapa: síntomas físicos y mentales',
    body: 'El cuerpo no miente. Cuando la desconexión interior se prolonga, el organismo habla: insomnio, fatiga crónica, ansiedad, dolencias sin explicación clara. La mente también: pensamiento circular, dificultad para concentrarse, cinismo como mecanismo de defensa.',
  },
  {
    body: 'Este es el punto de mayor riesgo. Pero también puede ser el umbral del despertar. La crisis no es el problema. Es la invitación.',
  },
  {
    heading: 'El DESEO como señal de regreso',
    body: 'Hay algo paradójico en todo esto: el mismo DESEO que fue ignorado al principio es el que golpea desde adentro en forma de malestar. El malestar no es el enemigo. Es el mensajero.',
  },
  {
    body: 'Reconocer el proceso de descenso es el primer paso para revertirlo. No para volver a donde estabas —ese lugar ya no existe— sino para avanzar hacia algo más auténtico, más coherente, más vivo.',
  },
  {
    body: 'El DESEO no abandona. Espera. Y cuando lo escuchas —con honestidad, con valentía, con acompañamiento— comienza el verdadero camino hacia adentro.',
  },
];

export default function BlogDescenso() {
  const { navigate } = useRouter();

  useEffect(() => {
    document.title = 'El proceso de descenso · Del DESEO a la SABIDURÍA · Ever Vega';
    return () => {
      document.title = 'Ever Vega - Transformación Interior Profunda';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Top bar */}
      <div className="bg-cream-50 border-b border-cream-200 py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 font-sans text-sm text-earth-600 hover:text-terra-500 transition-colors"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </button>
          <button
            onClick={() => navigate('/')}
            className="font-serif font-bold text-earth-800 text-sm tracking-wide"
          >
            RUTA DESEO
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Article */}
          <article className="lg:col-span-8">
            {/* Meta */}
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2">
                <div className="h-px w-6 bg-terra-400" />
                <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
                  Blog
                </span>
              </div>
              <span className="text-earth-200">·</span>
              <div className="flex items-center gap-1.5">
                <BookOpen size={13} className="text-earth-400" />
                <span className="font-sans text-xs text-earth-400 uppercase tracking-widest">
                  6 min de lectura
                </span>
              </div>
              <span className="text-earth-200">·</span>
              <span className="font-sans text-xs text-earth-400 uppercase tracking-widest">
                Transformación · Propósito
              </span>
            </div>

            {/* Series label */}
            <p className="font-sans text-terra-500 text-sm font-medium mb-2 uppercase tracking-widest">
              Del DESEO a la SABIDURÍA
            </p>

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-earth-800 leading-tight mb-8">
              El proceso de descenso: cómo se pierde la vida sin notarlo
            </h1>

            {/* Hero image */}
            <div className="relative rounded-2xl overflow-hidden mb-10">
              <img
                src="https://images.pexels.com/photos/3770254/pexels-photo-3770254.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80"
                alt="El proceso de descenso"
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-800/50 via-transparent to-transparent" />
            </div>

            {/* Body */}
            <div className="space-y-5 font-sans text-earth-600 text-base leading-[1.85]">
              {articleSections.map((section, i) => {
                if (section.heading) {
                  return (
                    <h2
                      key={i}
                      className="font-serif text-xl md:text-2xl font-bold text-earth-800 mt-12 mb-4"
                    >
                      {section.heading}
                    </h2>
                  );
                }
                if (section.subheading) {
                  return (
                    <div key={i}>
                      <h3 className="font-serif text-base font-bold text-earth-800 mt-8 mb-3">
                        {section.subheading}
                      </h3>
                      {section.body && <p>{section.body}</p>}
                    </div>
                  );
                }
                return (
                  <p key={i}>
                    {section.body}
                    {section.bold && (
                      <> <strong className="text-earth-800 font-semibold">{section.bold}</strong></>
                    )}
                  </p>
                );
              })}
            </div>

            {/* CTA Test */}
            <div className="mt-12 p-8 bg-cream-100 rounded-2xl border border-cream-200">
              <p className="font-serif text-lg font-semibold text-earth-800 mb-2">
                ¿En qué etapa de este proceso estás tú?
              </p>
              <p className="font-sans text-sm text-earth-500 leading-relaxed mb-5">
                El Test DESEO Evolutivo te ayuda a identificar tu punto de partida en la ruta
                interior. Es gratuito y toma menos de 5 minutos.
              </p>
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(
                    () => document.querySelector('#test')?.scrollIntoView({ behavior: 'smooth' }),
                    120
                  );
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-terra-500 hover:bg-terra-600 text-white font-sans font-semibold text-sm rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                Realizar el Test DESEO <ChevronRight size={16} />
              </button>
            </div>

            {/* Author */}
            <div className="mt-10 pt-8 border-t border-cream-200 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-earth-100 overflow-hidden flex-shrink-0">
                <img
                  src={everPhoto}
                  alt="Ever Vega"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <p className="font-serif font-semibold text-earth-800">Ever Vega</p>
                <p className="font-sans text-xs text-earth-400">
                  Coach de Transformación Interior · Ruta DESEO
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-8">
            {/* Bitácora CTA */}
            <div className="bg-gradient-to-br from-earth-700 to-earth-900 rounded-2xl p-6 text-white sticky top-8">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-terra-500/20 text-terra-300 text-xs font-medium rounded-full border border-terra-500/30 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-terra-400" />
                Acceso Gratis
              </span>
              <div className="mb-3">
                {bitacoraLogo ? (
                  <img
                    src={bitacoraLogo}
                    alt="Bitácora 21"
                    className="h-9 w-auto brightness-0 invert"
                  />
                ) : (
                  <>
                    <h4 className="font-serif text-xl font-semibold leading-snug">Bitácora 21</h4>
                    <p className="font-sans text-sm text-white/70 mt-1">Redescubre tu DESEO</p>
                  </>
                )}
              </div>
              <p className="font-sans text-xs text-white/50 leading-relaxed mb-5">
                21 días para reconectar con tu vida desde dentro. Videos, escritura consciente y
                rituales interiores.
              </p>
              <div className="flex items-center gap-2 mb-5">
                <span className="font-serif text-lg line-through text-white/30 font-semibold">
                  USD 27
                </span>
                <span className="font-sans text-sm font-bold text-terra-300 bg-terra-500/20 border border-terra-500/30 px-3 py-1 rounded-full">
                  Temporalmente GRATIS
                </span>
              </div>
              <button
                onClick={() => navigate('/bitacora-21')}
                className="w-full py-3 bg-terra-500 hover:bg-terra-600 text-white font-sans font-semibold text-sm rounded-xl transition-colors"
              >
                Ver Bitácora 21
              </button>
            </div>

            {/* Otros artículos */}
            <div className="bg-cream-50 border border-cream-200 rounded-2xl p-6">
              <h4 className="font-serif text-sm font-semibold text-earth-800 mb-4">
                También te puede interesar
              </h4>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => navigate('/blog/del-deseo-a-la-sabiduria')}
                  className="group block w-full text-left"
                >
                  <p className="font-serif text-sm font-medium text-earth-700 group-hover:text-terra-600 transition-colors leading-snug">
                    Del DESEO a la SABIDURÍA
                  </p>
                  <p className="font-sans text-xs text-earth-400 mt-1">
                    7 min · Transformación · Sabiduría
                  </p>
                </button>
                <div className="h-px bg-cream-200" />
                <button
                  onClick={() => {
                    navigate('/');
                    setTimeout(
                      () => document.querySelector('#blog')?.scrollIntoView({ behavior: 'smooth' }),
                      120
                    );
                  }}
                  className="group block w-full text-left"
                >
                  <p className="font-serif text-sm font-medium text-earth-700 group-hover:text-terra-600 transition-colors leading-snug">
                    El DESEO: la fuerza que te crea o el olvido que te apaga
                  </p>
                  <p className="font-sans text-xs text-earth-400 mt-1">
                    8 min · Transformación · Propósito
                  </p>
                </button>
              </div>
            </div>

            {/* Mentoría CTA */}
            <div className="bg-cream-50 border border-cream-200 rounded-2xl p-6">
              <h4 className="font-serif text-sm font-semibold text-earth-800 mb-2">
                ¿Quieres acompañamiento personalizado?
              </h4>
              <p className="font-sans text-xs text-earth-500 leading-relaxed mb-4">
                La Mentoría Evolutiva es un proceso de transformación profunda de 6 sesiones con
                el método Ruta DESEO.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2.5 text-center bg-earth-700 hover:bg-earth-800 text-white font-sans font-semibold text-sm rounded-xl transition-colors"
              >
                Solicitar información
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-earth-800 py-8 px-6 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-serif font-bold text-white text-sm tracking-wide">
            RUTA DESEO · Ever Vega
          </p>
          <p className="font-sans text-xs text-white/30">
            &copy; {new Date().getFullYear()} Ever Vega. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
