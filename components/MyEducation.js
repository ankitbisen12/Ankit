"use client";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const MyEducation = (props) => {
  // console.log(props.education);
  const mode = useSelector((state) => state.mode);

  return (
    // <div className="text-gray-400 bg-white">
    <div className={mode === "light" ? "bg-white" : "bg-skill-300"}>
      <div className="mx-auto max-w-7xl py-6 px-6 sm:px-6 lg:px-8">
        <div className="px-2 py-4">
          <h1
            className={`${
              mode === "light" ? "text-intro-100" : "text-white"
            } text-4xl font-bold font-title uppercase`}
          >
            Education
          </h1>
          <hr
            className={`${
              mode === "light" ? "bg-intro-300" : "bg-skill-400"
            } my-5  border-0 w-[70px] h-[3px]`}
          />
        </div>
      </div>
      <div className="container px-10 py-4 flex flex-wrap m-auto font-pr">
        {props.education &&
          props.education.map((ed) => (
            <div
              className="flex relative pt-5 pb-10 sm:items-center mx-2 lg:mx-20"
              key={ed._id}
            >
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div
                  className={`h-full w-1 ${
                    mode === "light" ? "bg-gray-800" : "bg-gray-600"
                  } pointer-events-none`}
                />
              </div>
              <div
                className={`${
                  mode === "light" ? "bg-intro-200" : "bg-cyan-400"
                } flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center text-white relative z-10 title-font font-medium text-sm`}
              ></div>
              <div className="flex-grow pl-2 flex sm:items-center items-start flex-col sm:flex-row">
                <div
                  className={`${
                    mode === "light" ? "bg-gray-800" : "bg-skill-400"
                  } flex-shrink-0 w-24 h-24 text-white rounded-full inline-flex items-center justify-center font-semibold`}
                >
                  {ed.course}
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <span className={`inline-flex items-center ${mode==='light'?'bg-gray-200':'bg-gray-400'} px-3 py-1 text-lg text-gray-900`}>
                    {ed.startedAt}-{ed.completedAt}
                  </span>
                  <h2
                    className={`${
                      mode === "light" ? "text-gray-800" : "text-cyan-400"
                    } sm:text-xl lg:text-2xl font-semibold py-2`}
                  >
                    {ed.institute}
                  </h2>
                  <p
                    className={`${
                      mode === "light" ? "text-gray-700" : "text-skill-500"
                    } text-xl  leading-relaxed `}
                  >
                    {ed.info}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyEducation;
