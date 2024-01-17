import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { baseURL } from "../Constant/Constant";

const useGetHomePosts = () => {
  const {
    data: dataHomePost,
    isLoading: isLoadingHomePost,
    refetch: refetchHomePost,
  } = useQuery({
    queryKey: [""],
    queryFn: () =>
      axios
        .get(`${baseURL}/getposts`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => {
          console.log(res);
          return res.data;
        })
        .catch((error) => {
          console.log(error);
        }),
  });

  return {
    dataHomePost,
    isLoadingHomePost,
    refetchHomePost,
  };
};

export default useGetHomePosts;
