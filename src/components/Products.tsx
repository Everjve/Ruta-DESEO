import { Check, Clock, ChevronRight, Info } from 'lucide-react';
import { useRouter } from '../router';

const bitacoraLogoGlob = import.meta.glob('../assets/logo-negro copy.png', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;
const bitacoraLogo: string = bitacoraLogoGlob['../assets/logo-negro copy.png'] ?? '';

const mentoriaLogoGlob = import.meta.glob('../assets/3.png', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;
const mentoriaLogo: string = mentoriaLogoGlob['../assets/3.png'] ?? '';

const travesiaLogoGlob = import.meta.glob('../assets/Travesia_Deseo_logo.png', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;
const travesiaLogo: string = travesiaLogoGlob['../assets/Travesia_Deseo_logo.png'] ?? '';

const deseo90LogoGlob = import.meta.glob('../assets/Deseo_90_Logo.png', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;
const deseo90Logo: string = deseo90LogoGlob['../assets/Deseo_90_Logo.png'] ?? '';

const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=+573144713413&text=Solicitar%20mi%20proceso';

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const products = [
  {
    id: 'bitacora',
    available: true,
    badge: 'Disponible ahora',
    title: 'Bitácora 21',
    subtitle: 'Redescubre tu DESEO',
    priceOriginal: 'USD 27',
    pricePromo: 'Acceso temporalmente GRATIS',
    description:
      '21 días para reconectar con la vida desde dentro. Videos diarios, escritura consciente, rituales interiores.',
    includes: [
      '21 videos de guía',
      'Bitácora estructurada',
      'Ejercicios diarios',
      'Rituales de integración',
      'Acceso inmediato',
    ],
    highlight:
      'No es motivación. No es terapia. Es un camino breve y profundo para volver a ti.',
    cta: 'Comenzar ahora',
    ctaHref: 'https://www.bitacora21.com/',
    ctaExternal: true,
    moreInfoHref: '/bitacora-21',
  },
  {
    id: 'mentoria',
    available: true,
    badge: 'Disponible ahora',
    title: 'Mentoría Evolutiva',
    subtitle: 'Transformación interior profunda',
    price: 'USD 497',
    priceSub: '6 sesiones',
    description:
      'Un proceso personalizado de transformación interior profunda para personas en la mitad de la vida. 6 sesiones de acompañamiento guiado con el método Ruta DESEO.',
    includes: [
      '6 sesiones individuales',
      '60-75 minutos cada una',
      'Método Ruta DESEO personalizado',
      'Evaluación final del proceso',
    ],
    highlight:
      'No es terapia. No es coaching tradicional. Es guía consciente para transformar tu historia en plenitud.',
    cta: 'Solicitar mi proceso',
    ctaHref: WHATSAPP_LINK,
    ctaExternal: true,
    featured: true,
    moreInfoHref: '/mentoria-evolutiva',
  },
  {
    id: 'deseo90',
    available: false,
    badge: 'Próximamente',
    title: 'DESEO 90',
    subtitle: 'Revela tu grandeza',
    description:
      'Un programa profundo de 90 días para transformar tu historia en plenitud. Videos, ejercicios y herramientas a tu ritmo.',
    moreInfoHref: '/deseo-90',
  },
  {
    id: 'travesia',
    available: false,
    badge: 'Próximamente',
    title: 'Travesía DESEO',
    subtitle: 'Mastermind de transformación',
    description:
      'Grupos pequeños de 5–9 personas, sesiones en vivo, acompañamiento real durante 6 meses.',
    moreInfoHref: '/travesia-deseo',
  },
];

export default function Products() {
  const { navigate } = useRouter();
  return (
    <section id="productos" className="py-24 bg-cream-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-terra-400" />
            <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
              Productos y Servicios
            </span>
            <div className="h-px w-8 bg-terra-400" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-earth-800 mb-4">
            Tu camino de transformación
          </h2>
          <p className="font-sans text-earth-600 text-lg max-w-xl mx-auto">
            Puedes iniciar tu camino con recursos guiados o profundizar con procesos
            personalizados.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className={`relative rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg ${
                p.featured
                  ? 'border-terra-300 shadow-md shadow-terra-100'
                  : p.available
                  ? 'border-cream-200 bg-white shadow-sm'
                  : 'border-cream-200 bg-cream-50 shadow-sm'
              }`}
            >
              {p.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-terra-400 to-terra-600" />
              )}

              <div className="p-8">
                {/* Badge */}
                <div className="flex items-center gap-2 mb-5">
                  {p.available ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-terra-50 text-terra-600 text-xs font-medium rounded-full border border-terra-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-terra-500" />
                      {p.badge}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-earth-50 text-earth-500 text-xs font-medium rounded-full border border-earth-100">
                      <Clock size={11} />
                      {p.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                {p.id === 'bitacora' ? (
                  <div className="mb-3">
                    {bitacoraLogo ? (
                      <img src={bitacoraLogo} alt="Bitácora 21" className="h-10 w-auto" />
                    ) : (
                      <>
                        <h3 className="font-serif text-xl font-bold text-earth-800 mb-1">{p.title}</h3>
                        <p className="font-sans text-terra-500 text-sm font-medium">{p.subtitle}</p>
                      </>
                    )}
                  </div>
                ) : p.id === 'mentoria' ? (
                  <div className="mb-3">
                    {mentoriaLogo ? (
                      <img src={mentoriaLogo} alt="Mentoría Evolutiva" className="h-10 w-auto" />
                    ) : (
                      <>
                        <h3 className="font-serif text-xl font-bold text-earth-800 mb-1">{p.title}</h3>
                        <p className="font-sans text-terra-500 text-sm font-medium mb-3">{p.subtitle}</p>
                      </>
                    )}
                  </div>
                ) : p.id === 'travesia' ? (
                  <div className="mb-3">
                    {travesiaLogo ? (
                      <img src={travesiaLogo} alt="Travesía DESEO" className="h-10 w-auto" />
                    ) : (
                      <>
                        <h3 className="font-serif text-xl font-bold text-earth-800 mb-1">{p.title}</h3>
                        <p className="font-sans text-terra-500 text-sm font-medium mb-3">{p.subtitle}</p>
                      </>
                    )}
                  </div>
                ) : p.id === 'deseo90' ? (
                  <div className="mb-3">
                    {deseo90Logo ? (
                      <img src={deseo90Logo} alt="DESEO 90" className="h-10 w-auto" />
                    ) : (
                      <>
                        <h3 className="font-serif text-xl font-bold text-earth-800 mb-1">{p.title}</h3>
                        <p className="font-sans text-terra-500 text-sm font-medium mb-3">{p.subtitle}</p>
                      </>
                    )}
                  </div>
                ) : (
                  <>
                    <h3 className="font-serif text-xl font-bold text-earth-800 mb-1">
                      {p.title}
                    </h3>
                    <p className="font-sans text-terra-500 text-sm font-medium mb-3">
                      {p.subtitle}
                    </p>
                  </>
                )}

                {/* Price — Bitácora 21 special promo */}
                {'pricePromo' in p && p.pricePromo && (
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-serif text-2xl line-through text-earth-300 font-semibold">
                      {p.priceOriginal}
                    </span>
                    <span className="font-sans text-base font-bold text-terra-500 bg-terra-50 border border-terra-200 px-3 py-1 rounded-full">
                      {p.pricePromo}
                    </span>
                  </div>
                )}

                {/* Price — regular */}
                {'price' in p && p.price && (
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="font-serif text-3xl font-bold text-earth-800">
                      {p.price}
                    </span>
                    {'priceSub' in p && p.priceSub && (
                      <span className="font-sans text-earth-400 text-sm">/ {p.priceSub}</span>
                    )}
                  </div>
                )}

                <p className="font-sans text-earth-600 text-sm leading-relaxed mb-5">
                  {p.description}
                </p>

                {/* Includes */}
                {p.includes && (
                  <ul className="flex flex-col gap-2 mb-6">
                    {p.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check size={15} className="text-terra-500 flex-shrink-0 mt-0.5" />
                        <span className="font-sans text-sm text-earth-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Highlight quote */}
                {p.highlight && (
                  <blockquote className="border-l-2 border-terra-300 pl-4 mb-6">
                    <p className="font-sans text-sm italic text-earth-500 leading-relaxed">
                      "{p.highlight}"
                    </p>
                  </blockquote>
                )}

                {/* CTA */}
                {p.available && p.cta && (
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={p.ctaHref}
                      target={p.ctaExternal ? '_blank' : undefined}
                      rel={p.ctaExternal ? 'noopener noreferrer' : undefined}
                      className={`inline-flex items-center gap-2 px-6 py-3 font-sans font-semibold text-sm rounded-xl transition-all duration-200 hover:-translate-y-0.5 ${
                        p.featured
                          ? 'bg-terra-500 hover:bg-terra-600 text-white shadow-md shadow-terra-300/30'
                          : 'bg-earth-700 hover:bg-earth-800 text-white'
                      }`}
                    >
                      {p.id === 'mentoria' ? <WhatsAppIcon size={17} /> : <ChevronRight size={16} />}
                    {p.cta}
                    </a>
                    {'moreInfoHref' in p && p.moreInfoHref && (
                      <button
                        onClick={() => navigate(p.moreInfoHref as string)}
                        className="inline-flex items-center gap-1.5 px-4 py-3 font-sans text-sm text-earth-500 hover:text-terra-500 transition-colors"
                      >
                        <Info size={15} />
                        Más información
                      </button>
                    )}
                  </div>
                )}

                {/* Más información — productos próximamente */}
                {!p.available && 'moreInfoHref' in p && p.moreInfoHref && (
                  <button
                    onClick={() => navigate(p.moreInfoHref as string)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-earth-200 hover:border-terra-400 text-earth-500 hover:text-terra-500 font-sans text-sm font-medium rounded-xl transition-all duration-200"
                  >
                    Más información
                    <ChevronRight size={15} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
