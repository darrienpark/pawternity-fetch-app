import { Autocomplete } from "@mui/joy";

type BreedSelectorProps = {
  breeds: string[];
  selectedBreeds: string[];
  onChange: (value: string[]) => void;
};

export default function BreedSelector({ breeds, selectedBreeds, onChange }: BreedSelectorProps) {
  return (
    <Autocomplete
      className="w-full sm:flex-grow sm:w-auto"
      multiple
      placeholder="Search for a breed"
      options={breeds}
      size="lg"
      value={selectedBreeds}
      onChange={(_, value) => onChange(value)}
    />
  );
}
