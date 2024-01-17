import React, { useContext } from "react";
import GroupSideBar from "./GroupSideBar";
import { FaGear } from "react-icons/fa6";
import { GroupSideBarContext } from "../Providers/GroupSideBarProvider";

const GroupSideBarComplete = () => {
  const { setShowHideGroupSideBarState } =
    useContext(GroupSideBarContext);
  return (
    <>
      <GroupSideBar />
      <span
        className="floatingActionBtn1"
        onClick={() => setShowHideGroupSideBarState((prev) => !prev)}
      >
        <FaGear />
      </span>
    </>
  );
};

export default GroupSideBarComplete;
