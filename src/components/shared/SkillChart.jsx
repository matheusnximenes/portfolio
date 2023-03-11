import React from "react";
import Skill from "./Skill";

const SkillChart = ({ list }) => {
  return (
    <div className="about__subsection">
      <h3>Skill Chart</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis,
        totam?
      </p>
      <div className="skill-chart">
        <div className="skill-chart__background">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className="skill-chart__skill">
          {list.map((s) => (
            <Skill key="s.id" title={s.title} percentage={s.percentage} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillChart;
