import type { ReactNode } from "react";
import { Callout } from "../../../../../components/common/Callout";

type FeedbackKind = "bien" | "revisar" | "criterio";

const config: Record<FeedbackKind, { variant: "success" | "warning" | "info"; title: string }> = {
  bien: { variant: "success", title: "✓ Bien encaminado" },
  revisar: { variant: "warning", title: "⚠ Revisa tu análisis" },
  criterio: { variant: "info", title: "💡 Criterio profesional" },
};

/** Didactic feedback block used across the Week 5 workshop's 10 activities — never a bare "Correcto." */
export function FeedbackNote({ kind, children }: { kind: FeedbackKind; children: ReactNode }) {
  const { variant, title } = config[kind];
  return (
    <Callout variant={variant} title={title}>
      {children}
    </Callout>
  );
}
