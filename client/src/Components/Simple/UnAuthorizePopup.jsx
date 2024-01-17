import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import hidePopUp from "../CustomFunction/hidePopUp";
import { UnAuthorizeContext } from "../../Providers/UnAuthorizeProvider";

const UnAuthorizePopup = () => {
  const {
    unAuthorizeState,
    setUnAuthorizeState,
    showUnAuthorizeState,
    hideUnAuthorizeState,
  } = useContext(UnAuthorizeContext);
  const boxRef = useRef(null);
  return (
    <>
      {unAuthorizeState && (
        <section
          className="popupWrapper text-center"
          onClick={(e) => hidePopUp(e, boxRef, setUnAuthorizeState)}
        >
          <div
            className="flex flex-col gap-4 justify-center items-center bg-whiteColor shadow-2xl rounded-md w-[90vw] max-w-[450px] min-h-60 h-auto max-h-[95vh] p-5"
            ref={boxRef}
          >
            <h2 className="text-center">Unauthorized Access</h2>
            <p className="text-sm md:text-base text-grayColor leading-relaxed">
              You are not logged in. To interect you need to create an account,
              or if you have an account then login in
            </p>
            <div className="flex flex-wrap justify-center items-center gap-5">
              <Link to="/login" className="btnFill1">
                Login
              </Link>
              <Link to="/signup" className="btnFill1">
                Sign Up
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default UnAuthorizePopup;
