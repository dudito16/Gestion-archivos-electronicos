import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { FlowChain } from "../../../../components/common/FlowChain";
import { authDefinitions, authExample, authFlow } from "../week07.data";

export function AuthenticationSection() {
  return (
    <section id="autenticacion" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Autenticación y control de acceso" title="Tres preguntas distintas ante un mismo sistema" />

      <FlowChain steps={authFlow} />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-sm">
        {Object.values(authDefinitions).map((def) => (
          <div key={def.label} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md space-y-1">
            <p className="text-label-md font-label-md font-bold text-primary-container">{def.label}</p>
            <p className="text-body-md font-body-md font-semibold text-on-surface italic">{def.question}</p>
            <p className="text-caption font-caption text-on-surface-variant">{def.description}</p>
          </div>
        ))}
      </div>

      <Callout variant="info" title="No es lo mismo entrar que poder hacer todo">
        {authExample}
      </Callout>
    </section>
  );
}
