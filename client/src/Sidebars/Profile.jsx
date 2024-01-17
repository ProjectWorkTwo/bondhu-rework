import React, { useEffect, useRef } from "react";
import ScrollBar from "../Components/Simple/ScrollBar";
import ProfileTop from "../Components/Simple/Profile/ProfileTop";
import ProfileContent from "../Components/Simple/Profile/ProfileContent";
import hidePopUp from "../Components/CustomFunction/hidePopUp";

const Profile = ({ profileState, setProfileState, author }) => {
  const boxRef = useRef(null);
  const activeStyle =
    (author === "own" ? `translate-x-0 opacity-100` : `translate-x-0`) +
    " opacity-100";
  const diactiveStyle =
    (author === "own" ? `-translate-x-full` : `translate-x-full`) +
    " opacity-0";
  return (
    <section
      className={`fixed top-0 left-0 z-[9999] popupWrapper ${
        profileState ? activeStyle : diactiveStyle
      } w-full h-screen commonAnim`}
      onClick={(e) => hidePopUp(e, boxRef, setProfileState)}
    >
      <div
        className={`absolute ${
          author === "own" ? "left-0" : "right-0"
        } top-0 w-[95%] max-w-[650px] h-screen bg-whiteColor shadow-2xl`}
        ref={boxRef}
      >
        <ScrollBar>
          <ProfileTop />
          <ProfileContent />
        </ScrollBar>
      </div>
    </section>
  );
};

export default Profile;
