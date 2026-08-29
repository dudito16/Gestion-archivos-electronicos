import { ClipboardCheck } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { PracticeQuiz } from "../practice/PracticeQuiz";

/** §39: the graded practice sits at the end of Week 3's content, inline — no separate page or route. */
export function PracticalExamSection() {
  return (
    <section id="practica-calificada" className="scroll-mt-24 space-y-lg">
      <div className="rounded-xl border border-primary-container/50 bg-gradient-to-br from-secondary-container/40 to-surface-container-lowest p-lg text-center space-y-sm">
        <div className="flex justify-center">
          <Badge variant="tertiary">
            <ClipboardCheck size={14} /> Práctica calificada
          </Badge>
        </div>
        <h2 className="text-headline-lg font-headline-lg text-on-surface">Simulador de Decisiones Documentales</h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl mx-auto">
          Analiza situaciones reales de gestión documental, toma decisiones y demuestra tu criterio profesional.
        </p>
        <p className="text-caption font-caption text-on-surface-variant">Actividad grupal · 20 preguntas · 100 puntos</p>
        <Button
          onClick={() => document.getElementById("simulador")?.scrollIntoView({ behavior: "smooth", block: "start" })}
        >
          Iniciar práctica
        </Button>
      </div>

      <div id="simulador" className="scroll-mt-24">
        <PracticeQuiz />
      </div>
    </section>
  );
}
