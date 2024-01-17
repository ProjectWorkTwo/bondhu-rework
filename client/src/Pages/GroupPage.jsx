import React from "react";
import Posts from "../Components/Simple/Post/Posts";
import Post from "../Components/Simple/Post/Post";
import GroupSideBarComplete from "../Sidebars/GroupSideBarComplete";
import { useGetAllGroupsPosts } from "../customHooks/useGetAllPost";
import Loader from "../Components/Simple/Loader";

const GroupPage = () => {
  const { dataPosts, isLoadingPosts, refetchPosts } = useGetAllGroupsPosts();
  if (isLoadingPosts) return <Loader />;
  return (
    <section className="w-[95%] max-w-6xl flex flex-col">
      <GroupSideBarComplete />
      <section className="flex flex-col gap-5 py-5 w-full max-w-xl mx-auto">
        <Posts>
          {dataPosts?.map(({ _id }) => (
            <Post key={_id} id={_id} />
          ))}
        </Posts>
      </section>
    </section>
  );
};

export default GroupPage;
