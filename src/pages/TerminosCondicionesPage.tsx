import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from '../router';
import { ArrowLeft } from 'lucide-react';

export default function TerminosCondicionesPage() {
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
            Términos y Condiciones Generales de Servicio
          </h1>

          <div className="bg-white rounded-2xl border border-cream-200 p-8 md:p-12 space-y-10 text-earth-700">

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">1. Objeto</h2>
              <p className="font-sans text-sm leading-relaxed mb-4">
                Los presentes Términos y Condiciones regulan la compra, acceso y participación en todos los productos y servicios ofrecidos por <span className="font-semibold text-earth-800">Ever Vega Benavides</span> (en adelante, "Ever Vega"), a través de su sitio web evervega.com y demás canales digitales.
              </p>
              <p className="font-sans text-sm leading-relaxed mb-5">Los servicios incluyen:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-cream-100">
                      <th className="text-left font-semibold text-earth-800 px-4 py-3 border border-cream-200">Servicio</th>
                      <th className="text-left font-semibold text-earth-800 px-4 py-3 border border-cream-200">Formato</th>
                      <th className="text-left font-semibold text-earth-800 px-4 py-3 border border-cream-200">Duración</th>
                      <th className="text-left font-semibold text-earth-800 px-4 py-3 border border-cream-200">Precio (USD)</th>
                    </tr>
                  </thead>
                  <tbody className="text-earth-600">
                    {[
                      ['Bitácora 21', 'Autoguiado (digital)', '21 días', 'Gratis (temporal)'],
                      ['DESEO 90', 'Curso grabado + mentorías grupales', '90 días (acceso 1 año)', '197 USD'],
                      ['Travesía DESEO', 'Mastermind grupal (5–9 personas)', '6 meses', '997 USD'],
                      ['Mentoría Evolutiva', '1:1 individual (6 sesiones)', '2 meses', '497 USD'],
                    ].map(([s, f, d, p]) => (
                      <tr key={s}>
                        <td className="px-4 py-3 border border-cream-200 font-medium text-earth-800">{s}</td>
                        <td className="px-4 py-3 border border-cream-200">{f}</td>
                        <td className="px-4 py-3 border border-cream-200">{d}</td>
                        <td className="px-4 py-3 border border-cream-200">{p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-sans text-sm leading-relaxed mt-4">
                La compra de cualquier servicio implica la aceptación expresa e inequívoca de estos Términos y Condiciones, así como de la Política de Privacidad y el Aviso Legal.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">2. Precios y formas de pago</h2>

              <h3 className="font-sans text-base font-semibold text-earth-800 mb-2">2.1. Precios en dólares</h3>
              <p className="font-sans text-sm leading-relaxed mb-5">
                Todos los precios se expresan en Dólares Estadounidenses (USD). Ever Vega se reserva el derecho de modificar los precios en cualquier momento, previa notificación en el sitio web. Los precios aplicables serán los publicados al momento de la compra.
              </p>

              <h3 className="font-sans text-base font-semibold text-earth-800 mb-2">2.2. Pagos en Colombia (Pesos Colombianos)</h3>
              <p className="font-sans text-sm leading-relaxed mb-3">
                Para clientes en Colombia, se podrá adquirir la Bitácora 21, Travesía DESEO y Mentoría Evolutiva mediante:
              </p>
              <ul className="font-sans text-sm leading-relaxed space-y-1 text-earth-600 mb-3">
                <li className="flex gap-2"><span className="text-terra-400">•</span>Transferencia bancaria</li>
                <li className="flex gap-2"><span className="text-terra-400">•</span>Nequi</li>
                <li className="flex gap-2"><span className="text-terra-400">•</span>Bre-B</li>
                <li className="flex gap-2"><span className="text-terra-400">•</span>Efectivo (previa coordinación)</li>
              </ul>
              <p className="font-sans text-sm leading-relaxed mb-5">
                El valor en Pesos Colombianos (COP) se calculará aplicando la tasa de cambio del dólar vigente al día de la transacción, más los impuestos aplicables según la legislación colombiana.
              </p>

              <h3 className="font-sans text-base font-semibold text-earth-800 mb-2">2.3. Pagos internacionales</h3>
              <p className="font-sans text-sm leading-relaxed mb-5">
                Para el resto del mundo, los pagos se procesan exclusivamente a través de la plataforma <span className="font-semibold">Hotmart</span>, que acepta tarjetas de crédito, débito y otros métodos internacionales.
              </p>

              <h3 className="font-sans text-base font-semibold text-earth-800 mb-2">2.4. Pago único para DESEO 90</h3>
              <p className="font-sans text-sm leading-relaxed mb-3">
                El curso DESEO 90 se adquiere únicamente a través de Hotmart, sin excepción. El pago es único y el acceso al contenido es por un periodo de un (1) año, que incluye:
              </p>
              <ul className="font-sans text-sm leading-relaxed space-y-1 text-earth-600 mb-3">
                <li className="flex gap-2"><span className="text-terra-400">•</span>Acceso al contenido grabado (videos, ejercicios, bitácora)</li>
                <li className="flex gap-2"><span className="text-terra-400">•</span>Participación en sesiones grupales de preguntas y respuestas</li>
                <li className="flex gap-2"><span className="text-terra-400">•</span>Recursos adicionales durante el año de vigencia</li>
              </ul>
              <p className="font-sans text-sm leading-relaxed">
                Una vez cumplido el año, el usuario conservará acceso al contenido por un año adicional, pero perderá el acceso a las mentorías grupales y recursos adicionales en vivo.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">3. Política de reembolsos y cancelaciones</h2>

              <div className="bg-cream-50 border border-terra-200 rounded-xl p-4 mb-6">
                <p className="font-sans text-sm leading-relaxed">
                  <span className="font-semibold text-earth-800">3.1. Garantía de 7 días (todos los servicios):</span> Todos los servicios cuentan con una garantía de satisfacción de 7 días a partir de la fecha de compra. Si no estás satisfecho por cualquier motivo, tienes derecho a solicitar el reembolso total. Contactar a <a href="mailto:contacto@evervega.com" className="text-terra-500 hover:underline">contacto@evervega.com</a> dentro de los 7 días posteriores a la compra. El reembolso se procesará sin preguntas ni trabas.
                </p>
              </div>

              <h3 className="font-sans text-base font-semibold text-earth-800 mb-2">3.2. Bitácora 21</h3>
              <p className="font-sans text-sm leading-relaxed mb-5">
                Al ser un producto digital de acceso inmediato, la garantía de 7 días se aplica desde el momento de la compra. El reembolso es automático a través de Hotmart si se solicita dentro del plazo.
              </p>

              <h3 className="font-sans text-base font-semibold text-earth-800 mb-2">3.3. DESEO 90</h3>
              <p className="font-sans text-sm leading-relaxed mb-5">
                Al ser un curso grabado, la garantía de 7 días se aplica desde la fecha de compra. Después de este plazo, no se realizarán reembolsos, salvo que Ever Vega cancele el curso por razones internas.
              </p>

              <h3 className="font-sans text-base font-semibold text-earth-800 mb-2">3.4. Mentoría Evolutiva (6 sesiones 1:1)</h3>
              <ul className="font-sans text-sm leading-relaxed space-y-2 text-earth-600 mb-5">
                <li className="flex gap-2"><span className="text-terra-400 mt-0.5">•</span><span><span className="font-semibold text-earth-800">Reembolso total:</span> Hasta 7 días después de la primera sesión, sin necesidad de justificación.</span></li>
                <li className="flex gap-2"><span className="text-terra-400 mt-0.5">•</span><span><span className="font-semibold text-earth-800">Cancelación después de 7 días:</span> No se realizarán reembolsos, salvo caso fortuito o fuerza mayor debidamente justificado.</span></li>
                <li className="flex gap-2"><span className="text-terra-400 mt-0.5">•</span><span><span className="font-semibold text-earth-800">Reprogramación de sesiones:</span> Cada participante tiene derecho a reprogramar una (1) sesión sin penalización, avisando con al menos 24 horas de antelación.</span></li>
                <li className="flex gap-2"><span className="text-terra-400 mt-0.5">•</span><span><span className="font-semibold text-earth-800">Cancelación del cliente:</span> Si el cliente cancela el proceso después de 7 días, no habrá devolución del dinero.</span></li>
              </ul>

              <h3 className="font-sans text-base font-semibold text-earth-800 mb-2">3.5. Travesía DESEO (Mastermind grupal)</h3>
              <ul className="font-sans text-sm leading-relaxed space-y-2 text-earth-600">
                <li className="flex gap-2"><span className="text-terra-400 mt-0.5">•</span><span><span className="font-semibold text-earth-800">Reembolso total:</span> Hasta 7 días antes del inicio de la primera sesión grupal.</span></li>
                <li className="flex gap-2"><span className="text-terra-400 mt-0.5">•</span><span><span className="font-semibold text-earth-800">Cancelación después del inicio:</span> No se realizarán reembolsos, salvo que Ever Vega cancele el programa por razones internas.</span></li>
                <li className="flex gap-2"><span className="text-terra-400 mt-0.5">•</span><span><span className="font-semibold text-earth-800">Inasistencia a sesiones grupales:</span> No hay reposición de sesiones individuales; el participante tendrá acceso a las grabaciones.</span></li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">4. Propiedad intelectual</h2>
              <p className="font-sans text-sm leading-relaxed mb-4">
                Todos los contenidos ofrecidos por Ever Vega (videos, textos, ejercicios, bitácoras, meditaciones, métodos, nombres y marcas) son de <span className="font-semibold text-earth-800">propiedad intelectual exclusiva de Ever Vega Benavides</span>.
              </p>
              <p className="font-sans text-sm font-semibold text-earth-800 mb-3">El participante se compromete a:</p>
              <ul className="font-sans text-sm leading-relaxed space-y-2 text-earth-600">
                <li className="flex gap-2"><span className="text-terra-400 mt-0.5">•</span>No copiar, reproducir, distribuir, transmitir, exhibir, vender, licenciar ni explotar comercialmente ningún contenido sin autorización expresa y por escrito de Ever Vega.</li>
                <li className="flex gap-2"><span className="text-terra-400 mt-0.5">•</span>No utilizar el Método Ruta DESEO ni sus etapas para impartir cursos, talleres o procesos propios sin la debida autorización y certificación de Ever Vega.</li>
                <li className="flex gap-2"><span className="text-terra-400 mt-0.5">•</span>No divulgar, filmar, grabar ni compartir el contenido de las sesiones (individuales o grupales) a terceros no autorizados.</li>
              </ul>
              <p className="font-sans text-sm leading-relaxed mt-4 text-earth-500 italic">
                El incumplimiento de estas obligaciones dará lugar a las acciones legales correspondientes.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">5. Confidencialidad</h2>
              <p className="font-sans text-sm leading-relaxed mb-4">
                El participante se compromete a mantener <span className="font-semibold text-earth-800">estricta confidencialidad</span> sobre toda la información compartida durante los procesos (sesiones individuales, grupales, bitácoras, ejercicios):
              </p>
              <ul className="font-sans text-sm leading-relaxed space-y-2 text-earth-600 mb-4">
                <li className="flex gap-2"><span className="text-terra-400 mt-0.5">•</span>No se divulgarán a terceros los relatos, experiencias o datos personales de otros participantes.</li>
                <li className="flex gap-2"><span className="text-terra-400 mt-0.5">•</span>No se grabarán ni difundirán las sesiones sin autorización expresa de Ever Vega.</li>
                <li className="flex gap-2"><span className="text-terra-400 mt-0.5">•</span>La información recopilada durante los procesos es para uso exclusivo del participante y de Ever Vega para fines de seguimiento y mejora.</li>
              </ul>
              <p className="font-sans text-sm leading-relaxed text-earth-600">
                <span className="font-semibold text-earth-800">Excepción legal:</span> La confidencialidad podrá levantarse únicamente cuando sea requerido por una autoridad competente en el marco de un proceso judicial o administrativo.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">6. Límites de responsabilidad</h2>

              <h3 className="font-sans text-base font-semibold text-earth-800 mb-2">6.1. El coaching no sustituye atención médica, psicológica o psiquiátrica</h3>
              <p className="font-sans text-sm leading-relaxed mb-3">
                Ever Vega ofrece procesos de transformación interior, desarrollo personal y fortalecimiento de competencias, pero <span className="font-semibold text-earth-800">no es un servicio de salud mental</span>.
              </p>
              <ul className="font-sans text-sm leading-relaxed space-y-2 text-earth-600 mb-5">
                <li className="flex gap-2"><span className="text-terra-400 mt-0.5">•</span>El coaching no reemplaza la consulta con profesionales de la salud (médicos, psicólogos, psiquiatras, terapeutas clínicos).</li>
                <li className="flex gap-2"><span className="text-terra-400 mt-0.5">•</span>Ever Vega no realiza diagnósticos, tratamientos ni intervenciones clínicas.</li>
                <li className="flex gap-2"><span className="text-terra-400 mt-0.5">•</span>Si el participante requiere apoyo en salud mental, debe gestionarlo con los profesionales competentes.</li>
              </ul>

              <h3 className="font-sans text-base font-semibold text-earth-800 mb-2">6.2. Exoneración de responsabilidad</h3>
              <p className="font-sans text-sm leading-relaxed mb-3 text-earth-600">
                El participante exonera a Ever Vega de toda responsabilidad por daños derivados de la aplicación de los contenidos sin el debido contexto o seguimiento, decisiones personales tomadas a partir de los procesos de coaching, o caso fortuito, fuerza mayor o culpa exclusiva de terceros o del participante.
              </p>

              <h3 className="font-sans text-base font-semibold text-earth-800 mb-2">6.3. Resultados</h3>
              <p className="font-sans text-sm leading-relaxed text-earth-600">
                Ever Vega no garantiza resultados específicos (cambios emocionales, laborales, económicos, etc.). La transformación interior es un proceso personal que depende del compromiso, la participación activa y la responsabilidad individual del participante.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">7. Ley aplicable y jurisdicción</h2>
              <p className="font-sans text-sm leading-relaxed mb-3">
                Los presentes Términos y Condiciones se rigen e interpretan de conformidad con las leyes de la <span className="font-semibold text-earth-800">República de Colombia</span>.
              </p>
              <p className="font-sans text-sm leading-relaxed">
                Cualquier controversia o reclamación derivada de la compra, acceso o participación en los servicios de Ever Vega será sometida a la jurisdicción de los <span className="font-semibold text-earth-800">jueces de Bogotá, Colombia</span>, renunciando las partes a cualquier otro fuero que pudiera corresponderles.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">8. Modificaciones de los términos</h2>
              <p className="font-sans text-sm leading-relaxed">
                Ever Vega se reserva el derecho de actualizar o modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor en el momento de su publicación en el sitio web evervega.com. Se recomienda revisarlos periódicamente.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-earth-800 mb-4">9. Contacto</h2>
              <p className="font-sans text-sm leading-relaxed">
                Para preguntas, solicitudes de reembolso, o cualquier asunto relacionado con estos Términos y Condiciones, escríbenos a:{' '}
                <a href="mailto:contacto@evervega.com" className="text-terra-500 hover:underline font-semibold">
                  contacto@evervega.com
                </a>
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
