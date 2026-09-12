import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Callout } from "../../../../components/common/Callout";
import { TOTAL_QUESTIONS_5 } from "./practice5.data";

interface Props {
  onStart: (nombreCompleto: string, nombreGrupo: string) => void;
}

export function RegistrationScreen5({ onStart }: Props) {
  const [nombre, setNombre] = useState("");
  const [grupo, setGrupo] = useState("");
  const [showError, setShowError] = useState(false);

  function handleStart() {
    if (nombre.trim().length === 0 || grupo.trim().length === 0) {
      setShowError(true);
      return;
    }
    setShowError(false);
    onStart(nombre.trim(), grupo.trim());
  }

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-md max-w-xl mx-auto text-center">
      <div>
        <span className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container">Práctica calificada · Semana 5</span>
        <h3 className="text-headline-md font-headline-md text-on-surface mt-1">Práctica Calificada 5 — ISO 15489-1:2016 y Gestión de Documentos</h3>
        <p className="text-caption font-caption text-on-surface-variant mt-1">{TOTAL_QUESTIONS_5} preguntas · 20 puntos</p>
      </div>

      <div className="space-y-sm text-left">
        <div>
          <label htmlFor="pc5-nombre" className="text-label-md font-label-md font-semibold text-on-surface mb-1 block">
            Nombre completo <span className="text-error">*</span>
          </label>
          <input
            id="pc5-nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="p. ej. Juan Carlos Pérez López"
            className="w-full rounded-lg border border-outline-variant bg-surface-container-low px-sm py-2 text-body-md font-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
          />
        </div>
        <div>
          <label htmlFor="pc5-grupo" className="text-label-md font-label-md font-semibold text-on-surface mb-1 block">
            Grupo <span className="text-error">*</span>
          </label>
          <input
            id="pc5-grupo"
            type="text"
            value={grupo}
            onChange={(e) => setGrupo(e.target.value)}
            placeholder="p. ej. Grupo 3"
            className="w-full rounded-lg border border-outline-variant bg-surface-container-low px-sm py-2 text-body-md font-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
          />
        </div>
      </div>

      {showError && (
        <Callout variant="warning" title="Faltan datos">
          Completa tu nombre completo y tu grupo para iniciar la práctica.
        </Callout>
      )}

      <Button onClick={handleStart}>Iniciar práctica</Button>
    </div>
  );
}
