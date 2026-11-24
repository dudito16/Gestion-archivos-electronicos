import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { getIcon } from "../../../../utils/getIcon";
import { PhaseProgressPanel } from "../../proyecto-directiva/components";
import { PROJECT_TITLE } from "../../proyecto-directiva/project.data";
import { heroAttributes, heroChallenge, heroRole, week16Focus, week16Phases } from "../week16.data";

export function Week16HeroSection() {
  return (
    <section id="introduccion" className="scroll-mt-24 space-y-lg">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-container to-on-primary-fixed-variant p-lg md:p-xl min-h-[24rem] flex flex-col md:flex-row items-center gap-lg">
        <div className="relative z-10 flex-1 space-y-sm">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-caption font-caption rounded-full font-medium"
          >
            Semana 16 · Unidad III · Proyecto integrador (parte 1 de 2)
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-display-lg font-display-lg text-white drop-shadow-sm"
          >
            Investigación y diagnóstico para diseñar una directiva institucional de preservación digital
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg font-body-lg text-white/90 max-w-[40rem]"
          >
            Proyecto integrador: {PROJECT_TITLE.toLowerCase()}.
          </motion.p>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-xs">
          {heroAttributes.map((attr, index) => (
            <motion.div
              key={attr}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.35 + index * 0.1 }}
              className="rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-white text-label-md font-label-md font-semibold text-center shadow-md"
            >
              {attr}
            </motion.div>
          ))}
        </div>
      </div>

      <SectionHeading eyebrow="El reto" title="¿Qué necesita una institución para que sus documentos digitales sigan siendo confiables?" description={heroChallenge} />

      <Callout variant="info" title="Tu rol en este proyecto">
        {heroRole}
      </Callout>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {week16Focus.map((item, index) => {
          const Icon = getIcon(item.icon);
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-xl border border-outline-variant bg-surface-container-lowest p-md shadow-sm space-y-xs"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                <Icon size={22} />
              </div>
              <p className="text-label-md font-label-md font-bold text-on-surface">{item.label}</p>
              <p className="text-body-md font-body-md text-on-surface-variant">{item.text}</p>
            </motion.div>
          );
        })}
      </div>

      <Callout variant="warning" title="Esta semana todavía no se redacta la directiva">
        El propósito de la Semana 16 es investigar, diagnosticar y construir el sustento de la propuesta. La directiva se
        elaborará en la Semana 17 a partir de estos resultados: una directiva sin diagnóstico no responde a ningún problema
        real.
      </Callout>

      <PhaseProgressPanel phases={week16Phases} week={16} />
    </section>
  );
}
