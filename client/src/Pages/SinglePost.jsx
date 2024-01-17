import React from "react";
import Post from "../Components/Simple/Post/Post";
import { useParams } from "react-router-dom";
import useGetGroupPost from "../customHooks/useGetGroupPost";

const SinglePost = () => {
  const { id } = useParams();
  const { dataPost, isLoadingPost, refetchPost } = useGetGroupPost(id);
  if (isLoadingPost) return "Loading...";

  return (
    <div className="w-full h-full max-w-xl mx-auto py-5">
      {dataPost && <Post fullScreen={true} dataPost={dataPost} />}
    </div>
  );
};

export default SinglePost;
