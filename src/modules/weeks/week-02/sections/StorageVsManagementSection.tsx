import { FileText, HardDrive } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { storageContainers, storageItems, managementElements } from "../week02.data";

export function StorageVsManagementSection() {
  return (
    <section id="almacenamiento-vs-gestion" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="El problema de fondo" title="Almacenamiento vs. gestión documental" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        <ScrollReveal direction="left">
          <div className="h-full rounded-xl border border-outline-variant bg-surface-container-lowest p-lg">
            <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-on-surface-variant mb-sm">
              Almacenamiento
            </p>
            <div className="flex flex-wrap gap-1 mb-sm">
              {storageItems.map((item, i) => (
                <span key={i} className="flex items-center gap-1 rounded-md bg-surface-container-low px-2 py-1 text-caption font-caption text-on-surface-variant">
                  <FileText size={13} /> {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-xs">
              {storageContainers.map((c) => (
                <span key={c} className="flex items-center gap-1 rounded-full border border-outline-variant px-3 py-1 text-label-md font-label-md text-on-surface">
                  <HardDrive size={14} /> {c}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="h-full rounded-xl border border-primary-container/50 bg-secondary-container/20 p-lg">
          <p className="text-label-md font-label-md font-bold uppercase tracking-wider text-primary-container mb-sm">
            Gestión documental
          </p>
          <div className="flex flex-wrap gap-xs">
            {managementElements.map((el, index) => (
              <motion.span
                key={el}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="rounded-full bg-secondary-container px-3 py-1.5 text-label-md font-label-md text-on-secondary-container font-medium"
              >
                {el}
                {index < managementElements.length - 1 && <span className="ml-1 text-on-secondary-container/60">+</span>}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      <ScrollReveal delay={0.2}>
        <p className="text-body-lg font-body-lg text-on-surface text-center max-w-2xl mx-auto">
          El valor de un SGD no está solamente en almacenar documentos, sino en gestionarlos dentro de un contexto y
          un proceso.
        </p>
      </ScrollReveal>
    </section>
  );
}
