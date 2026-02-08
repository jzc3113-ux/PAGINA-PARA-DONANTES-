import type { ReactNode } from "react";

export type TableColumn = {
  key: string;
  label: string;
  className?: string;
  render?: (row: TableRow) => ReactNode;
};

export type TableRow = {
  id: string;
} & Record<string, ReactNode>;

type TableProps = {
  columns: TableColumn[];
  rows: TableRow[];
};

export default function Table({ columns, rows }: TableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-[var(--color-surface)]">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-[var(--color-surface)]">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={`px-5 py-3 font-semibold text-[var(--color-text-primary)] ${
                  column.className ?? ""
                }`}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              className="border-t border-[var(--color-surface)]"
            >
              {columns.map((column) => (
                <td
                  key={`${row.id}-${column.key}`}
                  className={`px-5 py-4 text-[var(--color-text-primary)] ${
                  column.className ?? ""
                }`}
              >
                  {column.render
                    ? column.render(row)
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
