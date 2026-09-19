import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Callout } from "../../../../components/common/Callout";

export function HeroSection() {
  return (
    <section id="introduccion" className="scroll-mt-24 space-y-lg">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-tertiary-fixed-dim to-primary-container p-lg md:p-xl min-h-[22rem] flex flex-col justify-center gap-sm">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex w-fit items-center gap-xs px-3 py-1 bg-white/15 backdrop-blur-sm text-white text-caption font-caption rounded-full font-medium"
        >
          <Sparkles size={14} /> Cierre de Unidad I
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-display-lg font-display-lg text-white drop-shadow-sm"
        >
          Proyecto Integrador
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-headline-md font-headline-md text-white/95"
        >
          Del documento a la evidencia
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-body-lg font-body-lg text-white/90 max-w-[42rem]"
        >
          Diagnóstico y propuesta de mejora de la gestión de documentos electrónicos
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-body-md font-body-md text-white/85 max-w-[38rem] italic"
        >
          "¿Cómo podemos analizar un documento electrónico desde su generación hasta su firma, trazabilidad y
          control?"
        </motion.p>
      </div>

      <p className="text-body-lg font-body-lg text-on-surface max-w-3xl">
        Durante las Semanas 1 a 6 has estudiado los conceptos fundamentales de la gestión de documentos electrónicos.
        Ahora deberás integrar esos conocimientos para analizar una organización, reconstruir el recorrido de un
        documento y proponer mejoras sustentadas en evidencias.
      </p>

      <Callout variant="warning" title="Lo que buscamos">
        Este proyecto no busca demostrar cuánto contenido puedes copiar de Internet. Busca demostrar cuánto puedes
        observar, analizar, justificar y proponer.
      </Callout>
    </section>
  );
}
