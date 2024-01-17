import React, { useContext, useRef } from "react";
import { FaCamera } from "react-icons/fa6";
import { baseURL, bgDefault, imgbbBaseURL } from "../../../Constant/Constant";
import {
  useGetPageInfo,
  usePageMemberOrNot,
} from "../../../customHooks/useGetPageData";
import { ProfilePopUpContext } from "../../../Providers/ProfilePopUpProvider";
import { useGetPageAdminData } from "../../../customHooks/useGetPageData";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "../Loader";

const coverImg = `https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

const PageCover = () => {
  const { pageName } = useParams();
  const { dataPageInfo, isLoadingPageInfo, refetchPageInfo } =
    useGetPageInfo(pageName);

  const coverImgRef = useRef(null);
  const { setOwnProfileState, setOtherProfileState } =
    useContext(ProfilePopUpContext);

  const {
    dataPageMemberOrNot,
    isLoadingPageMemberOrNot,
    refetchPageMemberOrNot,
  } = usePageMemberOrNot(pageName);

  const { dataPageAdmin, isLoadingPageAdmin, refetchPageAdmin } =
    useGetPageAdminData(pageName);

  if (isLoadingPageInfo || isLoadingPageMemberOrNot || isLoadingPageAdmin)
    return <Loader />;

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
            `${baseURL}/updatePage/${pageName}`,
            {
              pageCover: res?.data?.data?.url,
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
  return (
    <section className="w-full h-[400px] rounded-b-lg overflow-hidden relative rounded-md rounded-tl-none rounded-tr-none">
      <img
        src={dataPageInfo?.pageCover || coverImg}
        alt=""
        className="w-full h-full object-cover"
      />
      {isAdmin(dataPageAdmin) && (
        <form className="p-2 z-10" onChange={handleCoverImgChange}>
          <input
            type="file"
            name="profileCover"
            id="profileCover"
            hidden
            accept="image/*"
            ref={coverImgRef}
          />
          <label
            htmlFor="profileCover"
            className="absolute top-3 bottom-auto sm:top-auto sm:bottom-3 right-3 size-10 rounded-full border-2 border-primaryColor grid place-items-center bg-whiteColor hover:bg-primaryColor text-primaryColor hover:text-whiteColor cursor-pointer"
          >
            <FaCamera className="text-xl" />
          </label>
        </form>
      )}
    </section>
  );
};

export default PageCover;
