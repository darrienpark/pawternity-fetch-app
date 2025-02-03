type Benefit = {
  title: string;
  description: string;
  icon: JSX.Element;
  iconBg: string;
};

export default function BenefitsCard({ title, description, icon, iconBg }: Benefit) {
  return (
    <div className="p-[1.5rem] bg-white rounded-[14px] border border-[#b7c2bf]">
      <div className="flex flex-col items-start gap-[.5rem]">
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-full bg-[${iconBg}]`}
          style={{ backgroundColor: iconBg }}
        >
          {icon}
        </div>
        <p className="text-xl text-[1.25rem] font-medium lg:w-10/12">{title}</p>
        <p className="text-[1rem]">{description}</p>
      </div>
    </div>
  );
}
