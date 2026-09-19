import { ArrowLeft, ArrowRight } from "lucide-react";
import { modeloChapters } from "../../integrativeProject.data";

function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Prev/next navigation between "Modelo Completo" chapters — mirrors the scroll-driven pattern used across the module. */
export function ModeloChapterNav({ currentId }: { currentId: string }) {
  const index = modeloChapters.findIndex((c) => c.id === currentId);
  const prev = index > 0 ? modeloChapters[index - 1] : undefined;
  const next = index >= 0 && index < modeloChapters.length - 1 ? modeloChapters[index + 1] : undefined;

  if (!prev && !next) return null;

  return (
    <div className="flex items-center justify-between gap-sm border-t border-outline-variant pt-sm">
      {prev ? (
        <button type="button" onClick={() => goTo(prev.id)} className="flex items-center gap-1 text-caption font-caption font-semibold text-on-surface-variant hover:text-primary-container transition-colors">
          <ArrowLeft size={14} /> {prev.title}
        </button>
      ) : (
        <span />
      )}
      {next ? (
        <button type="button" onClick={() => goTo(next.id)} className="flex items-center gap-1 text-caption font-caption font-semibold text-on-surface-variant hover:text-primary-container transition-colors">
          {next.title} <ArrowRight size={14} />
        </button>
      ) : (
        <span />
      )}
    </div>
  );
}
