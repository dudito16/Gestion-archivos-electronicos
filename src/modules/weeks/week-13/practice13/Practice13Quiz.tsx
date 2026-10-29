import { useState } from "react";
import { ProgressHeader13 } from "./ProgressHeader13";
import { QuestionCard13 } from "./QuestionCard13";
import { RegistrationScreen13 } from "./RegistrationScreen13";
import { ResultsModal13 } from "./ResultsModal13";
import { ResultsSummary13 } from "./ResultsSummary13";
import { ResumeBanner13 } from "./ResumeBanner13";
import { MAX_SCORE_13, TOTAL_QUESTIONS_13, practice13Questions } from "./practice13.data";
import type { Practice13State, Question13Result } from "./practice13.types";

const STORAGE_KEY = "gae2.week13.practica13";

function loadState(): Practice13State | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Practice13State;
  } catch {
    return null;
  }
}

function saveState(state: Practice13State) {
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

function emptyState(): Practice13State {
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

function initialStage(saved: Practice13State | null): ViewStage {
  if (!saved) return "intro";
  if (saved.finalizada) return "results";
  return "resume-prompt";
}

/**
 * Graded practice for Week 13: "Práctica Calificada 13 — Estándares de preservación digital". 10
 * preguntas × 2 puntos = 20 puntos (equivalente a 100 puntos porcentuales). Same architecture and
 * localStorage persistence mechanism as Weeks 7-12's practices (including the two-attempt scoring
 * reduction, reused without modification), under its own storage key.
 */
export function Practice13Quiz() {
  const [saved, setSaved] = useState<Practice13State | null>(() => loadState());
  const [stage, setStage] = useState<ViewStage>(() => initialStage(saved));
  const [state, setState] = useState<Practice13State>(() => saved ?? emptyState());

  function handleStart(nombreCompleto: string, nombreGrupo: string) {
    const fresh: Practice13State = { ...emptyState(), nombreCompleto, nombreGrupo, fechaInicio: new Date().toISOString() };
    setState(fresh);
    saveState(fresh);
    setStage("quiz");
  }

  function handleFinalizeQuestion(result: Question13Result) {
    const question = practice13Questions[state.preguntaActual];
    const nextIndex = state.preguntaActual + 1;
    const isLast = nextIndex >= TOTAL_QUESTIONS_13;

    const next: Practice13State = {
      ...state,
      preguntaActual: nextIndex,
      resultados: { ...state.resultados, [question.id]: result },
      puntaje: Math.min(MAX_SCORE_13, Math.round((state.puntaje + result.earnedPoints) * 100) / 100),
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
    return <ResumeBanner13 onContinue={() => setStage(state.finalizada ? "results" : "quiz")} onRestart={handleRestart} />;
  }

  if (stage === "intro") {
    return <RegistrationScreen13 onStart={handleStart} />;
  }

  if (stage === "quiz") {
    const question = practice13Questions[state.preguntaActual];
    return (
      <div className="space-y-md">
        <ProgressHeader13 currentIndex={state.preguntaActual} answeredCount={Object.keys(state.resultados).length} score={state.puntaje} />
        <QuestionCard13 key={question.id} question={question} onFinalize={handleFinalizeQuestion} />
      </div>
    );
  }

  if (stage === "celebration") {
    return <ResultsModal13 nombreCompleto={state.nombreCompleto} nombreGrupo={state.nombreGrupo} score={state.puntaje} onContinue={() => setStage("results")} />;
  }

  return (
    <ResultsSummary13
      nombreCompleto={state.nombreCompleto}
      nombreGrupo={state.nombreGrupo}
      score={state.puntaje}
      resultados={state.resultados}
      onRestart={handleRestart}
    />
  );
}
