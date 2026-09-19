import { BookOpenCheck } from "lucide-react";
import { Badge } from "../../../../../components/ui/badge";
import { Callout } from "../../../../../components/common/Callout";
import { modeloChapters, modeloDisclaimer } from "../../integrativeProject.data";

function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Opens Parte 1.5 — the "Modelo Completo del Proyecto": a finished-work example, distinct from the step-by-step Caso Modelo above it. */
export function ModeloCompletoIntro() {
  return (
    <section id="modelo-completo" className="scroll-mt-24 space-y-md">
      <div className="flex items-center gap-xs">
        <Badge variant="tertiary">
          <BookOpenCheck size={14} /> Modelo de entrega
        </Badge>
        <span className="text-caption font-caption text-on-surface-variant">Así debe quedar tu trabajo</span>
      </div>
      <h2 className="text-headline-lg font-headline-lg text-on-surface">📘 Modelo completo del proyecto</h2>
      <p className="text-body-lg font-body-lg text-on-surface max-w-3xl">
        El siguiente proyecto es un ejemplo académico completo. Está elaborado con información ficticia para
        mostrarte cómo debe organizarse, investigarse, analizarse y sustentarse tu propio proyecto.
      </p>

      <Callout variant="warning" title="⚠️ CASO ACADÉMICO SIMULADO">
        {modeloDisclaimer}
      </Callout>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-md">
        <p className="text-label-md font-label-md font-semibold text-on-surface mb-1">
          ¿En qué se diferencia del Caso Modelo?
        </p>
        <p className="text-body-md font-body-md text-on-surface-variant">
          El <strong>🔎 Caso modelo</strong> que acabas de recorrer te enseña el <em>método</em>: cómo observar,
          analizar y justificar cada paso. Este <strong>📘 Modelo completo</strong> te muestra, en cambio, cómo debe
          verse el <em>trabajo terminado</em> de un equipo: la misma organización simulada, presentada como un
          informe final ya redactado, con portada, capítulos, tablas y conclusiones.
        </p>
      </div>

      <div className="rounded-xl border border-outline-variant bg-surface-container-low p-md">
        <p className="text-label-md font-label-md font-semibold text-on-surface mb-sm">Índice del modelo</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          {modeloChapters.map((chapter) => (
            <button
              key={chapter.id}
              type="button"
              onClick={() => goTo(chapter.id)}
              className="flex items-baseline gap-2 text-left rounded-md px-2 py-1 text-body-md font-body-md text-on-surface hover:bg-surface-container-high hover:text-primary-container transition-colors"
            >
              {chapter.num && <span className="text-caption font-caption font-bold text-primary-container">{chapter.num}.</span>}
              <span>{chapter.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
