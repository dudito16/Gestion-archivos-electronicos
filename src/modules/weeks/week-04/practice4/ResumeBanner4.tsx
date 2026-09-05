import { Button } from "../../../../components/ui/button";
import { Callout } from "../../../../components/common/Callout";

interface Props {
  onContinue: () => void;
  onRestart: () => void;
}

export function ResumeBanner4({ onContinue, onRestart }: Props) {
  return (
    <div className="max-w-xl mx-auto">
      <Callout variant="info" title="Tu Práctica Calificada 4 está en progreso">
        <div className="flex flex-wrap gap-sm mt-sm">
          <Button size="sm" onClick={onContinue}>
            Continuar
          </Button>
          <Button size="sm" variant="secondary" onClick={onRestart}>
            Reiniciar
          </Button>
        </div>
      </Callout>
    </div>
  );
}
