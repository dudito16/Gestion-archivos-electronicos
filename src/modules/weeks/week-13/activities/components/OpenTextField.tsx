interface OpenTextFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
}

/** A single open-ended response field — reused by every activity that asks the student to justify or explain. */
export function OpenTextField({ id, label, value, onChange, placeholder, rows = 3, disabled }: OpenTextFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-label-md font-label-md font-semibold text-on-surface mb-1 block">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        rows={rows}
        placeholder={placeholder}
        className="w-full rounded-lg border border-outline-variant bg-surface-container-low p-sm text-body-md font-body-md text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container disabled:opacity-70"
      />
    </div>
  );
}

/** The standing disclaimer required next to every open-ended, non-strictly-graded response. */
export function OpenAnswerDisclaimer() {
  return (
    <p className="text-caption font-caption text-on-surface-variant italic">
      Las respuestas abiertas requieren análisis docente. La retroalimentación automática es orientativa.
    </p>
  );
}
