import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const NavBarMobile = ({ tabsMobile }) => {
  const { authenticationState, setAuthenticationState, handleLogOut } =
    useContext(AuthContext);
  return (
    <div className="mobileNavLinkCustomCSS md:hidden absolute overflow-hidden right-0 mt-1 w-[220px] flex flex-col bg-whiteColor rounded-md shadow-2xl justify-between items-center divide-y-2 divide-secondaryColor border">
      {tabsMobile.map(({ text, link, icon, method }, i) => (
        <React.Fragment key={i}>
          {link ? (
            <>
              {text === "login" ? (
                <>
                  {authenticationState || (
                    <NavLink to={link} className="navMobileTab">
                      <span className="navMobileTabIcon">{icon}</span>
                      <span className="text-base text-primaryColor capitalize">
                        {text}
                      </span>
                    </NavLink>
                  )}
                </>
              ) : (
                <>
                  {authenticationState && (
                    <NavLink to={link} className="navMobileTab">
                      <span className="navMobileTabIcon">{icon}</span>
                      <span className="text-base text-primaryColor capitalize">
                        {text}
                      </span>
                    </NavLink>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              {authenticationState && (
                <>
                  {text === "search" ? (
                    <button
                      to={link}
                      className="navMobileTab"
                      onClick={() => method((prev) => true)}
                    >
                      <span className="navMobileTabIcon">{icon}</span>
                      <span className="text-base text-primaryColor capitalize">
                        {text}
                      </span>
                    </button>
                  ) : (
                    <button
                      to={link}
                      className="navMobileTab"
                      onClick={handleLogOut}
                    >
                      <span className="navMobileTabIcon">{icon}</span>
                      <span className="text-base text-primaryColor capitalize">
                        {text}
                      </span>
                    </button>
                  )}
                </>
              )}
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavBarMobile;
