"use client";
import React from "react";
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

const Footer = () => {
  const mode = useSelector((state) => state.mode);

  return (
    <footer
      className={`${
        mode === "light" ? "bg-skill-200" : "bg-footer-100"
      }  body-font m-0`}
    >
      <div className="flex justify-center items-center">
        <h2 className={`text-4xl font-bold p-2 mt-4 ${mode==='light'?'text-intro-100':'text-white'} font-title`}>
          Ankit Bisen
        </h2>
      </div>
      <div className="flex justify-evenly items-center font-pr">
        <h6 className={`${mode==='light'?'text-gray-600':'text-white'} text-lg px-4 text-center`}>
          I am a visionary leader and passionate about technology.
        </h6>
      </div>
      <div className="container px-5 py-3 mx-auto mt-2 font-pr flex items-center sm:flex-row flex-col">
        <p className={`text-md ${mode==='light'?'text-gray-500':'text-white'} sm:ml-4 sm:pl-4 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4`}>
          © Copyright <strong>Ankit Bisen</strong>.All Rights Reserved
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link
            className="cursor-pointer"
            href="https://www.linkedin.com/in/ankit-bisen-13a55a1a7/"
            target="_blank"
          >
            <AiFillLinkedin className={`text-3xl ${mode==='light'?'text-intro-100':'text-skill-400'} `} />
          </Link>
          <Link
            className="ml-3  cursor-pointer"
            href="https://github.com/ankitbisen12"
            target="_blank"
          >
            <AiFillGithub className={`text-3xl ${mode==='light' ?'text-intro-100':'text-skill-400'}`} />
          </Link>
          <Link
            className="ml-3  cursor-pointer"
            href="https://twitter.com/ankit_bisen18"
            target="_blank"
          >
            <AiFillTwitterCircle className={`text-3xl ${mode==='light' ?'text-intro-200':'text-skill-400'} text-intro-200`} />
          </Link>
          <Link className="ml-3 text-gray-500" href=""></Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
