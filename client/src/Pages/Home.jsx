import React from "react";
import CreatePost from "../Components/Simple/CreatePost";
import Posts from "../Components/Simple/Post/Posts";
import useGetHomePosts from "../customHooks/useGetHomePosts";
import Loader from "../Components/Simple/Loader";
import PostHome from "../Components/Simple/Post/PostHome";

const Home = () => {
  const { dataHomePost, isLoadingHomePost, refetchHomePost } =
    useGetHomePosts();
  if (isLoadingHomePost) return <Loader />;

  return (
    <section className="w-full flex justify-center items-center gap-5">
      <div className="w-full max-w-xl py-4 flex flex-col gap-5">
        <CreatePost />
        <Posts>
          {dataHomePost &&
            dataHomePost?.map(({ _id }) => (
              <PostHome key={_id} id={_id} refetchAll={refetchHomePost} />
            ))}
        </Posts>
      </div>
    </section>
  );
};

export default Home;
