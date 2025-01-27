type NoResultsProps = {
  title: string;
  description: string;
};

const NoResults = ({ title, description }: NoResultsProps) => {
  return (
    <div className="flex flex-col justify-center items-center flex-grow text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  );
};

export default NoResults;
