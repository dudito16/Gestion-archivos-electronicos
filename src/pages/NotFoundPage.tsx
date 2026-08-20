import { CompassIcon } from "lucide-react";
import { PlaceholderPage } from "./PlaceholderPage";

export function NotFoundPage() {
  return (
    <PlaceholderPage
      icon={CompassIcon}
      title="Página no encontrada"
      description="La página que buscas no existe o todavía no ha sido publicada."
    />
  );
}
