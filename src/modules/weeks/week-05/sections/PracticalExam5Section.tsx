import { ClipboardCheck } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Practice5Quiz } from "../practice5/Practice5Quiz";

/** The Week 5 graded practice, sitting at the end of Week 5's content — same pattern as Week 4's PracticalExam4Section. */
export function PracticalExam5Section() {
  return (
    <section id="practica-calificada" className="scroll-mt-24 space-y-lg">
      <div className="rounded-xl border border-primary-container/50 bg-gradient-to-br from-secondary-container/40 to-surface-container-lowest p-lg text-center space-y-sm">
        <div className="flex justify-center">
          <Badge variant="tertiary">
            <ClipboardCheck size={14} /> Práctica calificada
          </Badge>
        </div>
        <h2 className="text-headline-lg font-headline-lg text-on-surface">Práctica Calificada 5 — ISO 15489-1:2016 y Gestión de Documentos</h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl mx-auto">
          Analiza casos, relaciona atributos, detecta riesgos, ordena procesos y propone controles con criterio profesional.
        </p>
        <p className="text-caption font-caption text-on-surface-variant">20 preguntas · 20 puntos</p>
        <Button onClick={() => document.getElementById("simulador-pc5")?.scrollIntoView({ behavior: "smooth", block: "start" })}>
          Iniciar práctica
        </Button>
      </div>

      <div id="simulador-pc5" className="scroll-mt-24">
        <Practice5Quiz />
      </div>
    </section>
  );
}
