import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

const Projects = (props) => {
  const projects = props.projects;
  const mode = useSelector((state) => state.mode);

  return (
    <div className={`${mode === "light" ? "bg-skill-200" : "bg-skill-300"}`}>
      <div className="mx-auto max-w-7xl pt-4 px-6 sm:px-6 lg:px-8">
        <div className="px-2 py-4">
          <h1
            className={`${
              mode === "light" ? "text-intro-100" : "text-white"
            } text-4xl font-bold font-title uppercase`}
          >
            Projects
          </h1>
          <hr
            className={`my-5 ${
              mode === "light" ? "bg-intro-300" : "bg-skill-400"
            } border-0 w-[60px] h-[3px]`}
          />
          <p className={`${mode==='light'?'text-gray-800':'text-cyan-400'} md:text-xl lg:text-2xl font-pr`}>{`I have worked with different projects and I am displaying some of them here.`}</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl pt-4 pb-6 px-6 sm:px-6 lg:px-8  body-font">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 items-center">
          {projects &&
            projects.map((project) => (
              <div
                className={`${
                  mode === "light" ? "bg-white" : "bg-project-100"
                } max-w-lg mx-auto my-4 h-[90%] shadow-2xl rounded-3xl`}
                key={project._id}
              >
                <div className="w-[100%]">
                  <Image
                    className="px-4 pt-6 rounded-sm"
                    src={project.avatar}
                    alt={project.title}
                    width={400}
                    height={200}
                    layout="responsive"
                  />
                </div>
                <h2
                  className={`text-center text-3xl font-semibold mt-6 p-2 ${
                    mode === "light" ? "text-gray-900" : "text-cyan-400"
                  } font-pr`}
                >
                  {project.title}
                </h2>
                <p
                  className={`text-center font-pr lg:text-lg sm:text-md font-normal px-4 ${
                    mode === "light" ? "text-gray-600" : "text-cyan-500"
                  }`}
                >
                  {project.info}
                </p>
                <div className="flex justify-start items-end p-6">
                  <Link
                    href={project.preview}
                    target="_blank"
                    className={`text-xl ${
                      mode === "light"
                        ? "text-project-100 border-project-100"
                        : "text-cyan-500 border-cyan-400"
                    }  px-3 py-1.5 font-semibold border-2 border-cyan-400 rounded-lg`}
                  >
                    Visit Site
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
