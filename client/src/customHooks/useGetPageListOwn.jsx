import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../Constant/Constant";

const useGetPageManagedByMe = () => {
  const {
    data: dataPageManagedByMe,
    isLoading: isLoadingPageManagedByMe,
    refetch: refetchPageManagedByMe,
  } = useQuery({
    queryKey: ["groupManagedByMe"],
    queryFn: () =>
      axios
        .get(`${baseURL}/getmypages`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => res.data),
  });

  return {
    dataPageManagedByMe,
    isLoadingPageManagedByMe,
    refetchPageManagedByMe,
  };
};
const useGetPageFollowed = () => {
  const {
    data: dataPageJoined,
    isLoading: isLoadingPageJoined,
    refetch: refetchPageJoined,
  } = useQuery({
    queryKey: ["groupJoined"],
    queryFn: () =>
      axios
        .get(`${baseURL}/getjoinedpages`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => res.data),
  });

  return {
    dataPageJoined,
    isLoadingPageJoined,
    refetchPageJoined,
  };
};

export { useGetPageManagedByMe, useGetPageFollowed };
