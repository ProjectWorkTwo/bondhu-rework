import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useParams } from "react-router-dom";
import CreatePostPopUpHome from "./CreatePostPopUpHome";
import CreatePostPopUpGroup from "./CreatePostPopUpGroup";
import CreatePostPopUpGroupPage from "./CreatePostPopUpPage";

const CreatePost = ({ privacy }) => {
  const { groupName, pageName } = useParams();
  const [createPostStatus, setCreatePostStatus] = useState(false);
  const { authenticationState, setAuthenticationState } =
    useContext(AuthContext);
  return (
    <>
      {authenticationState && (
        <button
          className="btnFill1"
          onClick={() => setCreatePostStatus((prev) => true)}
        >
          Create Post
        </button>
      )}
      {createPostStatus && (
        <>
          {groupName || pageName ? (
            <>
              {pageName ? (
                <CreatePostPopUpGroupPage
                  setStatus={setCreatePostStatus}
                  privacy={privacy}
                />
              ) : (
                <CreatePostPopUpGroup
                  setStatus={setCreatePostStatus}
                  privacy={privacy}
                />
              )}
            </>
          ) : (
            <CreatePostPopUpHome
              setStatus={setCreatePostStatus}
              privacy={privacy}
            />
          )}
        </>
      )}
    </>
  );
};

export default CreatePost;
