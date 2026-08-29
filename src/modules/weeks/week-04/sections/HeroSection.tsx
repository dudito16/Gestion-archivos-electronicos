import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { getIcon } from "../../../../utils/getIcon";
import { heroChain } from "../week04.data";

export function Week04HeroSection() {
  return (
    <section
      id="introduccion"
      className="scroll-mt-24 relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-container to-on-primary-fixed-variant p-lg md:p-xl min-h-[26rem] flex flex-col md:flex-row items-center gap-lg"
    >
      <div className="relative z-10 flex-1 space-y-sm">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-caption font-caption rounded-full font-medium"
        >
          Semana 4
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-display-lg font-display-lg text-white drop-shadow-sm"
        >
          Metadatos en un Sistema de Gestión Documental
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-body-lg font-body-lg text-white/90 max-w-[38rem]"
        >
          ¿Qué información necesitamos para identificar, contextualizar y gestionar correctamente un documento
          electrónico?
        </motion.p>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-1">
        {heroChain.map((step, index) => {
          const Icon = getIcon(step.icon);
          return (
            <div key={step.id} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.12 }}
                className="flex items-center gap-xs rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-white shadow-md"
              >
                <Icon size={18} />
                <span className="text-label-md font-label-md font-semibold">{step.label}</span>
              </motion.div>
              {index < heroChain.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.12 }}
                  className="text-white/60 py-0.5"
                >
                  <ArrowDown size={16} />
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
