import React from "react";
import { baseURL } from "../Constant/Constant";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetTotalReactions = (id) => {
  const {
    data: dataPostReactions,
    isLoading: isLoadingPostReactions,
    refetch: refetchPostReactions,
  } = useQuery({
    queryKey: ["totalReaction", id],
    queryFn: () =>
      axios
        .get(`${baseURL}/totalreaction/${id}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => {
          return res.data;
        }),
  });

  return {
    dataPostReactions,
    isLoadingPostReactions,
    refetchPostReactions,
  };
};

export default useGetTotalReactions;
