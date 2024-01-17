import React, { useRef } from "react";
import hidePopUp from "../../CustomFunction/hidePopUp";


const PostImgDetails = ({ setStatus, postImg }) => {
  const boxRef = useRef(null);
  return (
    <section
      className="popupWrapper"
      onClick={(e) => hidePopUp(e, boxRef, setStatus, true)}
    >
      <img
        src={postImg}
        alt=""
        className="max-w-[90vw] max-h-[90vh] w-auto h-auto border-8 border-white object-contain  select-none cursor-pointer shadow-2xl rounded-md"
        ref={boxRef}
      />
    </section>
  );
};

export default PostImgDetails;
