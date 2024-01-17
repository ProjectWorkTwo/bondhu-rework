import React, { useContext } from "react";
import Profile from "./Profile";
import { ProfilePopUpContext } from "../Providers/ProfilePopUpProvider";

const OwnProfile = ({ author }) => {
  const { ownProfileState, setOwnProfileState } =
    useContext(ProfilePopUpContext);
  return (
    <Profile
      profileState={ownProfileState}
      setProfileState={setOwnProfileState}
      author="own"
    />
  );
};

export default OwnProfile;
