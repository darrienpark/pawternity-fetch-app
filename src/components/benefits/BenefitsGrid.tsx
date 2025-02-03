import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import BenefitsCard from "./BenefitsCard";

const benefits = [
  {
    title: "Personalized Matching",
    description: "We ensure each dog is paired with the perfect family to match their temperament and needs.",
    icon: <PetsOutlinedIcon fontSize="medium" />,
    iconBg: "#fbe8d1",
  },
  {
    title: "Comprehensive Support",
    description: "From initial meetings to post-adoption check-ins, we provide guidance every step of the way.",
    icon: <VolunteerActivismOutlinedIcon fontSize="medium" />,
    iconBg: "#e7e3ef",
  },
  {
    title: "Transparent Process",
    description: "Our adoption procedures are clear, with no hidden fees or surprises.",
    icon: <VisibilityOutlinedIcon fontSize="medium" />,
    iconBg: "#f9f6ef",
  },
  {
    title: "Community Engagement",
    description: "Join a community of dog lovers, with access to events, resources, and support networks.",
    icon: <PeopleAltOutlinedIcon fontSize="medium" />,
    iconBg: "#e0ebe7",
  },
];

export default function BenefitsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-full">
      {benefits.map((benefit, index) => {
        return (
          <BenefitsCard
            key={index}
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
            iconBg={benefit.iconBg}
          ></BenefitsCard>
        );
      })}
    </div>
  );
}
