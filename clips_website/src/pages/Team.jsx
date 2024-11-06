import React from "react";
import Breta from "/Breta.png";
import Brian from "/Brian.jpeg";
import Fatma from "/Fatma.png";
import Mark from "/Mark.jpeg";

const teamMembers = [
  {
    id: 1,
    src: Breta, 
    name: "Breta Odhiambo",
  },
  {
    id: 2,
    src: Brian,
    name: "Brian Kimathi",
  },
  {
    id: 3,
    src: Fatma,
    name: "Fatma Wanjiku",
  },
  {
    id: 4,
    src: Mark,
    name: "Mark Mogire",
  },
  
];

const Team = () => {
  return (
    <div className="team-wrapper flex flex-wrap gap-4">
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="card p-4 w-[200px] space-y-2 rounded-lg shadow-md"
        >
          <img
            src={member.src}
            alt={`${member.name}'s photo`}
            className="w-[200px] h-[200px] object-cover rounded-md"
          />
          <h1 className="name font-bold text-center">{member.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Team;