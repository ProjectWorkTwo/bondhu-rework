import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { baseURL } from "../Constant/Constant";

const useGetTotalComments = (id) => {
  const {
    data: dataPostComments,
    isLoading: isLoadingPostComments,
    refetch: refetchPostComments,
  } = useQuery({
    queryKey: ["totalComments", id],
    queryFn: () =>
      axios
        .get(`${baseURL}/comment/${id}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || "{}"),
        })
        .then((res) => {
          return res.data;
        }),
  });

  return {
    dataPostComments,
    isLoadingPostComments,
    refetchPostComments,
  };
};

export default useGetTotalComments;
