import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../Constant/Constant";
import axios from "axios";

const useGetAllGroupsPosts = () => {
  const {
    data: dataPosts,
    isLoading: isLoadingPosts,
    refetch: refetchPosts,
  } = useQuery({
    queryKey: ["getallgroupspost"],
    queryFn: () =>
      axios
        .get(`${baseURL}/getallgroupspost`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => {
          return res?.data;
        }),
  });

  return {
    dataPosts,
    isLoadingPosts,
    refetchPosts,
  };
};
const useGetAllPagesPosts = () => {
  const {
    data: dataPosts,
    isLoading: isLoadingPosts,
    refetch: refetchPosts,
  } = useQuery({
    queryKey: ["getallpagespost"],
    queryFn: () =>
      axios
        .get(`${baseURL}/getallpagespost`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => {
          return res?.data;
        }),
  });

  return {
    dataPosts,
    isLoadingPosts,
    refetchPosts,
  };
};

export { useGetAllGroupsPosts, useGetAllPagesPosts };
