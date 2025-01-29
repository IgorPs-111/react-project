import { Skill } from "../skill/index.jsx";
import { skills } from "../../../constants/skills.js";

export const SkillList = ({ className }) => {
  return (
    <ul className={`${className} skill-list`}>
      {skills.map(
        (skill) =>
          skill.skill && (
            <li className="skill-list__item" key={skill.skill}>
              <Skill className="skill-list__skill" skill={skill} />
            </li>
          ),
      )}
    </ul>
  );
};
