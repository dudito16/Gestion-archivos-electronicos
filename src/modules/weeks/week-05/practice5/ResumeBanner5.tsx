import { Button } from "../../../../components/ui/button";
import { Callout } from "../../../../components/common/Callout";

interface Props {
  onContinue: () => void;
  onRestart: () => void;
}

export function ResumeBanner5({ onContinue, onRestart }: Props) {
  return (
    <div className="max-w-xl mx-auto">
      <Callout variant="info" title="Encontramos una práctica en progreso">
        <p>Tu Práctica Calificada 5 quedó a mitad de camino. Puedes continuar donde la dejaste o comenzar nuevamente.</p>
        <div className="flex flex-wrap gap-sm mt-sm">
          <Button size="sm" onClick={onContinue}>
            Continuar práctica
          </Button>
          <Button size="sm" variant="secondary" onClick={onRestart}>
            Comenzar nuevamente
          </Button>
        </div>
      </Callout>
    </div>
  );
}
