import { ClipboardCheck } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Practice8Quiz } from "../practice8/Practice8Quiz";

/** The Week 8 graded practice, sitting at the end of Week 8's content — same pattern as Weeks 4-7's practices. */
export function PracticalExam8Section() {
  return (
    <section id="practica-calificada" className="scroll-mt-24 space-y-lg">
      <div className="rounded-xl border border-primary-container/50 bg-gradient-to-br from-secondary-container/40 to-surface-container-lowest p-lg text-center space-y-sm">
        <div className="flex justify-center">
          <Badge variant="tertiary">
            <ClipboardCheck size={14} /> Práctica calificada
          </Badge>
        </div>
        <h2 className="text-headline-lg font-headline-lg text-on-surface">Práctica Calificada 8 — Interoperabilidad, digitalización y formatos</h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl mx-auto">
          Analiza dimensiones de interoperabilidad, relaciona metadatos entre sistemas, evalúa calidad de
          digitalización y selecciona formatos con criterio profesional.
        </p>
        <p className="text-caption font-caption text-on-surface-variant">20 preguntas · 20 puntos</p>
        <Button onClick={() => document.getElementById("simulador-pc8")?.scrollIntoView({ behavior: "smooth", block: "start" })}>
          Iniciar práctica
        </Button>
      </div>

      <div id="simulador-pc8" className="scroll-mt-24">
        <Practice8Quiz />
      </div>
    </section>
  );
}
