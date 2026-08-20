interface ComparisonMatrixProps {
  columns: string[];
  rows: { criterion: string; values: string[] }[];
}

/** Responsive comparison table — horizontal-scrolls on narrow viewports instead of squeezing columns. */
export function ComparisonMatrix({ columns, rows }: ComparisonMatrixProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
      <table className="w-full min-w-[52rem] border-collapse text-left">
        <thead>
          <tr className="bg-surface-container-low">
            <th className="p-sm text-label-md font-label-md text-on-surface-variant sticky left-0 bg-surface-container-low">
              Criterio
            </th>
            {columns.map((col) => (
              <th key={col} className="p-sm text-label-md font-label-md text-primary-container">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.criterion} className="border-t border-outline-variant hover:bg-surface-container-low transition-colors">
              <th
                scope="row"
                className="p-sm text-label-md font-label-md font-semibold text-on-surface sticky left-0 bg-surface-container-lowest"
              >
                {row.criterion}
              </th>
              {row.values.map((value, index) => (
                <td key={`${row.criterion}-${columns[index]}`} className="p-sm text-body-md font-body-md text-on-surface-variant align-top">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
