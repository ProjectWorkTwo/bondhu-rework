import React, { useContext } from "react";
import Profile from "./Profile";
import { ProfilePopUpContext } from "../Providers/ProfilePopUpProvider";

const OtherProfile = () => {
  const { otherProfileState, setOtherProfileState } =
    useContext(ProfilePopUpContext);
  return (
    <Profile
      profileState={otherProfileState}
      setProfileState={setOtherProfileState}
      author="other"
    />
  );
};

export default OtherProfile;
