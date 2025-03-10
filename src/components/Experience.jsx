import React from "react";

const experiences = [
  {
    id: 1,
    company: "Google",
    role: "Software Engineer",
    duration: "2022 - Present",
    image: "/google-logo.png",
    description: "Developing scalable cloud applications and AI models.",
  },
  {
    id: 2,
    company: "Microsoft",
    role: "Frontend Developer",
    duration: "2020 - 2022",
    image: "/microsoft-logo.png",
    description: "Designed and implemented user interfaces for Office 365.",
  },
  {
    id: 3,
    company: "Amazon",
    role: "Backend Engineer",
    duration: "2018 - 2020",
    image: "/amazon-logo.png",
    description: "Built robust APIs for e-commerce platforms.",
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <div className="relative group w-80 h-60 bg-gray-900 rounded-xl overflow-hidden shadow-lg">
      {/* Image */}
      <img
        src={experience.image}
        alt={experience.company}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-30"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h2 className="text-xl font-semibold">{experience.company}</h2>
        <p className="text-sm">{experience.role}</p>
        <p className="text-xs">{experience.duration}</p>
        <p className="mt-2 text-sm max-w-[80%] text-center">{experience.description}</p>
      </div>
    </div>
  );
};

const ExperiencePage = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-10 bg-gray-100 min-h-screen">
      {experiences.map((exp) => (
        <ExperienceCard key={exp.id} experience={exp} />
      ))}
    </div>
  );
};

export default ExperiencePage;
