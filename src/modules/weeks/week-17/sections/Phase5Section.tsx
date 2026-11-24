import { CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Callout } from "../../../../components/common/Callout";
import { FlowChain } from "../../../../components/common/FlowChain";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Badge } from "../../../../components/ui/badge";
import { cn } from "../../../../utils/cn";
import { getIcon } from "../../../../utils/getIcon";
import { ChipList, PhaseBanner, PrivacyNotice, ReflectionBox, ReviewToggle } from "../../proyecto-directiva/components";
import { annexes, demoSteps, metadataTypeHints, phase5Purpose, week17Phases } from "../week17.data";

const annexFlow = [
  { id: "sgd", label: "SGD" },
  { id: "prep", label: "Preparación" },
  { id: "transf", label: "Transferencia" },
  { id: "valid", label: "Validación" },
  { id: "repo", label: "Repositorio de preservación" },
  { id: "aip", label: "Gestión de AIP" },
  { id: "dip", label: "Acceso mediante DIP" },
];

async function sha256(text: string): Promise<string | null> {
  if (typeof crypto === "undefined" || !crypto.subtle) return null;
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** Didactic integrity check: register a SHA-256 value at ingest, recompute later and compare. */
function IntegrityDemo() {
  const original = "Resolución de ejemplo N.° 001 — documento ficticio para la demostración.";
  const [registered, setRegistered] = useState<string | null>(null);
  const [current, setCurrent] = useState(original);
  const [currentHash, setCurrentHash] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    sha256(original).then((h) => alive && setRegistered(h));
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    let alive = true;
    sha256(current).then((h) => alive && setCurrentHash(h));
    return () => {
      alive = false;
    };
  }, [current]);

  if (registered === null && currentHash === null) {
    return <p className="text-body-md font-body-md text-on-surface-variant italic">El navegador no permite calcular hash en este contexto.</p>;
  }

  const match = registered !== null && registered === currentHash;

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-md space-y-sm">
      <p className="text-label-md font-label-md font-bold text-on-surface">Ejemplo didáctico de verificación (SHA-256, calculado en tu navegador)</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
        <div className="space-y-1">
          <p className="text-caption font-caption font-semibold text-primary-container">1. Valor registrado al ingresar el documento</p>
          <p className="rounded-lg bg-surface-container-low p-sm text-caption font-caption text-on-surface">{original}</p>
          <code className="block break-all rounded-lg bg-surface-container p-xs text-[0.7rem] text-on-surface-variant">{registered}</code>
        </div>
        <div className="space-y-1">
          <label htmlFor="integrity-current" className="text-caption font-caption font-semibold text-primary-container block">
            2. Documento en la verificación periódica (modifícalo para ver el efecto)
          </label>
          <textarea
            id="integrity-current"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
            rows={2}
            className="w-full rounded-lg border border-outline-variant bg-surface-container-low p-sm text-caption font-caption text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
          />
          <code className="block break-all rounded-lg bg-surface-container p-xs text-[0.7rem] text-on-surface-variant">{currentHash}</code>
        </div>
      </div>
      <motion.div
        key={String(match)}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn("flex items-start gap-xs rounded-lg p-sm text-body-md font-body-md", match ? "bg-tertiary-fixed/40 text-on-tertiary-fixed-variant" : "bg-error-container/50 text-on-error-container")}
      >
        {match ? <CheckCircle2 size={18} className="shrink-0 mt-0.5" /> : <XCircle size={18} className="shrink-0 mt-0.5" />}
        <span>
          {match
            ? "Los valores coinciden: se registra un evento de verificación con resultado conforme."
            : "Los valores no coinciden. Una diferencia no es todavía una conclusión: ¿qué debe hacer la institución? ¿A quién se comunica, qué copia se usa para restaurar y qué evidencia se conserva? Respóndanlo en su Anexo 3."}
        </span>
      </motion.div>
      <p className="text-caption font-caption text-on-surface-variant italic">
        No se exige ejecutar una plataforma de preservación: el anexo debe explicar el procedimiento institucional.
      </p>
    </div>
  );
}

export function Phase5Section() {
  const phase = week17Phases[1];
  return (
    <section id="fase-5" className="scroll-mt-24 space-y-lg">
      <PhaseBanner phase={phase} purpose={phase5Purpose} week={17} />

      <SectionHeading eyebrow="Anexos técnicos" title="Seis anexos que hacen aplicable la directiva" description="Cada anexo debe ser coherente con las disposiciones y con el diagnóstico de la Semana 16." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        {annexes.map((a, index) => {
          const Icon = getIcon(a.icon);
          return (
            <motion.div
              key={a.id}
              id={a.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: (index % 2) * 0.06 }}
              className="scroll-mt-24 rounded-xl border border-outline-variant bg-surface-container-lowest p-md space-y-sm shadow-sm"
            >
              <div className="flex items-center gap-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                  <Icon size={22} />
                </div>
                <div>
                  <Badge variant="outline">Anexo {a.number}</Badge>
                  <p className="text-label-md font-label-md font-bold text-on-surface mt-0.5">{a.title}</p>
                </div>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant">{a.intro}</p>
              <div>
                <p className="text-caption font-caption font-semibold text-on-surface mb-1">Debe incluir / orientar sobre</p>
                <ChipList items={a.include} />
              </div>
              {a.note && <p className="text-caption font-caption text-on-surface-variant border-l-2 border-primary-container pl-sm">{a.note}</p>}
            </motion.div>
          );
        })}
      </div>

      <div className="space-y-sm">
        <p className="text-headline-md font-headline-md text-on-surface">Anexo 1 · Recorrido mínimo que debe representar el flujo</p>
        <FlowChain steps={annexFlow} />
        <p className="text-caption font-caption text-on-surface-variant italic">
          El orden general es orientativo: el equipo decide actividades, controles, responsables, puntos de validación y
          metadatos de cada etapa según su institución.
        </p>
      </div>

      <div className="space-y-sm">
        <p className="text-headline-md font-headline-md text-on-surface">Anexo 2 · ¿Qué tipo de metadato es cada campo?</p>
        <p className="text-body-md font-body-md text-on-surface-variant max-w-3xl">
          Clasificar los campos ayuda a no confundir PREMIS con una lista genérica de metadatos. Completen las celdas «¿?» en
          su matriz.
        </p>
        <div className="overflow-x-auto rounded-xl border border-outline-variant bg-surface-container-lowest">
          <table className="w-full min-w-[30rem] border-collapse text-left">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="p-sm text-caption font-caption font-semibold text-primary-container">Campo</th>
                <th className="p-sm text-caption font-caption font-semibold text-primary-container">Tipo / relación con PREMIS</th>
              </tr>
            </thead>
            <tbody>
              {metadataTypeHints.map((m) => (
                <tr key={m.field} className="border-t border-outline-variant">
                  <td className="p-sm text-caption font-caption font-semibold text-on-surface">{m.field}</td>
                  <td className={cn("p-sm text-caption font-caption", m.tipo === "¿?" ? "text-outline italic" : "text-on-surface")}>{m.tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-sm">
        <p className="text-headline-md font-headline-md text-on-surface">Anexo 3 · Verificación de integridad</p>
        <IntegrityDemo />
      </div>

      <div id="demostracion" className="scroll-mt-24 rounded-xl border-2 border-primary-container bg-gradient-to-br from-surface-container-lowest to-secondary-container/30 p-lg space-y-md">
        <div className="flex items-center gap-xs flex-wrap">
          <Badge variant="tertiary">Obligatoria</Badge>
          <p className="text-headline-md font-headline-md text-on-surface">Demostración con un documento de ejemplo</p>
        </div>
        <p className="text-body-md font-body-md text-on-surface-variant max-w-3xl">
          Cada equipo seleccionará un documento digital de ejemplo y explicará su recorrido completo. La demostración puede
          ser conceptual o realizada con herramientas disponibles; no se exige construir un software de repositorio.
        </p>
        <PrivacyNotice />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
          {demoSteps.map((step, index) => (
            <ReflectionBox key={step.id} id={step.id} label={`${index + 1}. ${step.label}`} rows={2} />
          ))}
        </div>
      </div>

      <Callout variant="info" title="Coherencia entre anexos">
        El hash del Anexo 3 debe figurar en la matriz de metadatos (Anexo 2); los controles del Anexo 4 deben tener
        responsables en el Anexo 5; y el plan del Anexo 6 debe priorizar los riesgos más críticos.
      </Callout>

      <ReviewToggle id={phase.id} />
    </section>
  );
}
