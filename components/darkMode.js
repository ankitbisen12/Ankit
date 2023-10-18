"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { toggleMode } from "@/redux/reducers/modeSlice";

const DarkMode = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode);

  return (
    <div>
      {mode === "light" ? (
        <BsFillSunFill
          className="text-3xl cursor-pointer text-amber-400 ml-2"
          onClick={() => dispatch(toggleMode())}
        />
      ) : (
        <BsFillMoonFill
          className="text-2xl cursor-pointer text-cyan-400 ml-2"
          onClick={() => dispatch(toggleMode())}
        />
      )}
    </div>
  );
};

export default DarkMode;
