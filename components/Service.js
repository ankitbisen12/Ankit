import React from "react";
import { useSelector } from "react-redux";
import { MdOutlineDesignServices } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";

const services = [
  {
    id: 1,
    title: "Web Design",
    info: "We specialize in innovative, creative, and responsive web design. Crafting digital experiences that captivate and engage, we transform ideas into visually stunning and user-friendly websites.",
    icon: <MdOutlineDesignServices className="text-6xl" />,
  },
  {
    id: 2,
    title: "Frontend Development",
    info: "Transforming visions into digital realities. Our frontend service delivers efficient, code-reusable solutions that seamlessly blend form and function, ensuring smooth, reliable web experiences that exceed expectations",
    icon: <BiCodeAlt className="text-6xl" />,
  },
];

const Service = (props) => {
  const mode = useSelector((state) => state.mode);

  return (
    <div className={`${mode === "light" ? "bg-skill-200" : "bg-skill-300"}`}>
      <div className="mx-auto max-w-7xl py-4 px-6 sm:px-6 lg:px-8">
        <div className="px-2 py-4">
          <h1
            className={`${
              mode === "light" ? "text-intro-100" : "text-white"
            } text-3xl lg:text-4xl font-bold font-title uppercase`}
          >
            Service Offers
          </h1>
          <hr
            className={`${
              mode === "light" ? "bg-intro-300" : "bg-skill-400"
            } my-5  border-0 w-[70px] h-[3px]`}
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl py-6 px-6 sm:px-6 lg:px-8 text-gray-600 ">
        <div className="container px-5 py-4 mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className={`flex items-center lg:w-3/5 mx-auto px-6 py-20 mb-10 flex-col ${
                mode === "light" ? "bg-white shadow-2xl" : "bg-service-200"
              } rounded-3xl cursor-pointer hover:scale-110 `}
            >
              <div className="bg-service-100 rounded-3xl p-2">
                {service.icon}
              </div>
              <div className="text-center mt-6 sm:mt-0 p-6">
                <h2
                  className={`${
                    mode === "light" ? "text-intro-100" : "text-white"
                  } text-xl title-font font-semibold mb-2 font-title`}
                >
                  {service.title}
                </h2>
                <p className="leading-relaxed font-pr text-lg lg:text-xl text-intro-100">
                  {`"${service.info}"`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
