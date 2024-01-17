import React from "react";
import GroupCover from "../Components/Simple/Group/GroupCover";
import GroupInfo from "../Components/Simple/Group/GroupInfo";
import CreatePost from "../Components/Simple/CreatePost";
import Posts from "../Components/Simple/Post/Posts";
import Post from "../Components/Simple/Post/Post";
import GroupSideBarComplete from "../Sidebars/GroupSideBarComplete";
import { useParams } from "react-router-dom";
import {
  useGetGroupPost,
  useGroupMemberOrNot,
} from "../customHooks/useGetGroupData";
import Loader from "../Components/Simple/Loader";

const SingleGroup = () => {
  const { groupName } = useParams();
  const { dataGroupPosts, isLoadingGroupPosts, refetchGroupPosts } =
    useGetGroupPost(groupName);
  const {
    dataGroupMemberOrNot,
    isLoadingGroupMemberOrNot,
    refetchGroupMemberOrNot,
  } = useGroupMemberOrNot(groupName);

  if (isLoadingGroupMemberOrNot) return <Loader />;

  return (
    <>
      {dataGroupPosts && (
        <section className="w-[95%] max-w-6xl flex flex-col">
          <GroupSideBarComplete />
          <GroupCover />
          <GroupInfo />
          {dataGroupMemberOrNot && (
            <section className="flex flex-col gap-5 py-5 w-full max-w-xl mx-auto">
              <CreatePost privacy={false} />

              <Posts>
                {dataGroupPosts &&
                  dataGroupPosts?.map(({ _id }) => <Post key={_id} id={_id} />)}
              </Posts>
            </section>
          )}
        </section>
      )}
    </>
  );
};

export default SingleGroup;
