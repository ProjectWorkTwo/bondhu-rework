import React from "react";
import PageSideBarComplete from "../Sidebars/PageSideBarComplete";
import Post from "../Components/Simple/Post/Post";
import Posts from "../Components/Simple/Post/Posts";
import { useGetAllPagesPosts } from "../customHooks/useGetAllPost";
import Loader from "../Components/Simple/Loader";
import PostPage from "../Components/Simple/Post/PostPage";

const PagePage = () => {
  const { dataPosts, isLoadingPosts, refetchPosts } = useGetAllPagesPosts();
  if (isLoadingPosts) return <Loader />;
  return (
    <section className="w-[95%] max-w-6xl flex flex-col">
      <PageSideBarComplete />
      <section className="flex flex-col gap-5 py-5 w-full max-w-xl mx-auto">
        {}
        <Posts>
          {dataPosts?.map(({ _id }) => (
            <PostPage key={_id} id={_id} pagePost={true} />
          ))}
        </Posts>
      </section>
    </section>
  );
};

export default PagePage;
