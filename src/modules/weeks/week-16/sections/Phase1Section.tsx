import { motion } from "framer-motion";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/accordion";
import { getIcon } from "../../../../utils/getIcon";
import {
  ChipList,
  NumberedSteps,
  PhaseBanner,
  PrivacyNotice,
  QuestionGrid,
  ReflectionActivity,
  ReflectionBox,
  ReviewToggle,
} from "../../proyecto-directiva/components";
import {
  inventoryColumns,
  phase1Evidence,
  phase1Products,
  phase1Purpose,
  phase1Questions,
  phase1Steps,
  suggestedInstitutions,
  week16Phases,
} from "../week16.data";

export function Phase1Section() {
  const phase = week16Phases[0];
  return (
    <section id="fase-1" className="scroll-mt-24 space-y-lg">
      <PhaseBanner phase={phase} purpose={phase1Purpose} week={16} />

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-lg">
        <div className="space-y-sm">
          <p className="text-headline-md font-headline-md text-on-surface">Instrucciones para el equipo</p>
          <NumberedSteps steps={phase1Steps} />
        </div>
        <div className="space-y-sm">
          <p className="text-headline-md font-headline-md text-on-surface">Instituciones sugeridas</p>
          <p className="text-body-md font-body-md text-on-surface-variant">
            Son solo ejemplos. El equipo puede proponer otra institución o un escenario simulado, previa aprobación del
            docente.
          </p>
          <div className="grid grid-cols-1 gap-xs">
            {suggestedInstitutions.map((inst) => {
              const Icon = getIcon(inst.icon);
              return (
                <div key={inst.id} className="flex items-center gap-sm rounded-lg border border-outline-variant bg-surface-container-lowest px-md py-xs">
                  <Icon size={18} className="text-primary-container shrink-0" />
                  <span className="text-body-md font-body-md text-on-surface">{inst.label}</span>
                </div>
              );
            })}
            <div className="flex items-center gap-sm rounded-lg border-2 border-dashed border-primary-container/50 px-md py-xs">
              <span className="text-primary-container font-bold">+</span>
              <span className="text-body-md font-body-md text-on-surface-variant">Otra institución propuesta por el equipo</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-sm">
        <SectionHeading eyebrow="Preguntas orientadoras" title="Lo que tu investigación debe poder responder" />
        <QuestionGrid questions={phase1Questions} />
      </div>

      <div className="space-y-sm">
        <SectionHeading eyebrow="Producto de la Fase 1" title="¿Qué debe entregar el equipo?" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
          {phase1Products.map((p, index) => {
            const Icon = getIcon(p.icon);
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="rounded-xl border border-outline-variant bg-surface-container-lowest p-md flex items-start gap-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-label-md font-label-md font-bold text-on-surface">{p.label}</p>
                  <p className="text-caption font-caption text-on-surface-variant mt-0.5">{p.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <Accordion type="single" collapsible className="rounded-xl border border-outline-variant bg-surface-container-lowest px-md">
          <AccordionItem value="inventario">
            <AccordionTrigger>Orientación: columnas posibles del inventario preliminar</AccordionTrigger>
            <AccordionContent className="space-y-sm">
              <p>
                Esta estructura solo orienta qué información reunir. Las filas deben construirse con los documentos reales
                (o simulados y aprobados) de su institución; pueden añadir o quitar columnas si lo justifican.
              </p>
              <div className="overflow-x-auto rounded-lg border border-outline-variant">
                <table className="w-full min-w-[44rem] border-collapse text-left">
                  <thead>
                    <tr className="bg-surface-container-low">
                      {inventoryColumns.map((c) => (
                        <th key={c} className="p-sm text-caption font-caption font-semibold text-primary-container">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[0, 1].map((r) => (
                      <tr key={r} className="border-t border-outline-variant">
                        {inventoryColumns.map((c) => (
                          <td key={c} className="p-sm text-caption font-caption text-outline italic">
                            Por investigar
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="flujo">
            <AccordionTrigger>Orientación: ¿cómo describir el flujo actual?</AccordionTrigger>
            <AccordionContent>
              Describan el recorrido real de un tipo documental: cómo se produce o recibe, en qué sistema o carpeta se
              registra, quién lo modifica, dónde se almacena, cómo se respalda y cómo se consulta. Señalen los puntos en los
              que no existe control o registro: allí suelen aparecer los riesgos de la Fase 2.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="space-y-sm">
        <p className="text-headline-md font-headline-md text-on-surface">Evidencias sugeridas</p>
        <ChipList items={phase1Evidence} tone="accent" />
        <PrivacyNotice />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
        <ReflectionBox
          id="s16-institucion"
          label="Institución o escenario seleccionado"
          helper="Notas de trabajo del equipo (se guardan en este navegador)."
          placeholder="Nombre de la institución, naturaleza, motivo de la elección y estado de la aprobación docente…"
          rows={4}
        />
        <ReflectionBox
          id="s16-problema"
          label="Problema delimitado (borrador)"
          helper="Redáctenlo en pocas líneas: qué ocurre, con qué documentos y por qué justificaría una directiva."
          placeholder="En la institución…"
          rows={4}
        />
      </div>

      <ReflectionActivity
        id="s16-reflexion-10-anios"
        title="Pensar a diez años"
        prompt="¿Qué documento digital de la institución seleccionada consideras que podría perderse o dejar de ser accesible dentro de diez años? ¿Por qué?"
        placeholder="Documento, formato, dónde está hoy y qué podría hacer que se pierda o deje de leerse…"
      />

      <Callout variant="info" title="Antes de pasar a la Fase 2">
        Verifiquen que cada afirmación de la ficha y del inventario tenga una evidencia asociada y anótenla en la bitácora.
      </Callout>

      <ReviewToggle id={phase.id} />
    </section>
  );
}
