import React from "react";
import FriendListsSide from "../Simple/FriendListsSIde";
import FriendRequestsSide from "../Simple/FriendRequestsSide";
import ScrollBar from "../Simple/ScrollBar";

const LeftSide = () => {
  return (
    <section className="w-full h-full overflow-x-hidden overflow-y-auto">
      <FriendListsSide />
      <FriendRequestsSide />
    </section>
  );
};

export default LeftSide;
