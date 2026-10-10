import { AlertTriangle, ChevronLeft, ChevronRight, PartyPopper } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Progress } from "../../../../components/ui/progress";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { cn } from "../../../../utils/cn";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { isMeaningfulText } from "../activities/evaluate";
import {
  tallerClosingPrompt,
  tallerControlCorrectIds,
  tallerControlOptions,
  tallerDetectOptions,
  tallerFicha,
  tallerInterpretItems,
  tallerInvestigateItems,
} from "./taller.data";

const STORAGE_KEY = "gae2.week10.taller";
const TOTAL_STEPS = 5;

interface TallerState {
  step: number;
  detectId: string | null;
  interpretDone: boolean;
  investigateDone: boolean;
  controlIds: string[];
  conclusion: string;
  finished: boolean;
}

function emptyState(): TallerState {
  return { step: 1, detectId: null, interpretDone: false, investigateDone: false, controlIds: [], conclusion: "", finished: false };
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
 * Week 10's workshop: a single integrated case ("Laboratorio de Integridad Digital"), walked through
 * as a 5-step wizard (Detectar → Interpretar → Investigar → Seleccionar control → Justificar) rather
 * than 10 independent exercises — matching the professional-lab framing this workshop calls for.
 * Persists to its own storage key, `gae2.week10.taller`, independent from the Actividades pool.
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

  function toggleControl(id: string) {
    setState((s) => ({ ...s, controlIds: s.controlIds.includes(id) ? s.controlIds.filter((c) => c !== id) : [...s.controlIds, id] }));
  }

  const canAdvance = (() => {
    switch (state.step) {
      case 1:
        return Boolean(state.detectId);
      case 2:
        return state.interpretDone;
      case 3:
        return state.investigateDone;
      case 4:
        return state.controlIds.length > 0;
      default:
        return true;
    }
  })();

  function finish() {
    if (!isMeaningfulText(state.conclusion, 12)) return;
    setState((s) => ({ ...s, finished: true }));
  }

  const controlsCorrect = tallerControlCorrectIds.every((id) => state.controlIds.includes(id)) && state.controlIds.every((id) => tallerControlCorrectIds.includes(id));

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-lg">
      <div className="space-y-1.5">
        <div className="flex items-center justify-between flex-wrap gap-xs">
          <span className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">
            Paso {state.step} de {TOTAL_STEPS}
          </span>
          <Badge variant="secondary">Laboratorio de Integridad Digital</Badge>
        </div>
        <Progress value={(state.step / TOTAL_STEPS) * 100} />
      </div>

      <div className="rounded-lg border border-outline-variant bg-surface-container-low p-md grid grid-cols-1 sm:grid-cols-2 gap-x-md gap-y-1">
        <p className="text-caption font-caption text-on-surface-variant"><span className="font-semibold text-on-surface">Documento:</span> {tallerFicha.documento}</p>
        <p className="text-caption font-caption text-on-surface-variant"><span className="font-semibold text-on-surface">Referencia:</span> {tallerFicha.referencia}</p>
        <p className="text-caption font-caption text-on-surface-variant"><span className="font-semibold text-on-surface">Valor actual:</span> {tallerFicha.valorActual}</p>
        <p className="text-caption font-caption text-on-surface-variant"><span className="font-semibold text-on-surface">Evento:</span> {tallerFicha.evento}</p>
        <p className="text-caption font-caption text-on-surface-variant"><span className="font-semibold text-on-surface">Usuario:</span> {tallerFicha.usuario}</p>
        <p className="text-caption font-caption text-on-surface-variant"><span className="font-semibold text-on-surface">Fecha:</span> {tallerFicha.fecha}</p>
        <p className="text-caption font-caption font-semibold text-on-surface sm:col-span-2 flex items-center gap-xs">
          <AlertTriangle size={14} className="text-error" /> {tallerFicha.resultado}
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={state.step} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.25 }} className="space-y-md">
          {state.step === 1 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">1. Detectar</p>
              <p className="text-body-md font-body-md text-on-surface-variant">¿Qué fue exactamente lo que detectaste al revisar la ficha?</p>
              <div className="flex flex-col gap-xs">
                {tallerDetectOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setState((s) => ({ ...s, detectId: opt.id }))}
                    className={cn(
                      "text-left rounded-lg border px-md py-sm transition-colors",
                      state.detectId === opt.id ? "border-primary-container bg-secondary-container/50" : "border-outline-variant bg-surface-container-lowest hover:border-primary-container",
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {state.step === 2 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">2. Interpretar</p>
              <p className="text-body-md font-body-md text-on-surface-variant">Selecciona las interpretaciones correctas de lo detectado.</p>
              <MultiSelectCheck items={tallerInterpretItems} onComplete={() => setState((s) => ({ ...s, interpretDone: true }))} />
            </div>
          )}

          {state.step === 3 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">3. Investigar</p>
              <p className="text-body-md font-body-md text-on-surface-variant">Selecciona las acciones de investigación apropiadas.</p>
              <MultiSelectCheck items={tallerInvestigateItems} onComplete={() => setState((s) => ({ ...s, investigateDone: true }))} />
            </div>
          )}

          {state.step === 4 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">4. Seleccionar control</p>
              <p className="text-body-md font-body-md text-on-surface-variant">¿Qué controles aplicarías a partir de este caso? Selecciona todos los que correspondan.</p>
              <div className="flex flex-col gap-xs">
                {tallerControlOptions.map((opt) => {
                  const isSelected = state.controlIds.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleControl(opt.id)}
                      className={cn(
                        "text-left rounded-lg border px-md py-sm transition-colors",
                        isSelected ? "border-primary-container bg-secondary-container/50" : "border-outline-variant bg-surface-container-lowest hover:border-primary-container",
                      )}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {state.step === 5 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">5. Justificar</p>
              <OpenTextField
                id="taller10-conclusion"
                label={tallerClosingPrompt}
                value={state.conclusion}
                onChange={(v) => setState((s) => ({ ...s, conclusion: v }))}
                rows={5}
                disabled={state.finished}
              />
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
            <Button disabled={!isMeaningfulText(state.conclusion, 12)} onClick={finish}>
              Finalizar laboratorio
            </Button>
          )
        )}
      </div>

      {state.step === 4 && canAdvance && (
        <FeedbackNote kind={controlsCorrect ? "bien" : "criterio"}>
          Registrar el hallazgo y documentar la investigación, junto con reforzar el control de acceso y la
          verificación periódica, son las respuestas de un responsable de gestión documental — nunca ignorar la
          diferencia ni señalar una conclusión antes de completar la investigación.
        </FeedbackNote>
      )}

      {state.finished && (
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="rounded-xl border border-tertiary-fixed-dim bg-tertiary-fixed/40 p-lg text-center space-y-xs">
          <PartyPopper className="mx-auto text-tertiary" size={26} />
          <p className="text-headline-md font-headline-md text-on-tertiary-fixed-variant">Laboratorio completado</p>
          <p className="text-body-md font-body-md text-on-tertiary-fixed-variant max-w-xl mx-auto">
            Analizaste el caso siguiendo el recorrido profesional: detectar, interpretar, investigar, seleccionar
            control y justificar — sin saltar a una conclusión de fraude.
          </p>
        </motion.div>
      )}
    </div>
  );
}
