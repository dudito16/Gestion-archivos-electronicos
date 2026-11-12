import { Button } from "../../../../components/ui/button";
import { Callout } from "../../../../components/common/Callout";

interface Props {
  onContinue: () => void;
  onRestart: () => void;
}

export function ResumeBanner14({ onContinue, onRestart }: Props) {
  return (
    <div className="max-w-xl mx-auto">
      <Callout variant="info" title="Encontramos una evaluación en progreso">
        <p>Tu Evaluación final quedó a mitad de camino. Puedes continuar donde la dejaste o comenzar nuevamente.</p>
        <div className="flex flex-wrap gap-sm mt-sm">
          <Button size="sm" onClick={onContinue}>
            Continuar evaluación
          </Button>
          <Button size="sm" variant="secondary" onClick={onRestart}>
            Comenzar nuevamente
          </Button>
        </div>
      </Callout>
    </div>
  );
}
