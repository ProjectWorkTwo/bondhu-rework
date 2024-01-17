import React, { useRef } from "react";
import { baseURL, bgDefault, imgbbBaseURL } from "../../../Constant/Constant";
import { FaCamera } from "react-icons/fa";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useGetUserByUserName from "../../../customHooks/useGetUserByUserName";
import Loader from "../Loader";
const coverImg =
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ProfileCover = () => {
  const { userName } = useParams();
  const { dataUserData, isLoadingUserData, refetchUserData } =
    useGetUserByUserName(userName);
  const coverImgRef = useRef(null);
  if (isLoadingUserData) return <Loader />;
  const { profileCover } = dataUserData;
  const handleChangeCoverImg = (e) => {
    axios
      .post(
        `${imgbbBaseURL}?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        { image: coverImgRef?.current?.files[0] },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        if (!res?.data?.data?.url) return;
        axios.put(
          `${baseURL}/updateuserByUserName/${userName}`,
          {
            profileCover: res?.data?.data?.url,
          },
          {
            headers: JSON.parse(localStorage.getItem("authorData") || {}),
          }
        );
      })
      .then((res) => {
        refetchUserData();
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
    <section
      className={`relative w-full h-[350px] overflow-hidden rounded-bl-lg rounded-br-lg`}
    >
      <img src={profileCover || coverImg} alt="" className="w-full h-full object-cover" />
      <form onChange={handleChangeCoverImg}>
        <input
          type="file"
          name="profileCover"
          id="profileCover"
          hidden
          ref={coverImgRef}
        />
        <label
          htmlFor="profileCover"
          className="size-10 rounded-full border-2 border-primaryColor grid place-items-center absolute top-1 bottom-auto md:top-auto md:bottom-1 right-1 bg-whiteColor hover:bg-primaryColor text-primaryColor hover:text-whiteColor cursor-pointer"
        >
          <FaCamera className="text-xl" />
        </label>
      </form>
    </section>
  );
};

export default ProfileCover;
