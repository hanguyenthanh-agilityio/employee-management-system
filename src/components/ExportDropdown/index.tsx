// Icons
import { ArrowDownCircleIcon } from '@heroicons/react/16/solid';

// Components
import Dropdown from '../Dropdown';

type Format = 'pdf' | 'csv' | 'excel';

interface ExportDropdownProps {
  onExport: (format: Format) => void;
}

const ExportDropdown = ({ onExport }: ExportDropdownProps) => {
  return (
    <Dropdown
      buttonLabel="Export"
      buttonClassName="flex items-center rounded p-2 bg-[#3F861E] text-white hover:bg-green flex gap-8 text-lg rounded-[14px] py-3 px-11 shadow-[11px_4px_14px_0px_#0000001F]"
      icon={<ArrowDownCircleIcon width={19} height={19} />}
      actions={[
        {
          label: 'Export PDF',
          onClick: () => onExport('pdf'),
        },
        {
          label: 'Export CSV',
          onClick: () => onExport('csv'),
        },
        {
          label: 'Export Excel',
          onClick: () => onExport('excel'),
        },
      ]}
    />
  );
};

export default ExportDropdown;
