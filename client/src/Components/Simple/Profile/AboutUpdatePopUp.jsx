import React, { useRef, useState } from "react";
import ScrollBar from "../ScrollBar";
import hidePopUp from "../../CustomFunction/hidePopUp";
import { baseURL, countries, languages } from "../../../Constant/Constant";
import axios from "axios";

const AboutUpdatePopUp = ({ info, setStatus, title, refetchUserData }) => {
  const boxRef = useRef(null);
  const [userData, setUserData] = useState({
    ...info,
  });
  console.log(info);
  const email = info["email"];
  console.log(email);

  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // delete info["email"];
    console.log(userData);

    console.log(`${baseURL}/updateuser/${email}`);

    axios
      .put(
        `${baseURL}/updateuser/${email}`,
        { ...userData },
        {
          headers: {
            ...JSON.parse(localStorage.getItem("authorData") || "{}"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        refetchUserData();
        setStatus((prev) => false);
      });
  };

  return (
    <section
      className="popupWrapper"
      onClick={(e) => hidePopUp(e, boxRef, setStatus, true)}
    >
      <div
        className="flex flex-col gap-1 bg-whiteColor shadow-2xl rounded-md w-[95vw] max-w-[450px] h-auto max-h-[95vh] p-5"
        ref={boxRef}
      >
        <h2 className="text-center capitalize">{title}</h2>
        <form
          className="w-full h-full flex flex-col gap-4 overflow-hidden"
          onSubmit={handleSubmit}
        >
          <ScrollBar>
            <div className="h-full flex flex-col gap-2 px-2">
              <input
                type="text"
                name="fullName"
                className="input1"
                placeholder="Full Name..."
                value={userData["fullName"]}
                onChange={handleChange}
              />
              <textarea
                name="bio"
                className="input1 min-h-[80px] md:min-h-[100px] resize-none"
                placeholder="Bio..."
                value={userData["bio"]}
                onChange={handleChange}
              />
              <input
                type="number"
                name="mobile"
                className="input1"
                placeholder="Mobile..."
                value={userData["mobile"]}
                onChange={handleChange}
              />
            </div>
          </ScrollBar>
          <button type="submit" className="btnFill1">
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default AboutUpdatePopUp;
