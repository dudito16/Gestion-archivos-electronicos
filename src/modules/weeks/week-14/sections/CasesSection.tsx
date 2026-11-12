import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { cn } from "../../../../utils/cn";
import { Case1Evaluation } from "../cases/Case1Evaluation";
import { Case2Audit } from "../cases/Case2Audit";
import { Case3Alteration } from "../cases/Case3Alteration";
import { Case4Transfer } from "../cases/Case4Transfer";

const CASES = [
  { id: "caso1", label: "Caso 1 · Evaluación", Component: Case1Evaluation },
  { id: "caso2", label: "Caso 2 · Auditoría", Component: Case2Audit },
  { id: "caso3", label: "Caso 3 · Alteración", Component: Case3Alteration },
  { id: "caso4", label: "Caso 4 · Transferencia", Component: Case4Transfer },
];

/** Week 14's four interactive "Casos prácticos" — a tabbed switcher, each case kept mounted independently. */
export function CasesSection() {
  const [activeId, setActiveId] = useState(CASES[0].id);
  const active = CASES.find((c) => c.id === activeId)!;
  const ActiveComponent = active.Component;

  return (
    <section id="casos-practicos" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Casos prácticos"
        title="Cuatro situaciones institucionales para analizar"
        description="Selecciona cada caso para trabajarlo: evaluación de un repositorio, auditoría institucional, alteración de un documento y transferencia desde un SGD."
      />

      <div className="flex gap-xs flex-wrap">
        {CASES.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setActiveId(c.id)}
            className={cn(
              "rounded-full border-2 px-4 py-2 text-label-md font-label-md font-semibold transition-colors",
              activeId === c.id ? "border-primary-container bg-secondary-container text-on-secondary-container" : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg">
        <ActiveComponent key={activeId} />
      </div>
    </section>
  );
}
