import { ClipboardCheck } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Practice11Quiz } from "../practice11/Practice11Quiz";
import { MAX_SCORE_11, TOTAL_QUESTIONS_11 } from "../practice11/practice11.data";

/** The Week 11 graded practice, sitting at the end of Week 11's content — same pattern as Weeks 4-10's practices. */
export function PracticalExam11Section() {
  return (
    <section id="practica-calificada" className="scroll-mt-24 space-y-lg">
      <div className="rounded-xl border border-primary-container/50 bg-gradient-to-br from-secondary-container/40 to-surface-container-lowest p-lg text-center space-y-sm">
        <div className="flex justify-center">
          <Badge variant="tertiary">
            <ClipboardCheck size={14} /> Práctica calificada
          </Badge>
        </div>
        <h2 className="text-headline-lg font-headline-lg text-on-surface">Práctica Calificada 11 — Preservación digital</h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl mx-auto">
          Aplica fundamentos, riesgos, política, plan y estrategias de preservación digital para analizar casos
          institucionales con criterio profesional.
        </p>
        <p className="text-caption font-caption text-on-surface-variant">
          {TOTAL_QUESTIONS_11} preguntas · {MAX_SCORE_11} puntos (equivalente a {MAX_SCORE_11 * 5}/100)
        </p>
        <Button onClick={() => document.getElementById("simulador-pc11")?.scrollIntoView({ behavior: "smooth", block: "start" })}>
          Iniciar práctica
        </Button>
      </div>

      <div id="simulador-pc11" className="scroll-mt-24">
        <Practice11Quiz />
      </div>
    </section>
  );
}
