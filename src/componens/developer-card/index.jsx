import { Avatar } from "./avatar/index.jsx";
import { Intro } from "./intro/index.jsx";
import { SkillList } from "./skill-list/index.jsx";

export const DeveloperCard = () => {
  return (
    <div className="card">
      <Avatar className="card__avatar" />
      <div className="card__intro-wrap">
        <Intro className="card__intro" />
        <SkillList className="card__skills" />
      </div>
    </div>
  );
};
