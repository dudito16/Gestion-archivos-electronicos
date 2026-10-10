import { AlertTriangle, ChevronLeft, ChevronRight, PartyPopper } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Progress } from "../../../../components/ui/progress";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { DragDropClassifier } from "../../../../components/common/DragDropClassifier";
import { cn } from "../../../../utils/cn";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { isMeaningfulText } from "../activities/evaluate";
import {
  tallerClassifyCategories,
  tallerClassifyItems,
  tallerClosingPrompt,
  tallerDisclaimer,
  tallerPolicyPlanItems,
  tallerPriorityOptions,
  tallerPriorityPrompt,
  tallerRiskItems,
  tallerRubric,
  tallerScenario,
  tallerStrategyOptions,
  tallerStrategyPrompt,
  tallerValidationItems,
} from "./taller.data";

const STORAGE_KEY = "gae2.week11.taller";
const TOTAL_STEPS = 7;

interface TallerState {
  step: number;
  risksDone: boolean;
  classifyDone: boolean;
  priorityId: string | null;
  priorityJustification: string;
  strategyIds: string[];
  strategyJustification: string;
  validationDone: boolean;
  policyPlanDone: boolean;
  conclusion: string;
  finished: boolean;
}

function emptyState(): TallerState {
  return {
    step: 1,
    risksDone: false,
    classifyDone: false,
    priorityId: null,
    priorityJustification: "",
    strategyIds: [],
    strategyJustification: "",
    validationDone: false,
    policyPlanDone: false,
    conclusion: "",
    finished: false,
  };
}

function loadState(): TallerState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState();
    return { ...emptyState(), ...(JSON.parse(raw) as Partial<TallerState>) };
  } catch {
    return emptyState();
  }
}

/**
 * Week 11's workshop: a single integrated case ("Diseño preliminar de una estrategia de
 * preservación digital"), walked through as a 7-step wizard — same architecture as Week 10's
 * `TallerLaboratorio`. Persists to its own storage key, `gae2.week11.taller`.
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

  function toggleStrategy(id: string) {
    setState((s) => ({ ...s, strategyIds: s.strategyIds.includes(id) ? s.strategyIds.filter((x) => x !== id) : [...s.strategyIds, id] }));
  }

  const canAdvance = (() => {
    switch (state.step) {
      case 1:
        return state.risksDone;
      case 2:
        return state.classifyDone;
      case 3:
        return Boolean(state.priorityId) && isMeaningfulText(state.priorityJustification, 8);
      case 4:
        return state.strategyIds.length > 0 && isMeaningfulText(state.strategyJustification, 8);
      case 5:
        return state.validationDone;
      case 6:
        return state.policyPlanDone;
      default:
        return true;
    }
  })();

  function finish() {
    if (!isMeaningfulText(state.conclusion, 15)) return;
    setState((s) => ({ ...s, finished: true }));
  }

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-lg">
      <div className="space-y-1.5">
        <div className="flex items-center justify-between flex-wrap gap-xs">
          <span className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">
            Paso {state.step} de {TOTAL_STEPS}
          </span>
          <Badge variant="secondary">Diseño de estrategia de preservación</Badge>
        </div>
        <Progress value={(state.step / TOTAL_STEPS) * 100} />
      </div>

      <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md space-y-xs">
        <Badge variant="tertiary">⚠️ {tallerDisclaimer}</Badge>
        <p className="text-body-md font-body-md text-on-surface">{tallerScenario}</p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={state.step} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.25 }} className="space-y-md">
          {state.step === 1 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">1. Identifica los riesgos</p>
              <MultiSelectCheck items={tallerRiskItems} onComplete={() => setState((s) => ({ ...s, risksDone: true }))} />
            </div>
          )}

          {state.step === 2 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">2. Distingue SGD de preservación</p>
              <p className="text-body-md font-body-md text-on-surface-variant">Clasifica cada situación según corresponda al SGD o a la preservación a largo plazo.</p>
              <DragDropClassifier items={tallerClassifyItems} categories={tallerClassifyCategories} onComplete={() => setState((s) => ({ ...s, classifyDone: true }))} />
            </div>
          )}

          {state.step === 3 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">3. Determina la prioridad</p>
              <p className="text-body-md font-body-md text-on-surface-variant">{tallerPriorityPrompt}</p>
              <div className="flex flex-col gap-xs">
                {tallerPriorityOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setState((s) => ({ ...s, priorityId: opt.id }))}
                    className={cn(
                      "text-left rounded-lg border px-md py-sm transition-colors",
                      state.priorityId === opt.id ? "border-primary-container bg-secondary-container/50" : "border-outline-variant bg-surface-container-lowest hover:border-primary-container",
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <OpenTextField id="taller11-priority-justify" label="Justificación" value={state.priorityJustification} onChange={(v) => setState((s) => ({ ...s, priorityJustification: v }))} rows={3} />
              <OpenAnswerDisclaimer />
            </div>
          )}

          {state.step === 4 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">4. Selecciona la estrategia</p>
              <p className="text-body-md font-body-md text-on-surface-variant">{tallerStrategyPrompt}</p>
              <div className="flex gap-xs flex-wrap">
                {tallerStrategyOptions.map((opt) => {
                  const isSelected = state.strategyIds.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleStrategy(opt.id)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-label-md font-label-md font-medium transition-colors",
                        isSelected ? "border-primary-container bg-secondary-container text-on-secondary-container" : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                      )}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
              <OpenTextField id="taller11-strategy-justify" label="Justificación" value={state.strategyJustification} onChange={(v) => setState((s) => ({ ...s, strategyJustification: v }))} rows={3} />
              <OpenAnswerDisclaimer />
            </div>
          )}

          {state.step === 5 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">5. Propón validación y documentación</p>
              <MultiSelectCheck items={tallerValidationItems} onComplete={() => setState((s) => ({ ...s, validationDone: true }))} />
            </div>
          )}

          {state.step === 6 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">6. Identifica elementos de política y plan</p>
              <MultiSelectCheck items={tallerPolicyPlanItems} onComplete={() => setState((s) => ({ ...s, policyPlanDone: true }))} />
            </div>
          )}

          {state.step === 7 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">7. Conclusiones y recomendaciones</p>
              <OpenTextField id="taller11-conclusion" label={tallerClosingPrompt} value={state.conclusion} onChange={(v) => setState((s) => ({ ...s, conclusion: v }))} rows={5} disabled={state.finished} />
              <OpenAnswerDisclaimer />
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
            <Button disabled={!isMeaningfulText(state.conclusion, 15)} onClick={finish}>
              Finalizar taller
            </Button>
          )
        )}
      </div>

      {state.step === 3 && !canAdvance && state.priorityId && (
        <p className="flex items-center gap-xs text-caption font-caption text-on-surface-variant">
          <AlertTriangle size={14} /> Completa la justificación para continuar.
        </p>
      )}

      {state.finished && (
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="space-y-md">
          <div className="rounded-xl border border-tertiary-fixed-dim bg-tertiary-fixed/40 p-lg text-center space-y-xs">
            <PartyPopper className="mx-auto text-tertiary" size={26} />
            <p className="text-headline-md font-headline-md text-on-tertiary-fixed-variant">Taller completado</p>
            <p className="text-body-md font-body-md text-on-tertiary-fixed-variant max-w-xl mx-auto">
              Diseñaste una estrategia preliminar de preservación digital siguiendo el recorrido profesional
              completo: riesgos, SGD vs. preservación, prioridad, estrategia, validación, política y plan.
            </p>
          </div>

          <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
            <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">Rúbrica de evaluación</p>
            <div className="space-y-xs">
              {tallerRubric.map((item) => (
                <div key={item.criterion} className="text-caption font-caption text-on-surface-variant">
                  <span className="font-semibold text-on-surface">{item.criterion}:</span> {item.description}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
