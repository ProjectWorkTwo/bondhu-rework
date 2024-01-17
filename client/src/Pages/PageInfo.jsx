import React, { useContext, useRef, useState } from "react";
import ProfileInfoContainer from "../Components/Simple/Group/ProfileInfoContainer";
import ListOfAvatarPopUp from "../Components/Simple/ListOfAvatarPopUp";
import { FaCamera } from "react-icons/fa6";
import ProfilePic from "../Components/Simple/Profile/ProfilePic";
import {
  useGetPageAdminData,
  useGetPageInfo,
  useGetPageMembers,
  usePageMemberOrNot,
} from "../customHooks/useGetPageData";
import { useParams } from "react-router-dom";
import Loader from "../Components/Simple/Loader";
import Swal from "sweetalert2";
import axios from "axios";
import { baseURL, imgbbBaseURL } from "../Constant/Constant";
import UpdatePage from "../Components/Simple/UpdatePage";
import { UpdateGroupPageFormContext } from "../Providers/UpdateGroupPageFormProvider";

const PageInfo = () => {
  const { pageName } = useParams();
  const pageProfilePicRef = useRef(null);
  const { dataPageAdmin, isLoadingPageAdmin, refetchPageAdmin } =
    useGetPageAdminData(pageName);
  const { dataPageInfo, isLoadingPageInfo, refetchPageInfo } =
    useGetPageInfo(pageName);

  const {
    dataPageMemberOrNot,
    isLoadingPageMemberOrNot,
    refetchPageMemberOrNot,
  } = usePageMemberOrNot(pageName);

  const { dataPageMembers, isLoadingPageMembers, refetchPageMembers } =
    useGetPageMembers(pageName);

  const [memberListStatus, setMemberListStatus] = useState(false);
  const isAdmin = (data) => {
    return (
      JSON.stringify({ email: data["email"], password: data["password"] }) ===
      localStorage.getItem("authorData")
    );
  };
  const { updateGroupPageFormState, setUpdateGroupPageFormState } = useContext(
    UpdateGroupPageFormContext
  );
  if (isLoadingPageAdmin || isLoadingPageInfo || isLoadingPageMembers)
    return <Loader />;

  const { bio, email, pageCover, pageProfilePic } = dataPageInfo;

  const handleChagePageImg = () => {
    axios
      .post(
        `${imgbbBaseURL}?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        { image: pageProfilePicRef?.current?.files[0] },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        axios
          .put(
            `${baseURL}/updatePage/${pageName}`,
            {
              pageProfilePic: res?.data?.data?.url,
            },
            {
              headers: {
                ...JSON.parse(localStorage.getItem("authorData")),
              },
            }
          )
          .then((res) => {
            refetchPageInfo();
            return Swal.fire({
              title: "Success",
              text: "Page cover updated successfully!",
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

  const handleUpdate = () => {
    setUpdateGroupPageFormState((prev) => "page");
  };
  const handleFollowUnFollow = () => {
    if (dataPageMemberOrNot) {
      axios
        .delete(`${baseURL}/leavepagemember/${pageName}`, {
          headers: {
            ...JSON.parse(localStorage.getItem("authorData") || {}),
          },
        })
        .then((res) => {
          refetchPageMemberOrNot();
          return Swal.fire({
            title: "Success",
            text: "Unfollowed successfully!",
            icon: "success",
          });
        });
    } else {
      axios
        .post(
          `${baseURL}/addpagemember/${pageName}`,
          {},
          {
            headers: {
              ...JSON.parse(localStorage.getItem("authorData") || {}),
            },
          }
        )
        .then((res) => {
          refetchPageMemberOrNot();
          return Swal.fire({
            title: "Success",
            text: "Joined successfully",
            icon: "success",
          });
        });
    }
  };
  return (
    <ProfileInfoContainer>
      <div className="-mt-[100px] relative">
        <ProfilePic profileImg={pageProfilePic} />
        {isAdmin(dataPageAdmin) && (
          <form onChange={handleChagePageImg}>
            <input
              type="file"
              name="profilePic"
              id="profilePic"
              hidden
              ref={pageProfilePicRef}
              accept="image/*"
            />
            <label
              htmlFor="profilePic"
              className="size-10 rounded-full border-4 border-primaryColor grid place-items-center absolute bottom-0 right-0 -translate-x-1/4 -translate-y-1/4 bg-whiteColor hover:bg-primaryColor text-primaryColor hover:text-whiteColor cursor-pointer"
            >
              <FaCamera className="text-xl" />
            </label>
          </form>
        )}
      </div>
      <div className="w-full p-4 flex flex-col justify-center items-center gap-2">
        <h1 className="text-center capitalize">
          {pageName.split("-").join(" ")}
        </h1>
        <span
          className="btnFill1 w-auto"
          onClick={() => setMemberListStatus((prev) => !prev)}
        >
          <span>
            {dataPageMembers?.length < 100
              ? dataPageMembers?.length
              : (dataPageMembers?.length / 100).toFixed(2) + "k"}
          </span>{" "}
          Followers
        </span>
        <p className="text-center text-grayColor text-sm leading-normal">
          {bio}
        </p>
        {isAdmin(dataPageAdmin) ? (
          <button
            className="btnFill1 w-auto min-w-[200px]"
            onClick={handleUpdate}
          >
            Update
          </button>
        ) : (
          <button
            className="btnFill1 w-auto min-w-[200px] capitalize"
            onClick={handleFollowUnFollow}
          >
            {dataPageMemberOrNot ? "Unfollow" : "Follow"}
          </button>
        )}
      </div>

      {memberListStatus && (
        <ListOfAvatarPopUp
          title="Page Followers"
          setStatus={setMemberListStatus}
          data={dataPageMembers}
        />
      )}
      {updateGroupPageFormState && <UpdatePage />}
    </ProfileInfoContainer>
  );
};

export default PageInfo;
