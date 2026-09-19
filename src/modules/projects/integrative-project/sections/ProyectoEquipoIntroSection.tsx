import { ClipboardList } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "../../../../components/ui/badge";
import { teamMission } from "../integrativeProject.data";

export function ProyectoEquipoIntroSection() {
  return (
    <section id="proyecto-equipo" className="scroll-mt-24 space-y-lg">
      <div className="flex items-center gap-xs">
        <Badge variant="tertiary">
          <ClipboardList size={14} /> Parte 2
        </Badge>
        <span className="text-caption font-caption text-on-surface-variant">Proyecto del equipo</span>
      </div>
      <h2 className="text-headline-lg font-headline-lg text-on-surface">📝 Proyecto del equipo</h2>
      <p className="text-body-lg font-body-lg text-on-surface">Diagnóstico y propuesta de mejora de la gestión de documentos electrónicos</p>
      <p className="text-body-md font-body-md text-on-surface-variant">Proyecto integrador — Semanas 1 a 6</p>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm">
        <p className="text-body-lg font-body-lg font-semibold text-on-surface">
          El equipo asumirá el rol de un pequeño equipo consultor de gestión documental.
        </p>
        <p className="text-label-md font-label-md font-semibold text-on-surface">Su misión será:</p>
        <ol className="space-y-1.5">
          {teamMission.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.04 }}
              className="flex items-start gap-xs text-body-md font-body-md text-on-surface-variant"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container text-caption font-caption font-bold">
                {index + 1}
              </span>
              {item}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
