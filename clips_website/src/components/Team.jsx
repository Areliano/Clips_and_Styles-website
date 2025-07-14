import Breta from "/Breta.png";
import Brian from "/Brian.jpeg";
import Fatma from "/Fatma.png";
import Mark from "/Mark.jpeg";

const teamMembers = [
  {
    id: 1,
    src: Breta,
    name: "Breta Odhiambo",
    description:
      "A talented UI/UX designer with a flair for creating intuitive and visually captivating user interfaces.",
    socialLinks: {
      instagram: "https://www.instagram.com/unclebreta/",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 2,
    src: Brian,
    name: "Brian Kimathi",
    description:
      " A versatile full-stack developer with an interest in leveraging data and analytics within development.",
    socialLinks: {
      instagram: "https://www.instagram.com/getlikekimathi_/",
      linkedin: "https://www.linkedin.com/in/brian-muriiki-117006230/",
      github: "https://github.com/Kimathi19",
    },
  },
  {
    id: 3,
    src: Fatma,
    name: "Fatma Wanjiku",
    description:
      "A full-stack developer passionate about integrating secure coding practices with a focus on cyber-security",
    socialLinks: {
      instagram: "https://www.instagram.com/_.african_wanjiku/",
      linkedin: "https://www.linkedin.com/in/fatma-hussein-7a584421a/",
      github: "https://github.com/Areliano",
    },
  },
  {
    id: 4,
    src: Mark,
    name: "Mark Mogire",
    description:
      "A dedicated full-stack developer with a strong grasp of both frontend and backend technologies.",
    socialLinks: {
      instagram: "https://www.instagram.com/thee_mmo/",
      linkedin: "https://www.linkedin.com/in/mark-mogire/",
      github: "https://github.com/MOGIRE11",
    },
  },
];

const Team = () => {
  return (
    <div className="team-wrapper grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center mx-auto p-4">
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="card w-[250px] rounded-t-lg shadow-md overflow-hidden"
        >
          <img
            src={member.src}
            alt={`${member.name}'s photo`}
            className="w-full h-[200px] object-cover mx-auto object-center"
          />

          <div className="p-4">
            <h1 className="name font-semibold text-lg">{member.name}</h1>
            <p className="description text-sm mt-2">
              {member.description}
            </p>
            <div className="social-links flex gap-4 mt-4">
              <a
                href={member.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram w-6 h-6"></i>
              </a>
              <a
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin w-6 h-6"></i>
              </a>
              <a
                href={member.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github w-6 h-6"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;