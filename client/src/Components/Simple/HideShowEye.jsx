import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const HideShowEye = ({ showHideState, setShowHideState, changeData }) => {
  return (
    <span
      className="flex-shrink-0 w-10 h-10 rounded-full grid place-items-center hover:bg-grayColor/20 text-primaryColor cursor-pointer text-xl commonAnim"
      onClick={() =>
        setShowHideState((prev) => ({
          ...prev,
          changeData: !prev[changeData],
        }))
      }
    >
      {showHideState ? <FaEye /> : <FaEyeSlash />}
    </span>
  );
};

export default HideShowEye;
