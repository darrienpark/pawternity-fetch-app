import { Slider } from "@mui/joy";
import { useState } from "react";

type AgeRangeSliderProps = {
  range: number[];
  min: number;
  max: number;
  onChange: (value: number[]) => void;
};

const AgeRangeSlider = ({ range, min, max, onChange }: AgeRangeSliderProps) => {
  const [sliderValue, setSliderValue] = useState(range);

  const handleChange = (_: Event, value: number | number[]) => {
    if (Array.isArray(value)) {
      setSliderValue(value);
      onChange(value);
    }
  };

  return (
    <div className="flex sm:flex-row flex-col items-start w-full sm:max-w-xs sm:items-center gap-x-6">
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
};

export default AgeRangeSlider;
