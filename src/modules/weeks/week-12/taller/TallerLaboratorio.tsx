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
  tallerAccessRestrictionsPrompt,
  tallerAipPrompt,
  tallerActorsPrompt,
  tallerClosingPrompt,
  tallerControlsItems,
  tallerDataStorageItems,
  tallerDipPrompt,
  tallerDisclaimer,
  tallerDocumentsPrompt,
  tallerIngestItems,
  tallerRubric,
  tallerRubricTotal,
  tallerScenario,
  tallerSipPrompt,
  tallerWorkflowPrompt,
} from "./taller.data";

const STORAGE_KEY = "gae2.week12.taller";
const TOTAL_STEPS = 10;

interface TallerState {
  step: number;
  documents: string;
  actors: string;
  sip: string;
  ingestDone: boolean;
  aip: string;
  dataStorageDone: boolean;
  dip: string;
  accessRestrictions: string;
  workflow: string;
  controlsDone: boolean;
  conclusion: string;
  finished: boolean;
}

function emptyState(): TallerState {
  return {
    step: 1,
    documents: "",
    actors: "",
    sip: "",
    ingestDone: false,
    aip: "",
    dataStorageDone: false,
    dip: "",
    accessRestrictions: "",
    workflow: "",
    controlsDone: false,
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
 * Week 12's workshop: "Diseño conceptual de un flujo OAIS para la preservación de expedientes
 * electrónicos" — a single integrated case walked through a 10-step wizard, same architecture as
 * Week 10/11's `TallerLaboratorio`. Persists to its own storage key, `gae2.week12.taller`.
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
        return isMeaningfulText(state.documents, 6);
      case 2:
        return isMeaningfulText(state.actors, 6);
      case 3:
        return isMeaningfulText(state.sip, 6);
      case 4:
        return state.ingestDone;
      case 5:
        return isMeaningfulText(state.aip, 6);
      case 6:
        return state.dataStorageDone;
      case 7:
        return isMeaningfulText(state.dip, 6);
      case 8:
        return isMeaningfulText(state.accessRestrictions, 6);
      case 9:
        return isMeaningfulText(state.workflow, 8);
      default:
        return true;
    }
  })();

  function finish() {
    if (!state.controlsDone || !isMeaningfulText(state.conclusion, 12)) return;
    setState((s) => ({ ...s, finished: true }));
  }

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-lg">
      <div className="space-y-1.5">
        <div className="flex items-center justify-between flex-wrap gap-xs">
          <span className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">
            Paso {state.step} de {TOTAL_STEPS}
          </span>
          <Badge variant="secondary">Diseño conceptual de un flujo OAIS</Badge>
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
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">1. Documentos a transferir</p>
              <OpenTextField id="taller12-documents" label={tallerDocumentsPrompt} value={state.documents} onChange={(v) => setState((s) => ({ ...s, documents: v }))} rows={3} />
              <OpenAnswerDisclaimer />
            </div>
          )}

          {state.step === 2 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">2. Productor y consumidor</p>
              <OpenTextField id="taller12-actors" label={tallerActorsPrompt} value={state.actors} onChange={(v) => setState((s) => ({ ...s, actors: v }))} rows={3} />
              <OpenAnswerDisclaimer />
            </div>
          )}

          {state.step === 3 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">3. Contenido del SIP</p>
              <OpenTextField id="taller12-sip" label={tallerSipPrompt} value={state.sip} onChange={(v) => setState((s) => ({ ...s, sip: v }))} rows={3} />
              <OpenAnswerDisclaimer />
            </div>
          )}

          {state.step === 4 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">4. Ingreso y validaciones</p>
              <p className="text-body-md font-body-md text-on-surface-variant">Selecciona las validaciones que deberían aplicarse antes de aceptar el SIP.</p>
              <MultiSelectCheck items={tallerIngestItems} onComplete={() => setState((s) => ({ ...s, ingestDone: true }))} />
            </div>
          )}

          {state.step === 5 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">5. AIP conceptual</p>
              <OpenTextField id="taller12-aip" label={tallerAipPrompt} value={state.aip} onChange={(v) => setState((s) => ({ ...s, aip: v }))} rows={3} />
              <OpenAnswerDisclaimer />
            </div>
          )}

          {state.step === 6 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">6. Gestión de datos y almacenamiento</p>
              <p className="text-body-md font-body-md text-on-surface-variant">Selecciona las acciones que corresponden a estas funciones.</p>
              <MultiSelectCheck items={tallerDataStorageItems} onComplete={() => setState((s) => ({ ...s, dataStorageDone: true }))} />
            </div>
          )}

          {state.step === 7 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">7. DIP conceptual</p>
              <OpenTextField id="taller12-dip" label={tallerDipPrompt} value={state.dip} onChange={(v) => setState((s) => ({ ...s, dip: v }))} rows={3} />
              <OpenAnswerDisclaimer />
            </div>
          )}

          {state.step === 8 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">8. Restricciones de acceso</p>
              <OpenTextField id="taller12-access" label={tallerAccessRestrictionsPrompt} value={state.accessRestrictions} onChange={(v) => setState((s) => ({ ...s, accessRestrictions: v }))} rows={3} />
              <OpenAnswerDisclaimer />
            </div>
          )}

          {state.step === 9 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">9. Representación del flujo</p>
              <OpenTextField id="taller12-workflow" label={tallerWorkflowPrompt} value={state.workflow} onChange={(v) => setState((s) => ({ ...s, workflow: v }))} rows={4} />
              <OpenAnswerDisclaimer />
            </div>
          )}

          {state.step === 10 && (
            <div className="space-y-sm">
              <p className="text-body-lg font-body-lg font-semibold text-on-surface">10. Registro de decisiones y controles</p>
              <p className="text-body-md font-body-md text-on-surface-variant">Selecciona las prácticas de registro que aplicarías.</p>
              <MultiSelectCheck items={tallerControlsItems} onComplete={() => setState((s) => ({ ...s, controlsDone: true }))} />
              {state.controlsDone && (
                <div className="space-y-sm pt-sm border-t border-outline-variant">
                  <OpenTextField id="taller12-conclusion" label={tallerClosingPrompt} value={state.conclusion} onChange={(v) => setState((s) => ({ ...s, conclusion: v }))} rows={4} disabled={state.finished} />
                  <OpenAnswerDisclaimer />
                </div>
              )}
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
            <Button disabled={!state.controlsDone || !isMeaningfulText(state.conclusion, 12)} onClick={finish}>
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
              Diseñaste un flujo OAIS conceptual completo: documentos, actores, SIP, ingreso, AIP, gestión de datos y
              almacenamiento, DIP, restricciones, flujo y registro de controles.
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
