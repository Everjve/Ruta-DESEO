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

const articleSections: Array<{ heading?: string; body: string }> = [
  {
    body: 'Te habita EL DESEO, en singular y con mayúsculas. No el deseo de tener algo, ni el de llegar a algún lugar. Te habita ese llamado que viene de adentro y que a veces no tiene palabras. Es una presencia. Una incomodidad fértil. Una voz que no se calla, aunque lleves años intentando apagarla.',
  },
  {
    body: 'Y durante mucho tiempo creíste que escuchar ese DESEO era un lujo. Que las personas serias no se dejan llevar por esas cosas. Que había que cumplir, producir, aguantar. Que el momento de vivir de verdad llegaría después: después del ascenso, después de que los hijos crecieran, después de que todo estuviera en orden.',
  },
  {
    body: 'Pero el después no llegó. O llegó, y se sentía igual de vacío.',
  },
  {
    heading: 'El DESEO no miente',
    body: 'La diferencia entre el DESEO verdadero y el capricho es que el primero no desaparece. El capricho se va cuando no se satisface. El DESEO profundo crece cuando lo ignoras. Se vuelve más urgente, más insistente, más doloroso.',
  },
  {
    body: 'Eso que sientes cuando estás solo y te preguntas si esto es todo — eso es EL DESEO hablando. Eso que se te aprieta en el pecho cuando ves que alguien vive desde sus convicciones más profundas — eso es EL DESEO mirándote desde el otro lado del espejo.',
  },
  {
    body: 'EL DESEO no miente. No te dice qué hacer. Pero sí te dice quién eres y qué tipo de vida ya no te sirve.',
  },
  {
    heading: 'Del DESEO a la SABIDURÍA: el camino que nadie te enseñó',
    body: 'Hay una travesía que ocurre cuando decides escuchar ese llamado en lugar de silenciarlo. Es una travesía interna. No lineal. No limpia. Pero profundamente real.',
  },
  {
    body: 'Al principio el DESEO aparece como pregunta: ¿Qué quiero realmente? ¿Para qué estoy aquí? ¿Qué he estado evitando? Son preguntas que incomodan, que desestabilizan, que te sacan de la zona cómoda de lo conocido.',
  },
  {
    body: 'Luego viene el desprendimiento. Sueltas identidades que ya no te representan. Sueltas versiones de ti mismo que construiste para ser aceptado, para encajar, para no decepcionar. Ese proceso duele. No porque estés perdiendo algo valioso, sino porque aún no sabes bien qué encontrarás al otro lado.',
  },
  {
    body: 'Y en ese espacio intermedio —cuando ya soltaste lo viejo y todavía no llegó lo nuevo— aparece algo que no esperabas: la SABIDURÍA.',
  },
  {
    heading: 'La SABIDURÍA no se enseña, se encuentra',
    body: 'La SABIDURÍA no es información. No es saber mucho. No es haber leído los libros correctos ni haber tomado los cursos adecuados.',
  },
  {
    body: 'La SABIDURÍA es la lucidez que surge cuando has recorrido tu propio interior. Cuando has confrontado tus miedos más profundos. Cuando has visto tus patrones, tus heridas, tus mecanismos de defensa — y has elegido, aun así, seguir adelante desde un lugar más verdadero.',
  },
  {
    body: 'La SABIDURÍA no se enseña. Se encuentra. Se encuentra en el silencio. En la crisis. En ese momento en que todo lo que creías de ti mismo ya no funciona y tienes que construir una comprensión nueva.',
  },
  {
    body: 'El DESEO te pone en camino. La SABIDURÍA es lo que encuentras cuando caminas de verdad.',
  },
  {
    heading: 'Lo que cambia cuando el DESEO se convierte en SABIDURÍA',
    body: 'Cuando ese proceso ocurre — cuando el DESEO interior se convierte en SABIDURÍA vivida — algo fundamental cambia. Ya no reaccionas igual ante las circunstancias. Ya no necesitas aprobación de la misma manera. Ya no te define lo que tienes, sino lo que eres.',
  },
  {
    body: 'Empiezas a tomar decisiones desde un centro distinto. Más sereno. Más claro. Más coherente. No porque la vida se haya vuelto más fácil, sino porque tú te conoces mejor y esa certeza interna cambia todo lo demás.',
  },
  {
    body: 'Empiezas a habitar tu propia vida en lugar de sobrevivirla. Las relaciones se transforman porque tú te relacionas desde un lugar más auténtico. El trabajo se vuelve expresión en lugar de obligación. El tiempo deja de ser algo que hay que matar y se convierte en algo que hay que habitar.',
  },
  {
    body: 'Y entonces ya no sobrevives. Empiezas, por fin, a vivir de verdad.',
  },
];

export default function BlogSabiduria() {
  const { navigate } = useRouter();

  useEffect(() => {
    document.title = 'El Camino del DESEO · Ever Vega';
    return () => { document.title = 'Ever Vega - Transformación Interior Profunda'; };
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
            {/* Category + meta */}
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
                  7 min de lectura
                </span>
              </div>
              <span className="text-earth-200">·</span>
              <span className="font-sans text-xs text-earth-400 uppercase tracking-widest">
                Transformación · Sabiduría
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-earth-800 leading-tight mb-8">
              El Camino del DESEO
            </h1>

            {/* Hero image */}
            <div className="relative rounded-2xl overflow-hidden mb-10">
              <img
                src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80"
                alt="El Camino del DESEO"
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-800/50 via-transparent to-transparent" />
            </div>

            {/* Body */}
            <div className="space-y-5 font-sans text-earth-600 text-base leading-[1.85]">
              {articleSections.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-earth-800 mt-10 mb-4">
                      {section.heading}
                    </h2>
                  )}
                  <p>{section.body}</p>
                </div>
              ))}
            </div>

            {/* CTA Test */}
            <div className="mt-12 p-8 bg-cream-100 rounded-2xl border border-cream-200">
              <p className="font-serif text-lg font-semibold text-earth-800 mb-2">
                ¿Dónde estás tú en este camino?
              </p>
              <p className="font-sans text-sm text-earth-500 leading-relaxed mb-5">
                El Test DESEO Evolutivo te ayuda a identificar tu punto de partida en la ruta
                interior. Es gratuito y toma menos de 5 minutos.
              </p>
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => document.querySelector('#test')?.scrollIntoView({ behavior: 'smooth' }), 120);
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

            {/* Otro artículo */}
            <div className="bg-cream-50 border border-cream-200 rounded-2xl p-6">
              <h4 className="font-serif text-sm font-semibold text-earth-800 mb-4">
                También te puede interesar
              </h4>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => navigate('/blog/el-proceso-de-descenso')}
                  className="group block w-full text-left"
                >
                  <p className="font-serif text-sm font-medium text-earth-700 group-hover:text-terra-600 transition-colors leading-snug">
                    El proceso de descenso: cómo se pierde la vida sin notarlo
                  </p>
                  <p className="font-sans text-xs text-earth-400 mt-1">6 min · Transformación · Propósito</p>
                </button>
                <div className="h-px bg-cream-200" />
                <button
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => document.querySelector('#blog')?.scrollIntoView({ behavior: 'smooth' }), 120);
                  }}
                  className="group block w-full text-left"
                >
                  <p className="font-serif text-sm font-medium text-earth-700 group-hover:text-terra-600 transition-colors leading-snug">
                    El DESEO: la fuerza que te crea o el olvido que te apaga
                  </p>
                  <p className="font-sans text-xs text-earth-400 mt-1">8 min · Transformación · Propósito</p>
                </button>
              </div>
            </div>

            {/* Mentoría CTA */}
            <div className="bg-cream-50 border border-cream-200 rounded-2xl p-6">
              <h4 className="font-serif text-sm font-semibold text-earth-800 mb-2">
                ¿Quieres acompañamiento personalizado?
              </h4>
              <p className="font-sans text-xs text-earth-500 leading-relaxed mb-4">
                La Mentoría Evolutiva es un proceso de transformación profunda de 6 sesiones con el
                método Ruta DESEO.
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

      {/* Footer minimal */}
      <footer className="bg-earth-800 py-8 px-6 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-serif font-bold text-white text-sm tracking-wide">RUTA DESEO · Ever Vega</p>
          <p className="font-sans text-xs text-white/30">
            &copy; {new Date().getFullYear()} Ever Vega. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
