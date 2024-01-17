import React from "react";

const Posts = ({ children }) => {
  return (
    <div className="w-full max-w-xl mx-auto px-3 flex flex-col justify-center items-center gap-5">
      {children}
    </div>
  );
};

export default Posts;
