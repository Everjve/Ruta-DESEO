import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from '../router';
import { ArrowLeft } from 'lucide-react';

export default function AvisoLegalPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-cream-50 font-sans antialiased flex flex-col">
      <Navbar />
      <main className="flex-1 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 font-sans text-sm text-earth-500 hover:text-terra-500 transition-colors mb-10"
          >
            <ArrowLeft size={15} /> Volver al inicio
          </button>

          <p className="font-sans text-xs text-terra-500 uppercase tracking-[0.2em] font-medium mb-3">
            Última actualización: 22 de junio de 2026
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-earth-800 mb-10 leading-tight">
            Aviso Legal
          </h1>

          <div className="bg-white rounded-2xl border border-cream-200 p-8 md:p-12 space-y-10 text-earth-700">

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">1. Titularidad</h2>
              <p className="font-sans text-sm leading-relaxed mb-4">
                El sitio web evervega.com es titularidad de:
              </p>
              <ul className="font-sans text-sm leading-relaxed space-y-1.5 pl-4 border-l-2 border-cream-200">
                <li><span className="font-semibold text-earth-800">Nombre:</span> Ever Vega Benavides</li>
                <li><span className="font-semibold text-earth-800">Identificación:</span> C.C. 86.040.681</li>
                <li><span className="font-semibold text-earth-800">Domicilio:</span> Bogotá, Colombia</li>
                <li>
                  <span className="font-semibold text-earth-800">Correo electrónico:</span>{' '}
                  <a href="mailto:contacto@evervega.com" className="text-terra-500 hover:underline">
                    contacto@evervega.com
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">2. Objeto del sitio web</h2>
              <p className="font-sans text-sm leading-relaxed">
                El sitio web evervega.com tiene como finalidad informar sobre los servicios de transformación interior profunda, claridad existencial y plenitud consciente ofrecidos por Ever Vega, así como proporcionar recursos gratuitos (test DESEO, guías, artículos) para el desarrollo personal.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">3. Propiedad intelectual</h2>
              <p className="font-sans text-sm leading-relaxed">
                Todos los contenidos del sitio web (textos, imágenes, diseños, logotipos, metodologías, videos, ejercicios) son propiedad intelectual de Ever Vega Benavides y están protegidos por las leyes de propiedad intelectual. Queda prohibida su reproducción, distribución o uso comercial sin autorización expresa.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">4. Responsabilidad</h2>
              <p className="font-sans text-sm leading-relaxed">
                Ever Vega no se hace responsable del mal uso que los usuarios puedan hacer del contenido del sitio web ni de las decisiones personales que tomen a partir de la información proporcionada. Los contenidos tienen un propósito informativo y de desarrollo personal, y no sustituyen en ningún caso la atención de profesionales de la salud.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">5. Ley aplicable</h2>
              <p className="font-sans text-sm leading-relaxed">
                El presente Aviso Legal se rige por las leyes de la República de Colombia. Cualquier controversia se someterá a la jurisdicción de los jueces de Bogotá.
              </p>
            </section>

          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 font-sans text-sm text-earth-500 hover:text-terra-500 transition-colors"
            >
              <ArrowLeft size={15} /> Volver al inicio
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
