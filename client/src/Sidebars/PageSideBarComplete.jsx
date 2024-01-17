import React, { useContext, useState } from "react";
import PageSideBar from "./PageSideBar";
import { FaGear } from "react-icons/fa6";
import { PageSideBarContext } from "../Providers/PageSideBarProvider";

const PageSideBarComplete = () => {
  const { setShowHidePageSideBarState } = useContext(PageSideBarContext);
  return (
    <>
      <PageSideBar />
      <span
        className="floatingActionBtn1"
        onClick={() => setShowHidePageSideBarState((prev) => !prev)}
      >
        <FaGear />
      </span>
    </>
  );
};

export default PageSideBarComplete;
