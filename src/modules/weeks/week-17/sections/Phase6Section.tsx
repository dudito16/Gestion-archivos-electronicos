import { Shuffle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Callout } from "../../../../components/common/Callout";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { NumberedSteps, PhaseBanner, QuestionGrid, ReflectionBox, ReviewToggle } from "../../proyecto-directiva/components";
import { defensePoints, defenseQuestions, peerQuestionStems, phase6Purpose, week17Phases } from "../week17.data";

function RandomQuestion() {
  const [index, setIndex] = useState<number | null>(null);
  const [asked, setAsked] = useState<number[]>([]);

  function draw() {
    const pool = defenseQuestions.map((_, i) => i).filter((i) => !asked.includes(i));
    const source = pool.length ? pool : defenseQuestions.map((_, i) => i);
    const next = source[Math.floor(Math.random() * source.length)];
    setIndex(next);
    setAsked((prev) => (pool.length ? [...prev, next] : [next]));
  }

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm text-center">
      <p className="text-label-md font-label-md font-semibold uppercase tracking-wider text-primary-container">Pregunta aleatoria del comité</p>
      <div className="min-h-[4.5rem] flex items-center justify-center">
        {index === null ? (
          <p className="text-body-lg font-body-lg text-on-surface-variant italic">Pulsa el botón para practicar con una pregunta.</p>
        ) : (
          <motion.p key={index} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="text-headline-md font-headline-md text-on-surface">
            {defenseQuestions[index]}
          </motion.p>
        )}
      </div>
      <Button onClick={draw}>
        <Shuffle size={16} /> {index === null ? "Sortear pregunta" : "Otra pregunta"}
      </Button>
      <p className="text-caption font-caption text-on-surface-variant">
        Preguntas practicadas: {asked.length}/{defenseQuestions.length}. No existe una respuesta única: el comité valora la
        argumentación y la evidencia.
      </p>
    </div>
  );
}

export function Phase6Section() {
  const phase = week17Phases[2];
  return (
    <section id="fase-6" className="scroll-mt-24 space-y-lg">
      <PhaseBanner phase={phase} purpose={phase6Purpose} week={17} />

      <SectionHeading
        eyebrow="Validación y sustentación"
        title="Defensa de la propuesta ante el comité evaluador"
        description="El grupo presentará su directiva y deberá demostrar que las disposiciones propuestas responden a los problemas identificados."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
        <div className="space-y-sm">
          <p className="text-headline-md font-headline-md text-on-surface">En la sustentación, el grupo deberá</p>
          <NumberedSteps steps={defensePoints} />
        </div>
        <div className="space-y-sm">
          <p className="text-headline-md font-headline-md text-on-surface">Practicar la defensa</p>
          <RandomQuestion />
          <Callout variant="warning" title="Dominio individual">
            Cualquier integrante puede ser consultado sobre cualquier parte del trabajo. Repartirse los capítulos no exime de
            comprender la propuesta completa.
          </Callout>
        </div>
      </div>

      <div className="space-y-sm">
        <p className="text-headline-md font-headline-md text-on-surface">Banco de preguntas para la defensa</p>
        <QuestionGrid questions={defenseQuestions} />
      </div>

      <div id="comite" className="scroll-mt-24 rounded-xl border-2 border-dashed border-primary-container/50 bg-secondary-container/20 p-lg space-y-sm">
        <div className="flex items-center gap-xs flex-wrap">
          <Badge variant="tertiary">Actividad de participación</Badge>
          <p className="text-headline-md font-headline-md text-on-surface">El comité puede cuestionar la propuesta</p>
        </div>
        <p className="text-body-md font-body-md text-on-surface-variant max-w-3xl">
          Durante las sustentaciones de otros grupos, tu equipo también formará parte del comité. Preparen preguntas que
          pongan a prueba la evidencia, la aplicabilidad y la coherencia de cada propuesta. Pueden partir de estos inicios:
        </p>
        <div className="flex flex-wrap gap-xs">
          {peerQuestionStems.map((s) => (
            <span key={s} className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-caption font-caption text-on-surface">
              {s}
            </span>
          ))}
        </div>
        <ReflectionBox id="s17-preguntas-comite" label="Nuestras preguntas para otros grupos" placeholder={"Grupo / institución: …\nPregunta: …"} rows={5} />
        <ReflectionBox id="s17-preguntas-recibidas" label="Preguntas que recibimos y cómo mejoraremos la propuesta" rows={4} />
      </div>

      <ReviewToggle id={phase.id} />
    </section>
  );
}
