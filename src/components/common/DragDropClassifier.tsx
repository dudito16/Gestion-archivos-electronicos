import { Check, GripVertical, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "../../utils/cn";
import { getIcon } from "../../utils/getIcon";

interface ClassifierItem {
  id: string;
  label: string;
  icon: string;
  category: string;
}

interface ClassifierCategory {
  id: string;
  label: string;
  icon: string;
}

interface DragDropClassifierProps {
  items: ClassifierItem[];
  categories: ClassifierCategory[];
  onComplete?: (score: number, total: number) => void;
}

/**
 * Generic drag-and-drop classification exercise. Supports native HTML5 drag-and-drop
 * on desktop and a click-to-select / click-to-place fallback for touch and keyboard users.
 */
export function DragDropClassifier({ items, categories, onComplete }: DragDropClassifierProps) {
  const [placements, setPlacements] = useState<Record<string, string>>({});
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const pool = items.filter((item) => !placements[item.id]);
  const allPlaced = pool.length === 0;

  const score = useMemo(
    () => items.filter((item) => placements[item.id] === item.category).length,
    [items, placements],
  );

  function place(itemId: string, categoryId: string) {
    if (checked) return;
    setPlacements((prev) => ({ ...prev, [itemId]: categoryId }));
    setSelectedItemId(null);
  }

  function unplace(itemId: string) {
    if (checked) return;
    setPlacements((prev) => {
      const next = { ...prev };
      delete next[itemId];
      return next;
    });
  }

  function reset() {
    setPlacements({});
    setSelectedItemId(null);
    setChecked(false);
  }

  return (
    <div className="space-y-md">
      <div>
        <p className="text-label-md font-label-md text-on-surface-variant mb-xs">
          Documentos por clasificar {selectedItemId && "— toca una categoría para ubicarlo"}
        </p>
        <div className="flex flex-wrap gap-xs min-h-[3.5rem] rounded-lg border border-dashed border-outline-variant p-sm">
          {pool.length === 0 && (
            <span className="text-caption font-caption text-on-surface-variant italic">
              Todos los documentos han sido clasificados.
            </span>
          )}
          {pool.map((item) => {
            const Icon = getIcon(item.icon);
            const isSelected = selectedItemId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                draggable
                onDragStart={(event) => event.dataTransfer.setData("text/plain", item.id)}
                onClick={() => setSelectedItemId((current) => (current === item.id ? null : item.id))}
                className={cn(
                  "flex items-center gap-xs rounded-full border px-3 py-2 text-caption font-caption font-medium cursor-grab active:cursor-grabbing transition-colors",
                  isSelected
                    ? "border-primary-container bg-secondary-container text-on-secondary-container"
                    : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                )}
              >
                <GripVertical size={14} className="text-outline" />
                <Icon size={14} />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
        {categories.map((category) => {
          const CategoryIcon = getIcon(category.icon);
          const placedItems = items.filter((item) => placements[item.id] === category.id);
          return (
            <div
              key={category.id}
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => {
                event.preventDefault();
                const itemId = event.dataTransfer.getData("text/plain");
                if (itemId) place(itemId, category.id);
              }}
              onClick={() => selectedItemId && place(selectedItemId, category.id)}
              className="rounded-xl border-2 border-dashed border-outline-variant p-sm min-h-[8rem] transition-colors hover:border-primary-container"
            >
              <div className="flex items-center gap-xs mb-xs">
                <CategoryIcon className="text-primary-container" size={18} />
                <span className="text-label-md font-label-md font-semibold text-on-surface">{category.label}</span>
              </div>
              <div className="flex flex-col gap-xs">
                {placedItems.map((item) => {
                  const isCorrect = item.category === category.id;
                  return (
                    <div
                      key={item.id}
                      className={cn(
                        "flex items-center justify-between gap-xs rounded-lg px-2 py-1.5 text-caption font-caption",
                        !checked && "bg-surface-container-low text-on-surface",
                        checked && isCorrect && "bg-tertiary-fixed/60 text-on-tertiary-fixed-variant",
                        checked && !isCorrect && "bg-error-container/60 text-on-error-container",
                      )}
                    >
                      <span>{item.label}</span>
                      <span className="flex items-center gap-1 shrink-0">
                        {checked && (isCorrect ? <Check size={14} /> : <X size={14} />)}
                        {!checked && (
                          <button
                            type="button"
                            aria-label={`Quitar ${item.label}`}
                            onClick={(event) => {
                              event.stopPropagation();
                              unplace(item.id);
                            }}
                            className="text-outline hover:text-error"
                          >
                            <X size={14} />
                          </button>
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-sm">
        {!checked ? (
          <Button
            disabled={!allPlaced}
            onClick={() => {
              setChecked(true);
              onComplete?.(score, items.length);
            }}
          >
            Comprobar clasificación
          </Button>
        ) : (
          <>
            <p className="text-label-md font-label-md text-on-surface">
              Resultado: {score}/{items.length} correctas
            </p>
            <Button variant="ghost" size="sm" onClick={reset}>
              Reintentar
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
