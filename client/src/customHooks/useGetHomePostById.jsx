import React from "react";
import { baseURL } from "../Constant/Constant";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetHomePostById = (id) => {
  const {
    data: dataSinglePostData,
    isLoading: isLoadingSinglePostData,
    refetch: refetchSinglePostData,
  } = useQuery({
    queryKey: ["singlepost", id],
    queryFn: () =>
      axios
        .get(`${baseURL}/getanypost/${id}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => {
          return res.data;
        }),
  });

  return {
    dataSinglePostData,
    isLoadingSinglePostData,
    refetchSinglePostData,
  };
};

export default useGetHomePostById;
