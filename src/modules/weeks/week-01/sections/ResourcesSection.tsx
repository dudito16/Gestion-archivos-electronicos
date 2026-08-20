import { BookMarked } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "../../../../components/ui/badge";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { resources } from "../week01.data";

export function ResourcesSection() {
  return (
    <section id="recursos" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Para profundizar" title="Recursos y marco normativo" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="rounded-xl border border-outline-variant bg-surface-container-lowest p-md hover:border-primary-container hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-xs">
              <BookMarked className="text-primary-container" size={20} />
              <Badge variant="outline">{resource.badge}</Badge>
            </div>
            <h4 className="text-body-lg font-body-lg font-semibold text-on-surface mb-1">{resource.title}</h4>
            <p className="text-body-md font-body-md text-on-surface-variant">{resource.summary}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
