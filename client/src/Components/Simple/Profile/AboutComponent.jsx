import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import AboutUpdatePopUp from "./AboutUpdatePopUp";

const AboutComponent = ({ dataUserData, refetchUserData }) => {
  const [aboutUpdatePopUpState, setAboutUpdatePopUpState] = useState(false);
  console.log(dataUserData);
  const info = {
    fullName: dataUserData["fullName"],
    bio: dataUserData["bio"],
    mobile: dataUserData["mobile"],
    email: dataUserData["email"],
  };
  return (
    <div className="p-5 rounded-md shadow-2xl relative border">
      <span
        className="absolute top-1 right-1 w-12 h-12 rounded-full grid place-items-center text-primaryColor hover:text-whiteColor text-3xl cursor-pointer bg-whiteColor hover:bg-primaryColor border-4 border-primaryColor"
        onClick={() => setAboutUpdatePopUpState((prev) => true)}
      >
        <MdEdit />
      </span>
      <ul className="flex flex-col gap-4">
        <li className={`flex gap-4`}>
          <span className="text-primaryColor font-bold capitalize">
            Full Name:
          </span>
          <p className="text-secondaryColor">{dataUserData["fullName"]}</p>
        </li>
        <li className={`flex gap-4`}>
          <span className="text-primaryColor font-bold capitalize">Email:</span>
          <p className="text-secondaryColor">{dataUserData["email"]}</p>
        </li>
        {dataUserData["bio"] && (
          <li className={`flex gap-4`}>
            <span className="text-primaryColor font-bold capitalize">Bio:</span>
            <p className="text-secondaryColor">{dataUserData["bio"]}</p>
          </li>
        )}
        {dataUserData["mobile"] && (
          <li className={`flex gap-4`}>
            <span className="text-primaryColor font-bold capitalize">
              Mobile:
            </span>
            <p className="text-secondaryColor">{dataUserData["mobile"]}</p>
          </li>
        )}
      </ul>

      {aboutUpdatePopUpState && (
        <AboutUpdatePopUp
          setStatus={setAboutUpdatePopUpState}
          info={info}
          title="Update Data"
          refetchUserData={refetchUserData}
        />
      )}
    </div>
  );
};

export default AboutComponent;
