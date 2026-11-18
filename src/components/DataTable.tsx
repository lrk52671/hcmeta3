interface DataTableProps {
  headers: string[];
  rows: { label: string; values: string[]; merge?: boolean }[];
}

export function DataTable({ headers, rows }: DataTableProps) {
  const gridTemplateColumns = `minmax(0, 1.2fr) repeat(${headers.length - 1}, minmax(0, 1fr))`;

  return (
    <div className="rounded-2xl border border-[#E6EBF0] bg-white p-2.5 sm:p-3.5 shadow-[0_2px_10px_rgba(16,42,67,0.05)]">
      <div className="grid items-center" style={{ gridTemplateColumns }}>
        <div className="px-4 sm:px-5 py-4 text-left text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-primary">
          {headers[0]}
        </div>
        {headers.slice(1).map((header) => (
          <div
            key={header}
            className="px-4 sm:px-5 py-4 text-center text-base sm:text-lg font-medium tracking-tight text-primary"
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
            <div className="px-4 sm:px-5 py-3.5 text-left text-[0.8125rem] text-[#5B6B7B]">
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
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-lg sm:text-xl font-semibold tabular-nums text-[#152738]"
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
                  className="px-4 sm:px-5 py-3.5 text-center text-[0.9375rem] font-medium tabular-nums text-[#152738]"
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
    <div className="rounded-lg overflow-hidden border border-border">
      <table className="data-table w-full text-sm">
        <thead>
          <tr className="bg-white">
            <th className="text-left px-5 py-3.5 font-semibold text-primary text-[0.8125rem]">
              Specification
            </th>
            <th className="text-left px-5 py-3.5 font-semibold text-primary text-[0.8125rem]">
              Detail
            </th>
          </tr>
        </thead>
        <tbody>
          {specs.map((spec, index) => (
            <tr
              key={spec.name}
              className={index % 2 === 0 ? 'bg-white' : 'bg-bg-main-alt'}
            >
              <td className="px-5 py-3 text-text-secondary">{spec.name}</td>
              <td className="px-5 py-3 text-text-primary font-mono">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}