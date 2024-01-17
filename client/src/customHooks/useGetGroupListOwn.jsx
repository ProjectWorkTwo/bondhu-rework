import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../Constant/Constant";

const useGetGroupManagedByMe = () => {
  const {
    data: dataGroupManagedByMe,
    isLoading: isLoadingGroupManagedByMe,
    refetch: refetchGroupManagedByMe,
  } = useQuery({
    queryKey: ["groupManagedByMe"],
    queryFn: () =>
      axios
        .get(`${baseURL}/getmygroups`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => res.data),
  });

  return {
    dataGroupManagedByMe,
    isLoadingGroupManagedByMe,
    refetchGroupManagedByMe,
  };
};
const useGetGroupJoined = () => {
  const {
    data: dataGroupJoined,
    isLoading: isLoadingGroupJoined,
    refetch: refetchGroupJoined,
  } = useQuery({
    queryKey: ["groupJoined"],
    queryFn: () =>
      axios
        .get(`${baseURL}/getjoinedgroups`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => res.data),
  });

  return {
    dataGroupJoined,
    isLoadingGroupJoined,
    refetchGroupJoined,
  };
};

export { useGetGroupManagedByMe, useGetGroupJoined };
