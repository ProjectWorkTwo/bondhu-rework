import React from "react";
import Accordion from "../Accordion";
import Avatar1 from "../Avatar1";

const GroupYouManage = () => {
  return (
    <Accordion title="Your are joined in">
      <div className="flex flex-col gap-4">
        <Avatar1 />
        <Avatar1 />
        <Avatar1 />
        <Avatar1 />
        <Avatar1 />
      </div>
    </Accordion>
  );
};

export default GroupYouManage;
