import React, { useRef } from "react";
import ProfilePic from "./ProfilePic";
import { FaCamera } from "react-icons/fa";
import ProfileInfoContainer from "../Group/ProfileInfoContainer";
import { imgbbBaseURL } from "../../../Constant/Constant";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import useGetUserByUserName from "../../../customHooks/useGetUserByUserName";

const ProfileTopInfo = () => {
  const { userName } = useParams();
  const profileImgRef = useRef(null);
  const { dataUserData, isLoadingUserData, refetchUserData } =
    useGetUserByUserName(userName);
  if (isLoadingUserData) return <Loader />;
  const { fullName, bio } = dataUserData;
  console.log(dataUserData);
  const handleChangeProfileImg = (e) => {
    axios
      .post(
        `${imgbbBaseURL}?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        { image: profileImgRef?.current?.files[0] },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        // if (!email) return;
        // console.log(res?.data?.data?.url);
      })
      .catch((error) =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error?.response?.data?.message || error.message,
        })
      );
  };
  return (
    <ProfileInfoContainer>
      <div className="-mt-[100px] relative">
        <ProfilePic />
        <form onChange={handleChangeProfileImg}>
          <input
            type="file"
            name="profilePic"
            id="profilePic"
            hidden
            ref={profileImgRef}
          />
          <label
            htmlFor="profilePic"
            className="size-10 rounded-full border-4 border-primaryColor grid place-items-center absolute bottom-0 right-0 -translate-x-1/4 -translate-y-1/4 bg-whiteColor hover:bg-primaryColor text-primaryColor hover:text-whiteColor cursor-pointer"
          >
            <FaCamera className="text-xl" />
          </label>
        </form>
      </div>
      <div className="w-full p-4 flex flex-col justify-center items-center gap-2">
        <h1 className="text-center capitalize">{fullName}</h1>
        <span className="btnFill1 w-auto">{userName}</span>
        <p className="text-center text-grayColor text-sm leading-normal">
          {bio}
        </p>
        {/* <button className="btnFill1 w-auto">Send Friend Request</button> */}
      </div>
    </ProfileInfoContainer>
  );
};

export default ProfileTopInfo;
