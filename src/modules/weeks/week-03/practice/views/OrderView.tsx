import { GripVertical } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { cn } from "../../../../../utils/cn";
import type { OrderQuestionData } from "../practice.types";

interface Props {
  question: OrderQuestionData;
  disabled: boolean;
  onCheck: (value: string[]) => void;
}

/** Click-to-build-a-sequence, drag-and-drop-equivalent per the project's accessible pattern (see DragDropClassifier). */
export function OrderView({ question, disabled, onCheck }: Props) {
  const [chosen, setChosen] = useState<string[]>([]);
  const pool = question.items.filter((item) => !chosen.includes(item.id));

  function pick(id: string) {
    if (disabled) return;
    setChosen((prev) => [...prev, id]);
  }

  function remove(id: string) {
    if (disabled) return;
    setChosen((prev) => prev.filter((x) => x !== id));
  }

  return (
    <div className="space-y-md">
      <div>
        <p className="text-label-md font-label-md text-on-surface-variant mb-xs">Tu secuencia</p>
        <div className="flex flex-wrap items-center gap-xs min-h-[3.5rem] rounded-lg border border-dashed border-outline-variant p-sm">
          {chosen.length === 0 && (
            <span className="text-caption font-caption text-on-surface-variant italic">
              Toca los documentos en el orden que creas correcto (o arrástralos).
            </span>
          )}
          {chosen.map((id, index) => {
            const item = question.items.find((i) => i.id === id)!;
            return (
              <motion.button
                key={id}
                type="button"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => remove(id)}
                disabled={disabled}
                className={cn(
                  "flex items-center gap-1 rounded-full border px-3 py-1.5 text-caption font-caption font-medium",
                  "border-primary-container bg-secondary-container text-on-secondary-container",
                  disabled && "opacity-70",
                )}
              >
                <span className="opacity-60">{index + 1}.</span> {item.label}
              </motion.button>
            );
          })}
        </div>
      </div>

      {pool.length > 0 && (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const id = e.dataTransfer.getData("text/plain");
            if (id) pick(id);
          }}
        >
          <p className="text-label-md font-label-md text-on-surface-variant mb-xs">Documentos disponibles</p>
          <div className="flex flex-wrap gap-xs">
            {pool.map((item) => (
              <button
                key={item.id}
                type="button"
                draggable
                onDragStart={(e) => e.dataTransfer.setData("text/plain", item.id)}
                onClick={() => pick(item.id)}
                className="flex items-center gap-1 rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-caption font-caption font-medium text-on-surface hover:border-primary-container transition-colors cursor-grab active:cursor-grabbing"
              >
                <GripVertical size={13} className="text-outline" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <Button disabled={pool.length > 0 || disabled} onClick={() => onCheck(chosen)}>
        Comprobar orden
      </Button>
    </div>
  );
}
