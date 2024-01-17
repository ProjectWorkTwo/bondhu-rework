import React from "react";
import Accordion from "../Accordion";
import Avatar1 from "../Avatar1";

const GroupYouJoined = () => {
  return (
    <Accordion title="Group you manage">
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

export default GroupYouJoined;
