import { ClipboardCheck } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Practice10Quiz } from "../practice10/Practice10Quiz";
import { MAX_SCORE_10, TOTAL_QUESTIONS_10 } from "../practice10/practice10.data";

/** The Week 10 graded practice, sitting at the end of Week 10's content — same pattern as Weeks 4-8's practices. */
export function PracticalExam10Section() {
  return (
    <section id="practica-calificada" className="scroll-mt-24 space-y-lg">
      <div className="rounded-xl border border-primary-container/50 bg-gradient-to-br from-secondary-container/40 to-surface-container-lowest p-lg text-center space-y-sm">
        <div className="flex justify-center">
          <Badge variant="tertiary">
            <ClipboardCheck size={14} /> Práctica calificada
          </Badge>
        </div>
        <h2 className="text-headline-lg font-headline-lg text-on-surface">Práctica Calificada 10 — Integridad digital</h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl mx-auto">
          Aplica hash, checksum, fixity, riesgos y controles para interpretar diferencias de integridad con criterio
          profesional, sin saltar a conclusiones apresuradas.
        </p>
        <p className="text-caption font-caption text-on-surface-variant">
          {TOTAL_QUESTIONS_10} preguntas · {MAX_SCORE_10} puntos
        </p>
        <Button onClick={() => document.getElementById("simulador-pc10")?.scrollIntoView({ behavior: "smooth", block: "start" })}>
          Iniciar práctica
        </Button>
      </div>

      <div id="simulador-pc10" className="scroll-mt-24">
        <Practice10Quiz />
      </div>
    </section>
  );
}
