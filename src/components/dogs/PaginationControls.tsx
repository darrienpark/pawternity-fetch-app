import { Select, Option } from "@mui/joy";

type PaginationControlsProps = {
  start: number;
  end: number;
  totalItems: number;
  pageSize: number;
  onPageSizeChange: (size: number) => void;
};

const PaginationControls = ({ start, end, totalItems, pageSize, onPageSizeChange }: PaginationControlsProps) => {
  return (
    <div className="flex w-full justify-between items-center">
      <p>
        Showing {start}—{end} of {totalItems}
      </p>
      <div className="flex items-center gap-2">
        <label>Results per page</label>
        <Select
          value={pageSize}
          onChange={(_, value) => onPageSizeChange(value as number)}
          className="px-2 w-full sm:w-auto flex-grow md:flex-grow-0"
        >
          <Option value={25}>25</Option>
          <Option value={50}>50</Option>
          <Option value={75}>75</Option>
          <Option value={100}>100</Option>
        </Select>
      </div>
    </div>
  );
};

export default PaginationControls;
