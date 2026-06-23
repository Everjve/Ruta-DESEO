import { BookOpen, Instagram, Youtube, Linkedin } from 'lucide-react';
import everPhoto from '../assets/Ever-cercano.png';
import { useRouter } from '../router';

const articleBody = `
El DESEO no es un capricho. No es lo que quieres tener. No es el impulso de comprar algo nuevo, ni la distracción disfrazada de motivación.

El DESEO, en su sentido más profundo, es la fuerza que te crea.

Hay una diferencia enorme entre desear desde el miedo y desear desde la plenitud. El primero te empuja a llenar vacíos. El segundo te llama a expandir lo que ya eres.

**La trampa del éxito vacío**

Muchas personas llegan a la mitad de la vida habiendo conseguido lo que "se supone" que debían conseguir: la carrera, la familia, el reconocimiento, el nivel económico. Y sin embargo, algo no encaja. Hay un ruido interno que no calla.

Ese ruido es el DESEO que no fue escuchado. Es la voz de una vida que pide más profundidad, más autenticidad, más coherencia entre lo que eres por dentro y lo que manifiestas por fuera.

**El olvido que te apaga**

Cuando ignoramos ese llamado, cuando seguimos cumpliendo con lo exterior sin atender lo interior, algo se apaga. No de golpe. Lentamente. Como una llama a la que le va faltando oxígeno.

El olvido de sí mismo es la epidemia silenciosa de nuestra época. Personas brillantes, capaces, exitosas... que se sienten vacías por dentro.

**¿Qué hacer con el DESEO?**

Primero, escucharlo. Sin juzgarlo. Sin descartarlo como "una crisis de los cuarenta" o "una fase". Segundo, ubicarlo: ¿desde dónde surge? ¿Desde el miedo o desde la plenitud? Tercero, recorrerlo con acompañamiento. Porque el camino interior, aunque es tuyo, no tiene por qué ser solitario.

La Ruta DESEO nació de ahí. De la certeza de que el camino hacia la plenitud comienza cuando dejas de ignorar la voz que lleva tiempo pidiéndote que te encuentres a ti mismo.
`;

export default function Blog() {
  const { navigate } = useRouter();
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-terra-400" />
            <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
              Blog
            </span>
            <div className="h-px w-8 bg-terra-400" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-earth-800">
            Reflexiones para el camino interior
          </h2>
        </div>

        {/* Main article */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Article content */}
          <article className="lg:col-span-8">
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img
                src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=900&q=80"
                alt="Reflexión interior"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-800/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-sans text-xs text-terra-300 tracking-widest uppercase">
                  Artículo destacado
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-2">
                <BookOpen size={14} className="text-terra-400" />
                <span className="font-sans text-xs text-earth-400 uppercase tracking-widest">
                  8 min de lectura
                </span>
              </div>
              <span className="text-earth-200">·</span>
              <span className="font-sans text-xs text-earth-400 uppercase tracking-widest">
                Transformación · Propósito
              </span>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl font-bold text-earth-800 leading-tight mb-6">
              El DESEO: la fuerza que te crea o el olvido que te apaga
            </h3>

            <div className="prose-custom font-sans text-earth-600 leading-[1.8] text-base space-y-5">
              {articleBody.trim().split('\n\n').map((para, i) => {
                const isBold = para.startsWith('**') && para.includes('**');
                if (isBold) {
                  const clean = para.replace(/\*\*/g, '');
                  return (
                    <h4
                      key={i}
                      className="font-serif text-lg font-semibold text-earth-800 mt-8 mb-2"
                    >
                      {clean}
                    </h4>
                  );
                }
                return (
                  <p key={i} className="leading-[1.85]">
                    {para}
                  </p>
                );
              })}
            </div>

            <div className="mt-10 pt-8 border-t border-cream-200 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-earth-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src={everPhoto}
                  alt="Ever Vega"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <p className="font-serif font-semibold text-earth-800 text-sm">Ever Vega</p>
                <p className="font-sans text-xs text-earth-400">
                  Coach de Transformación Interior · Ruta DESEO
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-8">
            {/* Second article card */}
            <div
              className="group bg-cream-50 rounded-2xl border border-cream-200 overflow-hidden cursor-pointer hover:shadow-md transition-all duration-200"
              onClick={() => navigate('/blog/el-proceso-de-descenso')}
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3770254/pexels-photo-3770254.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                  alt="El proceso de descenso"
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-800/50 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <p className="font-sans text-terra-500 text-xs tracking-[0.15em] uppercase font-medium mb-2">
                  Del DESEO a la SABIDURÍA
                </p>
                <h4 className="font-serif text-base font-bold text-earth-800 leading-snug mb-2 group-hover:text-terra-600 transition-colors">
                  El proceso de descenso: cómo se pierde la vida sin notarlo
                </h4>
                <div className="flex items-center gap-2">
                  <BookOpen size={12} className="text-earth-400" />
                  <span className="font-sans text-xs text-earth-400">6 min · Ever Vega</span>
                </div>
              </div>
            </div>

            {/* Otro artículo */}
            <div
              className="group bg-cream-50 rounded-2xl border border-cream-200 overflow-hidden cursor-pointer hover:shadow-md transition-all duration-200"
              onClick={() => navigate('/blog/del-deseo-a-la-sabiduria')}
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                  alt="El Camino del DESEO"
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-800/50 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <p className="font-sans text-terra-500 text-xs tracking-[0.15em] uppercase font-medium mb-2">
                  Artículo completo
                </p>
                <h4 className="font-serif text-base font-bold text-earth-800 leading-snug mb-2 group-hover:text-terra-600 transition-colors">
                  El Camino del DESEO
                </h4>
                <div className="flex items-center gap-2">
                  <BookOpen size={12} className="text-earth-400" />
                  <span className="font-sans text-xs text-earth-400">7 min · Ever Vega</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-cream-100 rounded-2xl p-6">
              <h4 className="font-serif text-base font-semibold text-earth-800 mb-3">
                Más reflexiones próximamente
              </h4>
              <p className="font-sans text-xs text-earth-400 mb-4">
                Sígueme en redes para no perderte el próximo artículo:
              </p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/evervega.guia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-white rounded-xl border border-cream-200 text-earth-500 hover:text-terra-500 hover:border-terra-300 transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-white rounded-xl border border-cream-200 text-earth-500 hover:text-terra-500 hover:border-terra-300 transition-colors"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-white rounded-xl border border-cream-200 text-earth-500 hover:text-terra-500 hover:border-terra-300 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-gradient-to-br from-terra-500 to-terra-700 rounded-2xl p-6 text-white">
              <h4 className="font-serif text-lg font-semibold mb-2">
                ¿No sabes en qué etapa estás?
              </h4>
              <p className="font-sans text-sm text-white/80 leading-relaxed mb-5">
                Realiza el Test DESEO Evolutivo y descubre tu punto de partida en la ruta
                interior.
              </p>
              <button
                onClick={() =>
                  document.querySelector('#test')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="w-full py-3 bg-white text-terra-600 font-sans font-semibold text-sm rounded-xl hover:bg-cream-100 transition-colors"
              >
                Hacer el Test gratis
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
