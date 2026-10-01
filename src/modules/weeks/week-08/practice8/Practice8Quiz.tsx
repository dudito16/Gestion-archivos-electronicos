import { useState } from "react";
import { ProgressHeader8 } from "./ProgressHeader8";
import { QuestionCard8 } from "./QuestionCard8";
import { RegistrationScreen8 } from "./RegistrationScreen8";
import { ResultsModal8 } from "./ResultsModal8";
import { ResultsSummary8 } from "./ResultsSummary8";
import { ResumeBanner8 } from "./ResumeBanner8";
import { MAX_SCORE_8, TOTAL_QUESTIONS_8, practice8Questions } from "./practice8.data";
import type { Practice8State, Question8Result } from "./practice8.types";

const STORAGE_KEY = "gae2.week8.practica8";

function loadState(): Practice8State | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Practice8State;
  } catch {
    return null;
  }
}

function saveState(state: Practice8State) {
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

function emptyState(): Practice8State {
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

function initialStage(saved: Practice8State | null): ViewStage {
  if (!saved) return "intro";
  if (saved.finalizada) return "results";
  return "resume-prompt";
}

/**
 * Graded practice for Week 8: "Práctica Calificada 8 — Interoperabilidad, digitalización y formatos".
 * Same architecture and localStorage persistence mechanism as Week 7's Practice7Quiz (see
 * practice8.types.ts), under its own storage key so no other week's or pool's progress is overwritten.
 */
export function Practice8Quiz() {
  const [saved, setSaved] = useState<Practice8State | null>(() => loadState());
  const [stage, setStage] = useState<ViewStage>(() => initialStage(saved));
  const [state, setState] = useState<Practice8State>(() => saved ?? emptyState());

  function handleStart(nombreCompleto: string, nombreGrupo: string) {
    const fresh: Practice8State = { ...emptyState(), nombreCompleto, nombreGrupo, fechaInicio: new Date().toISOString() };
    setState(fresh);
    saveState(fresh);
    setStage("quiz");
  }

  function handleFinalizeQuestion(result: Question8Result) {
    const question = practice8Questions[state.preguntaActual];
    const nextIndex = state.preguntaActual + 1;
    const isLast = nextIndex >= TOTAL_QUESTIONS_8;

    const next: Practice8State = {
      ...state,
      preguntaActual: nextIndex,
      resultados: { ...state.resultados, [question.id]: result },
      puntaje: Math.min(MAX_SCORE_8, Math.round((state.puntaje + result.earnedPoints) * 100) / 100),
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
    return <ResumeBanner8 onContinue={() => setStage(state.finalizada ? "results" : "quiz")} onRestart={handleRestart} />;
  }

  if (stage === "intro") {
    return <RegistrationScreen8 onStart={handleStart} />;
  }

  if (stage === "quiz") {
    const question = practice8Questions[state.preguntaActual];
    return (
      <div className="space-y-md">
        <ProgressHeader8 currentIndex={state.preguntaActual} answeredCount={Object.keys(state.resultados).length} score={state.puntaje} />
        <QuestionCard8 key={question.id} question={question} onFinalize={handleFinalizeQuestion} />
      </div>
    );
  }

  if (stage === "celebration") {
    return <ResultsModal8 nombreCompleto={state.nombreCompleto} nombreGrupo={state.nombreGrupo} score={state.puntaje} onContinue={() => setStage("results")} />;
  }

  return (
    <ResultsSummary8
      nombreCompleto={state.nombreCompleto}
      nombreGrupo={state.nombreGrupo}
      score={state.puntaje}
      resultados={state.resultados}
      onRestart={handleRestart}
    />
  );
}
