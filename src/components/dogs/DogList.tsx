import { Dog } from "../../models/dog";
import DogItem from "./DogItem";

function DogList({ data }: { data: Dog[] }) {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((dog: Dog) => (
          <DogItem key={dog.id} dog={dog} />
        ))}
      </div>
    </>
  );
}

export default DogList;
