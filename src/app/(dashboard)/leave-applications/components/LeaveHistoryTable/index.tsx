'use client';

import { ReactNode } from 'react';

interface Column<T> {
  title: string;
  render: (item: T) => ReactNode;
  className?: string;
}

interface GenericTableProps<T> {
  data: T[];
  columns: Column<T>[];
}

const GenericTable = <T,>({ data, columns }: GenericTableProps<T>) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full bg-white rounded-lg shadow-sm text-xl">
        <thead className="bg-[#E3EDF9] text-[#000] font-bold">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="px-4 py-5 whitespace-nowrap">
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} className="odd:bg-white even:bg-[#E3EDF9]">
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className={`px-4 py-3 whitespace-nowrap text-center ${col.className}`}
                >
                  {col.render(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenericTable;
