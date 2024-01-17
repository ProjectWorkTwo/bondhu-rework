import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { baseURL } from "../Constant/Constant";

const useGetGroupInfo = (groupName = "") => {
  if (groupName.includes(" ")) {
    groupName = groupName.split(" ").join("-");
  }
  const {
    data: dataGroupInfo,
    isLoading: isLoadingGroupInfo,
    refetch: refetchGroupInfo,
  } = useQuery({
    queryKey: ["group", groupName],
    queryFn: () =>
      axios
        .get(`${baseURL}/getgroup/${groupName}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => res.data),
  });

  return {
    dataGroupInfo,
    isLoadingGroupInfo,
    refetchGroupInfo,
  };
};
const useGetGroupMembers = (groupName = "") => {
  if (groupName.includes(" ")) {
    groupName = groupName.split(" ").join("-");
  }

  const {
    data: dataGroupMembers,
    isLoading: isLoadingGroupMembers,
    refetch: refetchGroupMembers,
  } = useQuery({
    queryKey: ["groupmembers", groupName],
    queryFn: () =>
      axios
        .get(`${baseURL}/getgroupmembers/${groupName}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => res.data),
  });

  return {
    dataGroupMembers,
    isLoadingGroupMembers,
    refetchGroupMembers,
  };
};
const useGetGroupPost = (groupName = "") => {
  if (!groupName) return;
  if (groupName.includes(" ")) {
    groupName = groupName.split(" ").join("-");
  }

  const {
    data: dataGroupPosts,
    isLoading: isLoadingGroupPosts,
    refetch: refetchGroupPosts,
  } = useQuery({
    queryKey: ["groupposts", groupName],
    queryFn: () =>
      axios
        .get(`${baseURL}/getgroupposts/${groupName}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => {
          return res.data;
        }),
  });

  return {
    dataGroupPosts,
    isLoadingGroupPosts,
    refetchGroupPosts,
  };
};
const useGetGroupAdminData = (groupName = "") => {
  if (!groupName) return;
  if (groupName.includes(" ")) {
    groupName = groupName.split(" ").join("-");
  }

  const {
    data: dataGroupAdmin,
    isLoading: isLoadingGroupAdmin,
    refetch: refetchGroupAdmin,
  } = useQuery({
    queryKey: ["groupAdmin", groupName],
    queryFn: () =>
      axios
        .get(`${baseURL}/getgroupadmin/${groupName}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => {
          return res.data;
        }),
  });

  return {
    dataGroupAdmin,
    isLoadingGroupAdmin,
    refetchGroupAdmin,
  };
};
const useGroupMemberOrNot = (groupName = "") => {
  if (!groupName) return;
  if (groupName.includes(" ")) {
    groupName = groupName.split(" ").join("-");
  }

  const {
    data: dataGroupMemberOrNot,
    isLoading: isLoadingGroupMemberOrNot,
    refetch: refetchGroupMemberOrNot,
  } = useQuery({
    queryKey: ["groupmemberornot", groupName],
    queryFn: () =>
      axios
        .get(`${baseURL}/groupmemberornot/${groupName}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => {
          return res.data;
        }),
  });

  return {
    dataGroupMemberOrNot,
    isLoadingGroupMemberOrNot,
    refetchGroupMemberOrNot,
  };
};

export {
  useGetGroupInfo,
  useGetGroupMembers,
  useGetGroupPost,
  useGetGroupAdminData,
  useGroupMemberOrNot,
};
