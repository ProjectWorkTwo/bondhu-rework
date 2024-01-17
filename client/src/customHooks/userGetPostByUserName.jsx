import React from "react";
import { baseURL } from "../Constant/Constant";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const userGetPostByUserName = (userName) => {
  const {
    data: dataUserPost,
    isLoading: isLoadingUserPost,
    refetch: refetchUserPost,
  } = useQuery({
    queryKey: ["userPost", userName],
    queryFn: () =>
      axios
        .get(`${baseURL}/getposts/${userName}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => {
          return res.data;
        }),
  });

  return {
    dataUserPost,
    isLoadingUserPost,
    refetchUserPost,
  };
};

export default userGetPostByUserName;
