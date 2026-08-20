import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

interface PlaceholderPageProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Generic placeholder for header/footer links not yet fleshed out (sample content only). */
export function PlaceholderPage({ icon: Icon, title, description }: PlaceholderPageProps) {
  return (
    <Card className="p-xl flex flex-col items-center text-center gap-sm">
      <Icon className="text-primary-container" size={40} />
      <h1 className="text-headline-lg font-headline-lg text-on-surface">{title}</h1>
      <p className="text-body-md font-body-md text-on-surface-variant max-w-[28rem]">{description}</p>
      <Button asChild size="sm" variant="secondary">
        <Link to="/">Volver al Syllabus</Link>
      </Button>
    </Card>
  );
}
