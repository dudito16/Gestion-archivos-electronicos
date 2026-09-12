import { ClipboardCheck } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Practice6Quiz } from "../practice6/Practice6Quiz";

/** The Week 6 graded practice, sitting at the end of Week 6's content — same pattern as Weeks 4-5's practices. */
export function PracticalExam6Section() {
  return (
    <section id="practica-calificada" className="scroll-mt-24 space-y-lg">
      <div className="rounded-xl border border-primary-container/50 bg-gradient-to-br from-secondary-container/40 to-surface-container-lowest p-lg text-center space-y-sm">
        <div className="flex justify-center">
          <Badge variant="tertiary">
            <ClipboardCheck size={14} /> Práctica calificada
          </Badge>
        </div>
        <h2 className="text-headline-lg font-headline-lg text-on-surface">Práctica Calificada 6 — Firma, certificados y trazabilidad</h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl mx-auto">
          Analiza firmas, interpreta certificados, verifica situaciones y resuelve casos profesionales sobre firma digital y trazabilidad.
        </p>
        <p className="text-caption font-caption text-on-surface-variant">20 preguntas · 20 puntos</p>
        <Button onClick={() => document.getElementById("simulador-pc6")?.scrollIntoView({ behavior: "smooth", block: "start" })}>
          Iniciar práctica
        </Button>
      </div>

      <div id="simulador-pc6" className="scroll-mt-24">
        <Practice6Quiz />
      </div>
    </section>
  );
}
