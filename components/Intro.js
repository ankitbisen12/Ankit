import React, { useState } from "react";
import Image from "next/image";
import img from "../assests/intro.jpg";
import { TypeAnimation } from "react-type-animation";
import { useSelector } from "react-redux";

const Intro = () => {
  const [hovered, setHovered] = useState(true);
  const mode = useSelector((state) => state.mode);

  const imageStyles = {
    transform: hovered ? "rotate(-15deg)" : "rotate(0)",
    transition: "transform 0.3s ease", // Add a transition for smooth animation
  };

  return (
    <div className={`${mode === "light" ? "bg-white" : "bg-skill-300"}`}>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-12 lg:gap-y-16 px-4 py-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="grid grid-cols-1">
          <h3
            className={`text-2xl font-semibold ${
              mode === "light" ? "text-intro-100" : "text-skill-400"
            } font-intro-100 mb-4`}
          >
            Hey, I Am
          </h3>
          <h2
            className={`text-5xl md:text-5xl lg:text-7xl font-extrabold ${
              mode === "light" ? "text-intro-100" : "text-white"
            } font-intro-100 font-title text-title`}
            style={{
              textShadow:
                mode === "dark"
                  ? "0 0 5px #fff, 0 0 8px #fff, 0 0 10px rgb(255 0 153), 0 0 15px rgb(255 0 153), 0 0 30px rgb(255 0 153), 0 0 40px rgb(255 0 153)"
                  : "none",
            }}
          >
            Ankit Bisen
          </h2>
          <p
            className={`mt-2 text-2xl ${
              mode === "light" ? "text-intro-100" : "text-white"
            }`}
          >
            {`A `}
            <TypeAnimation
              sequence={[
                "Software developer",
                1000,
                "Frontend developer",
                1000,
                "Full stack developer",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              className={`${
                mode === "light" ? "text-intro-100" : "text-cyan-400"
              }`}
            />
          </p>
        </div>
        <div
          className="grid grid-cols-1 grid-rows-1 p-2 gap-4 sm:gap-6 lg:gap-14 rounded-2xl w-[200px] sm:w-[250px] md:w-[400px] lg:w-[400px] ml-14"
          style={{
            backgroundImage:
              "linear-gradient(to right top, #4db5ff, #52afff, #5ba9ff, #65a2ff, #719bff, #8792fc, #9c88f7, #b17cee, #cc6ada, #e256c2, #f141a5, #f92c85)",
          }}
        >
          <Image
            src={img}
            alt="intro img"
            width={200}
            height={250}
            onMouseEnter={() => setHovered(false)}
            onMouseLeave={() => setHovered(true)}
            style={imageStyles}
            className="rounded-2xl sm:w-full md:w-full lg:w-full xs:w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
