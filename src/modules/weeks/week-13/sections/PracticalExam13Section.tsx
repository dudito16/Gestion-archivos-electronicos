import { ClipboardCheck } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Practice13Quiz } from "../practice13/Practice13Quiz";
import { MAX_SCORE_13, TOTAL_QUESTIONS_13 } from "../practice13/practice13.data";

/** The Week 13 graded practice, sitting at the end of Week 13's content — same pattern as Weeks 4-12's practices. */
export function PracticalExam13Section() {
  return (
    <section id="practica-calificada" className="scroll-mt-24 space-y-lg">
      <div className="rounded-xl border border-primary-container/50 bg-gradient-to-br from-secondary-container/40 to-surface-container-lowest p-lg text-center space-y-sm">
        <div className="flex justify-center">
          <Badge variant="tertiary">
            <ClipboardCheck size={14} /> Práctica calificada
          </Badge>
        </div>
        <h2 className="text-headline-lg font-headline-lg text-on-surface">Práctica Calificada 13 — Estándares de preservación digital</h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl mx-auto">
          Aplica PREMIS, METS, Dublin Core y BagIt, y distingue identificación, validación y normalización de
          formatos, para analizar situaciones institucionales con criterio profesional.
        </p>
        <p className="text-caption font-caption text-on-surface-variant">
          {TOTAL_QUESTIONS_13} preguntas · {MAX_SCORE_13} puntos (equivalente a {MAX_SCORE_13 * 5}/100)
        </p>
        <Button onClick={() => document.getElementById("simulador-pc13")?.scrollIntoView({ behavior: "smooth", block: "start" })}>
          Iniciar práctica
        </Button>
      </div>

      <div id="simulador-pc13" className="scroll-mt-24">
        <Practice13Quiz />
      </div>
    </section>
  );
}
