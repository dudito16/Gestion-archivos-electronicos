import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, PartyPopper } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Progress } from "../../../../components/ui/progress";
import { Callout } from "../../../../components/common/Callout";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { isMeaningfulText } from "../activities/evaluate";
import {
  tallerAcademicDisclaimer,
  tallerClosingCriteria,
  tallerClosingPrompt,
  tallerDimensions,
  tallerDisclaimer,
  tallerDiscussionPrompt,
  tallerMeasurePrompt,
  tallerRisksCriteria,
  tallerRisksMinimum,
  tallerRisksPrompt,
  tallerScenario,
} from "./taller.data";

const STORAGE_KEY = "gae2.week14.taller";
const TOTAL_STEPS = tallerDimensions.length + 2; // 7 dimensiones + riesgos + conclusión

interface RiskEntry {
  risk: string;
  measure: string;
}

interface TallerState {
  step: number;
  dimensionAnswers: Record<string, string>;
  risks: RiskEntry[];
  conclusion: string;
  finished: boolean;
}

function emptyRisks(): RiskEntry[] {
  return Array.from({ length: tallerRisksMinimum }, () => ({ risk: "", measure: "" }));
}

function emptyState(): TallerState {
  return { step: 1, dimensionAnswers: {}, risks: emptyRisks(), conclusion: "", finished: false };
}

function loadState(): TallerState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState();
    const parsed = { ...emptyState(), ...(JSON.parse(raw) as Partial<TallerState>) };
    if (!Array.isArray(parsed.risks) || parsed.risks.length !== tallerRisksMinimum) {
      parsed.risks = emptyRisks();
    }
    return parsed;
  } catch {
    return emptyState();
  }
}

/** Orientative "what a well-founded answer should consider" reveal — never a model answer to copy, never graded by literal match. */
function CriteriaReveal({ items }: { items: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-caption font-caption font-semibold text-primary-container hover:underline"
      >
        {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        {open ? "Ocultar" : "Ver"} criterios orientativos para esta respuesta
      </button>
      {open && (
        <div className="mt-xs rounded-lg border-l-4 border-secondary bg-secondary-container/30 p-sm space-y-1">
          <p className="text-caption font-caption font-semibold text-on-secondary-container">
            Una respuesta bien fundamentada debería:
          </p>
          <ul className="space-y-0.5">
            {items.map((item) => (
              <li key={item} className="text-caption font-caption text-on-secondary-container">• {item}</li>
            ))}
          </ul>
          <p className="text-caption font-caption text-on-secondary-container italic">
            Esto es orientativo: no existe una única redacción correcta, y el docente evalúa el criterio, no la coincidencia literal.
          </p>
        </div>
      )}
    </div>
  );
}

/**
 * Week 14's workshop: "Evaluación de la confiabilidad de un repositorio digital institucional" —
 * a diagnostic walked through a wizard covering the 7 ISO 16363-related dimensions, a structured
 * risks-and-controls step, and a closing diagnosis that synthesizes the student's own prior answers.
 * Every open-ended step offers an orientative, criteria-based reveal (never a literal model answer to
 * copy, never graded by exact match). Same architecture as Weeks 10-13's `TallerLaboratorio`.
 * Persists to its own storage key, `gae2.week14.taller`.
 */
export function TallerLaboratorio() {
  const [state, setState] = useState<TallerState>(() => loadState());

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // localStorage unavailable — the workshop still works for this session.
    }
  }, [state]);

  function goTo(step: number) {
    setState((s) => ({ ...s, step: Math.max(1, Math.min(TOTAL_STEPS, step)) }));
  }

  function updateRisk(index: number, field: "risk" | "measure", value: string) {
    setState((s) => {
      const risks = s.risks.map((r, i) => (i === index ? { ...r, [field]: value } : r));
      return { ...s, risks };
    });
  }

  const isDimensionStep = state.step <= tallerDimensions.length;
  const currentDimension = isDimensionStep ? tallerDimensions[state.step - 1] : null;
  const isRisksStep = state.step === tallerDimensions.length + 1;
  const isClosingStep = state.step === TOTAL_STEPS;

  const risksComplete = state.risks.every((r) => isMeaningfulText(r.risk, 4) && isMeaningfulText(r.measure, 4));

  const canAdvance = isDimensionStep
    ? isMeaningfulText(state.dimensionAnswers[currentDimension!.id] ?? "", 6)
    : isRisksStep
      ? risksComplete
      : true;

  function finish() {
    if (!isMeaningfulText(state.conclusion, 12)) return;
    setState((s) => ({ ...s, finished: true }));
  }

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-lg">
      <div className="space-y-1.5">
        <div className="flex items-center justify-between flex-wrap gap-xs">
          <span className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">
            Paso {state.step} de {TOTAL_STEPS}
          </span>
          <Badge variant="secondary">Evaluación de la confiabilidad de un repositorio digital institucional</Badge>
        </div>
        <Progress value={(state.step / TOTAL_STEPS) * 100} />
      </div>

      <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md space-y-xs">
        <Badge variant="tertiary">⚠️ {tallerDisclaimer}</Badge>
        <p className="text-body-md font-body-md text-on-surface">{tallerScenario}</p>
      </div>

      <Callout variant="info" title="Para discutir en clase">
        {tallerDiscussionPrompt}
      </Callout>

      <AnimatePresence mode="wait">
        <motion.div key={state.step} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.25 }} className="space-y-md">
          {isDimensionStep && currentDimension && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">
                {currentDimension.number}. {currentDimension.label}
              </p>
              <OpenTextField
                id={`taller14-${currentDimension.id}`}
                label={currentDimension.prompt}
                value={state.dimensionAnswers[currentDimension.id] ?? ""}
                onChange={(v) => setState((s) => ({ ...s, dimensionAnswers: { ...s.dimensionAnswers, [currentDimension.id]: v } }))}
                rows={3}
              />
              <OpenAnswerDisclaimer />
              <CriteriaReveal items={currentDimension.criteria} />
            </div>
          )}

          {isRisksStep && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">8. Riesgos y medidas correctivas</p>
              <p className="text-body-md font-body-md text-on-surface-variant">
                A partir de tu diagnóstico de las siete dimensiones, registra {tallerRisksMinimum} riesgos concretos y, para cada uno, su medida correctiva.
              </p>
              <div className="space-y-sm">
                {state.risks.map((entry, index) => (
                  <div key={index} className="rounded-lg border border-outline-variant bg-surface-container-low p-sm space-y-xs">
                    <p className="text-label-md font-label-md font-bold text-primary-container">Riesgo {index + 1}</p>
                    <OpenTextField
                      id={`taller14-risk-${index}`}
                      label={tallerRisksPrompt}
                      value={entry.risk}
                      onChange={(v) => updateRisk(index, "risk", v)}
                      rows={2}
                    />
                    <OpenTextField
                      id={`taller14-measure-${index}`}
                      label={tallerMeasurePrompt}
                      value={entry.measure}
                      onChange={(v) => updateRisk(index, "measure", v)}
                      rows={2}
                    />
                  </div>
                ))}
              </div>
              <p className="text-caption font-caption text-on-surface-variant">
                Riesgos con ambos campos completos: {state.risks.filter((r) => isMeaningfulText(r.risk, 4) && isMeaningfulText(r.measure, 4)).length} / {tallerRisksMinimum}
              </p>
              <OpenAnswerDisclaimer />
              <CriteriaReveal items={tallerRisksCriteria} />
            </div>
          )}

          {isClosingStep && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">9. Diagnóstico y conclusión</p>

              <div className="rounded-lg border border-outline-variant bg-surface-container-low p-sm space-y-xs">
                <p className="text-label-md font-label-md font-bold text-on-surface">Síntesis de tus respuestas anteriores</p>
                <div className="space-y-1.5">
                  {tallerDimensions.map((d) => (
                    <p key={d.id} className="text-caption font-caption text-on-surface-variant">
                      <span className="font-semibold text-on-surface">{d.number}. {d.label}:</span>{" "}
                      {(state.dimensionAnswers[d.id] ?? "").trim() || "(sin respuesta)"}
                    </p>
                  ))}
                  <p className="text-caption font-caption text-on-surface-variant">
                    <span className="font-semibold text-on-surface">8. Riesgos identificados:</span>{" "}
                    {state.risks.filter((r) => r.risk.trim()).map((r) => r.risk.trim()).join("; ") || "(sin riesgos registrados)"}
                  </p>
                </div>
              </div>

              <OpenTextField
                id="taller14-conclusion"
                label={tallerClosingPrompt}
                value={state.conclusion}
                onChange={(v) => setState((s) => ({ ...s, conclusion: v }))}
                rows={4}
                disabled={state.finished}
              />
              <OpenAnswerDisclaimer />
              <CriteriaReveal items={tallerClosingCriteria} />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between gap-sm flex-wrap">
        <Button variant="secondary" disabled={state.step === 1} onClick={() => goTo(state.step - 1)}>
          <ChevronLeft size={16} /> Anterior
        </Button>
        {state.step < TOTAL_STEPS ? (
          <Button disabled={!canAdvance} onClick={() => goTo(state.step + 1)}>
            Siguiente <ChevronRight size={16} />
          </Button>
        ) : (
          !state.finished && (
            <Button disabled={!isMeaningfulText(state.conclusion, 12)} onClick={finish}>
              Finalizar diagnóstico
            </Button>
          )
        )}
      </div>

      {state.finished && (
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="space-y-md">
          <div className="rounded-xl border border-tertiary-fixed-dim bg-tertiary-fixed/40 p-lg text-center space-y-xs">
            <PartyPopper className="mx-auto text-tertiary" size={26} />
            <p className="text-headline-md font-headline-md text-on-tertiary-fixed-variant">Diagnóstico completado</p>
            <p className="text-body-md font-body-md text-on-tertiary-fixed-variant max-w-xl mx-auto">
              Evaluaste las siete dimensiones de confiabilidad, identificaste {tallerRisksMinimum} riesgos con sus
              medidas correctivas, y redactaste un diagnóstico orientativo.
            </p>
          </div>

          <Callout variant="warning" title="Ejercicio académico, no certificación">
            {tallerAcademicDisclaimer}
          </Callout>
        </motion.div>
      )}
    </div>
  );
}
