import { Slider } from "@mui/joy";
import { useRef, useState } from "react";

type AgeRangeSliderProps = {
  range: number[];
  min: number;
  max: number;
  onChange: (value: number[]) => void;
};

export default function AgeRangeSlider({ range, min, max, onChange }: AgeRangeSliderProps) {
  const lastChange = useRef<number | null>();
  const [sliderValue, setSliderValue] = useState(range);

  const handleChange = (_: Event, value: number | number[]) => {
    setSliderValue(value as number[]);

    // Debounce onChange callback
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      onChange(value as number[]);
    }, 500);
  };

  return (
    <div className="flex sm:flex-row flex-col items-start w-full sm:items-center gap-x-6 md:flex-grow md:w-auto">
      <label id="age-range-label" className="block text-sm font-medium text-gray-700 shrink-0">
        Age range
      </label>
      <Slider
        aria-labelledby="age-range-label"
        getAriaValueText={(value) => `${value} years`}
        value={sliderValue}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={min}
        max={max}
      />
    </div>
  );
}
