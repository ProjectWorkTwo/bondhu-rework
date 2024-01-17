import React, { useContext, useState } from "react";
import ListOfAvatarPopUp from "../ListOfAvatarPopUp";
import ProfileInfoContainer from "./ProfileInfoContainer";
import {
  useGetGroupAdminData,
  useGetGroupInfo,
  useGetGroupMembers,
  useGroupMemberOrNot,
} from "../../../customHooks/useGetGroupData";
import { useParams } from "react-router-dom";
import { UpdateGroupPageFormContext } from "../../../Providers/UpdateGroupPageFormProvider";
import UpdateGroup from "../UpdateGroup";
import axios from "axios";
import { baseURL } from "../../../Constant/Constant";
import Swal from "sweetalert2";

const GroupInfo = () => {
  const { groupName } = useParams();
  const { dataGroupInfo, isLoadingGroupInfo, refetchGroupInfo } =
    useGetGroupInfo(groupName);
  const { dataGroupMembers, isLoadingGroupMembers, refetchGroupMembers } =
    useGetGroupMembers(groupName);
  const { dataGroupAdmin, isLoadingGroupAdmin, refetchGroupAdmin } =
    useGetGroupAdminData(groupName);

  const {
    dataGroupMemberOrNot,
    isLoadingGroupMemberOrNot,
    refetchGroupMemberOrNot,
  } = useGroupMemberOrNot(groupName);

  const [memberListStatus, setMemberListStatus] = useState(false);

  const { updateGroupPageFormState, setUpdateGroupPageFormState } = useContext(
    UpdateGroupPageFormContext
  );

  if (
    isLoadingGroupInfo ||
    isLoadingGroupMembers ||
    isLoadingGroupAdmin ||
    isLoadingGroupMemberOrNot
  )
    return "Loading";

  const isAdmin = (data) => {
    return (
      JSON.stringify({ email: data["email"], password: data["password"] }) ===
      localStorage.getItem("authorData")
    );
  };

  const { bio } = dataGroupInfo;
  const handleUpdate = () => {
    setUpdateGroupPageFormState((prev) => "group");
  };
  const handleJoinLeave = () => {
    if (dataGroupMemberOrNot) {
      axios
        .delete(`${baseURL}/leavegroupmember/${groupName}`, {
          headers: {
            ...JSON.parse(localStorage.getItem("authorData") || {}),
          },
        })
        .then((res) => {
          refetchGroupMemberOrNot();
          return Swal.fire({
            title: "Success",
            text: "Leaved successfully!",
            icon: "success",
          });
        });
    } else {
      axios
        .post(
          `${baseURL}/addgroupmember/${groupName}`,
          {},
          {
            headers: {
              ...JSON.parse(localStorage.getItem("authorData") || {}),
            },
          }
        )
        .then((res) => {
          refetchGroupMemberOrNot();
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
      <div className="w-full p-4 flex flex-col justify-center items-center gap-3">
        <h1 className="text-center capitalize">
          {groupName.split("-").join(" ")}
        </h1>
        <span
          className="btnFill1 w-auto flex flex-wrap gap-1"
          onClick={() => setMemberListStatus((prev) => !prev)}
        >
          <span>
            {dataGroupMembers?.length < 100
              ? dataGroupMembers?.length
              : (dataGroupMembers?.length / 100).toFixed(2) + "k"}
          </span>
          Members
        </span>
        <p className="text-center text-grayColor text-sm leading-normal">
          {bio}
        </p>
        {isAdmin(dataGroupAdmin) ? (
          <button
            className="btnFill1 w-auto min-w-[200px]"
            onClick={handleUpdate}
          >
            Update
          </button>
        ) : (
          <button
            className="btnFill1 w-auto min-w-[200px] capitalize"
            onClick={handleJoinLeave}
          >
            {dataGroupMemberOrNot ? "Leave" : "Join"}
          </button>
        )}
      </div>
      {memberListStatus && (
        <ListOfAvatarPopUp
          title="Group Members"
          setStatus={setMemberListStatus}
          data={dataGroupMembers}
        />
      )}
      {updateGroupPageFormState && <UpdateGroup />}
    </ProfileInfoContainer>
  );
};

export default GroupInfo;
