import React from "react";

const Loader = () => {
  return (
    <section className="z-20 fixed top-0 left-0 w-full h-full bg-whiteColor/80 grid place-items-center p-3">
      <div className="size-32 rounded-full border-8 border-primaryColor border-t-transparent border-b-transparent animate-spin"></div>
    </section>
  );
};

export default Loader;
