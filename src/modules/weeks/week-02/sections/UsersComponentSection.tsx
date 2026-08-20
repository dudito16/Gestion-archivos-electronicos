import { SectionHeading } from "../../../../components/common/SectionHeading";
import { FlowChain } from "../../../../components/common/FlowChain";
import { Callout } from "../../../../components/common/Callout";
import { ScrollReveal } from "../../../../components/common/ScrollReveal";
import { userActions, userChain } from "../week02.data";

export function UsersComponentSection() {
  return (
    <section id="usuarios" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Componente · Usuarios" title="Usuarios" />

      <ScrollReveal>
        <FlowChain steps={userChain} />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div>
          <p className="text-body-md font-body-md text-on-surface-variant mb-sm">
            No todos los usuarios realizan las mismas acciones. El SGD asocia a cada persona un rol institucional que
            determina qué puede hacer sobre un documento o expediente.
          </p>
          <div className="flex flex-wrap gap-xs">
            {userActions.map((action) => (
              <span key={action} className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1 text-label-md font-label-md text-on-surface">
                {action}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <Callout variant="info" title="¿Quién interviene y qué puede hacer?">
        La seguridad y el control de acceso —roles, permisos y perfiles en detalle— se desarrollan en semanas
        posteriores. Aquí solo introducimos la idea de que el usuario es parte estructural del SGD.
      </Callout>
    </section>
  );
}
