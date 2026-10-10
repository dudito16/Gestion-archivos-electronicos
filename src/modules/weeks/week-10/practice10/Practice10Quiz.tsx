import { useState } from "react";
import { ProgressHeader10 } from "./ProgressHeader10";
import { QuestionCard10 } from "./QuestionCard10";
import { RegistrationScreen10 } from "./RegistrationScreen10";
import { ResultsModal10 } from "./ResultsModal10";
import { ResultsSummary10 } from "./ResultsSummary10";
import { ResumeBanner10 } from "./ResumeBanner10";
import { MAX_SCORE_10, TOTAL_QUESTIONS_10, practice10Questions } from "./practice10.data";
import type { Practice10State, Question10Result } from "./practice10.types";

const STORAGE_KEY = "gae2.week10.practica10";

function loadState(): Practice10State | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Practice10State;
  } catch {
    return null;
  }
}

function saveState(state: Practice10State) {
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

function emptyState(): Practice10State {
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

function initialStage(saved: Practice10State | null): ViewStage {
  if (!saved) return "intro";
  if (saved.finalizada) return "results";
  return "resume-prompt";
}

/**
 * Graded practice for Week 10: "Práctica Calificada 10 — Integridad digital". 10 preguntas × 2
 * puntos = 20 puntos (not 20 preguntas). Same architecture and localStorage persistence mechanism
 * as Weeks 7-8's practices, under its own storage key.
 */
export function Practice10Quiz() {
  const [saved, setSaved] = useState<Practice10State | null>(() => loadState());
  const [stage, setStage] = useState<ViewStage>(() => initialStage(saved));
  const [state, setState] = useState<Practice10State>(() => saved ?? emptyState());

  function handleStart(nombreCompleto: string, nombreGrupo: string) {
    const fresh: Practice10State = { ...emptyState(), nombreCompleto, nombreGrupo, fechaInicio: new Date().toISOString() };
    setState(fresh);
    saveState(fresh);
    setStage("quiz");
  }

  function handleFinalizeQuestion(result: Question10Result) {
    const question = practice10Questions[state.preguntaActual];
    const nextIndex = state.preguntaActual + 1;
    const isLast = nextIndex >= TOTAL_QUESTIONS_10;

    const next: Practice10State = {
      ...state,
      preguntaActual: nextIndex,
      resultados: { ...state.resultados, [question.id]: result },
      puntaje: Math.min(MAX_SCORE_10, Math.round((state.puntaje + result.earnedPoints) * 100) / 100),
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
    return <ResumeBanner10 onContinue={() => setStage(state.finalizada ? "results" : "quiz")} onRestart={handleRestart} />;
  }

  if (stage === "intro") {
    return <RegistrationScreen10 onStart={handleStart} />;
  }

  if (stage === "quiz") {
    const question = practice10Questions[state.preguntaActual];
    return (
      <div className="space-y-md">
        <ProgressHeader10 currentIndex={state.preguntaActual} answeredCount={Object.keys(state.resultados).length} score={state.puntaje} />
        <QuestionCard10 key={question.id} question={question} onFinalize={handleFinalizeQuestion} />
      </div>
    );
  }

  if (stage === "celebration") {
    return <ResultsModal10 nombreCompleto={state.nombreCompleto} nombreGrupo={state.nombreGrupo} score={state.puntaje} onContinue={() => setStage("results")} />;
  }

  return (
    <ResultsSummary10
      nombreCompleto={state.nombreCompleto}
      nombreGrupo={state.nombreGrupo}
      score={state.puntaje}
      resultados={state.resultados}
      onRestart={handleRestart}
    />
  );
}
