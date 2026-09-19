import { Check } from "lucide-react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Progress } from "../../../../components/ui/progress";
import { cn } from "../../../../utils/cn";
import { ChecklistProvider, useChecklist } from "../checklist/checklistProgress";
import { checklistItems, modeloReviewChecklist } from "../integrativeProject.data";
import type { ChecklistItem } from "../integrativeProject.types";

function ChecklistGroup({ items }: { items: ChecklistItem[] }) {
  const { isChecked, toggle } = useChecklist();

  return (
    <div className="space-y-xs">
      {items.map((item) => {
        const checked = isChecked(item.id);
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => toggle(item.id)}
            aria-pressed={checked}
            className={cn(
              "w-full flex items-center gap-sm rounded-lg border px-md py-sm text-left transition-colors",
              checked ? "border-tertiary-fixed-dim bg-tertiary-fixed/30" : "border-outline-variant bg-surface-container-lowest hover:border-primary-container",
            )}
          >
            <span
              className={cn(
                "flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors",
                checked ? "border-tertiary-fixed-dim bg-tertiary-fixed-dim text-on-tertiary-fixed" : "border-outline-variant",
              )}
            >
              {checked && <Check size={14} />}
            </span>
            <span className={cn("text-body-md font-body-md", checked ? "text-on-tertiary-fixed-variant line-through" : "text-on-surface")}>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function ChecklistBody() {
  const { checkedCount, total } = useChecklist();
  const percent = Math.round((checkedCount / total) * 100);

  return (
    <div className="space-y-lg">
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="text-label-md font-label-md font-semibold text-on-surface">Progreso del equipo</span>
          <span className="text-label-md font-label-md font-semibold text-on-surface">{checkedCount}/{total}</span>
        </div>
        <Progress value={percent} />
      </div>

      <ChecklistGroup items={checklistItems} />

      <div>
        <p className="text-label-md font-label-md font-semibold text-on-surface mb-sm">
          Antes de entregar, compara tu trabajo con el modelo
        </p>
        <ChecklistGroup items={modeloReviewChecklist} />
      </div>
    </div>
  );
}

/** Interactive final checklist for the team's project — persisted in its own localStorage key. */
export function ChecklistSection() {
  return (
    <section id="checklist" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Checklist final" title="¿Completamos todo?" description="Marca cada punto a medida que tu equipo avanza. Tu progreso se guarda automáticamente en este navegador." />
      <ChecklistProvider>
        <ChecklistBody />
      </ChecklistProvider>
    </section>
  );
}
