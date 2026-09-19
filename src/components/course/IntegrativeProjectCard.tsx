import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

/** Dashboard card for the "Proyecto Integrador" — sits between Unidad I and Unidad II's week grids. */
export function IntegrativeProjectCard() {
  return (
    <div className="space-y-sm scroll-mt-24">
      <Link to="/proyecto-integrador">
        <Card className="p-lg border-2 border-tertiary-fixed-dim bg-gradient-to-br from-tertiary-fixed/25 to-surface-container-lowest hover:shadow-md transition-all">
          <div className="flex items-center gap-xs mb-xs flex-wrap">
            <Sparkles className="text-tertiary" size={20} />
            <Badge variant="tertiary">Cierre de Unidad I</Badge>
          </div>
          <CardTitle>Proyecto Integrador — Del documento a la evidencia</CardTitle>
          <CardDescription className="max-w-2xl">
            Diagnóstico y propuesta de mejora de la gestión de documentos electrónicos, integrando lo estudiado en
            las Semanas 1 a 6.
          </CardDescription>
          <CardContent className="p-0 mt-sm">
            <span className="inline-flex items-center gap-1 text-label-md font-label-md font-semibold text-primary-container">
              Ir al proyecto <ArrowRight size={16} />
            </span>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
