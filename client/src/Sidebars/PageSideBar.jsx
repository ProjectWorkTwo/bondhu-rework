import React, { useContext, useRef } from "react";
import SideBarAccordion from "../Components/Simple/SideBarAccordion";
import ScrollBar from "../Components/Simple/ScrollBar";
import hidePopUp from "../Components/CustomFunction/hidePopUp";
import { PageSideBarContext } from "../Providers/PageSideBarProvider";
import { CreateGroupPageFormContext } from "../Providers/CreateGroupPageFormProvider";
import {
  useGetPageFollowed,
  useGetPageManagedByMe,
} from "../customHooks/useGetPageListOwn";

const PageSideBar = () => {
  const { setCreateGroupPageFormState } = useContext(
    CreateGroupPageFormContext
  );
  const {
    dataPageManagedByMe,
    isLoadingPageManagedByMe,
    refetchPageManagedByMe,
  } = useGetPageManagedByMe();

  const { dataPageJoined, isLoadingPageJoined, refetchPageJoined } =
    useGetPageFollowed();
  const { showHidePageSideBarState, setShowHidePageSideBarState } =
    useContext(PageSideBarContext);
  const boxRef = useRef(null);
  return (
    <div
      className={`popupWrapper ${
        showHidePageSideBarState
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      } commonAnim`}
      onClick={(e) => hidePopUp(e, boxRef, setShowHidePageSideBarState)}
    >
      <div
        className="bg-whiteColor w-[90%] max-w-[400px] absolute top-0 left-0 h-full shadow-2xl py-5 px-2 flex flex-col gap-4"
        ref={boxRef}
      >
        <button
          className="btnFill1"
          onClick={() => setCreateGroupPageFormState((prev) => "group")}
        >
          Create Page
        </button>
        <ScrollBar>
          <div className="w-full flex flex-col gap-5">
            {isLoadingPageManagedByMe || (
              <SideBarAccordion
                title="Page you manage"
                data={dataPageManagedByMe}
                type="page"
              />
            )}
            {isLoadingPageJoined || (
              <SideBarAccordion
                title="Your are following"
                data={dataPageJoined}
                type="page"
              />
            )}
          </div>
        </ScrollBar>
      </div>
    </div>
  );
};

export default PageSideBar;
