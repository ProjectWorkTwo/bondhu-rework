import React from "react";
import { IoCopySharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { baseURL } from "../../../Constant/Constant";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import useGetHomePosts from "../../../customHooks/useGetHomePosts";
import Loader from "../Loader";

const ThreeDotPopUpHome = ({
  setUpdateStatus,
  setThreeDotPopUpState,
  dataPost,
}) => {
  const { groupName } = useParams();
  const { dataHomePost, isLoadingHomePost, refetchHomePost } =
    useGetHomePosts(groupName);

  if (isLoadingHomePost) return <Loader />;

  const url = `${location.origin}/post/${dataPost._id}`;
  const handleCopyLink = () => navigator.clipboard.writeText(url);
  const handleDelete = () => {
    axios
      .delete(`${baseURL}/deletepost/${dataPost._id}`, {
        headers: {
          ...JSON.parse(localStorage.getItem("authorData") || "{}"),
        },
      })
      .then((res) => {
        if (res.data) {
          refetchHomePost();
          return Swal.fire({
            title: "Success",
            text: "Post deleted successfully!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="p-2 flex flex-col bg-whiteColor divide-y-2 divide-primaryColor border rounded-md shadow-lg w-[200px]">
      {/* <div
        className="threeDotPopupButton"
        onClick={() => {
          handleCopyLink();
          setThreeDotPopUpState((prev) => false);
        }}
      >
        <IoCopySharp className="text-xl" /> Copy Link
      </div> */}
      <div
        className="threeDotPopupButton"
        onClick={() => {
          setThreeDotPopUpState((prev) => false);
          setUpdateStatus((prev) => !prev);
        }}
      >
        <MdEdit className="text-xl" /> Edit
      </div>
      <div
        className="threeDotPopupButton"
        onClick={() => {
          handleDelete();
          setThreeDotPopUpState((prev) => !prev);
        }}
      >
        <AiFillDelete className="text-xl" /> Delete
      </div>
    </div>
  );
};

export default ThreeDotPopUpHome;
