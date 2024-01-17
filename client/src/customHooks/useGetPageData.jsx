import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { baseURL } from "../Constant/Constant";

const useGetPageInfo = (pageName = "") => {
  if (pageName.includes(" ")) {
    pageName = pageName.split(" ").join("-");
  }
  const {
    data: dataPageInfo,
    isLoading: isLoadingPageInfo,
    refetch: refetchPageInfo,
  } = useQuery({
    queryKey: ["page", pageName],
    queryFn: () =>
      axios
        .get(`${baseURL}/getpage/${pageName}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => res.data),
  });

  return {
    dataPageInfo,
    isLoadingPageInfo,
    refetchPageInfo,
  };
};
const useGetPageMembers = (pageName = "") => {
  if (pageName.includes(" ")) {
    pageName = pageName.split(" ").join("-");
  }

  const {
    data: dataPageMembers,
    isLoading: isLoadingPageMembers,
    refetch: refetchPageMembers,
  } = useQuery({
    queryKey: ["pageFollowers", pageName],
    queryFn: () =>
      axios
        .get(`${baseURL}/getpagemembers/${pageName}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => res.data),
  });

  return {
    dataPageMembers,
    isLoadingPageMembers,
    refetchPageMembers,
  };
};
const useGetPagePost = (pageName = "") => {
  if (!pageName) return;
  if (pageName.includes(" ")) {
    pageName = pageName.split(" ").join("-");
  }

  const {
    data: dataPagePosts,
    isLoading: isLoadingPagePosts,
    refetch: refetchPagePosts,
  } = useQuery({
    queryKey: ["pagePosts", pageName],
    queryFn: () =>
      axios
        .get(`${baseURL}/getpageposts/${pageName}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => {
          return res.data;
        }),
  });

  return {
    dataPagePosts,
    isLoadingPagePosts,
    refetchPagePosts,
  };
};
const useGetPageAdminData = (pageName = "") => {
  if (!pageName) return;
  if (pageName.includes(" ")) {
    pageName = pageName.split(" ").join("-");
  }

  const {
    data: dataPageAdmin,
    isLoading: isLoadingPageAdmin,
    refetch: refetchPageAdmin,
  } = useQuery({
    queryKey: ["pageAdmin", pageName],
    queryFn: () =>
      axios
        .get(`${baseURL}/getpageadmin/${pageName}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => {
          return res.data;
        }),
  });

  return {
    dataPageAdmin,
    isLoadingPageAdmin,
    refetchPageAdmin,
  };
};
const usePageMemberOrNot = (pageName = "") => {
  if (!pageName) return;
  if (pageName.includes(" ")) {
    pageName = pageName.split(" ").join("-");
  }

  const {
    data: dataPageMemberOrNot,
    isLoading: isLoadingPageMemberOrNot,
    refetch: refetchPageMemberOrNot,
  } = useQuery({
    queryKey: ["pageFollowerOrNot", pageName],
    queryFn: () =>
      axios
        .get(`${baseURL}/pagememberornot/${pageName}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => {
          return res.data;
        }),
  });

  return {
    dataPageMemberOrNot,
    isLoadingPageMemberOrNot,
    refetchPageMemberOrNot,
  };
};

export {
  useGetPageInfo,
  useGetPageMembers,
  useGetPagePost,
  useGetPageAdminData,
  usePageMemberOrNot,
};
