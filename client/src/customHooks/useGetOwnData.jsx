import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { baseURL } from "../Constant/Constant";

const useGetOwnInfo = () => {
  const {
    data: dataOwnInfo,
    isLoading: isLoadingOwnInfo,
    refetch: refetchOwnInfo,
  } = useQuery({
    queryKey: ["owninfo", localStorage.getItem("authorData")],
    queryFn: () =>
      axios
        .get(`${baseURL}/getuser`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => {
          return res.data;
        }),
  });

  return {
    dataOwnInfo,
    isLoadingOwnInfo,
    refetchOwnInfo,
  };
};

export { useGetOwnInfo };
