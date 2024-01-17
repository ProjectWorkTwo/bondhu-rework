import React, { useContext, useRef } from "react";
import { baseURL, imgbbBaseURL } from "../../../Constant/Constant";
import { FaCamera } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { ProfilePopUpContext } from "../../../Providers/ProfilePopUpProvider";
import {
  useGetGroupAdminData,
  useGetGroupInfo,
  useGroupMemberOrNot,
} from "../../../customHooks/useGetGroupData";

const coverImg = `https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

const GroupCover = () => {
  const { groupName } = useParams();
  const { dataGroupInfo, isLoadingGroupInfo, refetchGroupInfo } =
    useGetGroupInfo(groupName);

  const coverImgRef = useRef(null);
  const { setOwnProfileState, setOtherProfileState } =
    useContext(ProfilePopUpContext);

  const {
    dataGroupMemberOrNot,
    isLoadingGroupMemberOrNot,
    refetchGroupMemberOrNot,
  } = useGroupMemberOrNot(groupName);

  const { dataGroupAdmin, isLoadingGroupAdmin, refetchGroupAdmin } =
    useGetGroupAdminData(groupName);

  if (isLoadingGroupInfo || isLoadingGroupMemberOrNot || isLoadingGroupAdmin)
    return "loading...";

  const handleShowHideProfile = () => {
    // setOwnProfileState((prv) => true);
    setOtherProfileState((prv) => true);
  };

  const isAdmin = (data) => {
    return (
      JSON.stringify({ email: data["email"], password: data["password"] }) ===
      localStorage.getItem("authorData")
    );
  };

  const handleCoverImgChange = () => {
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
        axios
          .put(
            `${baseURL}/updategroup/${groupName}`,
            {
              groupCover: res?.data?.data?.url,
            },
            {
              headers: {
                ...JSON.parse(localStorage.getItem("authorData")),
              },
            }
          )
          .then((res) => {
            refetchGroupInfo();
            return Swal.fire({
              title: "Success",
              text: "Group cover updated successfully!",
              icon: "success",
            });
          });
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
    <section className="w-full rounded-b-lg flex flex-col overflow-hidden">
      <div className="w-full bg-primaryColor px-3 py-2 text-whiteColor text-base md:text-xl font-semibold flex justify-between items-center gap-2">
        <span className="w-full">
          Group Managed By
          <span
            className="w-full pl-2 underline font-extrabold cursor-pointer"
            onClick={handleShowHideProfile}
          >
            {dataGroupAdmin?.fullName}
          </span>
        </span>
        {isAdmin(dataGroupAdmin) && (
          <form className="p-2" onChange={handleCoverImgChange}>
            <input
              type="file"
              name="profileCover"
              id="profileCover"
              hidden
              ref={coverImgRef}
            />
            <label
              htmlFor="profileCover"
              className="flex-shrink-0 size-10 rounded-full border-2 border-primaryColor grid place-items-center bg-whiteColor hover:bg-primaryColor text-primaryColor hover:text-whiteColor cursor-pointer"
            >
              <FaCamera className="text-xl" />
            </label>
          </form>
        )}
      </div>
      <div className={`w-full h-[450px] overflow-hidden`}>
        <img
          src={dataGroupInfo?.groupCover || coverImg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default GroupCover;
