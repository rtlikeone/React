import React from "react";
// import { SkillsDataContext } from "../data/skillsData.js";
import { SkillsData } from "../../data/skillsData";
import Skill from "./Skill";

const Skills = () => {
  // const [skills] = useContext(SkillsDataContext);

  return (
    <div className="skills py-1">
      <h2>Skills</h2>
      {/* <div className="py-1"> */}
      <div className="skills__items">
        {SkillsData.map((skill) => (
          <Skill key={skill} name={skill} />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Skills;
