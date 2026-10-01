import { Check, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { cn } from "../../../../utils/cn";
import { FeedbackNote } from "../activities/components/FeedbackNote";
import { ActivityShell } from "../activities/components/ActivityShell";
import { taller9Cases } from "./taller.data";
import { useWeek7Taller } from "./tallerProgress";

const ID = "taller-9" as const;

export function Taller9InstitutionalCases() {
  const { markCompleted, isCompleted } = useWeek7Taller();
  const [answers, setAnswers] = useState<Record<string, "aceptar" | "investigar">>({});
  const [checked, setChecked] = useState(isCompleted(ID));

  function choose(caseId: string, value: "aceptar" | "investigar") {
    if (checked) return;
    setAnswers((prev) => ({ ...prev, [caseId]: value }));
  }

  const allAnswered = taller9Cases.every((c) => answers[c.id]);
  const correctCount = taller9Cases.filter((c) => answers[c.id] === c.correct).length;

  function handleCheck() {
    setChecked(true);
    markCompleted(ID);
  }

  return (
    <ActivityShell
      id={ID}
      number={9}
      title="Caso institucional"
      objective="Decidir, ante distintas solicitudes de acceso, si corresponde aceptar o investigar antes de proceder."
      instructions={<>Para cada caso, decide si aceptarías la solicitud tal como está o investigarías antes.</>}
      done={isCompleted(ID)}
    >
      <div className="space-y-sm">
        {taller9Cases.map((c) => {
          const answer = answers[c.id];
          const isCorrect = checked && answer === c.correct;
          return (
            <div key={c.id} className="rounded-lg border border-outline-variant bg-surface-container-low p-md space-y-sm">
              <p className="text-label-md font-label-md font-bold text-on-surface">{c.label}</p>
              <p className="text-body-md font-body-md text-on-surface">{c.text}</p>
              <div className="flex gap-sm">
                <button
                  type="button"
                  disabled={checked}
                  onClick={() => choose(c.id, "aceptar")}
                  className={cn(
                    "rounded-lg border px-md py-sm text-label-md font-label-md font-semibold transition-colors",
                    answer === "aceptar" ? "border-primary-container bg-secondary-container text-on-secondary-container" : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                  )}
                >
                  Aceptar la solicitud
                </button>
                <button
                  type="button"
                  disabled={checked}
                  onClick={() => choose(c.id, "investigar")}
                  className={cn(
                    "rounded-lg border px-md py-sm text-label-md font-label-md font-semibold transition-colors",
                    answer === "investigar" ? "border-primary-container bg-secondary-container text-on-secondary-container" : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
                  )}
                >
                  Investigar antes de proceder
                </button>
                {checked && (isCorrect ? <Check size={18} className="text-tertiary self-center" /> : <X size={18} className="text-error self-center" />)}
              </div>
            </div>
          );
        })}
      </div>

      {!checked ? (
        <Button disabled={!allAnswered} onClick={handleCheck}>
          Comprobar decisiones
        </Button>
      ) : (
        <FeedbackNote kind={correctCount === taller9Cases.length ? "bien" : "revisar"}>
          Acertaste {correctCount} de {taller9Cases.length}. Una solicitud puntual, justificada y autorizada por quien
          corresponde puede aceptarse; una solicitud sin justificación clara o sin autorización, y un acceso fuera de
          horario sin explicación, deben investigarse antes de continuar.
        </FeedbackNote>
      )}
    </ActivityShell>
  );
}
