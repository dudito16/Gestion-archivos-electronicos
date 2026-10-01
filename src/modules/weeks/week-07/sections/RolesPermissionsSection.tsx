import { useState } from "react";
import { SectionHeading } from "../../../../components/common/SectionHeading";
import { Callout } from "../../../../components/common/Callout";
import { ComparisonMatrix } from "../../../../components/common/ComparisonMatrix";
import { cn } from "../../../../utils/cn";
import { assignPermissionCase, assignPermissionFeedback, assignPermissionOptions, permissionRoles, permissionsDisclaimer } from "../week07.data";

const columns = ["Ver", "Crear", "Modificar", "Eliminar", "Administrar"];
const rows = permissionRoles.map((role) => ({ criterion: role.label, values: [role.ver, role.crear, role.modificar, role.eliminar, role.administrar] }));

export function RolesPermissionsSection() {
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const correct = assignPermissionOptions.find((o) => o.correct)!;

  return (
    <section id="usuarios-roles" className="scroll-mt-24 space-y-lg">
      <SectionHeading eyebrow="Usuarios, roles y permisos" title="El acceso debe responder a la función, no a la comodidad" />

      <ComparisonMatrix columns={columns} rows={rows} />

      <Callout variant="warning" title="No es una plantilla universal">
        {permissionsDisclaimer}
      </Callout>

      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg space-y-md">
        <p className="text-body-lg font-body-lg font-semibold text-on-surface">Asigna el permiso correcto</p>
        <p className="text-body-md font-body-md text-on-surface">{assignPermissionCase}</p>
        <div className="space-y-xs">
          {assignPermissionOptions.map((opt) => {
            const isSelected = selected === opt.id;
            const isRight = checked && opt.id === correct.id;
            return (
              <button
                key={opt.id}
                type="button"
                disabled={checked}
                onClick={() => setSelected(opt.id)}
                className={cn(
                  "w-full text-left rounded-lg border px-md py-sm text-label-md font-label-md transition-colors",
                  !checked && isSelected && "border-primary-container bg-secondary-container/50",
                  !checked && !isSelected && "border-outline-variant bg-surface-container-lowest hover:border-primary-container",
                  checked && isRight && "border-tertiary-fixed-dim bg-tertiary-fixed/40",
                  checked && isSelected && !isRight && "border-error bg-error-container/40",
                )}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
        {!checked ? (
          <button
            type="button"
            disabled={!selected}
            onClick={() => setChecked(true)}
            className="rounded-lg bg-primary-container text-on-primary px-md py-2 text-label-md font-label-md font-semibold disabled:opacity-50"
          >
            Comprobar respuesta
          </button>
        ) : (
          <p className="text-body-md font-body-md text-on-surface-variant">{assignPermissionFeedback}</p>
        )}
      </div>
    </section>
  );
}
