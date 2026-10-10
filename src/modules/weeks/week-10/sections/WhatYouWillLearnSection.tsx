import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { getIcon } from "../../../../utils/getIcon";
import { learningCapabilities } from "../week10.data";

export function WhatYouWillLearnSection() {
  return (
    <section id="que-aprenderas" className="scroll-mt-24 space-y-md">
      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg">
        <h2 className="text-headline-md font-headline-md text-on-surface mb-md">¿Qué aprenderás?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-sm">
          {learningCapabilities.map((cap, index) => {
            const Icon = getIcon(cap.icon);
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, delay: index * 0.07 }}
                className="rounded-lg border border-outline-variant bg-surface-container-low p-md text-center space-y-xs"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                  <Icon size={18} />
                </div>
                <p className="text-body-md font-body-md font-semibold text-on-surface flex items-center justify-center gap-1">
                  <CheckCircle2 size={14} className="text-tertiary shrink-0" /> {cap.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
