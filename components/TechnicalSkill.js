"use client";
import { GoDotFill } from "react-icons/go";
import { useSelector } from "react-redux";

const TechnicalSkill = (props) => {
  const skills = props.skills;
  const mode = useSelector((state) => state.mode);
  // console.log("mode", mode);

  return (
    <div className={mode === 'light' ? 'bg-skill-200':'bg-skill-300'}>
      <div className="mx-auto max-w-7xl py-6 px-6 sm:px-6 lg:px-8">
        <div className="px-2 py-4">
          <h1 className={`${mode==='light' ?'text-intro-100':'text-white'} text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold font-title uppercase`}>
            Technical Skills
          </h1>
          <hr className={`${mode==='light' ? 'bg-intro-300':'bg-skill-400'}  my-5 border-0 w-[100px] h-[3px]`} />
        </div>
        <div className="px-2 py-4">
          {skills &&
            skills.map(
              (skill) =>
                skill.active && (
                  <span
                    key={skill._id}
                    className={`${mode==='light' ? 'text-intro-100 bg-white':'text-cyan-400'} inline-flex items-center rounded-full px-3 py-2 mr-3 mb-3 text-2xl font-medium font-skill ring-2 ring-inset ring-intro-100`}
                  >
                    <GoDotFill className="text-2xl mr-1"/> {skill.title}
                  </span>
                )
            )}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkill;
