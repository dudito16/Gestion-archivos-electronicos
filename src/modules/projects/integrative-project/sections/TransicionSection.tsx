import { ArrowRight } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export function TransicionSection() {
  return (
    <section className="scroll-mt-24">
      <div className="rounded-xl border-2 border-primary-container bg-gradient-to-br from-secondary-container/40 to-surface-container-lowest p-lg text-center space-y-sm">
        <h2 className="text-headline-lg font-headline-lg text-on-surface">Ahora es tu turno</h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Ya has visto cómo se construye un diagnóstico documental paso a paso. Ahora tu equipo deberá realizar el
          mismo proceso sobre una organización o caso seleccionado.
        </p>
        <Button onClick={() => document.getElementById("proyecto-equipo")?.scrollIntoView({ behavior: "smooth", block: "start" })}>
          📝 Ir al proyecto del equipo <ArrowRight size={16} />
        </Button>
      </div>
    </section>
  );
}
