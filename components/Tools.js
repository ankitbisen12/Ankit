import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

const Tools = (props) => {
  const tools = props.tools;
  const mode = useSelector(state=>state.mode);

  return (
    <div className={mode === "light" ? "bg-white" : "bg-skill-300"}>
      <div className="mx-auto max-w-7xl py-6 px-6 sm:px-6 lg:px-8">
        <div className="px-2 py-4">
          <h1 className={`${
              mode === "light" ? "text-intro-100" : "text-white"
            } text-4xl font-bold font-title uppercase`}>Tools</h1>
          <hr className={`my-5 ${
              mode === "light" ? "bg-intro-300" : "bg-skill-400"
            } border-0 w-[70px] h-[3px]`} />
        </div>
      </div>
      <div className="mx-auto max-w-7xl py-6 px-6 sm:px-6 lg:px-8  body-font">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
          {tools &&
            tools.map((tool) => (
              <div
                key={tool._id}
                className={`max-w-lg mx-auto my-4 ${mode==='light'?'bg-white border-blue-950 border-b-4':'bg-skill-300 border-2 border-b-4 border-cyan-400'} px-12 py-10 shadow-xl cursor-pointer`}
              >
                <Image src={tool.avatar} alt="image" width={180} height={204} />
                <p className={`${mode==='light'?'text-black':'text-cyan-400'} text-center text-lg font-semibold`}>{tool.title}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
