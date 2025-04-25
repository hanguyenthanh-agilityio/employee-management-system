interface TableProps {
  headers: string[];
  rows: (string | number)[][];
}

export default function Table({ headers, rows }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xl text-left text-[#545559] min-w-[500px] border-separate border-spacing-y-3">
        <thead className="bg-[#E3EDF9] h-[60px]">
          <tr>
            {headers.map((head, index) => (
              <th key={index} className="px-4 py-3 font-medium">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className="bg-[#E3EDF9] border-b border-white rounded-[10px] h-[60px]"
            >
              {row.map((cell, index) => (
                <td key={index} className="px-4 py-3 whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
