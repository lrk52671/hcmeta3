interface DataTableProps {
  headers: string[];
  rows: { label: string; values: string[]; merge?: boolean }[];
}

export function DataTable({ headers, rows }: DataTableProps) {
  const gridTemplateColumns = `minmax(0, 1.2fr) repeat(${headers.length - 1}, minmax(0, 1fr))`;

  return (
    <div className="rounded-2xl border border-[#E6EBF0] bg-white p-2.5 sm:p-3.5 shadow-[0_2px_10px_rgba(16,42,67,0.05)]">
      <div className="grid items-center" style={{ gridTemplateColumns }}>
        <div className="px-4 sm:px-5 py-4 text-left text-xs sm:text-sm font-semibold uppercase tracking-[0.08em] text-primary font-display">
          {headers[0]}
        </div>
        {headers.slice(1).map((header) => (
          <div
            key={header}
            className="px-4 sm:px-5 py-4 text-center text-lg sm:text-xl font-bold tracking-tight text-text-primary font-display"
          >
            {header}
          </div>
        ))}
      </div>

      <div className="space-y-1">
        {rows.map((row, rowIndex) => (
          <div
            key={row.label}
            className={`grid items-center rounded-xl ${
              rowIndex % 2 === 0 ? 'bg-[#F5F8FA]' : 'bg-white'
            }`}
            style={{ gridTemplateColumns }}
          >
            <div className="px-4 sm:px-5 py-3.5 text-left text-sm sm:text-base text-text-secondary">
              {row.label}
            </div>
            {row.merge ? (
              <div
                className="relative h-12"
                style={{ gridColumn: `2 / span ${headers.length - 1}` }}
              >
                {row.values.map((value, valueIndex) => (
                  <span
                    key={value}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-xl sm:text-2xl font-bold tabular-nums text-text-primary font-display"
                    style={{
                      left: `${
                        row.values.length === 1
                          ? 50
                          : 25 + (50 * valueIndex) / (row.values.length - 1)
                      }%`,
                    }}
                  >
                    {value}
                  </span>
                ))}
              </div>
            ) : (
              row.values.map((value, valueIndex) => (
                <div
                  key={`${row.label}-${valueIndex}`}
                  className="px-4 sm:px-5 py-3.5 text-center text-base sm:text-lg font-semibold tabular-nums text-text-primary"
                >
                  {value}
                </div>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

interface SpecTableProps {
  specs: { name: string; value: string }[];
}

export function SpecTable({ specs }: SpecTableProps) {
  return (
    <div className="rounded-2xl border border-[#E6EBF0] bg-white p-2.5 sm:p-3.5 shadow-[0_2px_10px_rgba(16,42,67,0.05)] overflow-hidden">
      <div className="grid grid-cols-2 items-center">
        <div className="px-4 sm:px-5 py-4 text-left text-xs sm:text-sm font-semibold uppercase tracking-[0.08em] text-primary font-display">
          Specification
        </div>
        <div className="px-4 sm:px-5 py-4 text-left text-xs sm:text-sm font-semibold uppercase tracking-[0.08em] text-primary font-display">
          Detail
        </div>
      </div>
      <div className="space-y-1">
        {specs.map((spec, index) => (
          <div
            key={spec.name}
            className={`grid grid-cols-2 items-center rounded-xl ${
              index % 2 === 0 ? 'bg-[#F5F8FA]' : 'bg-white'
            }`}
          >
            <div className="px-4 sm:px-5 py-3.5 text-left text-sm sm:text-base text-text-secondary">
              {spec.name}
            </div>
            <div className="px-4 sm:px-5 py-3.5 text-left text-base sm:text-lg font-semibold tabular-nums text-text-primary">
              {spec.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}