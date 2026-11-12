import { ClipboardCheck } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Practice14Quiz } from "../practice14/Practice14Quiz";
import { MAX_SCORE_14, TOTAL_QUESTIONS_14 } from "../practice14/practice14.data";

/** The Week 14 graded evaluation, sitting at the end of Week 14's content — same pattern as Weeks 4-13's practices. */
export function PracticalExam14Section() {
  return (
    <section id="practica-calificada" className="scroll-mt-24 space-y-lg">
      <div className="rounded-xl border border-primary-container/50 bg-gradient-to-br from-secondary-container/40 to-surface-container-lowest p-lg text-center space-y-sm">
        <div className="flex justify-center">
          <Badge variant="tertiary">
            <ClipboardCheck size={14} /> Evaluación final
          </Badge>
        </div>
        <h2 className="text-headline-lg font-headline-lg text-on-surface">Evaluación final — Repositorios digitales confiables</h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl mx-auto">
          Aplica los criterios de confiabilidad, ISO 16363:2025, arquitectura, seguridad, sostenibilidad y
          transferencia desde el SGD para analizar situaciones institucionales con criterio profesional.
        </p>
        <p className="text-caption font-caption text-on-surface-variant">
          {TOTAL_QUESTIONS_14} preguntas · {MAX_SCORE_14} puntos (equivalente a 100/100)
        </p>
        <Button onClick={() => document.getElementById("simulador-pc14")?.scrollIntoView({ behavior: "smooth", block: "start" })}>
          Iniciar evaluación
        </Button>
      </div>

      <div id="simulador-pc14" className="scroll-mt-24">
        <Practice14Quiz />
      </div>
    </section>
  );
}
