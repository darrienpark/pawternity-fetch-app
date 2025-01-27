import { Select, Option } from "@mui/joy";

const sortOptions = [
  { label: "Breed (A-Z)", value: "breed:asc" },
  { label: "Breed (Z-A)", value: "breed:desc" },
  { label: "Name (A-Z)", value: "name:asc" },
  { label: "Name (Z-A)", value: "name:desc" },
  { label: "Age (Youngest First)", value: "age:asc" },
  { label: "Age (Oldest First)", value: "age:desc" },
];

type SortSelectorProps = {
  sort: string;
  onChange: (value: string) => void;
};

const SortSelector = ({ sort, onChange }: SortSelectorProps) => {
  return (
    <>
      <label id="sort-label" className="block text-sm font-medium text-gray-700">
        Sort by
      </label>
      <Select
        defaultValue={sort}
        aria-labelledby="sort-label"
        className="px-2 w-full sm:w-auto flex-grow md:flex-grow-0"
        onChange={(_, value) => onChange(value ?? sort)}
      >
        {sortOptions.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default SortSelector;
