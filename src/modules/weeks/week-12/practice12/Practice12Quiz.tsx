import { useState } from "react";
import { ProgressHeader12 } from "./ProgressHeader12";
import { QuestionCard12 } from "./QuestionCard12";
import { RegistrationScreen12 } from "./RegistrationScreen12";
import { ResultsModal12 } from "./ResultsModal12";
import { ResultsSummary12 } from "./ResultsSummary12";
import { ResumeBanner12 } from "./ResumeBanner12";
import { MAX_SCORE_12, TOTAL_QUESTIONS_12, practice12Questions } from "./practice12.data";
import type { Practice12State, Question12Result } from "./practice12.types";

const STORAGE_KEY = "gae2.week12.practica12";

function loadState(): Practice12State | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Practice12State;
  } catch {
    return null;
  }
}

function saveState(state: Practice12State) {
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

function emptyState(): Practice12State {
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

function initialStage(saved: Practice12State | null): ViewStage {
  if (!saved) return "intro";
  if (saved.finalizada) return "results";
  return "resume-prompt";
}

/**
 * Graded practice for Week 12: "Práctica Calificada 12 — Modelo OAIS". 10 preguntas × 2 puntos = 20
 * puntos (equivalente a 100 puntos porcentuales). Same architecture and localStorage persistence
 * mechanism as Weeks 7-11's practices (including the two-attempt scoring reduction, reused without
 * modification), under its own storage key.
 */
export function Practice12Quiz() {
  const [saved, setSaved] = useState<Practice12State | null>(() => loadState());
  const [stage, setStage] = useState<ViewStage>(() => initialStage(saved));
  const [state, setState] = useState<Practice12State>(() => saved ?? emptyState());

  function handleStart(nombreCompleto: string, nombreGrupo: string) {
    const fresh: Practice12State = { ...emptyState(), nombreCompleto, nombreGrupo, fechaInicio: new Date().toISOString() };
    setState(fresh);
    saveState(fresh);
    setStage("quiz");
  }

  function handleFinalizeQuestion(result: Question12Result) {
    const question = practice12Questions[state.preguntaActual];
    const nextIndex = state.preguntaActual + 1;
    const isLast = nextIndex >= TOTAL_QUESTIONS_12;

    const next: Practice12State = {
      ...state,
      preguntaActual: nextIndex,
      resultados: { ...state.resultados, [question.id]: result },
      puntaje: Math.min(MAX_SCORE_12, Math.round((state.puntaje + result.earnedPoints) * 100) / 100),
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
    return <ResumeBanner12 onContinue={() => setStage(state.finalizada ? "results" : "quiz")} onRestart={handleRestart} />;
  }

  if (stage === "intro") {
    return <RegistrationScreen12 onStart={handleStart} />;
  }

  if (stage === "quiz") {
    const question = practice12Questions[state.preguntaActual];
    return (
      <div className="space-y-md">
        <ProgressHeader12 currentIndex={state.preguntaActual} answeredCount={Object.keys(state.resultados).length} score={state.puntaje} />
        <QuestionCard12 key={question.id} question={question} onFinalize={handleFinalizeQuestion} />
      </div>
    );
  }

  if (stage === "celebration") {
    return <ResultsModal12 nombreCompleto={state.nombreCompleto} nombreGrupo={state.nombreGrupo} score={state.puntaje} onContinue={() => setStage("results")} />;
  }

  return (
    <ResultsSummary12
      nombreCompleto={state.nombreCompleto}
      nombreGrupo={state.nombreGrupo}
      score={state.puntaje}
      resultados={state.resultados}
      onRestart={handleRestart}
    />
  );
}
