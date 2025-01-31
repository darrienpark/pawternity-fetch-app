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
    <div className="w-full flex flex-col-reverse gap-y-4 justify-between items-center sm:flex-row">
      <p>
        Showing {start}—{end} of {totalItems}
      </p>
      <div className="flex items-center gap-2 flex-col sm:flex-row w-full sm:w-auto">
        <label>Results per page</label>
        <Select
          value={pageSize}
          onChange={(_, value) => onPageSizeChange(value as number)}
          className="w-full sm:flex-auto sm:w-auto"
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
