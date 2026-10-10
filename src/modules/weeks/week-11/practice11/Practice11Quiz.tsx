import { useState } from "react";
import { ProgressHeader11 } from "./ProgressHeader11";
import { QuestionCard11 } from "./QuestionCard11";
import { RegistrationScreen11 } from "./RegistrationScreen11";
import { ResultsModal11 } from "./ResultsModal11";
import { ResultsSummary11 } from "./ResultsSummary11";
import { ResumeBanner11 } from "./ResumeBanner11";
import { MAX_SCORE_11, TOTAL_QUESTIONS_11, practice11Questions } from "./practice11.data";
import type { Practice11State, Question11Result } from "./practice11.types";

const STORAGE_KEY = "gae2.week11.practica11";

function loadState(): Practice11State | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Practice11State;
  } catch {
    return null;
  }
}

function saveState(state: Practice11State) {
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

function emptyState(): Practice11State {
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

function initialStage(saved: Practice11State | null): ViewStage {
  if (!saved) return "intro";
  if (saved.finalizada) return "results";
  return "resume-prompt";
}

/**
 * Graded practice for Week 11: "Práctica Calificada 11 — Preservación digital". 10 preguntas × 2
 * puntos = 20 puntos (equivalente a 100 puntos porcentuales). Same architecture and localStorage
 * persistence mechanism as Weeks 7-10's practices, under its own storage key.
 */
export function Practice11Quiz() {
  const [saved, setSaved] = useState<Practice11State | null>(() => loadState());
  const [stage, setStage] = useState<ViewStage>(() => initialStage(saved));
  const [state, setState] = useState<Practice11State>(() => saved ?? emptyState());

  function handleStart(nombreCompleto: string, nombreGrupo: string) {
    const fresh: Practice11State = { ...emptyState(), nombreCompleto, nombreGrupo, fechaInicio: new Date().toISOString() };
    setState(fresh);
    saveState(fresh);
    setStage("quiz");
  }

  function handleFinalizeQuestion(result: Question11Result) {
    const question = practice11Questions[state.preguntaActual];
    const nextIndex = state.preguntaActual + 1;
    const isLast = nextIndex >= TOTAL_QUESTIONS_11;

    const next: Practice11State = {
      ...state,
      preguntaActual: nextIndex,
      resultados: { ...state.resultados, [question.id]: result },
      puntaje: Math.min(MAX_SCORE_11, Math.round((state.puntaje + result.earnedPoints) * 100) / 100),
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
    return <ResumeBanner11 onContinue={() => setStage(state.finalizada ? "results" : "quiz")} onRestart={handleRestart} />;
  }

  if (stage === "intro") {
    return <RegistrationScreen11 onStart={handleStart} />;
  }

  if (stage === "quiz") {
    const question = practice11Questions[state.preguntaActual];
    return (
      <div className="space-y-md">
        <ProgressHeader11 currentIndex={state.preguntaActual} answeredCount={Object.keys(state.resultados).length} score={state.puntaje} />
        <QuestionCard11 key={question.id} question={question} onFinalize={handleFinalizeQuestion} />
      </div>
    );
  }

  if (stage === "celebration") {
    return <ResultsModal11 nombreCompleto={state.nombreCompleto} nombreGrupo={state.nombreGrupo} score={state.puntaje} onContinue={() => setStage("results")} />;
  }

  return (
    <ResultsSummary11
      nombreCompleto={state.nombreCompleto}
      nombreGrupo={state.nombreGrupo}
      score={state.puntaje}
      resultados={state.resultados}
      onRestart={handleRestart}
    />
  );
}
