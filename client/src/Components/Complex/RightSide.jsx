import React from "react";
import ScrollBar from "../Simple/ScrollBar";

const rightAdImg = `https://images.unsplash.com/photo-1439853949127-fa647821eba0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

const RightSide = () => {
  return (
    <section className="w-full h-full overflow-x-hidden overflow-y-auto">
      <img src={rightAdImg} alt="" className="w-full h-full object-cover" />
    </section>
  );
};

export default RightSide;
