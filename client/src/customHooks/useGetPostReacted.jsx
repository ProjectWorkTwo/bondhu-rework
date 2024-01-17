import { useQuery } from "@tanstack/react-query";
import React from "react";
import { baseURL } from "../Constant/Constant";
import axios from "axios";

const useGetPostReacted = (id) => {
  const {
    data: dataPostReactionState,
    isLoading: isLoadingPostReactionState,
    refetch: refetchPostReactionState,
  } = useQuery({
    queryKey: ["postReactionState", id],
    queryFn: () =>
      axios
        .get(`${baseURL}/reactionstatus/${id}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => {
          return res.data;
        }),
  });

  return {
    dataPostReactionState,
    isLoadingPostReactionState,
    refetchPostReactionState,
  };
};

export default useGetPostReacted;
