import { useState } from "react";
import { ProgressHeader } from "./ProgressHeader";
import { QuestionCard } from "./QuestionCard";
import { RegistrationScreen } from "./RegistrationScreen";
import { ResultsModal } from "./ResultsModal";
import { ResultsSummary } from "./ResultsSummary";
import { ResumeBanner } from "./ResumeBanner";
import { MAX_SCORE, TOTAL_QUESTIONS, practiceQuestions } from "./practice.data";
import type { PracticeState, QuestionResult } from "./practice.types";

const STORAGE_KEY = "gae2.week3.practice";

function loadState(): PracticeState | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as PracticeState;
  } catch {
    return null;
  }
}

function saveState(state: PracticeState) {
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

type ViewStage = "intro" | "resume-prompt" | "quiz" | "celebration" | "results";

function initialStage(saved: PracticeState | null): ViewStage {
  if (!saved) return "intro";
  if (saved.finalizada) return "results";
  return "resume-prompt";
}

/** Grupal, graded practice for Week 3: "Simulador de Decisiones Documentales". See practice.types.ts for the data model. */
export function PracticeQuiz() {
  const [saved, setSaved] = useState<PracticeState | null>(() => loadState());
  const [stage, setStage] = useState<ViewStage>(() => initialStage(saved));
  const [state, setState] = useState<PracticeState>(
    () =>
      saved ?? {
        nombreCompleto: "",
        nombreGrupo: "",
        preguntaActual: 0,
        resultados: {},
        puntaje: 0,
        fechaInicio: "",
        fechaFin: null,
        finalizada: false,
      },
  );

  function handleStart(nombreCompleto: string, nombreGrupo: string) {
    const fresh: PracticeState = {
      nombreCompleto,
      nombreGrupo,
      preguntaActual: 0,
      resultados: {},
      puntaje: 0,
      fechaInicio: new Date().toISOString(),
      fechaFin: null,
      finalizada: false,
    };
    setState(fresh);
    saveState(fresh);
    setStage("quiz");
  }

  function handleFinalizeQuestion(result: QuestionResult) {
    const question = practiceQuestions[state.preguntaActual];
    const nextIndex = state.preguntaActual + 1;
    const isLast = nextIndex >= TOTAL_QUESTIONS;

    const next: PracticeState = {
      ...state,
      preguntaActual: nextIndex,
      resultados: { ...state.resultados, [question.id]: result },
      puntaje: Math.min(MAX_SCORE, state.puntaje + result.earnedPoints),
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
    setState({
      nombreCompleto: "",
      nombreGrupo: "",
      preguntaActual: 0,
      resultados: {},
      puntaje: 0,
      fechaInicio: "",
      fechaFin: null,
      finalizada: false,
    });
    setStage("intro");
  }

  if (stage === "resume-prompt") {
    return (
      <ResumeBanner
        onContinue={() => setStage(state.finalizada ? "results" : "quiz")}
        onRestart={handleRestart}
      />
    );
  }

  if (stage === "intro") {
    return <RegistrationScreen onStart={handleStart} />;
  }

  if (stage === "quiz") {
    const question = practiceQuestions[state.preguntaActual];
    return (
      <div className="space-y-md">
        <ProgressHeader currentIndex={state.preguntaActual} score={state.puntaje} />
        <QuestionCard key={question.id} question={question} onFinalize={handleFinalizeQuestion} />
      </div>
    );
  }

  if (stage === "celebration") {
    return (
      <ResultsModal
        nombreCompleto={state.nombreCompleto}
        nombreGrupo={state.nombreGrupo}
        score={state.puntaje}
        onContinue={() => setStage("results")}
      />
    );
  }

  return (
    <ResultsSummary
      nombreCompleto={state.nombreCompleto}
      nombreGrupo={state.nombreGrupo}
      score={state.puntaje}
      resultados={state.resultados}
      onRestart={handleRestart}
    />
  );
}
