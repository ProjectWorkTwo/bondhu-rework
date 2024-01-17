import React, { useState } from "react";
import PostTop from "./PostTop";
import PostComment from "./PostComment";
import PostContent from "./PostContent";
import PostReaction from "./PostReaction";
import PostReactors from "./PostReactors";
import PostShareMember from "./PostShareMember";
import PostImgDetails from "./PostImgDetails";
import UpdatePostPopUp from "./UpdatePostPopUp";
import Loader from "../Loader";
import useGetTotalReactions from "../../../customHooks/useGetTotalReactions";
import useGetTotalComments from "../../../customHooks/useGetTotalComments";
import useGetPagePost from "../../../customHooks/useGetPagePost";

const PostPage = ({ fullScreen = false, groupPost, pagePost, id }) => {
  const { dataPost, isLoadingPost, refetchPost } = useGetPagePost(id);
  const { dataPostReactions, isLoadingPostReactions, refetchPostReactions } =
    useGetTotalReactions(id);
  const { dataPostComments, isLoadingPostComments, refetchPostComments } =
    useGetTotalComments(id);
  const [reactorBoxStatus, setReactorBoxStatus] = useState(false);
  const [commentBoxStatus, setCommentBoxStatus] = useState(false);
  const [shareMemberBoxStatus, setShareMember] = useState(false);
  const [postImgDetailsStatus, setPostImgDetailsStatus] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);

  if (isLoadingPost || isLoadingPostReactions || isLoadingPostComments)
    return <Loader />;

  return (
    <>
      {dataPost && (
        <div className="w-full p-4 flex flex-col gap-2 rounded-md shadow-lg border border-opacity-50">
          <PostTop
            setUpdateStatus={setUpdateStatus}
            groupPost={groupPost}
            pagePost={pagePost}
            dataPost={dataPost}
            authorEmail={dataPost["email"]}
          />
          <PostContent
            setPostImgDetailsStatus={setPostImgDetailsStatus}
            {...dataPost}
          />
          <PostReaction
            setReactorBoxStatus={setReactorBoxStatus}
            setCommentBoxStatus={setCommentBoxStatus}
            setShareMember={setShareMember}
            id={id}
            refetchPostReactions={refetchPostReactions}
            dataPostReactions={dataPostReactions}
            dataPostComments={dataPostComments}
          />
          {reactorBoxStatus && (
            <PostReactors
              title="People who reacted"
              setStatus={setReactorBoxStatus}
              postReactions={dataPostReactions}
            />
          )}
          {commentBoxStatus && (
            <PostComment
              fullScreen={fullScreen}
              dataPostComments={dataPostComments}
              refetchPostComments={refetchPostComments}
              id={id}
            />
          )}
          {shareMemberBoxStatus && (
            <PostShareMember
              title="People who shared"
              setStatus={setShareMember}
            />
          )}
          {postImgDetailsStatus && (
            <PostImgDetails
              setStatus={setPostImgDetailsStatus}
              postImg={dataPost?.postImg}
            />
          )}
          {updateStatus && (
            <UpdatePostPopUp
              setStatus={setUpdateStatus}
              id={id}
              {...dataPost}
              refetchPost={refetchPost}
            />
          )}
        </div>
      )}
    </>
  );
};

export default PostPage;
