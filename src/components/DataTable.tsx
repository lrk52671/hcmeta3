interface DataTableProps {
  headers: string[];
  rows: { label: string; values: string[] }[];
}

export function DataTable({ headers, rows }: DataTableProps) {
  return (
    <div className="rounded-lg overflow-hidden border border-border">
      <table className="data-table w-full text-sm">
        <thead>
          <tr className="bg-white">
            <th className="text-left px-5 py-3.5 font-semibold text-primary text-[0.8125rem]">
              {headers[0]}
            </th>
            {headers.slice(1).map((header) => (
              <th key={header} className="text-center px-5 py-3.5 font-semibold text-primary text-[0.8125rem]">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={row.label}
              className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-bg-main-alt'}
            >
              <td className="px-5 py-3 text-text-secondary">{row.label}</td>
              {row.values.map((value) => (
                <td key={value} className="px-5 py-3 text-center text-text-primary font-mono">
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