import { ClipboardCheck } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Practice7Quiz } from "../practice7/Practice7Quiz";

/** The Week 7 graded practice, sitting at the end of Week 7's content — same pattern as Weeks 4-6's practices. */
export function PracticalExam7Section() {
  return (
    <section id="practica-calificada" className="scroll-mt-24 space-y-lg">
      <div className="rounded-xl border border-primary-container/50 bg-gradient-to-br from-secondary-container/40 to-surface-container-lowest p-lg text-center space-y-sm">
        <div className="flex justify-center">
          <Badge variant="tertiary">
            <ClipboardCheck size={14} /> Práctica calificada
          </Badge>
        </div>
        <h2 className="text-headline-lg font-headline-lg text-on-surface">Práctica Calificada 7 — Seguridad de los documentos y archivos electrónicos</h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl mx-auto">
          Identifica atributos comprometidos, clasifica riesgos y controles, analiza registros de auditoría y resuelve
          casos de seguridad documental.
        </p>
        <p className="text-caption font-caption text-on-surface-variant">20 preguntas · 20 puntos</p>
        <Button onClick={() => document.getElementById("simulador-pc7")?.scrollIntoView({ behavior: "smooth", block: "start" })}>
          Iniciar práctica
        </Button>
      </div>

      <div id="simulador-pc7" className="scroll-mt-24">
        <Practice7Quiz />
      </div>
    </section>
  );
}
