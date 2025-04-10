import React, { useState } from "react";
import "./Workingprocess.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const WorkingProcess = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleBox = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const workSteps = [
    { id: 1, title: "Consultation", description: "We analyze your business needs and create a strategic roadmap." },
    { id: 2, title: "Research", description: "We conduct thorough research to identify your target audience and industry trends." },
    { id: 3, title: "Strategy", description: "Developing a comprehensive strategy tailored to your business goals." },
    { id: 4, title: "Implementation", description: "Executing the strategy efficiently to ensure success." },
    { id: 5, title: "Optimization", description: "Monitoring and optimizing processes for continuous growth." },
  ];


  return (
    <div>
    <div className="work-heading">
        <h3>Our Working Process</h3>
        <p>Step-by-Step Guide to Achieving Your Business Goals</p>
        </div>
    
    <div className="Work-container">
   
     

      {workSteps.map((step, index) => (
        <div
          key={step.id}
          className={`work-box ${expandedIndex === index ? "expanded" : ""}`}
        >
          <div className="work-header" onClick={() => toggleBox(index)}>
            <h3>
              <span>0{step.id}</span> {step.title}
            </h3>
            <button>{expandedIndex === index ? <FaMinus /> : <FaPlus />}</button>
          </div>

      
          {expandedIndex === index && (
            <div className="work-content">
              <hr />
              <p>{step.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default WorkingProcess;
