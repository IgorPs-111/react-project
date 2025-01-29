export const Skill = ({ className, skill }) => {
  return (
    <div
      className={`${className} skill`}
      style={{ background: `${skill.color}` }}
    >
      <span>{skill.skill}</span>
      <span>
        {skill.level === "beginner" && "👶"}
        {skill.level === "intermediate" && "👍"}
        {skill.level === "advanced" && "💪"}
      </span>
    </div>
  );
};
