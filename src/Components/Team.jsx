import React from "react";
import "./Team.css";
import { ImLinkedin } from "react-icons/im";

const Team = () => {
  const teamMembers = [
    {
      name: "Suriya",
      role: "CEO & Founder",
      experience:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
      image: "emp.jpg",
    },
    {
      name: "Rajinikanth",
      role: "Director of Operations",
      experience:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills.",
      image: "emp.jpg",
    },
    {
      name: "Ak",
      role: "Senior SEO Specialist",
      experience:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.",
      image: "emp.jpg",
    },
    {
      name: "Vikram",
      role: "PPC Manager",
      experience:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.",
      image: "emp.jpg",
    },
    {
      name: "Dulquer",
      role: "Social Media Specialist",
      experience:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement.",
      image: "emp.jpg",
    },
    {
      name: "Atharva",
      role: "Content Creator",
      experience:
        "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries.",
      image: "emp.jpg",
    },
  ];

  return (
    <div className="team-screen">
      <div className="team-header">
        <h3>Team</h3>
        <p>
          Meet the skilled and experienced team behind our <br />
          successful digital marketing strategies.
        </p>
      </div>

      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="members" key={index}>
            <div className="emp-box">
              <div className="emp-header">
                <img src={member.image} alt={member.name} className="emp-image" />
                <div className="emp-details">
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                </div>
                <ImLinkedin className="linkedin-icon" />
              </div>
              <div className="emp-exp">
                <p>{member.experience}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="emp-end">See All Team</button>
    </div>
  );
};

export default Team;
