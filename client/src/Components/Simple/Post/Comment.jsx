import React from "react";
import Avatar1 from "../Avatar1";
import { currentDate } from "../../../Constant/Constant";

const Comment = ({ comment, email, commentedTime, fullName, profilePic }) => {
  let customizeComment = comment.split("");
  customizeComment[0] = customizeComment[0].toUpperCase();
  customizeComment = customizeComment.join("");
  return (
    <Avatar1
      avatarSize="size-16"
      date={commentedTime}
      fullName={fullName}
      profilePic={profilePic}
    >
      <p className="text-grayColor text-sm leading-normal">
        {customizeComment}
      </p>
    </Avatar1>
  );
};

export default Comment;
