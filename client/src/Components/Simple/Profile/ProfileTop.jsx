import React from "react";
import ProfileCover from "./ProfileCover";
import ProfileTopInfo from "./ProfileTopInfo";

const ProfileTop = () => {
  return (
    <section className="w-full">
      <ProfileCover />
      <ProfileTopInfo />
    </section>
  );
};

export default ProfileTop;
