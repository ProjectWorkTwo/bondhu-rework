import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowDropup, IoIosArrowUp } from "react-icons/io";

const Accordion = ({ title, children }) => {
  const [accordionState, setAccordionState] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center gap-2 bg-primaryColor/5 rounded-md p-2 cursor-pointer" onClick={() => setAccordionState((prev) => !prev)}>
        <h2 className="select-none text-primaryColor text-lg md:text-xl capitalize">{title}</h2>
        <span className="text-2xl size-10 bg-grayColor/20 rounded-full grid place-items-center cursor-pointer commonAnim">
          <IoIosArrowDown
            className={`${
              accordionState ? "-rotate-180" : "rotate-0"
            } commonAnim`}
          />
        </span>
      </div>
      {accordionState && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default Accordion;
