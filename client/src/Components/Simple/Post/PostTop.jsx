import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import ThreeDotPopUp from "./ThreeDotPopUp";
import { ProfilePopUpContext } from "../../../Providers/ProfilePopUpProvider";
import Avatar1 from "../Avatar1";
import GroupAvatar from "../GroupAvatar";
import { baseURL, currentDate } from "../../../Constant/Constant";
import { AuthContext } from "../../../Providers/AuthProvider";
import useGetUserByEmail from "../../../customHooks/useGetUserByEmail";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader";
import axios from "axios";
import ThreeDotPopUpHome from "./ThreeDotPopUpHome";

const userImg =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const PostTop = ({
  setUpdateStatus,
  groupPost = false,
  pagePost,
  dataPost,
  authorEmail,
}) => {
  const { email, userName } = dataPost;
  const { groupName, pageName } = useParams();
  const {
    data: dataUser,
    isLoading: isLoadingUser,
    refetch: refetchUser,
  } = useQuery({
    queryKey: ["userData", email],
    queryFn: () =>
      axios
        .get(`${baseURL}/getuser/${email}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => {
          return res.data;
        }),
  });

  const { authenticationState, setAuthenticationState, handleLogOut } =
    useContext(AuthContext);
  const { setOwnProfileState, setOtherProfileState } =
    useContext(ProfilePopUpContext);
  const threeDotRef = useRef(null);
  useEffect(() => {
    const handleClickEvent = (e) => {
      e.stopPropagation();
      if (!threeDotRef?.current?.contains(e.target))
        setThreeDotPopUpState((prev) => false);
    };
    document.addEventListener("click", handleClickEvent);
    return () => document.removeEventListener("click", handleClickEvent);
  }, []);

  const [threeDotPopUpState, setThreeDotPopUpState] = useState(false);

  if (isLoadingUser) return <Loader />;

  const handleShowHideProfile = () => {
    // setOwnProfileState((prev) => true);
    setOtherProfileState((prev) => true);
  };
  return (
    <div className="flex justify-between items-center gap-4">
      {groupPost ? (
        <GroupAvatar
          separateCompo={false}
          avatarSize="size-16"
          date={dataPost?.uploadedDate}
          id={dataPost._id}
        />
      ) : (
        <Avatar1
          separateCompo={false}
          avatarSize="size-16"
          pagePost={pagePost}
          date={dataPost?.uploadedDate}
          id={dataPost?._id}
          fullName={dataUser?.fullName}
          userName={userName}
        />
      )}
      {JSON.stringify({
        email: dataPost["email"],
        password: dataPost["password"],
      }) === localStorage.getItem("authorData") && (
        <div className="threeDotComponent relative z-10" ref={threeDotRef}>
          {authenticationState && (
            <span
              className={`cursor-pointer ${
                threeDotPopUpState && "bg-grayColor/10"
              } hover:bg-grayColor/10 size-10 rounded-full grid place-items-center`}
              onClick={() => setThreeDotPopUpState((prev) => !prev)}
            >
              <BsThreeDots className="text-2xl" />
            </span>
          )}
          {pageName ||
            (threeDotPopUpState && (
              <div className="absolute top-10 right-0">
                {groupName || pageName ? (
                  <ThreeDotPopUp
                    setUpdateStatus={setUpdateStatus}
                    setThreeDotPopUpState={setThreeDotPopUpState}
                    dataPost={dataPost}
                  />
                ) : (
                  <ThreeDotPopUpHome
                    setUpdateStatus={setUpdateStatus}
                    setThreeDotPopUpState={setThreeDotPopUpState}
                    dataPost={dataPost}
                  />
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default PostTop;
