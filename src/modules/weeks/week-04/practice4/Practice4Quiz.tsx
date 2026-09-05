import { useState } from "react";
import { ProgressHeader4 } from "./ProgressHeader4";
import { QuestionCard4 } from "./QuestionCard4";
import { RegistrationScreen4 } from "./RegistrationScreen4";
import { ResultsModal4 } from "./ResultsModal4";
import { ResultsSummary4 } from "./ResultsSummary4";
import { ResumeBanner4 } from "./ResumeBanner4";
import { MAX_SCORE_4, TOTAL_QUESTIONS_4, practice4Questions } from "./practice4.data";
import type { Practice4State, Question4Result } from "./practice4.types";

const STORAGE_KEY = "gae2.week4.practica4";

function loadState(): Practice4State | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Practice4State;
  } catch {
    return null;
  }
}

function saveState(state: Practice4State) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage unavailable (private browsing, quota) — the practice still works for this session.
  }
}

function clearState() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

function emptyState(): Practice4State {
  return {
    nombreCompleto: "",
    nombreGrupo: "",
    preguntaActual: 0,
    resultados: {},
    puntaje: 0,
    fechaInicio: "",
    fechaFin: null,
    finalizada: false,
  };
}

type ViewStage = "intro" | "resume-prompt" | "quiz" | "celebration" | "results";

function initialStage(saved: Practice4State | null): ViewStage {
  if (!saved) return "intro";
  if (saved.finalizada) return "results";
  return "resume-prompt";
}

/**
 * Graded practice for Week 4: "Práctica Calificada 4 — Simulador de decisiones sobre metadatos".
 * Same architecture and localStorage persistence mechanism as Week 3's PracticeQuiz (see practice4.types.ts),
 * generalized from boolean correctness to a 3-state verdict (correct/partial/review) for open-ended questions.
 */
export function Practice4Quiz() {
  const [saved, setSaved] = useState<Practice4State | null>(() => loadState());
  const [stage, setStage] = useState<ViewStage>(() => initialStage(saved));
  const [state, setState] = useState<Practice4State>(() => saved ?? emptyState());

  function handleStart(nombreCompleto: string, nombreGrupo: string) {
    const fresh: Practice4State = { ...emptyState(), nombreCompleto, nombreGrupo, fechaInicio: new Date().toISOString() };
    setState(fresh);
    saveState(fresh);
    setStage("quiz");
  }

  function handleFinalizeQuestion(result: Question4Result) {
    const question = practice4Questions[state.preguntaActual];
    const nextIndex = state.preguntaActual + 1;
    const isLast = nextIndex >= TOTAL_QUESTIONS_4;

    const next: Practice4State = {
      ...state,
      preguntaActual: nextIndex,
      resultados: { ...state.resultados, [question.id]: result },
      puntaje: Math.min(MAX_SCORE_4, Math.round((state.puntaje + result.earnedPoints) * 100) / 100),
      finalizada: isLast,
      fechaFin: isLast ? new Date().toISOString() : null,
    };
    setState(next);
    saveState(next);
    setStage(isLast ? "celebration" : "quiz");
  }

  function handleRestart() {
    clearState();
    setSaved(null);
    setState(emptyState());
    setStage("intro");
  }

  if (stage === "resume-prompt") {
    return <ResumeBanner4 onContinue={() => setStage(state.finalizada ? "results" : "quiz")} onRestart={handleRestart} />;
  }

  if (stage === "intro") {
    return <RegistrationScreen4 onStart={handleStart} />;
  }

  if (stage === "quiz") {
    const question = practice4Questions[state.preguntaActual];
    return (
      <div className="space-y-md">
        <ProgressHeader4 currentIndex={state.preguntaActual} answeredCount={Object.keys(state.resultados).length} score={state.puntaje} />
        <QuestionCard4 key={question.id} question={question} onFinalize={handleFinalizeQuestion} />
      </div>
    );
  }

  if (stage === "celebration") {
    return <ResultsModal4 nombreCompleto={state.nombreCompleto} nombreGrupo={state.nombreGrupo} score={state.puntaje} onContinue={() => setStage("results")} />;
  }

  return (
    <ResultsSummary4
      nombreCompleto={state.nombreCompleto}
      nombreGrupo={state.nombreGrupo}
      score={state.puntaje}
      resultados={state.resultados}
      onRestart={handleRestart}
    />
  );
}
