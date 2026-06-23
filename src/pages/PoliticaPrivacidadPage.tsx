import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from '../router';
import { ArrowLeft } from 'lucide-react';

export default function PoliticaPrivacidadPage() {
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
            Política de Privacidad, Protección de Datos Personales y Cookies
          </h1>

          <div className="bg-white rounded-2xl border border-cream-200 p-8 md:p-12 space-y-10 text-earth-700">

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">1. Identidad del responsable del tratamiento</h2>
              <ul className="font-sans text-sm leading-relaxed space-y-1.5 pl-4 border-l-2 border-cream-200 mb-4">
                <li><span className="font-semibold text-earth-800">Responsable:</span> Ever Vega Benavides</li>
                <li><span className="font-semibold text-earth-800">Identificación:</span> C.C. 86.040.681</li>
                <li><span className="font-semibold text-earth-800">Domicilio:</span> Bogotá, Colombia</li>
                <li>
                  <span className="font-semibold text-earth-800">Correo electrónico:</span>{' '}
                  <a href="mailto:contacto@evervega.com" className="text-terra-500 hover:underline">contacto@evervega.com</a>
                </li>
                <li><span className="font-semibold text-earth-800">Sitio web:</span> evervega.com</li>
              </ul>
              <p className="font-sans text-sm leading-relaxed">
                En cumplimiento de lo dispuesto en la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normas concordantes sobre protección de datos personales en Colombia, así como los estándares internacionales como el Reglamento General de Protección de Datos (RGPD) de la Unión Europea, Ever Vega presenta la presente Política de Privacidad.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">2. ¿Qué datos personales recogemos y por qué?</h2>
              <p className="font-sans text-sm leading-relaxed mb-5">
                Ever Vega recoge y trata los siguientes datos personales, de acuerdo con la finalidad de cada servicio:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-cream-100">
                      <th className="text-left font-semibold text-earth-800 px-4 py-3 border border-cream-200 rounded-tl-lg">Tipo de dato</th>
                      <th className="text-left font-semibold text-earth-800 px-4 py-3 border border-cream-200">Datos específicos</th>
                      <th className="text-left font-semibold text-earth-800 px-4 py-3 border border-cream-200 rounded-tr-lg">Finalidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="align-top">
                      <td className="px-4 py-3 border border-cream-200 font-medium text-earth-800">Datos de contacto</td>
                      <td className="px-4 py-3 border border-cream-200 text-earth-600">Nombre, correo electrónico, número telefónico</td>
                      <td className="px-4 py-3 border border-cream-200 text-earth-600">
                        <ul className="space-y-1">
                          <li>- Enviar el resultado del test DESEO</li>
                          <li>- Entregar guías y recursos gratuitos</li>
                          <li>- Enviar comunicaciones comerciales (previo consentimiento)</li>
                          <li>- Coordinar sesiones de mentoría y seguimiento</li>
                          <li>- Gestionar la participación en procesos grupales (Travesía DESEO)</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="px-4 py-3 border border-cream-200 font-medium text-earth-800">Datos de navegación</td>
                      <td className="px-4 py-3 border border-cream-200 text-earth-600">Dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia (Google Analytics)</td>
                      <td className="px-4 py-3 border border-cream-200 text-earth-600">
                        <ul className="space-y-1">
                          <li>- Analizar el comportamiento para mejorar la experiencia</li>
                          <li>- Generar estadísticas agregadas (no identificables individualmente)</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="px-4 py-3 border border-cream-200 font-medium text-earth-800">Datos de compra</td>
                      <td className="px-4 py-3 border border-cream-200 text-earth-600">Nombre, correo electrónico, identificación (cuando sea requerido)</td>
                      <td className="px-4 py-3 border border-cream-200 text-earth-600">
                        <ul className="space-y-1">
                          <li>- Gestionar la compra de productos y servicios</li>
                          <li>- Gestionar garantías y reembolsos a través de Hotmart</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="font-sans text-xs text-earth-500 mt-3 italic">
                Nota: Los datos de pago (tarjeta de crédito, número de cuenta, etc.) son procesados directamente por Hotmart. Ever Vega no almacena ni tiene acceso a dicha información bancaria o financiera.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">3. Finalidad del tratamiento de datos</h2>
              <p className="font-sans text-sm leading-relaxed mb-4">
                De acuerdo con el principio de finalidad (artículo 4, Ley 1581 de 2012), Ever Vega utiliza los datos personales para:
              </p>
              <ol className="font-sans text-sm leading-relaxed space-y-3 list-decimal list-inside">
                <li><span className="font-semibold text-earth-800">Gestionar la relación con el usuario:</span> contacto, seguimiento y soporte en los procesos de transformación interior (cursos, mentorías, travesía).</li>
                <li><span className="font-semibold text-earth-800">Enviar información sobre productos y servicios:</span> comunicaciones comerciales, novedades y recursos gratuitos, siempre que el usuario haya otorgado su consentimiento explícito.</li>
                <li><span className="font-semibold text-earth-800">Mejorar la experiencia en la web:</span> análisis del comportamiento de navegación (agregado y anonimizado) para optimizar el contenido y la usabilidad del sitio.</li>
                <li><span className="font-semibold text-earth-800">Cumplir con obligaciones legales:</span> facturación, gestión de garantías y resolución de controversias.</li>
                <li><span className="font-semibold text-earth-800">Contacto para seguimiento:</span> para el desarrollo de procesos grupales o individuales, se podrá contactar al usuario vía WhatsApp con fines de seguimiento, recordatorios y coordinación de sesiones.</li>
              </ol>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">4. Base legal para el tratamiento</h2>
              <p className="font-sans text-sm leading-relaxed mb-4">El tratamiento de tus datos personales se fundamenta en:</p>
              <ul className="font-sans text-sm leading-relaxed space-y-3">
                <li className="flex gap-2"><span className="text-terra-400 mt-0.5">•</span><span>El <span className="font-semibold text-earth-800">consentimiento explícito e informado</span> que otorgas al registrarte en la web, realizar el test o adquirir un producto.</span></li>
                <li className="flex gap-2"><span className="text-terra-400 mt-0.5">•</span><span>La <span className="font-semibold text-earth-800">ejecución de un contrato</span> cuando adquieres un servicio (cursos, mentorías).</span></li>
                <li className="flex gap-2"><span className="text-terra-400 mt-0.5">•</span><span>El <span className="font-semibold text-earth-800">interés legítimo</span> de Ever Vega para mejorar sus servicios y comunicarse con sus usuarios, siempre en el marco del respeto a tus derechos.</span></li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">5. ¿Con quién compartimos tus datos?</h2>
              <p className="font-sans text-sm leading-relaxed mb-5">
                Ever Vega comparte datos personales exclusivamente con los siguientes proveedores, necesarios para la operación del negocio:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-cream-100">
                      <th className="text-left font-semibold text-earth-800 px-4 py-3 border border-cream-200">Proveedor</th>
                      <th className="text-left font-semibold text-earth-800 px-4 py-3 border border-cream-200">Finalidad</th>
                      <th className="text-left font-semibold text-earth-800 px-4 py-3 border border-cream-200">Servidores</th>
                    </tr>
                  </thead>
                  <tbody className="text-earth-600">
                    {[
                      ['Vercel', 'Alojamiento de la página web y Edge Functions', 'USA / Europa'],
                      ['Hotmart', 'Plataforma de pagos y gestión de compras', 'Global (puede incluir USA)'],
                      ['Resend', 'Envío de correos electrónicos (PDF, confirmaciones, comunicaciones)', 'USA / Europa'],
                      ['Google Analytics', 'Análisis de tráfico y comportamiento en la web', 'Global'],
                      ['WhatsApp', 'Comunicación para seguimiento, recordatorios y coordinación de sesiones', 'Meta Platforms (global)'],
                    ].map(([p, f, s]) => (
                      <tr key={p}>
                        <td className="px-4 py-3 border border-cream-200 font-medium text-earth-800">{p}</td>
                        <td className="px-4 py-3 border border-cream-200">{f}</td>
                        <td className="px-4 py-3 border border-cream-200 whitespace-nowrap">{s}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-sans text-sm leading-relaxed mt-4 text-earth-600">
                <span className="font-semibold text-earth-800">Compromiso:</span> Ever Vega exige a estos proveedores el cumplimiento de estándares de seguridad y protección de datos equivalentes a los exigidos por la legislación colombiana e internacional. No se venden, alquilan ni comparten datos personales con terceros no autorizados.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">6. Tus derechos (Hábeas Data)</h2>
              <p className="font-sans text-sm leading-relaxed mb-4">
                De conformidad con el artículo 8 de la Ley 1581 de 2012, como titular de datos personales tienes los siguientes derechos:
              </p>
              <ul className="font-sans text-sm leading-relaxed space-y-2">
                {[
                  ['Acceder', 'a tus datos personales almacenados.'],
                  ['Rectificar o actualizar', 'tus datos cuando sean incompletos o inexactos.'],
                  ['Solicitar la cancelación', '(supresión) de tus datos cuando no se estén tratando conforme a la ley.'],
                  ['Oponerte', 'al tratamiento de tus datos para fines comerciales.'],
                  ['Revocar el consentimiento', 'en cualquier momento.'],
                ].map(([bold, rest]) => (
                  <li key={bold} className="flex gap-2">
                    <span className="text-terra-400 mt-0.5">•</span>
                    <span><span className="font-semibold text-earth-800">{bold}</span> {rest}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 bg-cream-50 border border-cream-200 rounded-xl p-4">
                <p className="font-sans text-sm font-semibold text-earth-800 mb-2">Cómo ejercer tus derechos:</p>
                <p className="font-sans text-sm text-earth-600 leading-relaxed">
                  Envía un correo electrónico a{' '}
                  <a href="mailto:contacto@evervega.com" className="text-terra-500 hover:underline">contacto@evervega.com</a>{' '}
                  con el asunto "Derechos de Protección de Datos", adjuntando copia de tu documento de identidad. Responderemos en un plazo máximo de <span className="font-semibold">10 días hábiles</span> para consultas y <span className="font-semibold">15 días hábiles</span> para reclamos.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">7. Política de cookies</h2>
              <p className="font-sans text-sm leading-relaxed mb-4">
                <span className="font-semibold text-earth-800">¿Qué son las cookies?</span> Las cookies son pequeños archivos de texto que los sitios web colocan en tu navegador para recordar preferencias, analizar el tráfico y mejorar la experiencia de usuario.
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-cream-100">
                      <th className="text-left font-semibold text-earth-800 px-4 py-3 border border-cream-200">Tipo</th>
                      <th className="text-left font-semibold text-earth-800 px-4 py-3 border border-cream-200">Finalidad</th>
                      <th className="text-left font-semibold text-earth-800 px-4 py-3 border border-cream-200">Ejemplo</th>
                    </tr>
                  </thead>
                  <tbody className="text-earth-600">
                    <tr>
                      <td className="px-4 py-3 border border-cream-200 font-medium text-earth-800">Técnicas (necesarias)</td>
                      <td className="px-4 py-3 border border-cream-200">Permiten el funcionamiento básico de la web: navegación, sesión de usuario, carga de contenido</td>
                      <td className="px-4 py-3 border border-cream-200">Cookies de sesión</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border border-cream-200 font-medium text-earth-800">Analíticas</td>
                      <td className="px-4 py-3 border border-cream-200">Recopilan información agregada sobre cómo los usuarios interactúan con la web para mejorar el contenido</td>
                      <td className="px-4 py-3 border border-cream-200">Google Analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="font-sans text-sm leading-relaxed mb-3">
                <span className="font-semibold text-earth-800">Consentimiento:</span> Al navegar en evervega.com, aceptas el uso de cookies. Puedes gestionarlas o desactivarlas desde la configuración de tu navegador:
              </p>
              <ul className="font-sans text-sm leading-relaxed space-y-1 text-earth-600">
                <li>• Chrome: Configuración → Privacidad y seguridad → Cookies</li>
                <li>• Firefox: Opciones → Privacidad y seguridad → Cookies y datos de sitio</li>
                <li>• Safari: Preferencias → Privacidad → Cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">8. Seguridad y confidencialidad</h2>
              <p className="font-sans text-sm leading-relaxed">
                Ever Vega adopta medidas técnicas, humanas y administrativas para garantizar la seguridad de los datos personales, previniendo su adulteración, pérdida, uso no autorizado o acceso fraudulento. Toda persona que intervenga en el tratamiento de los datos está obligada a garantizar la confidencialidad de la información.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">9. Vigencia y actualizaciones</h2>
              <p className="font-sans text-sm leading-relaxed">
                La presente Política de Privacidad fue aprobada el 22 de junio de 2026. Ever Vega se reserva el derecho de actualizarla en cualquier momento para incorporar cambios legales o mejoras operativas. La versión actualizada se publicará en el sitio web con la fecha de última actualización.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">10. Contacto para asuntos de privacidad</h2>
              <p className="font-sans text-sm leading-relaxed">
                Si tienes preguntas, comentarios o deseas ejercer tus derechos, escríbenos a:{' '}
                <a href="mailto:contacto@evervega.com" className="text-terra-500 hover:underline font-semibold">
                  contacto@evervega.com
                </a>{' '}
                con el asunto: "Protección de Datos Personales".
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
