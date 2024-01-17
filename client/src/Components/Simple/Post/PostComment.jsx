import React, { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import Comment from "./Comment";
import axios from "axios";
import { baseURL } from "../../../Constant/Constant";

const PostComment = ({
  id,
  fullScreen,
  dataPostComments,
  refetchPostComments,
}) => {
  const [comment, setComment] = useState("");
  const handleOnChangeComment = (e) => {
    setComment((prev) => e?.target?.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${baseURL}/comment/${id}`,
        { comment },
        {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        }
      )
      .then((res) => {
        refetchPostComments();
        setComment((prev) => "");
      });
  };
  return (
    <div className="w-full flex flex-col gap-3">
      <form
        className="p-1 rounded-full border-2 border-primaryColor flex gap-2 overflow-hidden"
        onSubmit={handleSubmit}
      >
        <button
          type="submit"
          className="flex-grow-0 flex-shrink-0 size-10 text-whiteColor bg-primaryColor rounded-full grid place-items-center text-2xl"
        >
          <BsFillSendFill />
        </button>
        <input
          type="text"
          className="w-full rounded-full border-none bg-transparent outline-none text-secondaryColor placeholder:text-secondaryColor placeholder:opacity-60"
          placeholder="Write your comment...."
          value={comment}
          onChange={handleOnChangeComment}
        />
      </form>
      <div
        className={`w-full flex flex-col gap-3 ${
          fullScreen || "max-h-[300px]"
        } overflow-auto p-2`}
      >
        {dataPostComments?.map((item) => (
          <Comment key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PostComment;
