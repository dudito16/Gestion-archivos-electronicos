/** Content shapes specific to Week 10 — "Integridad digital" (hash, checksum, fixity, riesgos y controles). */

export interface HeroStep {
  id: string;
  label: string;
  icon: string;
}

export interface LearningCapability {
  id: string;
  label: string;
  icon: string;
}

export interface DocumentState {
  id: string;
  label: string;
  icon: string;
}

export interface HashVsChecksumProperty {
  key: string;
  label: string;
  hash: string;
  checksum: string;
}

export interface FixityStage {
  id: string;
  label: string;
  explanation: string;
}

export interface IntegrityCause {
  id: string;
  label: string;
  benign: boolean;
}

export interface RiskCard {
  id: string;
  label: string;
  severity: "alta" | "media" | "baja";
  impact: string;
  control: string;
}

export interface RiskControlPair {
  risk: string;
  control: string;
}

export interface WeekConnectionStep {
  id: string;
  label: string;
}

export interface SummaryPoint {
  id: string;
  label: string;
  icon: string;
}

export interface SanGabrielOption {
  id: string;
  label: string;
  recommended: boolean;
}
