import React from "react";
import Avatar1 from "../Avatar1";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader";
import { baseURL } from "../../../Constant/Constant";

const GroupMemberListContainer = ({ email }) => {
  const {
    data: dataUser,
    isLoading: isLoadingUser,
    refetch: refetchUser,
  } = useQuery({
    queryKey: ["userData", email],
    queryFn: () =>
      axios
        .get(`${baseURL}/getuser/${email}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => {
          return res.data;
        }),
  });

  if (isLoadingUser) return <Loader />;

  return <Avatar1 fullName={dataUser?.fullName} />;
};

export default GroupMemberListContainer;
