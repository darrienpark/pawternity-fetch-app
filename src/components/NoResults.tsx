type NoResultsProps = {
  title: string;
  description: string;
};

export default function NoResults({ title, description }: NoResultsProps) {
  return (
    <div className="flex flex-col justify-center items-center flex-grow text-center py-24">
      <h1 className="text-3xl text-gray-800 mb-4">{title}</h1>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  );
}
