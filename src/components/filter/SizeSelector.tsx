import { Select, Option } from "@mui/joy";

const sizeOptions = [25, 50, 75, 100];

type SizeSelector = {
  size: number;
  onChange: (value: number) => void;
};

const SizeSelector = ({ size, onChange }: SizeSelector) => {
  return (
    <>
      <label id="size-label" className="block text-sm font-medium text-gray-700">
        Results per page
      </label>
      <Select
        defaultValue={size}
        aria-labelledby="size-label"
        className="px-2 w-full sm:w-auto"
        onChange={(_, value) => onChange(value ?? size)}
      >
        {sizeOptions.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default SizeSelector;
