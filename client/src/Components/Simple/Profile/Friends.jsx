import React, { useState } from "react";
import FriendList from "./FriendList";
import FriendRequest from "./FriendRequest";

const Friends = () => {
  const [currentTab, setCurrentTab] = useState("friends");
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex justify-start items-center gap-3 flex-wrap">
        <button
          className={`shadow-xl px-4 py-2 rounded-md hover:bg-primaryColor hover:text-whiteColor border commonAnim scale-100 capitalize hover:scale-90 ${
            currentTab === "friends"
              ? "bg-primaryColor text-white scale-90 hover:border-primaryColor"
              : "bg-whiteColor text-primaryColor scale-100"
          }`}
          onClick={() => setCurrentTab((prev) => "friends")}
        >
          Friends
        </button>
        <button
          className={`shadow-xl px-4 py-2 rounded-md hover:bg-primaryColor hover:text-whiteColor border commonAnim scale-100 capitalize hover:scale-90 ${
            currentTab !== "friends"
              ? "bg-primaryColor text-white scale-90 hover:border-primaryColor"
              : "bg-whiteColor text-primaryColor scale-100"
          }`}
          onClick={() => setCurrentTab((prev) => "friend requests")}
        >
          Friend Requests
        </button>
      </div>
      {currentTab === "friends" ? <FriendList /> : <FriendRequest />}
    </div>
  );
};

export default Friends;
