import React from "react";

const ProfileInfoContainer = ({ children }) => {
  return (
    <div className="w-[90%] max-w-[440px] mx-auto bg-whiteColor rounded-md shadow-lg -mt-28 mb-5 relative z-10 flex flex-col justify-center items-center gap-3 px-4 pb-4 border">
      {children}
    </div>
  );
};

export default ProfileInfoContainer;
