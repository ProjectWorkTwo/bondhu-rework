import React from "react";
import Accordion from "./Accordion";
import Avatar1 from "./Avatar1";

const SideBarAccordion = ({ title, data, type }) => {
  const nameSingleWordToSplited = (text) => {
    return text?.split("-")?.join(" ");
  };
  return (
    <div className="flex flex-col gap-5 px-2">
      <Accordion title={title}>
        <div className="flex flex-col gap-4">
          {data?.map(
            ({ _id, groupName, pageName, groupCover, pageProfilePic }) => (
              <Avatar1
                key={_id}
                groupPost={type === "group"}
                pagePost={type === "page"}
                profileOrPageName={nameSingleWordToSplited(
                  groupName || pageName
                )}
                profilePic={groupCover || pageProfilePic}
              />
            )
          )}
        </div>
      </Accordion>
    </div>
  );
};

export default SideBarAccordion;
