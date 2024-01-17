import React, { createContext, useState } from "react";

export const ProfilePopUpContext = createContext(null);

const ProfilePopUpProvider = ({ children }) => {
  const [ownProfileState, setOwnProfileState] = useState(false);
  const [otherProfileState, setOtherProfileState] = useState(false);
  const values = {
    ownProfileState,
    setOwnProfileState,
    otherProfileState,
    setOtherProfileState,
  };
  return (
    <ProfilePopUpContext.Provider value={values}>
      {children}
    </ProfilePopUpContext.Provider>
  );
};

export default ProfilePopUpProvider;
