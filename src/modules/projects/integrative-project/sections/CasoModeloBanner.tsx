import { Search } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Callout } from "../../../../components/common/Callout";
import { caseOrg } from "../integrativeProject.data";

export function CasoModeloBanner() {
  return (
    <section id="caso-modelo" className="scroll-mt-24 space-y-md">
      <div className="flex items-center gap-xs">
        <Badge variant="tertiary">
          <Search size={14} /> Parte 1
        </Badge>
        <span className="text-caption font-caption text-on-surface-variant">Caso modelo</span>
      </div>
      <h2 className="text-headline-lg font-headline-lg text-on-surface flex items-center gap-xs">🔎 Caso modelo</h2>
      <p className="text-body-lg font-body-lg text-on-surface max-w-3xl">
        Antes de desarrollar tu propio proyecto, revisa este caso modelo. No debes copiarlo. Su finalidad es
        mostrarte cómo se construye un diagnóstico documental utilizando evidencias y aplicando los contenidos de
        las Semanas 1 a 6.
      </p>
      <Callout variant="info" title="Simulación académica">
        {caseOrg.disclaimer}
      </Callout>
    </section>
  );
}
