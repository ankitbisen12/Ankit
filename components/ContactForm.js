"use client";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const ContactForm = () => {
  const mode = useSelector((state) => state.mode);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);

    await fetch("/api/addContact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    toast.success("Message submitted😎", {
      position: toast.POSITION.BOTTOM_CENTER,
    });

    reset();
  };

  return (
    <div className={`${mode === "light" ? "bg-white" : "bg-skill-300"} m-0`}>
      <div
        className={`mx-auto max-w-7xl py-6 px-6 sm:px-6 lg:px-8 font-contact `}
      >
        <div className="px-2 py-4">
          <h1
            className={`${
              mode === "light" ? "text-intro-100" : "text-white"
            } text-4xl font-bold font-title uppercase`}
          >
            Contact
          </h1>
          <hr
            className={`my-5 ${
              mode === "light" ? "bg-intro-300" : "bg-skill-400"
            } border-0 w-[60px] h-[3px]`}
          />
          <p
            className={`${
              mode === "light" ? "text-gray-600" : "text-cyan-400"
            } md:text-xl lg:text-xl`}
          >{`If you'd like to know more about my work feel free to get in touch.`}</p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-6">
          <div
            className={`md:w-2/5 lg:w-2/5 h-[80%] flex flex-col py-8 sm:px-6 md:px-8 lg:px-10  ${
              mode === "light"
                ? "shadow-xl"
                : " bg-cyan-400 hover:bg-cyan-300"
            } cursor-pointer`}
          >
            <div className="h-full flex items-center p-4 ">
              <AiOutlineMail className="text-5xl text-intro-300 mr-5 mb-3 " />
              <div className="">
                <h2 className="text-gray-900 text-3xl title-font font-medium">
                  Email
                </h2>
                <p className="text-gray-500 text-sm">ankitbisen751@gmail.com</p>
              </div>
            </div>
            <div className="h-full flex items-center p-4">
              <BsTelephone className="text-5xl text-intro-300 mr-5 mb-3" />
              <div className="">
                <h2 className="text-gray-900 text-3xl title-font font-medium">
                  Phone
                </h2>
                <p className="text-gray-500 text-sm">8085717056, 8878769631</p>
              </div>
            </div>
            <div className="h-full flex items-center p-4">
              <CiLocationOn className="text-5xl text-intro-300 mr-5 mb-3" />
              <div className="">
                <h2 className="text-gray-900 text-3xl title-font font-medium">
                  Location
                </h2>
                <p className="text-gray-500 text-sm">Gwalior,M.P,India</p>
              </div>
            </div>
          </div>
          <div
            className={`md:w-3/5 lg:w-3/5 p-3 border ${
              mode === "light" ? "border-gray-200" : "border-contact-100"
            }`}
          >
            <div className="pb-2">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        {...register("name", {
                          required: "Full Name is required",
                        })}
                        className={`block p-2 w-full py-1.5 ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none ${
                          mode === "light"
                            ? "ring-gray-300 text-gray-900"
                            : "ring-contact-100 bg-skill-300 text-white"
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="ml-1 text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-3">
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                            message: "Email not valid",
                          },
                        })}
                        className={`block p-2 w-full py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none ${
                          mode === "light"
                            ? "ring-gray-300 text-gray-900"
                            : "ring-contact-100 bg-skill-300 text-white"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="ml-1 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="col-span-full">
                    <div className="mt-2">
                      <input
                        type="text"
                        name="subject"
                        id="subjet"
                        placeholder="Subject"
                        {...register("subject", {
                          required: "Subject is required",
                          message: "Subject is required",
                        })}
                        className={`after:block p-2 w-full py-1.5 ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none ${
                          mode === "light"
                            ? "ring-gray-300 text-gray-900"
                            : "ring-contact-100 bg-skill-300 text-white"
                        }`}
                      />
                    </div>
                    {errors.subject && (
                      <p className="ml-1 text-sm text-red-500">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                  <div className="col-span-full">
                    <div className="mt-2">
                      <textarea
                        type="text"
                        name="message"
                        id="message"
                        {...register("message", {
                          required: "Message is required",
                          message: "Message is required",
                        })}
                        placeholder="Message"
                        className={`block p-2 w-full py-1.5 ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none ${
                          mode === "light"
                            ? "ring-gray-300 text-gray-900"
                            : "ring-contact-100 bg-skill-300 text-white"
                        }`}
                      />
                    </div>
                    {errors.message && (
                      <p className="ml-1 text-sm text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  <div className="col-span-full">
                    <div className="flex justify-center items-center">
                      <button
                        className={`p-3 ${
                          mode === "light" ? "bg-intro-100" : "bg-cyan-400"
                        } text-white text-lg items-centre font-medium font-pr`}
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactForm;
