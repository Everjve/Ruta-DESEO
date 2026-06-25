import { useState } from 'react';
import { CheckCircle, ChevronRight, Send, ArrowLeft } from 'lucide-react';
import {
  questions,
  calculateResult,
  stageInfo,
  type Stage,
  type AnswerKey,
} from '../data/testData';

type TestPhase = 'intro' | 'questions' | 'result' | 'email' | 'done';

// ⚠️ CONFIGURACIÓN FIJA DE SUPABASE (sin variables de entorno)
const SUPABASE_URL = 'https://pvukdwehbhm1ukbjxzkh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2dWtkd2VoYmhtbHVrYmp4emtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyNTQyMDMsImV4cCI6MjA5NzgzMDIwM30.iak3rKmngxg6GjpBQDN234PBlhvrtw7YZ67316M6g4M';

export default function TestDeseo() {
  const [phase, setPhase] = useState<TestPhase>('intro');
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerKey>>({});
  const [selected, setSelected] = useState<AnswerKey | null>(null);
  const [result, setResult] = useState<Stage | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');

  const progress = Math.round((Object.keys(answers).length / questions.length) * 100);
  const q = questions[current];
  const info = result ? stageInfo[result] : null;

  const handleAnswer = (key: AnswerKey) => {
    setSelected(key);
  };

  const handleNext = () => {
    if (!selected) return;
    const newAnswers = { ...answers, [q.id]: selected };
    setAnswers(newAnswers);
    setSelected(null);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      const stage = calculateResult(newAnswers);
      setResult(stage);
      setPhase('result');
    }
  };

  const handleBack = () => {
    if (current === 0) return;
    const prev = current - 1;
    setCurrent(prev);
    setSelected(answers[questions[prev].id] ?? null);
    const newAnswers = { ...answers };
    delete newAnswers[q.id];
    setAnswers(newAnswers);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !name.trim()) {
      setEmailError('Por favor completa tu nombre y correo.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Ingresa un correo válido.');
      return;
    }
    setEmailError('');
    setSubmitting(true);

    try {
      // 🔥 AHORA USA LA URL Y CLAVE FIJA
      const res = await fetch(
        `${SUPABASE_URL}/functions/v1/send-test-pdf`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            name,
            email,
            stage: result,
            siteUrl: window.location.origin,
          }),
        }
      );
      if (!res.ok) throw new Error('Request failed');
      setPhase('done');
    } catch {
      setEmailError('Hubo un error. Por favor, intenta de nuevo más tarde.');
    } finally {
      setSubmitting(false);
    }
  };

  const optionLabels: AnswerKey[] = ['A', 'B', 'C', 'D'];

  return (
    <section id="test" className="py-24 bg-cream-100">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-terra-400" />
            <span className="font-sans text-terra-500 text-xs tracking-[0.2em] uppercase font-medium">
              Test DESEO Evolutivo
            </span>
            <div className="h-px w-8 bg-terra-400" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-earth-800 mb-4">
            Descubre en qué punto de tu ruta interior estás
          </h2>
          <p className="font-sans text-earth-600 text-lg leading-relaxed max-w-xl mx-auto">
            Tal vez no necesites más respuestas. Necesitas{' '}
            <em className="text-terra-500 not-italic font-medium">ubicación.</em>
          </p>
        </div>

        {/* ── INTRO ── */}
        {phase === 'intro' && (
          <div className="bg-white rounded-2xl shadow-sm border border-cream-200 p-8 md:p-12 text-center">
            <h3 className="font-serif text-2xl font-semibold text-terra-500 mb-4">
              Test DESEO Evolutivo
            </h3>
            <p className="font-sans text-earth-600 leading-relaxed mb-6 max-w-lg mx-auto">
              15 preguntas diseñadas para revelar en qué etapa de la Ruta DESEO te encuentras.
              No hay respuestas correctas ni incorrectas. Solo hay tu verdad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-earth-500 mb-10">
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-terra-400" /> 15 preguntas
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-terra-400" /> ~5 minutos
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-terra-400" /> Resultado inmediato
              </span>
            </div>
            <button
              onClick={() => setPhase('questions')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-terra-500 hover:bg-terra-600 text-white font-sans font-semibold rounded-xl shadow-md shadow-terra-500/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              Comenzar el Test <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* ── QUESTIONS ── */}
        {phase === 'questions' && (
          <div className="bg-white rounded-2xl shadow-sm border border-cream-200 overflow-hidden">
            {/* Progress bar */}
            <div className="h-1.5 bg-cream-200">
              <div
                className="h-full bg-terra-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="p-8 md:p-12">
              {/* Question counter */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-sans text-xs text-earth-400 tracking-widest uppercase">
                  Pregunta {current + 1} de {questions.length}
                </span>
                <span className="font-sans text-xs text-earth-400">{progress}% completado</span>
              </div>

              {/* Question text */}
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-earth-800 leading-snug mb-8">
                {q.text}
              </h3>

              {/* Options */}
              <div className="flex flex-col gap-3 mb-10">
                {optionLabels.map((key) => (
                  <button
                    key={key}
                    onClick={() => handleAnswer(key)}
                    className={`group flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      selected === key
                        ? 'border-terra-500 bg-terra-50'
                        : 'border-cream-200 hover:border-terra-300 hover:bg-cream-50'
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-200 ${
                        selected === key
                          ? 'bg-terra-500 text-white'
                          : 'bg-cream-200 text-earth-600 group-hover:bg-terra-100 group-hover:text-terra-600'
                      }`}
                    >
                      {key}
                    </span>
                    <span
                      className={`font-sans text-sm md:text-base leading-relaxed pt-0.5 transition-colors duration-200 ${
                        selected === key ? 'text-earth-800' : 'text-earth-600'
                      }`}
                    >
                      {q.options[key]}
                    </span>
                  </button>
                ))}
              </div>

              {/* Nav buttons */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handleBack}
                  disabled={current === 0}
                  className="flex items-center gap-2 px-4 py-2.5 text-earth-500 hover:text-earth-700 disabled:opacity-30 disabled:cursor-not-allowed font-sans text-sm transition-colors"
                >
                  <ArrowLeft size={16} /> Anterior
                </button>
                <button
                  onClick={handleNext}
                  disabled={!selected}
                  className="flex items-center gap-2 px-7 py-3 bg-terra-500 hover:bg-terra-600 disabled:bg-cream-300 disabled:cursor-not-allowed text-white font-sans font-semibold text-sm rounded-xl transition-all duration-200"
                >
                  {current === questions.length - 1 ? 'Ver mi resultado' : 'Siguiente'}
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── RESULT ── */}
        {phase === 'result' && info && (
          <div className="space-y-6">
            {/* Result card */}
            <div className={`bg-gradient-to-br ${info.color} rounded-2xl shadow-lg p-8 md:p-12 text-white`}>
              <div className="mb-2">
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-white/70">
                  Tu etapa DESEO
                </span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-3">
                {info.name}
              </h3>
              <p className="font-sans text-base md:text-lg font-light italic text-white/90 mb-6">
                "{info.tagline}"
              </p>
              <p className="font-sans text-sm md:text-base leading-relaxed text-white/85">
                {info.description}
              </p>
            </div>

            {/* Email capture */}
            <div className="bg-white rounded-2xl shadow-sm border border-cream-200 p-8 md:p-10">
              <h4 className="font-serif text-xl font-semibold text-earth-800 mb-2">
                ¿Quieres recibir la guía completa de tu etapa con ejercicios prácticos?
              </h4>
              <p className="font-sans text-earth-500 text-sm mb-6">
                Te enviaré un PDF con ejercicios, reflexiones y pasos concretos para avanzar desde
                tu etapa <strong>{info.name}</strong>.
              </p>

              <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-xs text-earth-500 uppercase tracking-wide mb-1.5">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 border border-cream-200 rounded-lg font-sans text-sm text-earth-700 placeholder-earth-400 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs text-earth-500 uppercase tracking-wide mb-1.5">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tucorreo@email.com"
                      className="w-full px-4 py-3 border border-cream-200 rounded-lg font-sans text-sm text-earth-700 placeholder-earth-400 focus:outline-none focus:border-terra-400 focus:ring-2 focus:ring-terra-100 transition-colors"
                    />
                  </div>
                </div>

                {emailError && (
                  <p className="font-sans text-red-500 text-sm">{emailError}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-terra-500 hover:bg-terra-600 disabled:bg-terra-300 text-white font-sans font-semibold rounded-xl shadow-md shadow-terra-500/20 transition-all duration-200"
                >
                  {submitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send size={16} /> Enviar guía gratis
                    </>
                  )}
                </button>

                <p className="font-sans text-xs text-earth-400 text-center leading-relaxed">
                  No comparto tu correo. Recibirás solo contenido valioso de Ruta DESEO.
                </p>
              </form>
            </div>
          </div>
        )}

        {/* ── DONE ── */}
        {phase === 'done' && info && (
          <div className="bg-white rounded-2xl shadow-sm border border-cream-200 p-10 md:p-14 text-center">
            <div className="w-16 h-16 bg-terra-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={30} className="text-terra-500" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-earth-800 mb-3">
              ¡Revisa tu correo!
            </h3>
            <p className="font-sans text-earth-600 leading-relaxed mb-8 max-w-sm mx-auto">
              En unos minutos recibirás tu guía de la etapa{' '}
              <strong className="text-terra-500">{info.name}</strong> con ejercicios
              prácticos para avanzar.
            </p>
            <button
              onClick={() =>
                document.querySelector('#productos')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="inline-flex items-center gap-2 px-7 py-3 bg-terra-500 hover:bg-terra-600 text-white font-sans font-semibold rounded-xl transition-colors"
            >
              Ver productos y servicios <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
