import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { MdKeyboardArrowRight } from "react-icons/md";

const About = (props) => {
  const mode = useSelector((state) => state.mode);
  const about = props.about[0];

  return (
    <div className={mode === "light" ? "bg-skill-200" : "bg-skill-300"}>
      <div className="mx-auto max-w-7xl py-6 px-6 sm:px-6 lg:px-8">
        <div className="px-2 py-4">
          <h1
            className={`${
              mode === "light" ? "text-intro-100" : "text-white"
            } text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold font-title uppercase`}
          >
            About Me
          </h1>
          <hr
            className={`${
              mode === "light" ? "bg-intro-300" : "bg-skill-400"
            }  my-5 border-0 w-[100px] h-[3px]`}
          />
          <p
            className={`${
              mode === "light" ? "text-gray-900" : "text-cyan-400"
            } md:text-lg lg:text-lg font-pr`}
          >
            {about.intro}
          </p>
        </div>
        <div className="px-2 py-4 font-pr">
          <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded-custom h-[90%]"
                alt="hero"
                src="/intro.jpg"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 pl-2 flex flex-col md:items-start md:text-left xs:text-left">
              <h1
                className={`text-3xl font-extrabold ${
                  mode === "light" ? "text-intro-100" : "text-white"
                } `}
              >
                Full Stack & Software Developer
              </h1>
              <p
                className={`text-xl ${
                  mode === "light" ? "text-gray-700" : "text-cyan-500"
                } `}
              >
                {about.shortdesc}
              </p>
              <div className="flex text-left mt-5" >
                <MdKeyboardArrowRight
                  className={`text-3xl mr-1 ${
                    mode === "light" ? "text-intro-300" : "text-skill-400"
                  } `}
                />
                <h4
                  className={`text-xl ${
                    mode === "light" ? "text-gray-800" : "text-cyan-400"
                  }`}
                >
                  <strong>Email Id:</strong>
                  {about.email}
                </h4>
              </div>
              <div className="flex text-left mt-5">
                <MdKeyboardArrowRight
                  className={`text-3xl mr-1 ${
                    mode === "light" ? "text-intro-300" : "text-skill-400"
                  } `}
                />
                <h4
                  className={`text-xl ${
                    mode === "light" ? "text-gray-800" : "text-cyan-400"
                  }`}
                >
                  <strong>Degree:</strong>
                  {about.degree}
                </h4>
              </div>
              <div className="flex text-left mt-5">
                <MdKeyboardArrowRight
                  className={`text-3xl mr-1 ${
                    mode === "light" ? "text-intro-300" : "text-skill-400"
                  } `}
                />
                <h4
                  className={`text-xl ${
                    mode === "light" ? "text-gray-800" : "text-cyan-400"
                  }`}
                >
                  <strong>City:</strong>
                  {about.city}
                </h4>
              </div>
              <div className="flex text-left mt-5">
                <MdKeyboardArrowRight
                  className={`text-3xl mr-1 ${
                    mode === "light" ? "text-intro-300" : "text-skill-400"
                  } `}
                />
                <h4
                  className={`text-xl ${
                    mode === "light" ? "text-gray-800" : "text-cyan-400"
                  }`}
                >
                  <strong>Soft Skills:</strong>
                  {about.softSkill}
                </h4>
              </div>
              <div className="flex text-left mt-5">
                <MdKeyboardArrowRight
                  className={`text-3xl mr-1 ${
                    mode === "light" ? "text-intro-300" : "text-skill-400"
                  } `}
                />
                <h4
                  className={`text-xl ${
                    mode === "light" ? "text-gray-800" : "text-cyan-400"
                  }`}
                >
                  <strong>Languages: </strong>
                  {about.lang}
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* <div
            className="container px-2 py-2 mx-auto flex flex-wrap"
          >
            <div className="lg:w-2/5  mb-2 lg:mb-0 overflow-hidden w-[250px] sm:w-[250px] md:w-[400px]">
              <Image
                alt="feature"
                width={200}
                height={200}
                className="w-full rounded-custom"
                src="/intro.jpg"
              />
            </div>
            <div className="flex flex-col flex-wrap lg:py-2 lg:w-3/5 lg:pl-12 lg:text-left">
              <h1 className={`text-3xl font-extrabold ${mode==='light'?'text-intro-100':'text-white'} `}>
                Full Stack & Software Developer
              </h1>
              <p className={`text-xl ${mode==='light'?'text-gray-700':'text-cyan-500'} `}>{about.shortdesc}</p>
              <div className="flex items-center mt-5">
                <MdKeyboardArrowRight className={`text-3xl mr-1 ${mode==='light' ?'text-intro-300':'text-skill-400'} `} />
                <h4 className={`text-xl ${mode==='light'?'text-gray-800':'text-cyan-400'}`}>
                  <strong >Email Id:</strong>
                  {about.email}
                </h4>
              </div>
              <div className="flex items-center mt-5">
                <MdKeyboardArrowRight className={`text-3xl mr-1 ${mode==='light' ?'text-intro-300':'text-skill-400'} `} />
                <h4 className={`text-xl ${mode==='light'?'text-gray-800':'text-cyan-400'}`}>
                  <strong >Degree:</strong>
                  {about.degree}
                </h4>
              </div>
              <div className="flex items-center mt-5">
                <MdKeyboardArrowRight className={`text-3xl mr-1 ${mode==='light' ?'text-intro-300':'text-skill-400'} `}/>
                <h4 className={`text-xl ${mode==='light'?'text-gray-800':'text-cyan-400'}`}>
                  <strong>City:</strong>
                  {about.city}
                </h4>
              </div>
              <div className="flex items-center mt-5">
                <MdKeyboardArrowRight className={`text-3xl mr-1 ${mode==='light' ?'text-intro-300':'text-skill-400'} `} />
                <h4 className={`text-xl ${mode==='light'?'text-gray-800':'text-cyan-400'}`}>
                  <strong>Soft Skills:</strong>
                  {about.softSkill}
                </h4>
              </div>
              <div className="flex items-center mt-5">
                <MdKeyboardArrowRight className={`text-3xl mr-1 ${mode==='light' ?'text-intro-300':'text-skill-400'} `} />
                <h4 className={`text-xl ${mode==='light'?'text-gray-800':'text-cyan-400'}`}>
                  <strong>Languages: </strong>
                  {about.lang}
                </h4>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default About;
