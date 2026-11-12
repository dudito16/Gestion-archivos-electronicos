import { useState } from "react";
import { ProgressHeader14 } from "./ProgressHeader14";
import { QuestionCard14 } from "./QuestionCard14";
import { RegistrationScreen14 } from "./RegistrationScreen14";
import { ResultsModal14 } from "./ResultsModal14";
import { ResultsSummary14 } from "./ResultsSummary14";
import { ResumeBanner14 } from "./ResumeBanner14";
import { MAX_SCORE_14, TOTAL_QUESTIONS_14, practice14Questions } from "./practice14.data";
import type { Practice14State, Question14Result } from "./practice14.types";

const STORAGE_KEY = "gae2.week14.practica14";

function loadState(): Practice14State | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Practice14State;
  } catch {
    return null;
  }
}

function saveState(state: Practice14State) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage unavailable (private browsing, quota) — the evaluation still works for this session.
  }
}

function clearState() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

function emptyState(): Practice14State {
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

function initialStage(saved: Practice14State | null): ViewStage {
  if (!saved) return "intro";
  if (saved.finalizada) return "results";
  return "resume-prompt";
}

/**
 * Evaluación final for Week 14: "Repositorios digitales confiables". 15 preguntas × 2 puntos = 30
 * puntos (equivalente a 100 puntos porcentuales). Same architecture and localStorage persistence
 * mechanism as Weeks 7-13's practices (including the two-attempt scoring reduction, reused without
 * modification), under its own storage key.
 */
export function Practice14Quiz() {
  const [saved, setSaved] = useState<Practice14State | null>(() => loadState());
  const [stage, setStage] = useState<ViewStage>(() => initialStage(saved));
  const [state, setState] = useState<Practice14State>(() => saved ?? emptyState());

  function handleStart(nombreCompleto: string, nombreGrupo: string) {
    const fresh: Practice14State = { ...emptyState(), nombreCompleto, nombreGrupo, fechaInicio: new Date().toISOString() };
    setState(fresh);
    saveState(fresh);
    setStage("quiz");
  }

  function handleFinalizeQuestion(result: Question14Result) {
    const question = practice14Questions[state.preguntaActual];
    const nextIndex = state.preguntaActual + 1;
    const isLast = nextIndex >= TOTAL_QUESTIONS_14;

    const next: Practice14State = {
      ...state,
      preguntaActual: nextIndex,
      resultados: { ...state.resultados, [question.id]: result },
      puntaje: Math.min(MAX_SCORE_14, Math.round((state.puntaje + result.earnedPoints) * 100) / 100),
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
    return <ResumeBanner14 onContinue={() => setStage(state.finalizada ? "results" : "quiz")} onRestart={handleRestart} />;
  }

  if (stage === "intro") {
    return <RegistrationScreen14 onStart={handleStart} />;
  }

  if (stage === "quiz") {
    const question = practice14Questions[state.preguntaActual];
    return (
      <div className="space-y-md">
        <ProgressHeader14 currentIndex={state.preguntaActual} answeredCount={Object.keys(state.resultados).length} score={state.puntaje} />
        <QuestionCard14 key={question.id} question={question} onFinalize={handleFinalizeQuestion} />
      </div>
    );
  }

  if (stage === "celebration") {
    return <ResultsModal14 nombreCompleto={state.nombreCompleto} nombreGrupo={state.nombreGrupo} score={state.puntaje} onContinue={() => setStage("results")} />;
  }

  return (
    <ResultsSummary14
      nombreCompleto={state.nombreCompleto}
      nombreGrupo={state.nombreGrupo}
      score={state.puntaje}
      resultados={state.resultados}
      onRestart={handleRestart}
    />
  );
}
