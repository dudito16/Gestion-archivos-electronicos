import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { relationLeft, relationRight } from "../week01.data";

export function RelationSection() {
  return (
    <section id="relacion" className="scroll-mt-24 space-y-lg">
      <SectionHeading
        eyebrow="Continuidad del curso"
        title="De Gestión de Archivos Electrónicos I a esta unidad"
        description="Cada fundamento archivístico que ya dominas se proyecta directamente sobre un reto del entorno digital."
      />

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-sm md:gap-md items-stretch">
          <div className="space-y-sm">
            <h3 className="text-label-md font-label-md font-semibold uppercase tracking-wider text-on-surface-variant">
              Lo aprendido en GAE I
            </h3>
            {relationLeft.map((item, index) => (
              <RelationRow key={item.id} text={item.text} index={index} align="left" />
            ))}
          </div>

          <div className="hidden md:flex flex-col justify-around py-8">
            {relationLeft.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-center justify-center w-16 origin-left text-primary-container"
              >
                <span className="h-px flex-1 bg-current" />
                <ArrowRight size={16} className="shrink-0" />
              </motion.div>
            ))}
          </div>

          <div className="space-y-sm">
            <h3 className="text-label-md font-label-md font-semibold uppercase tracking-wider text-primary-container">
              Lo que aprenderás ahora
            </h3>
            {relationRight.map((item, index) => (
              <RelationRow key={item.id} text={item.text} index={index} align="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RelationRow({ text, index, align }: { text: string; index: number; align: "left" | "right" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? -16 : 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={
        align === "left"
          ? "rounded-lg border border-outline-variant bg-surface-container-low px-md py-sm text-body-md font-body-md text-on-surface-variant"
          : "rounded-lg border border-primary-container/40 bg-secondary-container/30 px-md py-sm text-body-md font-body-md text-on-surface"
      }
    >
      {text}
    </motion.div>
  );
}
