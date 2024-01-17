import React, { useState } from "react";
import Posts from "../Post/Posts";
import CreatePost from "../CreatePost";
import AboutComponent from "./AboutComponent";
import Friends from "./Friends";
import Post from "../Post/Post";
import userGetPostByUserName from "../../../customHooks/userGetPostByUserName";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import PostHome from "../Post/PostHome";
import useGetUserByUserName from "../../../customHooks/useGetUserByUserName";

const userData = {
  fullName: "Full Name",
  language: "en",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus ipsum quis ligula vulputate, at auctor orci ullamcorper.",
  email: "testemail@gmail.com",
  country: "Fakeland",
  mobile: "+1234567890",
  city: "Faketown",
  school: "Fake High School",
  college: "Fake College",
  university: "Fake University",
};
const ProfileContent = () => {
  const { userName } = useParams();
  const { dataUserPost, isLoadingUserPost, refetchUserPost } =
    userGetPostByUserName(userName);
  const { dataUserData, isLoadingUserData, refetchUserData } =
    useGetUserByUserName(userName);
  const [tabTitles, setTabs] = useState({
    posts: { isActive: true },
    about: { isActive: false },
    // friends: { isActive: false },
  });
  const [currentActiveTab, setCurrentActiveTab] = useState("posts");

  if (isLoadingUserPost) return <Loader />;
  const handleSelectTab = (e) => {
    const activeTab = e.target.getAttribute("name");
    setCurrentActiveTab((prev) => activeTab);
    const updatedTabs = {};

    Object.keys(tabTitles).forEach((tab) => {
      updatedTabs[tab] = { isActive: false };
    });

    updatedTabs[activeTab] = { isActive: true };

    setTabs((prev) => updatedTabs);
  };

  const isAdmin = (data) => {
    return (
      JSON.stringify({ email: data["email"], password: data["password"] }) ===
      localStorage.getItem("authorData")
    );
  };
  return (
    <>
      <div className="mx-auto w-[90%] flex flex-wrap gap-4 justify-between items-center py-3 border-b-2 border-primaryColor">
        {Object.keys(tabTitles).map((item, i) => (
          <div
            key={i}
            className={`${
              tabTitles[item]["isActive"]
                ? "bg-primaryColor text-whiteColor scale-90 border-primaryColor"
                : "bg-whiteColor text-primaryColor scale-100"
            } flex-1 w-[150px] hover:bg-primaryColor hover:text-whiteColor rounded-md cursor-pointer select-none px-4 py-2 text-center capitalize border hover:border-primaryColor hover:scale-90 commonAnim`}
            name={item}
            onClick={handleSelectTab}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="w-[90%] mx-auto flex flex-col gap-5 py-5">
        {currentActiveTab === "posts" && (
          <>
            {<>{isAdmin(dataUserData) && <CreatePost />}</>}
            <Posts>
              {dataUserPost?.map((item) => (
                <PostHome
                  key={item._id}
                  id={item._id}
                  refetchAll={refetchUserPost}
                />
              ))}
            </Posts>
          </>
        )}
        {currentActiveTab === "about" && (
          <AboutComponent
            dataUserData={dataUserData}
            refetchUserData={refetchUserData}
          />
        )}
        {/* {currentActiveTab === "friends" && <Friends />} */}
      </div>
    </>
  );
};

export default ProfileContent;
