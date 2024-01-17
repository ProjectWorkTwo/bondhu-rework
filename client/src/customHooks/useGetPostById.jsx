import { baseURL } from "../Constant/Constant";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetPostById = (id) => {
  const {
    data: dataPost,
    isLoading: isLoadingPost,
    refetch: refetchPost,
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
    dataPost,
    isLoadingPost,
    refetchPost,
  };
};

export default useGetPostById;
