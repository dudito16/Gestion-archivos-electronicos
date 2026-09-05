import { ClipboardCheck } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Practice4Quiz } from "../practice4/Practice4Quiz";

/** The Week 4 graded practice, sitting at the end of Week 4's content — same pattern as Week 3's PracticalExamSection. */
export function PracticalExam4Section() {
  return (
    <section id="practica-calificada" className="scroll-mt-24 space-y-lg">
      <div className="rounded-xl border border-primary-container/50 bg-gradient-to-br from-secondary-container/40 to-surface-container-lowest p-lg text-center space-y-sm">
        <div className="flex justify-center">
          <Badge variant="tertiary">
            <ClipboardCheck size={14} /> Práctica calificada
          </Badge>
        </div>
        <h2 className="text-headline-lg font-headline-lg text-on-surface">Práctica Calificada 4 — Simulador de decisiones sobre metadatos</h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl mx-auto">
          Analiza fichas, clasifica metadatos, resuelve casos y toma decisiones profesionales sobre la gestión de metadatos.
        </p>
        <p className="text-caption font-caption text-on-surface-variant">20 actividades · 20 puntos</p>
        <Button onClick={() => document.getElementById("simulador-pc4")?.scrollIntoView({ behavior: "smooth", block: "start" })}>
          Iniciar práctica
        </Button>
      </div>

      <div id="simulador-pc4" className="scroll-mt-24">
        <Practice4Quiz />
      </div>
    </section>
  );
}
