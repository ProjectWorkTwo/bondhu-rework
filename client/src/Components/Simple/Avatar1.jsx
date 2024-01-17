import React, { useContext } from "react";
import { FaCheck, FaTrash } from "react-icons/fa6";
import { ProfilePopUpContext } from "../../Providers/ProfilePopUpProvider";
import { Link } from "react-router-dom";
import { getURLFromName } from "../CustomFunction/getURLFromName";
import { dummyProfilePic, formatTimestamp } from "../../Constant/Constant";

const Avatar1 = ({
  avatarSize = "size-14",
  separateCompo = true,
  showCTA = false,
  userName = "", // if it is a page then user will mean's the page name
  profilePic = dummyProfilePic,
  date = "",
  children,
  pagePost = false,
  groupPost = false,
  profileOrPageName = "",
  fullName = "",
  id,
}) => {
  const { setOwnProfileState, setOtherProfileState } =
    useContext(ProfilePopUpContext);
  const handleShowHideProfile = () => {
    // setOwnProfileState((prv) => true);
    setOtherProfileState((prv) => true);
  };
  return (
    <div
      className={`w-full p-2 rounded-lg ${
        separateCompo && "shadow-xl border"
      }  bg-whiteColor flex justify-start items-center gap-3`}
    >
      {profileOrPageName ? (
        <Link
          to={getURLFromName(pagePost ? "page" : "group", profileOrPageName)}
          className={`flex-grow-0 flex-shrink-0 ${
            avatarSize || "size-14"
          } rounded-full overflow-hidden border-2 border-primaryColor cursor-pointer`}
        >
          <img
            src={profilePic || dummyProfilePic}
            alt=""
            className="size-full object-cover"
          />
        </Link>
      ) : (
        <div
          className={`flex-grow-0 flex-shrink-0 ${
            avatarSize || "size-14"
          } rounded-full overflow-hidden border-2 border-primaryColor cursor-pointer`}
          onClick={handleShowHideProfile}
        >
          <img
            src={profilePic || dummyProfilePic}
            alt=""
            className="size-full object-cover"
          />
        </div>
      )}
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-row justify-between items-center gap-2">
          <div className="flex flex-col">
            {profileOrPageName ? (
              <Link
                to={getURLFromName(
                  pagePost ? "page" : "group",
                  profileOrPageName
                )}
                className="hover:underline text-primaryColor font-bold capitalize text-lg cursor-pointer"
              >
                {profileOrPageName}
              </Link>
            ) : (
              <h4
                className="hover:underline text-primaryColor font-bold capitalize text-lg cursor-pointer"
                onClick={handleShowHideProfile}
              >
                {fullName}
              </h4>
            )}
            {userName && (
              <p
                className="underline text-sm text-secondaryColor cursor-pointer"
                onClick={handleShowHideProfile}
              >
                {userName}
              </p>
            )}
            {date && (
              <>
                {/* <Link
                  to={`/post/${id}`}
                  className="underline text-sm text-secondaryColor select-none cursor-pointer"
                >
                  {formatTimestamp(date)}
                </Link> */}
                <p className="underline text-sm text-secondaryColor select-none cursor-pointer">
                  {formatTimestamp(date)}
                </p>
              </>
            )}
          </div>
          {showCTA && (
            <div className="flex justify-center items-center gap-2">
              <button className="size-7 md:size-9 rounded-full bg-primaryColor grid place-items-center p-1 text-whiteColor text-base md:text-lg">
                <FaCheck />
              </button>
              <button className="size-7 md:size-9 rounded-full bg-primaryColor grid place-items-center p-1 text-whiteColor text-base md:text-lg">
                <FaTrash />
              </button>
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Avatar1;
