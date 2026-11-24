import { motion } from "framer-motion";
import { Callout } from "../../../../components/common/Callout";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { DeliverablesChecklist } from "../../proyecto-directiva/components";
import { finalDocumentStructure, rubric, RUBRIC_TOTAL, week17Deliverables } from "../week17.data";

/** Panel de organización del documento final (12 partes). */
export function FinalDocumentSection() {
  return (
    <section id="documento-final" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Documento final"
        title="¿Cómo se organiza el documento que entregará el equipo?"
        description="El documento reúne todo el proyecto: la investigación de la Semana 16 y la propuesta de la Semana 17."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-sm">
        {finalDocumentStructure.map((part, index) => {
          const isChapter = part.label.startsWith("Capítulo");
          return (
            <motion.div
              key={part.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.3, delay: (index % 6) * 0.04 }}
              className={
                isChapter
                  ? "rounded-xl border-2 border-primary-container/60 bg-secondary-container/20 p-md flex items-start gap-sm"
                  : "rounded-xl border border-outline-variant bg-surface-container-lowest p-md flex items-start gap-sm"
              }
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-container text-on-primary text-caption font-bold">{index + 1}</span>
              <div>
                <p className="text-label-md font-label-md font-bold text-on-surface">{part.label}</p>
                <p className="text-caption font-caption text-on-surface-variant mt-0.5">{part.detail}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/** Rúbrica de 20 puntos — same visual language as the Proyecto Integrador's rubric. */
export function RubricSection() {
  const total = rubric.reduce((sum, c) => sum + c.points, 0);
  return (
    <section id="rubrica" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Rúbrica de evaluación"
        title="¿Cómo se evaluará el proyecto?"
        description={`La calificación máxima es de ${RUBRIC_TOTAL} puntos. Se valora la investigación, el diagnóstico, la aplicación técnica, la directiva, los anexos y el dominio individual en la defensa.`}
      />
      <div className="space-y-xs">
        {rubric.map((c, index) => (
          <div key={c.id} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md flex items-start gap-sm">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-container text-on-primary font-bold">{index + 1}</span>
            <div className="flex-1 md:grid md:grid-cols-[1fr_2fr] md:gap-sm">
              <p className="text-body-md font-body-md font-semibold text-on-surface">{c.label}</p>
              <p className="text-caption font-caption text-on-surface-variant mt-0.5 md:mt-0">{c.description}</p>
            </div>
            <span className="rounded-full bg-secondary-container text-on-secondary-container px-3 py-1 text-caption font-caption font-bold shrink-0">{c.points} pts</span>
          </div>
        ))}
        <div className="flex items-center justify-between rounded-lg bg-primary-container text-on-primary px-md py-sm font-label-md font-bold">
          <span>TOTAL</span>
          <span>{total} puntos</span>
        </div>
      </div>
      <Callout variant="info" title="La extensión no determina la nota">
        Se califica la calidad del sustento y la coherencia entre diagnóstico, directiva y anexos. No se exige certificación
        ISO ni el desarrollo de un software de repositorio.
      </Callout>
    </section>
  );
}

/** Checklist de entrega final de la Semana 17. */
export function DeliverySection() {
  return (
    <section id="entrega" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Entrega final"
        title="Checklist de la entrega final"
        description="Directiva, anexos, evidencias, bitácora y sustentación. Marca cada elemento cuando el equipo lo haya revisado."
      />
      <DeliverablesChecklist items={week17Deliverables} title="Elementos de la entrega final" />
    </section>
  );
}
