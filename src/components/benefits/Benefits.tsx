import BenefitsGrid from "./BenefitsGrid";

const Benefits = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-8 mb-16">
      <h1 className="text-[2.75rem] text-center">Why Choose Us?</h1>
      <p className="text-center max-w-4xl text-[1.25rem]">
        Finding the right furry companion is a big decision, and we’re here to make it easy. With a personalized
        matching process, full support, and a welcoming community, we ensure a smooth and rewarding adoption journey.
        Here’s what makes us stand out:
      </p>
      <BenefitsGrid />
    </div>
  );
};

export default Benefits;
