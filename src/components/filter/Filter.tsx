import { Button } from "@mui/joy";
import { useRef, useState } from "react";
import AgeRangeSlider from "./AgeRangeSlider";
import BreedSelector from "./BreedSelector";
import SizeSelector from "./SizeSelector";
import SortSelector from "./SortSelector";

type FilterOptions = {
  breeds: string[];
  sort: SortOption;
  resultsPerPage: number;
  ageRange: number[];
};

type SortOption = "breed:asc" | "breed:desc" | "name:asc" | "name:desc" | "age:asc" | "age:desc";

type FilterProps = {
  breeds: string[];
  onSetOptions: (newFilters: FilterOptions) => void;
  initialOptions: FilterOptions;
};

const Filter = ({ breeds, onSetOptions, initialOptions }: FilterProps) => {
  const queryOptions = useRef(initialOptions);
  const [moreOptions, setMoreOptions] = useState(false);

  function handleInputChange<T extends keyof typeof queryOptions.current>(
    field: T,
    value: (typeof queryOptions.current)[T]
  ) {
    queryOptions.current[field] = value;
    onSetOptions(queryOptions.current);
  }

  return (
    <div>
      <div className="flex pb-4 gap-x-2 gap-y-2 flex-wrap">
        <BreedSelector
          breeds={breeds}
          selectedBreeds={queryOptions.current.breeds}
          onChange={(value) => handleInputChange("breeds", value)}
        />
        <Button variant="plain" onClick={() => setMoreOptions((prev) => !prev)}>
          More options
        </Button>
      </div>

      {moreOptions && (
        <div className="flex flex-col items-start sm:flex-row sm:items-center pb-4 gap-x-4 gap-y-4 justify-end flex-wrap">
          <SortSelector
            sort={queryOptions.current.sort}
            onChange={(value) => handleInputChange("sort", value as SortOption)}
          />
          <SizeSelector
            size={queryOptions.current.resultsPerPage}
            onChange={(value) => handleInputChange("resultsPerPage", value)}
          />
          <AgeRangeSlider
            range={queryOptions.current.ageRange}
            min={initialOptions.ageRange[0]}
            max={initialOptions.ageRange[1]}
            onChange={(value) => handleInputChange("ageRange", value)}
          />
        </div>
      )}
    </div>
  );
};

export default Filter;
