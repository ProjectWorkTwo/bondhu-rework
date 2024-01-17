import React, { useRef, useState } from "react";
import ScrollBar from "../ScrollBar";
import hidePopUp from "../../CustomFunction/hidePopUp";
import useGetGroupPost from "../../../customHooks/useGetGroupPost";
import axios from "axios";
import { baseURL, imgbbBaseURL } from "../../../Constant/Constant";
import Swal from "sweetalert2";
import useGetHomePosts from "../../../customHooks/useGetHomePosts";
import Loader from "../Loader";
import useGetPostById from "../../../customHooks/useGetPostById";

const UpdatePostPopUp = ({
  setStatus,
  _id: id,
  heading,
  postMessage,
  postImg,
  refetchPost,
}) => {
  const [postData, setPostData] = useState({
    heading: heading,
    postImg: postImg,
    postMessage: postMessage,
    postPrivacy: "public",
  });
  const boxRef = useRef(null);
  const postImgRef = useRef(null);

  // const { dataPost, isLoadingPost, refetchPost } = useGetPostById(id);
  const handleChange = (e) => {
    setPostData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let updatedPostImg = "";
    if (postImgRef?.current?.files[0]) {
      const res = await axios.post(
        `${imgbbBaseURL}?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        { image: postImgRef?.current?.files[0] },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      updatedPostImg = res?.data?.data?.url;
    }
    if (updatedPostImg) {
      postData["postImg"] = updatedPostImg;
    }
    const res = await axios.put(
      `${baseURL}/updatepost/${id}`,
      {
        ...postData,
      },
      {
        headers: {
          ...JSON.parse(localStorage.getItem("authorData") || "{}"),
        },
      }
    );
    if (res) {
      setStatus((prev) => false);
      refetchPost();
      location.reload();
      return Swal.fire({
        title: "Success",
        text: "Post updated successfully!",
        icon: "success",
      });
    }
  };
  return (
    <section
      className="popupWrapper"
      onClick={(e) => hidePopUp(e, boxRef, setStatus)}
    >
      <div
        className="flex flex-col gap-4 bg-whiteColor shadow-2xl rounded-md w-[95vw] max-w-[450px] h-auto max-h-[95vh] p-5"
        ref={boxRef}
      >
        <h2 className="text-center">Update Post</h2>
        <form
          className="w-full flex flex-col gap-4 overflow-hidden"
          onSubmit={handleSubmit}
        >
          <ScrollBar>
            <div className="w-full flex flex-col gap-4 px-2">
              <input
                type="text"
                name="heading"
                className="input1"
                placeholder="Post heading..."
                value={postData["heading"]}
                onChange={handleChange}
              />

              <input
                type="file"
                name="postImg"
                id="postImg"
                ref={postImgRef}
                accept="image/*"
                hidden
              />
              <label htmlFor="postImg" className="btnFill1">
                Upload Images
              </label>

              <textarea
                name="postMessage"
                className="input1 min-h-[150px] resize-none"
                placeholder="Post content..."
                value={postData["postMessage"]}
                onChange={handleChange}
              />

              {/* <div>
                <input
                  type="radio"
                  name="postPrivacy"
                  id="public"
                  value="public"
                  onChange={handleChange}
                  hidden
                />
                <input
                  type="radio"
                  name="postPrivacy"
                  id="friendsOnly"
                  value="friendsOnly"
                  onChange={handleChange}
                  hidden
                />
                <div className="w-full flex gap-4">
                  <label
                    htmlFor="public"
                    className={`btnFill1 w-full flex gap-3 justify-center items-center commonAnim ${
                      postData["postPrivacy"] === "public"
                        ? "scale-90"
                        : "scale-100"
                    }`}
                  >
                    <span
                      className={`size-5 ${
                        postData["postPrivacy"] === "public"
                          ? "border-[6px]"
                          : "border-2"
                      }  border-whiteColor flex-grow-0 flex-shrink-0 block rounded-full commonAnim`}
                    ></span>
                    <span>Public</span>
                  </label>
                  <label
                    htmlFor="friendsOnly"
                    className={`btnFill1 w-full flex gap-3 justify-center items-center commonAnim ${
                      postData["postPrivacy"] !== "public"
                        ? "scale-90"
                        : "scale-100"
                    }`}
                  >
                    <span
                      className={`size-5 ${
                        postData["postPrivacy"] !== "public"
                          ? "border-[6px]"
                          : "border-2"
                      }  border-whiteColor flex-grow-0 flex-shrink-0 block rounded-full commonAnim`}
                    ></span>
                    <span>Friends only</span>
                  </label>
                </div>
              </div> */}
            </div>
          </ScrollBar>
          <button type="submit" className="btnFill1">
            Update Post
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdatePostPopUp;
