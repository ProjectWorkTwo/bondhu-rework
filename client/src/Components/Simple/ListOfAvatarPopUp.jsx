import React, { useRef } from "react";
import Avatar1 from "./Avatar1";
import hidePopUp from "../CustomFunction/hidePopUp";
import GroupMemberListContainer from "./Group/GroupMemberListContainer";

const ListOfAvatarPopUp = ({title, setStatus, data }) => {
  const boxRef = useRef(null);
  return (
    <section
      className="popupWrapper"
      onClick={(e) => hidePopUp(e, boxRef, setStatus, true)}
    >
      <div
        className="flex flex-col gap-4 bg-whiteColor shadow-2xl rounded-md w-[95vw] max-w-[450px] h-[95vh] max-h-[500px] p-5"
        ref={boxRef}
      >
        <h2 className="text-center capitalize">{title}</h2>
        <ul className="w-full flex flex-col gap-4 overflow-auto px-2">
          {data?.map((item, i) => (
            <li key={i}>
              <GroupMemberListContainer email={item?.email}/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ListOfAvatarPopUp;
