export type Stage = 'D' | 'ExA' | 'S' | 'ExE' | 'O';
export type AnswerKey = 'A' | 'B' | 'C' | 'D';

export interface Question {
  id: number;
  text: string;
  options: Record<AnswerKey, string>;
}

export interface StageInfo {
  code: Stage;
  name: string;
  tagline: string;
  description: string;
  color: string;
  accent: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: '¿Qué describe mejor tu sensación actual respecto a tus creencias y valores?',
    options: {
      A: 'Me cuestiono frecuentemente lo que siempre di por sentado.',
      B: 'Sigo muchas normas que no me hacen feliz, pero no sé cómo cambiarlas.',
      C: 'Ya estoy cambiando creencias, pero a veces dudo del nuevo camino.',
      D: 'Estoy afianzando mis nuevas creencias y siento mayor autenticidad.',
    },
  },
  {
    id: 2,
    text: '¿Cómo te sientes respecto a tus emociones profundas?',
    options: {
      A: 'Siento que arrastro heridas que no he procesado.',
      B: 'He comenzado a reconocer mis emociones, pero no sé cómo sanarlas del todo.',
      C: 'Estoy aprendiendo a gestionar mis emociones y sentirme en paz.',
      D: 'Siento que he logrado una buena estabilidad emocional.',
    },
  },
  {
    id: 3,
    text: 'Cuando piensas en tu propósito vital, ¿qué sientes?',
    options: {
      A: 'Me siento perdido, no sé cuál es mi propósito.',
      B: 'Tengo ideas, pero no sé cómo definirlo con claridad.',
      C: 'Tengo claridad, pero me falta llevarlo a la práctica.',
      D: 'Vivo en coherencia con mi propósito cada día.',
    },
  },
  {
    id: 4,
    text: 'Respecto a tu círculo social y entorno, ¿cómo te sientes?',
    options: {
      A: 'Me siento desconectado, como si no encajara.',
      B: 'Estoy buscando personas más afines, pero no las encuentro fácilmente.',
      C: 'Comienzo a rodearme de personas que vibran como yo.',
      D: 'Estoy construyendo relaciones profundas y nutritivas.',
    },
  },
  {
    id: 5,
    text: '¿Cuál describe mejor tu estado energético y vital?',
    options: {
      A: 'Me siento agotado y con poca energía para mis días.',
      B: 'Tengo altibajos frecuentes en mi energía.',
      C: 'Estoy recuperando mi vitalidad poco a poco.',
      D: 'Me siento lleno de energía la mayor parte del tiempo.',
    },
  },
  {
    id: 6,
    text: 'Sobre tus logros materiales y profesionales, ¿cómo te sientes?',
    options: {
      A: 'He alcanzado metas, pero me pregunto: ¿para qué?',
      B: 'Mis logros no me llenan como pensaba que lo harían.',
      C: 'Estoy buscando integrar éxito exterior con plenitud interior.',
      D: 'Siento equilibrio entre éxito profesional y personal.',
    },
  },
  {
    id: 7,
    text: '¿Qué papel juega la espiritualidad en tu vida actualmente?',
    options: {
      A: 'Apenas empiezo a cuestionar la dimensión espiritual de la vida.',
      B: 'Busco prácticas espirituales que me resuenen auténticamente.',
      C: 'Practico la espiritualidad de manera regular y consciente.',
      D: 'Vivo mi espiritualidad de forma integrada y natural.',
    },
  },
  {
    id: 8,
    text: 'Cuando enfrentas desafíos personales, ¿cómo reaccionas?',
    options: {
      A: 'Me siento abrumado y sin herramientas para manejarlos.',
      B: 'Busco respuestas, pero a veces me pierdo en la teoría.',
      C: 'Aplico herramientas prácticas para superar los desafíos.',
      D: 'Enfrento los desafíos como oportunidades de crecimiento.',
    },
  },
  {
    id: 9,
    text: 'Sobre tus patrones de pensamiento, ¿qué describe mejor tu estado actual?',
    options: {
      A: 'Detecto creencias limitantes que me condicionan.',
      B: 'Estoy trabajando en cambiar mis patrones mentales.',
      C: 'He logrado transformar varias creencias y veo resultados.',
      D: 'Mis pensamientos me potencian día a día.',
    },
  },
  {
    id: 10,
    text: 'Respecto a tus hábitos diarios, ¿cómo te defines?',
    options: {
      A: 'Me cuesta mantener hábitos que me nutran.',
      B: 'Estoy intentando incorporar nuevos hábitos positivos.',
      C: 'Mis hábitos están alineados con mi crecimiento personal.',
      D: 'Mis hábitos son coherentes con mi propósito vital.',
    },
  },
  {
    id: 11,
    text: '¿Qué tan conectado te sientes con tu autenticidad?',
    options: {
      A: 'Me cuesta reconocer mi verdadero yo.',
      B: 'Estoy explorando quién soy más allá de mis roles.',
      C: 'Me muestro cada vez más auténtico en mi vida diaria.',
      D: 'Vivo desde mi autenticidad plenamente.',
    },
  },
  {
    id: 12,
    text: '¿Cómo te relacionas con el pasado?',
    options: {
      A: 'Me siento atado a experiencias dolorosas.',
      B: 'Trabajo para liberarme del peso del pasado.',
      C: 'He sanado heridas y miro el pasado como aprendizaje.',
      D: 'Vivo centrado en el presente y proyectado al futuro.',
    },
  },
  {
    id: 13,
    text: 'Cuando piensas en el futuro, ¿qué sientes?',
    options: {
      A: 'Miedo o incertidumbre sobre lo que vendrá.',
      B: 'Curiosidad, pero también dudas sobre mi camino.',
      C: 'Emoción por las posibilidades que se abren ante mí.',
      D: 'Confianza plena en la dirección de mi vida.',
    },
  },
  {
    id: 14,
    text: 'Sobre la relación contigo mismo, ¿cómo te sientes?',
    options: {
      A: 'Me juzgo con dureza y me cuesta aceptarme.',
      B: 'Estoy trabajando en mi autoestima y autocompasión.',
      C: 'Comienzo a valorarme más y reconocer mis logros.',
      D: 'Me amo y respeto profundamente.',
    },
  },
  {
    id: 15,
    text: '¿Cuál es tu mayor deseo en este momento de tu vida?',
    options: {
      A: 'Romper con las limitaciones que me frenan.',
      B: 'Explorar nuevas formas de ser y vivir.',
      C: 'Sanar mis heridas y crecer internamente.',
      D: 'Expandir mi vida y vivir con propósito auténtico.',
    },
  },
];

// Scoring map: for each question, each answer maps to a stage
// B→E in original = ExA (Exploración Auténtica), C→E = ExE (Expansión Existencial)
export const scoringMap: Record<number, Record<AnswerKey, Stage>> = {
  1:  { A: 'D',   B: 'D',   C: 'ExE', D: 'O'   },
  2:  { A: 'S',   B: 'S',   C: 'ExE', D: 'O'   },
  3:  { A: 'ExA', B: 'ExA', C: 'ExE', D: 'O'   },
  4:  { A: 'D',   B: 'ExA', C: 'ExE', D: 'O'   },
  5:  { A: 'S',   B: 'ExA', C: 'ExE', D: 'O'   },
  6:  { A: 'D',   B: 'ExA', C: 'ExE', D: 'O'   },
  7:  { A: 'D',   B: 'ExA', C: 'S',   D: 'O'   },
  8:  { A: 'S',   B: 'S',   C: 'ExE', D: 'O'   },
  9:  { A: 'D',   B: 'ExA', C: 'ExE', D: 'O'   },
  10: { A: 'S',   B: 'S',   C: 'ExE', D: 'O'   },
  11: { A: 'D',   B: 'ExA', C: 'S',   D: 'O'   },
  12: { A: 'S',   B: 'ExA', C: 'ExE', D: 'O'   },
  13: { A: 'S',   B: 'S',   C: 'ExE', D: 'O'   },
  14: { A: 'S',   B: 'ExA', C: 'ExE', D: 'O'   },
  15: { A: 'D',   B: 'ExA', C: 'S',   D: 'O'   },
};

// Tie-breaking order: D > ExA > S > ExE > O
export const stagePriority: Stage[] = ['D', 'ExA', 'S', 'ExE', 'O'];

export const stageInfo: Record<Stage, StageInfo> = {
  D: {
    code: 'D',
    name: 'Desmitificación Radical',
    tagline: 'Es hora de soltar lo que ya no te sirve.',
    description:
      'Estás en la etapa de Desmitificación Radical. Has llegado a un punto donde las viejas creencias ya no te sirven. Estás listo para cuestionar profundamente lo que antes dabas por sentado. Este despertar, aunque incómodo, es el primer paso de toda transformación genuina.',
    color: 'from-earth-700 to-earth-600',
    accent: '#8B5232',
  },
  ExA: {
    code: 'ExA',
    name: 'Exploración Auténtica',
    tagline: 'Tu interior te llama con una voz que no puedes ignorar.',
    description:
      'Estás en la etapa de Exploración Auténtica. Has comenzado a mirar hacia adentro con honestidad. Sientes un llamado profundo que no puedes ignorar. La curiosidad por quién realmente eres está despertando, y eso es señal de que el camino interior ya ha comenzado.',
    color: 'from-terra-600 to-terra-500',
    accent: '#C87A4F',
  },
  S: {
    code: 'S',
    name: 'Sanación Interior',
    tagline: 'Reconocerlo ya es un acto de valentía.',
    description:
      'Estás en la etapa de Sanación Interior. Has identificado que hay emociones no resueltas que te frenan. Reconocerlo es ya un acto de valentía. El trabajo interior que haces ahora es la base sobre la que construirás tu nueva vida: más libre, más plena, más auténtica.',
    color: 'from-sage-500 to-sage-400',
    accent: '#7A9470',
  },
  ExE: {
    code: 'ExE',
    name: 'Expansión Existencial',
    tagline: 'Una versión más grande de ti mismo te está esperando.',
    description:
      'Estás en la etapa de Expansión Existencial. Estás listo para dar un salto hacia una versión más grande de ti mismo. Has hecho trabajo profundo y ahora el horizonte se ensancha. Es el momento de consolidar tu crecimiento y llevar tu transformación al mundo.',
    color: 'from-gold-500 to-gold-400',
    accent: '#B09538',
  },
  O: {
    code: 'O',
    name: 'Optimización Vital',
    tagline: 'Eres la mejor versión de ti mismo en acción.',
    description:
      'Estás en la etapa de Optimización Vital. Has recorrido un camino profundo y ahora deseas consolidar tu evolución en un estilo de vida alineado. Tu reto ya no es transformarte, sino sostener y expandir esa plenitud que has conquistado con valentía.',
    color: 'from-earth-500 to-terra-500',
    accent: '#8B6844',
  },
};

export function calculateResult(answers: Record<number, AnswerKey>): Stage {
  const scores: Record<Stage, number> = { D: 0, ExA: 0, S: 0, ExE: 0, O: 0 };

  for (const [qId, answer] of Object.entries(answers)) {
    const stage = scoringMap[Number(qId)][answer];
    scores[stage]++;
  }

  const maxScore = Math.max(...Object.values(scores));
  // Return highest-scoring stage; break ties by stagePriority order
  for (const stage of stagePriority) {
    if (scores[stage] === maxScore) return stage;
  }
  return 'D';
}
