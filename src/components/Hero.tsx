import { ChevronDown } from 'lucide-react';

const heroImages = import.meta.glob('../assets/Conferencia-ever.jpeg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const HERO_IMAGE: string = heroImages['../assets/Conferencia-ever.jpeg'] ?? '';

export default function Hero() {
  const scrollToTest = () => {
    document.querySelector('#test')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        {HERO_IMAGE && (
          <img
            src={HERO_IMAGE}
            alt="Ever Vega dando conferencia en auditorio"
            className="w-full h-full object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-earth-800/80 via-earth-700/65 to-earth-800/85" />
      </div>

      {/* Decorative warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-terra-600/20 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Brand badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <div className="h-px w-10 bg-terra-400" />
          <span className="font-sans text-terra-300 text-xs tracking-[0.25em] uppercase font-medium">
            Ruta DESEO
          </span>
          <div className="h-px w-10 bg-terra-400" />
        </div>

        {/* Main heading */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Eleva tu nivel de conciencia y convierte tu historia personal en{' '}
          <em className="text-terra-300 not-italic">plenitud</em>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
          Acompaño a personas y líderes en la mitad de la vida a recorrer
          procesos de transformación interior profunda, claridad existencial y
          plenitud consciente.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToTest}
            className="px-8 py-4 bg-terra-500 hover:bg-terra-600 active:bg-terra-700 text-white font-sans font-semibold text-base rounded-xl shadow-lg shadow-terra-600/30 hover:shadow-terra-600/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            Realizar Test DESEO
          </button>
          <button
            onClick={() =>
              document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-4 border border-white/40 hover:border-white/70 text-white font-sans font-medium text-base rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            Conocer a Ever Vega
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() =>
          document.querySelector('#test')?.scrollIntoView({ behavior: 'smooth' })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white/90 transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
