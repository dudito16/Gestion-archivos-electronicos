import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Callout } from "../../../../components/common/Callout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { cn } from "../../../../utils/cn";
import { getIcon } from "../../../../utils/getIcon";
import { NumberedSteps, PhaseBanner, ReflectionBox, ResearchGuide, ReviewToggle } from "../../proyecto-directiva/components";
import { useProjectStore } from "../../proyecto-directiva/projectStore";
import {
  complementaryStandards,
  oaisChallenge,
  oaisNodes,
  oaisPackages,
  phase3Purpose,
  premisChallenge,
  premisEntities,
  premisEventExamples,
  premisSkeleton,
  referentePreservacion,
  referenteRepositorios,
  week16Phases,
  type OaisNode,
} from "../week16.data";

const subsections = [
  { id: "referente-preservacion", label: "3.1 Preservación digital" },
  { id: "referente-oais", label: "3.2 Modelo OAIS" },
  { id: "referente-premis", label: "3.3 PREMIS" },
  { id: "referente-repositorios", label: "3.4 Repositorios confiables" },
  { id: "referente-estandares", label: "3.5 Estándares complementarios" },
];

function SubHeading({ id, number, title, description }: { id: string; number: string; title: string; description?: string }) {
  return (
    <div id={id} className="scroll-mt-24 space-y-xs border-t border-outline-variant pt-lg">
      <span className="text-label-md font-label-md font-semibold uppercase tracking-wider text-primary-container">Referente {number}</span>
      <h3 className="text-headline-md font-headline-md text-on-surface">{title}</h3>
      {description && <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl">{description}</p>}
    </div>
  );
}

function OaisNodeButton({ node, active, onSelect }: { node: OaisNode; active: boolean; onSelect: () => void }) {
  const Icon = getIcon(node.icon);
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={cn(
        "flex items-center gap-xs rounded-lg border-2 px-sm py-xs text-left text-label-md font-label-md font-semibold transition-colors w-full",
        active
          ? "border-primary-container bg-secondary-container text-on-secondary-container"
          : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary-container",
      )}
    >
      <Icon size={16} className="shrink-0" />
      <span>{node.label}</span>
    </button>
  );
}

/** Didactic, clickable OAIS map: SGD → preparación y transferencia → repositorio → acceso. */
function OaisExplorer() {
  const [activeId, setActiveId] = useState("ingesta");
  const active = oaisNodes.find((n) => n.id === activeId)!;
  const byGroup = (g: OaisNode["group"]) => oaisNodes.filter((n) => n.group === g);

  const node = (n: OaisNode) => <OaisNodeButton key={n.id} node={n} active={n.id === activeId} onSelect={() => setActiveId(n.id)} />;
  const Down = () => (
    <span className="flex justify-center text-primary-container">
      <ArrowDown size={20} />
    </span>
  );

  return (
    <div className="space-y-sm">
      <div className="flex flex-col gap-xs max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-xs">
          {byGroup("sgd").map(node)}
          <span className="flex justify-center text-primary-container">
            <ArrowDown className="md:hidden" size={20} />
            <ArrowRight className="hidden md:block" size={20} />
          </span>
          {byGroup("transferencia").map(node)}
        </div>
        <Down />
        <div className="rounded-xl border-2 border-dashed border-primary-container/60 bg-surface-container-low p-sm space-y-xs">
          <p className="text-caption font-caption font-bold uppercase tracking-wider text-primary-container">Repositorio de preservación (entidades funcionales OAIS)</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-xs">{byGroup("repositorio").map(node)}</div>
        </div>
        <Down />
        <div className="md:w-1/2 md:mx-auto w-full">{byGroup("acceso").map(node)}</div>
      </div>

      <motion.div key={active.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl border border-outline-variant bg-surface-container-lowest p-md space-y-xs">
        <p className="text-label-md font-label-md font-bold text-primary-container">{active.label}</p>
        <p className="text-body-md font-body-md text-on-surface">{active.explanation}</p>
        <p className="text-body-md font-body-md text-on-surface-variant">
          <strong className="text-on-surface">Para su institución:</strong> {active.question}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-xs">
        {oaisPackages.map((p) => (
          <div key={p.id} className="rounded-lg bg-secondary-container/30 p-md">
            <p className="text-headline-md font-headline-md text-primary-container">{p.label}</p>
            <p className="text-label-md font-label-md font-semibold text-on-surface">{p.name}</p>
            <p className="text-caption font-caption text-on-surface-variant mt-0.5">{p.text}</p>
          </div>
        ))}
      </div>

      <p className="text-caption font-caption text-on-surface-variant italic">
        Diagrama didáctico: representa funciones, no productos de software ni una arquitectura obligatoria. Cada equipo
        decidirá cómo se materializan estas funciones en su institución.
      </p>
    </div>
  );
}

function StandardsPicker() {
  const { isChecked, toggleChecked } = useProjectStore();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
      {complementaryStandards.map((s) => {
        const id = `s16-std-${s.id}`;
        const selected = isChecked(id);
        return (
          <div key={s.id} className={cn("rounded-xl border p-md space-y-xs transition-colors", selected ? "border-primary-container bg-secondary-container/20" : "border-outline-variant bg-surface-container-lowest")}>
            <div className="flex items-center justify-between gap-sm">
              <p className="text-headline-md font-headline-md text-on-surface">{s.label}</p>
              <button
                type="button"
                onClick={() => toggleChecked(id)}
                aria-pressed={selected}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-caption font-caption font-semibold transition-colors",
                  selected ? "border-primary-container bg-primary-container text-on-primary" : "border-outline-variant text-on-surface-variant hover:border-primary-container",
                )}
              >
                {selected && <Check size={12} />} {selected ? "Útil para nuestro caso" : "¿Es útil para nuestro caso?"}
              </button>
            </div>
            <p className="text-body-md font-body-md text-on-surface-variant">{s.text}</p>
            <p className="text-caption font-caption text-on-surface">
              <strong>Pregunta:</strong> {s.ask}
            </p>
            {selected && <ReflectionBox id={`${id}-justificacion`} label="¿Por qué sería útil para su institución?" rows={2} />}
          </div>
        );
      })}
    </div>
  );
}

export function Phase3Section() {
  const phase = week16Phases[2];
  return (
    <section id="fase-3" className="scroll-mt-24 space-y-lg">
      <PhaseBanner phase={phase} purpose={phase3Purpose} week={16} />

      <nav aria-label="Referentes técnicos" className="flex flex-wrap gap-xs">
        {subsections.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-caption font-caption font-semibold text-on-surface hover:border-primary-container hover:text-primary-container transition-colors">
            {s.label}
          </a>
        ))}
      </nav>

      <Callout variant="info" title="Investigar para aplicar, no para copiar">
        Cada referente tiene cuatro partes: qué investigar, preguntas orientadoras, qué aplicar a su institución y qué
        producto generar. Las definiciones se buscan en las fuentes; esta página indica cómo usarlas.
      </Callout>

      {/* 3.1 */}
      <SubHeading id="referente-preservacion" number="3.1" title="Preservación digital" description="Retomen lo trabajado en la Semana 11 y llévenlo al caso de su institución." />
      <ResearchGuide guide={referentePreservacion} />
      <ReflectionBox id="s16-ref-preservacion" label="Borrador: ¿cómo se aplicaría la preservación digital en nuestra institución?" rows={4} />

      {/* 3.2 */}
      <SubHeading
        id="referente-oais"
        number="3.2"
        title="Modelo OAIS – ISO 14721"
        description="Investiguen las funciones del modelo (ingesta, almacenamiento archivístico, gestión de datos, administración, planificación de preservación y acceso) y los paquetes de información SIP, AIP y DIP. Selecciona cada elemento del diagrama."
      />
      <OaisExplorer />
      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-sm">
        <p className="text-label-md font-label-md font-bold text-primary-container">Reto de aplicación: el grupo deberá explicar</p>
        <NumberedSteps steps={oaisChallenge} />
        <ReflectionBox id="s16-oais-flujo" label="Descripción del diagrama preliminar del flujo institucional de preservación" helper="Producto: diagrama preliminar. No se exige la versión definitiva: se perfeccionará en la Semana 17 (Anexo 1)." rows={4} />
      </div>

      {/* 3.3 */}
      <SubHeading id="referente-premis" number="3.3" title="PREMIS" description="Investiguen PREMIS y su utilidad para documentar las acciones de preservación (Semana 13). Selecciona cada entidad." />
      <Tabs defaultValue={premisEntities[0].id} className="space-y-sm">
        <TabsList className="flex flex-wrap h-auto">
          {premisEntities.map((e) => (
            <TabsTrigger key={e.id} value={e.id}>
              {e.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {premisEntities.map((e) => {
          const Icon = getIcon(e.icon);
          return (
            <TabsContent key={e.id} value={e.id}>
              <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-md flex items-start gap-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                  <Icon size={22} />
                </div>
                <div className="space-y-1">
                  <p className="text-label-md font-label-md font-bold text-on-surface">{e.label}</p>
                  <p className="text-body-md font-body-md text-on-surface-variant">{e.text}</p>
                  <p className="text-body-md font-body-md text-on-surface">
                    <strong>Para su institución:</strong> {e.ask}
                  </p>
                </div>
              </div>
            </TabsContent>
          );
        })}
      </Tabs>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sm">
        {premisEventExamples.map((ev) => (
          <div key={ev.id} className="rounded-lg border border-outline-variant bg-surface-container-low p-md">
            <p className="text-caption font-caption font-semibold uppercase tracking-wider text-primary-container">Evento</p>
            <p className="text-label-md font-label-md font-bold text-on-surface">{ev.label}</p>
            <p className="text-caption font-caption text-on-surface-variant mt-0.5">{ev.text}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-md space-y-xs">
          <p className="text-label-md font-label-md font-bold text-on-surface">Esqueleto orientativo de un registro de evento</p>
          <p className="text-caption font-caption text-on-surface-variant">Los valores marcados con «¿?» deben completarse con el caso del equipo.</p>
          <dl className="divide-y divide-outline-variant rounded-lg border border-outline-variant">
            {premisSkeleton.map((row) => (
              <div key={row.field} className="grid grid-cols-2 gap-sm px-sm py-xs">
                <dt className="text-caption font-caption font-semibold text-on-surface">{row.field}</dt>
                <dd className={cn("text-caption font-caption", row.value === "¿?" ? "text-outline italic" : "text-on-surface")}>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="rounded-xl border-2 border-dashed border-primary-container/50 bg-secondary-container/20 p-md space-y-sm">
          <p className="text-label-md font-label-md font-bold text-primary-container">Reto PREMIS</p>
          <p className="text-body-md font-body-md text-on-surface">{premisChallenge}</p>
          <ReflectionBox id="s16-premis-reto" label="Ejemplo preliminar de registro de evento y su explicación" helper="No se exige un registro completo ni complejo: basta un ejemplo coherente y explicado." rows={5} />
        </div>
      </div>

      {/* 3.4 */}
      <SubHeading id="referente-repositorios" number="3.4" title="Repositorios digitales confiables" description="Retomen la Semana 14 y relacionen su investigación con ISO 16363:2025." />
      <ResearchGuide guide={referenteRepositorios} />
      <Callout variant="warning" title="Ninguna propuesta académica obtiene una certificación">
        Los criterios de ISO 16363:2025 permiten evaluar aspectos organizacionales, tecnológicos y de gestión de un
        repositorio. Úsenlos para orientar la propuesta, sin afirmar que la institución o la directiva obtendría una
        certificación. Verifiquen en las fuentes oficiales la edición vigente antes de citarla.
      </Callout>

      {/* 3.5 */}
      <SubHeading
        id="referente-estandares"
        number="3.5"
        title="Herramientas y estándares complementarios"
        description="No es obligatorio incorporar todos. Indiquen cuáles serían útiles para su institución y justifiquen por qué (Semanas 13 y 15)."
      />
      <StandardsPicker />

      <ReviewToggle id={phase.id} />
    </section>
  );
}
