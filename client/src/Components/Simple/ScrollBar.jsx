import React from "react";
const ScrollBar = ({ children }) => {
  return (
    <section className="w-full h-full overflow-x-visible overflow-y-auto">{children}</section>
  );
};

export default ScrollBar;
