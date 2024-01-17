import React from "react";
import PageSideBarComplete from "../Sidebars/PageSideBarComplete";
import CreatePost from "../Components/Simple/CreatePost";
import Posts from "../Components/Simple/Post/Posts";
import PageCover from "../Components/Simple/Page/PageCover";
import PageInfo from "./PageInfo";
import { useParams } from "react-router-dom";
import {
  useGetPageAdminData,
  useGetPagePost,
  usePageMemberOrNot,
} from "../customHooks/useGetPageData";
import Loader from "../Components/Simple/Loader";
import PostPage from "../Components/Simple/Post/PostPage";

const SinglePage = () => {
  const { pageName } = useParams();

  const {
    dataPageMemberOrNot,
    isLoadingPageMemberOrNot,
    refetchPageMemberOrNot,
  } = usePageMemberOrNot(pageName);
  const { dataPagePosts, isLoadingGroupPosts, refetchGroupPosts } =
    useGetPagePost(pageName);
  const { dataPageAdmin, isLoadingPageAdmin, refetchPageAdmin } =
    useGetPageAdminData(pageName);

  if (isLoadingPageMemberOrNot || isLoadingGroupPosts || isLoadingPageAdmin)
    return <Loader />;
  const isAdmin = (data) => {
    return (
      JSON.stringify({ email: data["email"], password: data["password"] }) ===
      localStorage.getItem("authorData")
    );
  };

  return (
    <section className="w-[95%] max-w-6xl flex flex-col">
      <PageSideBarComplete />
      <PageCover />
      <PageInfo />
      <section className="flex flex-col gap-5 py-5 w-full max-w-xl mx-auto">
        {isAdmin(dataPageAdmin) && <CreatePost privacy={false} />}

        <Posts>
          {dataPagePosts &&
            dataPagePosts?.map(({ _id }) => <PostPage key={_id} id={_id} />)}
        </Posts>
      </section>
    </section>
  );
};

export default SinglePage;
