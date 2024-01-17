import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { baseURL } from "../Constant/Constant";

const useGetUserByUserName = (userName) => {
  const {
    data: dataUserData,
    isLoading: isLoadingUserData,
    refetch: refetchUserData,
  } = useQuery({
    queryKey: ["userData", userName],
    queryFn: () =>
      axios
        .get(`${baseURL}/getuserByUserName/${userName}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => {
          console.log(res);
          return res.data;
        }),
  });

  return {
    dataUserData,
    isLoadingUserData,
    refetchUserData,
  };
};

export default useGetUserByUserName;
