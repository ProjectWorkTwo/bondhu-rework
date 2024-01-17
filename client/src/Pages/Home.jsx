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
    <>
      {!dataHomePost && (
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl pt-10">Wecolme to our Site</h1>
          <h2>You Need to Login first to view out site</h2>
        </div>
      )}
      {dataHomePost && (
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
      )}
    </>
  );
};

export default Home;
