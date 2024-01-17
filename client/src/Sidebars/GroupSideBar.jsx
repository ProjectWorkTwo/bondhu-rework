import React, { useContext, useRef } from "react";
import ScrollBar from "../Components/Simple/ScrollBar";
import hidePopUp from "../Components/CustomFunction/hidePopUp";
import SideBarAccordion from "../Components/Simple/SideBarAccordion";
import { GroupSideBarContext } from "../Providers/GroupSideBarProvider";
import { CreateGroupPageFormContext } from "../Providers/CreateGroupPageFormProvider";
import {
  useGetGroupManagedByMe,
  useGetGroupJoined,
} from "../customHooks/useGetGroupListOwn";

const GroupSideBar = () => {
  const { setCreateGroupPageFormState } = useContext(
    CreateGroupPageFormContext
  );
  const {
    dataGroupManagedByMe,
    isLoadingGroupManagedByMe,
    refetchGroupManagedByMe,
  } = useGetGroupManagedByMe();

  const { dataGroupJoined, isLoadingGroupJoined, refetchGroupJoined } =
    useGetGroupJoined();

  const { showHideGroupSideBarState, setShowHideGroupSideBarState } =
    useContext(GroupSideBarContext);
  const boxRef = useRef(null);

  // if (!isLoadingGroupManagedByMe) return "Loading...";

  return (
    <div
      className={`popupWrapper ${
        showHideGroupSideBarState
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      } commonAnim`}
      onClick={(e) => hidePopUp(e, boxRef, setShowHideGroupSideBarState)}
    >
      <div
        className="bg-whiteColor w-[90%] max-w-[400px] absolute top-0 left-0 h-full shadow-2xl py-5 px-2 flex flex-col gap-4"
        ref={boxRef}
      >
        <button
          className="btnFill1"
          onClick={() => setCreateGroupPageFormState((prev) => "group")}
        >
          Create Group
        </button>
        <ScrollBar>
          <div className="w-full flex flex-col gap-5">
            {isLoadingGroupManagedByMe || (
              <SideBarAccordion
                title="Group you manage"
                data={dataGroupManagedByMe}
                type="group"
              />
            )}
            {isLoadingGroupJoined || (
              <SideBarAccordion
                title="Your are joined in"
                data={dataGroupJoined}
                type="group"
              />
            )}
          </div>
        </ScrollBar>
      </div>
    </div>
  );
};

export default GroupSideBar;
