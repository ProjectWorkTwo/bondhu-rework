import React from "react";
import { baseURL } from "../Constant/Constant";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetUserByEmail = (email) => {
  if (!email) return;

  const {
    data: dataUser,
    isLoading: isLoadingUser,
    refetch: refetchUser,
  } = useQuery({
    queryKey: ["userData", email],
    queryFn: () =>
      axios
        .get(`${baseURL}/getuser/${email}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => {
          return res.data;
        }),
  });

  return {
    dataUser,
    isLoadingUser,
    refetchUser,
  };
};

export default useGetUserByEmail;
