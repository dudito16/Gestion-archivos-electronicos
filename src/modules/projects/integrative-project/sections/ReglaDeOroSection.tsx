import { Plus, Ban } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { evidenceExamples } from "../integrativeProject.data";

export function ReglaDeOroSection() {
  return (
    <section id="regla-de-oro" className="scroll-mt-24 space-y-lg">
      <div className="rounded-xl border-2 border-tertiary-fixed-dim bg-tertiary-fixed/20 p-lg space-y-md">
        <Badge variant="tertiary">Regla de oro</Badge>
        <p className="text-headline-md font-headline-md text-on-surface">
          Toda afirmación importante sobre la organización debe estar respaldada por una fuente o evidencia.
        </p>

        <div>
          <p className="text-label-md font-label-md font-semibold text-on-surface mb-xs">Ejemplos de evidencia</p>
          <div className="flex flex-wrap gap-xs">
            {evidenceExamples.map((e) => (
              <span key={e} className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-caption font-caption text-on-surface">
                {e}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-sm justify-center pt-sm">
          <span className="rounded-lg bg-primary-container text-on-primary px-4 py-2 font-label-md font-semibold">AFIRMACIÓN</span>
          <Plus size={18} className="text-outline" />
          <span className="rounded-lg bg-secondary-container text-on-secondary-container px-4 py-2 font-label-md font-semibold">EVIDENCIA</span>
          <Plus size={18} className="text-outline" />
          <span className="rounded-lg bg-tertiary-fixed text-on-tertiary-fixed px-4 py-2 font-label-md font-semibold">ANÁLISIS</span>
        </div>

        <div className="flex items-center justify-center gap-xs text-error font-label-md font-label-md font-semibold pt-xs">
          <Ban size={18} /> Copiar información de Internet
        </div>
      </div>
    </section>
  );
}
