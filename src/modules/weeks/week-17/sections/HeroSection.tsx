import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Callout } from "../../../../components/common/Callout";
import { FlowChain } from "../../../../components/common/FlowChain";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Button } from "../../../../components/ui/button";
import { PhaseProgressPanel } from "../../proyecto-directiva/components";
import { transitionFrom, transitionTo, transitionWarning, week16Recap, week17Phases } from "../week17.data";

const sixPhases = [
  { id: "f1", label: "Fase 1", description: "Reconocimiento institucional" },
  { id: "f2", label: "Fase 2", description: "Diagnóstico y riesgos" },
  { id: "f3", label: "Fase 3", description: "Referentes técnicos" },
  { id: "f4", label: "Fase 4", description: "Diseño de la directiva" },
  { id: "f5", label: "Fase 5", description: "Anexos y demostración" },
  { id: "f6", label: "Fase 6", description: "Comité y defensa" },
];

export function Week17HeroSection() {
  return (
    <section id="introduccion" className="scroll-mt-24 space-y-lg">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-container to-on-primary-fixed-variant p-lg md:p-xl min-h-[22rem] flex flex-col justify-center gap-sm">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-block self-start px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-caption font-caption rounded-full font-medium"
        >
          Semana 17 · Unidad III · Proyecto integrador (parte 2 de 2)
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-display-lg font-display-lg text-white drop-shadow-sm max-w-4xl"
        >
          Elaboración, aplicación y sustentación de la directiva institucional de preservación digital
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-body-lg font-body-lg text-white/90 max-w-[40rem]"
        >
          Continuación directa del trabajo iniciado en la Semana 16.
        </motion.p>
      </div>

      <SectionHeading eyebrow="De la investigación a la propuesta" title="Continuamos el mismo proyecto" />

      <div className="rounded-xl border border-outline-variant bg-gradient-to-br from-surface-container-lowest to-surface-container-low p-lg space-y-sm">
        <p className="text-label-md font-label-md font-semibold uppercase tracking-wider text-primary-container">Semana 16</p>
        <p className="text-body-lg font-body-lg text-on-surface">{transitionFrom}</p>
        <div className="flex flex-wrap gap-xs">
          {week16Recap.map((item) => (
            <span key={item} className="rounded-full border border-outline-variant bg-surface-container px-3 py-1 text-caption font-caption text-on-surface-variant">
              {item}
            </span>
          ))}
        </div>
        <div className="flex justify-center text-outline py-1">
          <ArrowDown size={22} />
        </div>
        <p className="text-label-md font-label-md font-semibold uppercase tracking-wider text-primary-container">Semana 17</p>
        <p className="text-body-lg font-body-lg text-on-surface">{transitionTo}</p>
        <Button asChild variant="secondary" size="sm">
          <Link to="/semana/16/productos">Revisar los productos de la Semana 16</Link>
        </Button>
      </div>

      <Callout variant="warning" title="No copiar una directiva existente">
        {transitionWarning}
      </Callout>

      <div className="space-y-sm">
        <p className="text-label-md font-label-md font-semibold text-on-surface">Ruta completa del proyecto</p>
        <FlowChain steps={sixPhases} />
      </div>

      <PhaseProgressPanel phases={week17Phases} week={17} />
    </section>
  );
}
