import React, { useRef } from "react";

const profile =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D";

const ProfilePic = ({ profileImg }) => {
  return (
    <div className="size-[200px] rounded-full border-[5px] border-primaryColor overflow-hidden cursor-pointer">
      <img
        src={profileImg || profile}
        alt=""
        className="w-full h-full object-cover select-none"
      />
    </div>
  );
};

export default ProfilePic;
