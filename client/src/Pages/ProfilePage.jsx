import React from "react";
import { useParams } from "react-router-dom";
import hidePopUp from "../Components/CustomFunction/hidePopUp";
import ProfileTop from "../Components/Simple/Profile/ProfileTop";
import ProfileContent from "../Components/Simple/Profile/ProfileContent";
import CreatePost from "../Components/Simple/CreatePost";

const ProfilePage = () => {
  const { userName } = useParams();
  return (
    <section className="w-[95%] max-w-6xl flex flex-col">
      <ProfileTop />
      <section className="flex flex-col gap-5 py-5 w-full max-w-2xl mx-auto">
        {/* {isAdmin(dataPageAdmin) <CreatePost privacy={false} />} */}
        <ProfileContent />
      </section>
    </section>
  );
};

export default ProfilePage;
