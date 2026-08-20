import { FileQuestion, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { SingleChoiceCheck } from "../../../../components/common/SingleChoiceCheck";
import { missingContextQuestion } from "../week01.data";
import { useWeek01Progress } from "../week01Progress";

/** Activity 2 — "¿Qué falta?": a bare filename is not enough context to manage a document archivistically. */
export function MissingContextSection() {
  const { markComplete } = useWeek01Progress();

  return (
    <section id="que-falta" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Actividad 2" title="¿Qué falta?" />

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-lg">
        <div className="flex items-center justify-center gap-xs rounded-lg bg-surface-container-low py-md">
          <FileQuestion className="text-primary-container" size={22} />
          <code className="text-body-lg font-body-lg font-mono text-on-surface">{missingContextQuestion.filename}</code>
        </div>

        <SingleChoiceCheck
          prompt={missingContextQuestion.prompt}
          options={missingContextQuestion.options}
          correctId={missingContextQuestion.correctId}
          feedback={missingContextQuestion.feedback}
          onAnswer={() => markComplete("que-falta")}
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-xs pt-sm border-t border-outline-variant"
        >
          <code className="rounded-md bg-surface-container-low px-2 py-1 text-caption font-caption font-mono text-on-surface">
            Archivo
          </code>
          <Plus size={14} className="text-outline" />
          {missingContextQuestion.missingElements.map((el) => (
            <span
              key={el}
              className="rounded-full border border-outline-variant bg-secondary-container/30 px-2 py-1 text-caption font-caption text-on-surface-variant"
            >
              {el}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
