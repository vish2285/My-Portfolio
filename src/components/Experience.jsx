import React from "react";

const experiences = [
  {
    id: 1,
    company: "City of Sacramento",
    role: "Intern- Devlopment Enginner",
    duration: "Dec 2024 - Present",
    image: "./public/img/cityofsac.png",
    description: "",
  },
  {
    id: 2,
    company: "BAPS",
    role: "Designer",
    duration: "Jun 2023 - Aug 2023",
    image: "./public/img/baps.jpg",
    description: "Designed an enormous directional map using Fusion 360 and helped construct it with a team for the second largest Hindu temple in the world at Robbinsville, New Jersey ",
  },
  {
    id: 3,
    company: "Walmart",
    role: "Store Cashier",
    duration: "Mar 2022- Oct 2023",
    image: "./public/img/walmart.jpeg",
    description: "",
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
      <div id = "Experience" className="flex flex-col items-center p-19 min-h-screen">
        <h1 className="text-3xl font-bold mb-8 text-center">Experience</h1>
        <div className="flex flex-wrap justify-center gap-12">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    );
  };  

export default ExperiencePage;
