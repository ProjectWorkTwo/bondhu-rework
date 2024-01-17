import React, { useContext } from "react";
import { ProfilePopUpContext } from "../../Providers/ProfilePopUpProvider";
import { Link } from "react-router-dom";

const userImg =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const coverImg = `https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

const GroupAvatar = ({
  avatarSize = "size-20",
  separateCompo = true,
  showCTA = false,
  groupName = "Group Name",
  fullName = "Full Name",
  userName = "",
  groupCover = "",
  profilePic = "",
  date = "",
  id,
  children,
}) => {
  const { setOwnProfileState, setOtherProfileState } =
    useContext(ProfilePopUpContext);
  const handleShowHideProfile = () => {
    // setOwnProfileState((prv) => true);
    setOtherProfileState((prv) => true);
  };
  const groupUrl = `${location.origin}/group/${groupName
    .trim()
    .toLowerCase()
    .split(" ")
    .join("-")}`;
  return (
    <div
      className={`w-full p-2 rounded-lg ${
        separateCompo && "shadow-xl border"
      }  bg-whiteColor flex justify-start items-center gap-5`}
    >
      <div
        className={`flex-grow-0 flex-shrink-0 ${
          avatarSize || "size-14"
        } cursor-pointer relative`}
      >
        <Link to={`${groupUrl}`}>
          <img
            src={coverImg}
            alt=""
            className="block size-full object-cover rounded-lg border-2 border-primaryColor "
          />
        </Link>
        <div
          className="size-4/5 rounded-full absolute -bottom-2 -right-2 overflow-hidden border-2 border-primaryColor"
          onClick={handleShowHideProfile}
        >
          <img src={userImg} alt="" className="size-full object-cover" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-row justify-between items-center gap-2">
          <div className="flex flex-col justify-center items-start">
            <Link
              to={`${groupUrl}`}
              className="text-primaryColor font-bold capitalize text-xl cursor-pointer"
            >
              {groupName}
            </Link>
            <h5
              className="hover:underline text-primaryColor font-semibold capitalize text-lg cursor-pointer underline"
              onClick={handleShowHideProfile}
            >
              {fullName}
            </h5>
            {userName && (
              <p
                className="underline text-sm text-secondaryColor cursor-pointer"
                onClick={handleShowHideProfile}
              >
                {userName}
              </p>
            )}
            {date && (
              <Link
                to={`/post/${id}`}
                className="underline text-sm text-secondaryColor select-none cursor-pointer"
              >
                {date}
              </Link>
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

export default GroupAvatar;
