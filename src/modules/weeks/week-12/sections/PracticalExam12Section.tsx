import { ClipboardCheck } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Practice12Quiz } from "../practice12/Practice12Quiz";
import { MAX_SCORE_12, TOTAL_QUESTIONS_12 } from "../practice12/practice12.data";

/** The Week 12 graded practice, sitting at the end of Week 12's content — same pattern as Weeks 4-11's practices. */
export function PracticalExam12Section() {
  return (
    <section id="practica-calificada" className="scroll-mt-24 space-y-lg">
      <div className="rounded-xl border border-primary-container/50 bg-gradient-to-br from-secondary-container/40 to-surface-container-lowest p-lg text-center space-y-sm">
        <div className="flex justify-center">
          <Badge variant="tertiary">
            <ClipboardCheck size={14} /> Práctica calificada
          </Badge>
        </div>
        <h2 className="text-headline-lg font-headline-lg text-on-surface">Práctica Calificada 12 — Modelo OAIS</h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl mx-auto">
          Aplica fundamentos, entidades funcionales y paquetes de información (SIP, AIP, DIP) para analizar
          situaciones institucionales con criterio profesional.
        </p>
        <p className="text-caption font-caption text-on-surface-variant">
          {TOTAL_QUESTIONS_12} preguntas · {MAX_SCORE_12} puntos (equivalente a {MAX_SCORE_12 * 5}/100)
        </p>
        <Button onClick={() => document.getElementById("simulador-pc12")?.scrollIntoView({ behavior: "smooth", block: "start" })}>
          Iniciar práctica
        </Button>
      </div>

      <div id="simulador-pc12" className="scroll-mt-24">
        <Practice12Quiz />
      </div>
    </section>
  );
}
