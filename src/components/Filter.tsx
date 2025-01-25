import { Autocomplete } from "@mui/joy";

function Filter({ breeds, onSetBreeds }) {
  function inputChangeHandler(_event: React.SyntheticEvent, value: never[]) {
    onSetBreeds(value);
  }

  return (
    <>
      <Autocomplete
        multiple
        placeholder="Search for a breed"
        options={breeds}
        size="lg"
        onChange={inputChangeHandler}
      />
    </>
  );
}

export default Filter;
