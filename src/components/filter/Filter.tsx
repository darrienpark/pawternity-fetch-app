import { Button } from "@mui/joy";
import { useState } from "react";
import { FilterOptions } from "../../models/types";
import AgeRangeSlider from "./AgeRangeSlider";
import BreedSelector from "./BreedSelector";
import SortSelector from "./SortSelector";

type FilterProps = {
  breeds: string[];
  filters: FilterOptions; // your "current" state from parent
  onChange: (newFilters: FilterOptions) => void;
};

export default function Filter({ breeds, filters, onChange }: FilterProps) {
  const [moreOptions, setMoreOptions] = useState(false);

  function handleInputChange<T extends keyof FilterOptions>(field: T, value: FilterOptions[T]) {
    onChange({ ...filters, [field]: value });
  }

  return (
    <div>
      <div className="flex pb-4 gap-x-2 gap-y-2 flex-wrap">
        <BreedSelector
          breeds={breeds}
          selectedBreeds={filters.breeds}
          onChange={(value) => handleInputChange("breeds", value)}
        />
        <Button variant="plain" onClick={() => setMoreOptions((prev) => !prev)}>
          More options
        </Button>
      </div>

      {moreOptions && (
        <div className="flex flex-col items-start sm:flex-row sm:items-center pb-4 gap-x-4 gap-y-4 justify-end flex-wrap">
          <SortSelector sort={filters.sort} onChange={(value) => handleInputChange("sort", value)} />
          <AgeRangeSlider
            range={filters.ageRange}
            min={0}
            max={20}
            onChange={(value) => handleInputChange("ageRange", value)}
          />
        </div>
      )}
    </div>
  );
}
