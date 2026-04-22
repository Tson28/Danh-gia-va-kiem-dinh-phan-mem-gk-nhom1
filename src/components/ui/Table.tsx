type Column<T> = {
  key: keyof T;
  header: string;
};

type TableProps<T extends Record<string, string | number>> = {
  columns: Column<T>[];
  rows: T[];
};

export function Table<T extends Record<string, string | number>>({
  columns,
  rows
}: TableProps<T>) {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={String(column.key)}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={String(column.key)}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
