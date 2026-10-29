import { ChevronLeft, ChevronRight, PartyPopper } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Progress } from "../../../../components/ui/progress";
import { MultiSelectCheck } from "../../../../components/common/MultiSelectCheck";
import { OpenTextField, OpenAnswerDisclaimer } from "../activities/components/OpenTextField";
import { isMeaningfulText } from "../activities/evaluate";
import {
  tallerBagitPrompt,
  tallerClosingPrompt,
  tallerDescriptivePrompt,
  tallerDisclaimer,
  tallerEventPrompt,
  tallerIdentificationValidationItems,
  tallerNormalizationPrompt,
  tallerObjectsPrompt,
  tallerPreservationMetadataItems,
  tallerRisksControlsItems,
  tallerRubric,
  tallerRubricTotal,
  tallerScenario,
  tallerStructurePrompt,
} from "./taller.data";

const STORAGE_KEY = "gae2.week13.taller";
const TOTAL_STEPS = 10;

interface TallerState {
  step: number;
  objects: string;
  descriptive: string;
  preservationMetadataDone: boolean;
  structure: string;
  bagit: string;
  identificationValidationDone: boolean;
  normalization: string;
  event: string;
  risksControlsDone: boolean;
  conclusion: string;
  finished: boolean;
}

function emptyState(): TallerState {
  return {
    step: 1,
    objects: "",
    descriptive: "",
    preservationMetadataDone: false,
    structure: "",
    bagit: "",
    identificationValidationDone: false,
    normalization: "",
    event: "",
    risksControlsDone: false,
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
 * Week 13's workshop: "Organización y documentación de un paquete de preservación digital" — a single
 * integrated case walked through a 10-step wizard, same architecture as Week 10/11/12's
 * `TallerLaboratorio`. Persists to its own storage key, `gae2.week13.taller`.
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

  const canAdvance = (() => {
    switch (state.step) {
      case 1:
        return isMeaningfulText(state.objects, 6);
      case 2:
        return isMeaningfulText(state.descriptive, 6);
      case 3:
        return state.preservationMetadataDone;
      case 4:
        return isMeaningfulText(state.structure, 6);
      case 5:
        return isMeaningfulText(state.bagit, 6);
      case 6:
        return state.identificationValidationDone;
      case 7:
        return isMeaningfulText(state.normalization, 6);
      case 8:
        return isMeaningfulText(state.event, 6);
      case 9:
        return state.risksControlsDone;
      default:
        return true;
    }
  })();

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
          <Badge variant="secondary">Organización y documentación de un paquete de preservación digital</Badge>
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
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">1. Objetos digitales</p>
              <OpenTextField id="taller13-objects" label={tallerObjectsPrompt} value={state.objects} onChange={(v) => setState((s) => ({ ...s, objects: v }))} rows={3} />
              <OpenAnswerDisclaimer />
            </div>
          )}

          {state.step === 2 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">2. Información descriptiva básica</p>
              <OpenTextField id="taller13-descriptive" label={tallerDescriptivePrompt} value={state.descriptive} onChange={(v) => setState((s) => ({ ...s, descriptive: v }))} rows={3} />
              <OpenAnswerDisclaimer />
            </div>
          )}

          {state.step === 3 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">3. Metadatos de preservación</p>
              <p className="text-body-md font-body-md text-on-surface-variant">Selecciona qué información corresponde a metadatos de preservación.</p>
              <MultiSelectCheck items={tallerPreservationMetadataItems} onComplete={() => setState((s) => ({ ...s, preservationMetadataDone: true }))} />
            </div>
          )}

          {state.step === 4 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">4. Estructura de relaciones</p>
              <OpenTextField id="taller13-structure" label={tallerStructurePrompt} value={state.structure} onChange={(v) => setState((s) => ({ ...s, structure: v }))} rows={3} />
              <OpenAnswerDisclaimer />
            </div>
          )}

          {state.step === 5 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">5. Organización del paquete BagIt</p>
              <OpenTextField id="taller13-bagit" label={tallerBagitPrompt} value={state.bagit} onChange={(v) => setState((s) => ({ ...s, bagit: v }))} rows={3} />
              <OpenAnswerDisclaimer />
            </div>
          )}

          {state.step === 6 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">6. Identificación y validación de formatos</p>
              <p className="text-body-md font-body-md text-on-surface-variant">Selecciona las prácticas correctas.</p>
              <MultiSelectCheck items={tallerIdentificationValidationItems} onComplete={() => setState((s) => ({ ...s, identificationValidationDone: true }))} />
            </div>
          )}

          {state.step === 7 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">7. Evaluación de una normalización</p>
              <OpenTextField id="taller13-normalization" label={tallerNormalizationPrompt} value={state.normalization} onChange={(v) => setState((s) => ({ ...s, normalization: v }))} rows={3} />
              <OpenAnswerDisclaimer />
            </div>
          )}

          {state.step === 8 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">8. Documentación de un evento de preservación</p>
              <OpenTextField id="taller13-event" label={tallerEventPrompt} value={state.event} onChange={(v) => setState((s) => ({ ...s, event: v }))} rows={3} />
              <OpenAnswerDisclaimer />
            </div>
          )}

          {state.step === 9 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">9. Riesgos y controles</p>
              <p className="text-body-md font-body-md text-on-surface-variant">Selecciona las prácticas de control que aplicarías.</p>
              <MultiSelectCheck items={tallerRisksControlsItems} onComplete={() => setState((s) => ({ ...s, risksControlsDone: true }))} />
            </div>
          )}

          {state.step === 10 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">10. Conclusión técnica</p>
              <OpenTextField id="taller13-conclusion" label={tallerClosingPrompt} value={state.conclusion} onChange={(v) => setState((s) => ({ ...s, conclusion: v }))} rows={4} disabled={state.finished} />
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
              Finalizar taller
            </Button>
          )
        )}
      </div>

      {state.finished && (
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="space-y-md">
          <div className="rounded-xl border border-tertiary-fixed-dim bg-tertiary-fixed/40 p-lg text-center space-y-xs">
            <PartyPopper className="mx-auto text-tertiary" size={26} />
            <p className="text-headline-md font-headline-md text-on-tertiary-fixed-variant">Taller completado</p>
            <p className="text-body-md font-body-md text-on-tertiary-fixed-variant max-w-xl mx-auto">
              Diseñaste un flujo completo de descripción, estructuración, empaquetado y documentación de un objeto
              digital conforme a los estándares revisados esta semana.
            </p>
          </div>

          <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
            <p className="text-label-md font-label-md font-bold text-on-surface mb-sm">Rúbrica de evaluación (sobre {tallerRubricTotal} puntos — distinta de la nota de la Práctica Calificada)</p>
            <div className="space-y-xs">
              {tallerRubric.map((item) => (
                <div key={item.criterion} className="flex items-start justify-between gap-sm text-caption font-caption text-on-surface-variant">
                  <span><span className="font-semibold text-on-surface">{item.criterion}:</span> {item.description}</span>
                  <span className="shrink-0 font-semibold text-primary-container">{item.points} pts</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
