import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn, CgLogOut } from "react-icons/cg";
import { GoHomeFill } from "react-icons/go";
import { FaPager } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import NavBarMobile from "./NavBarMobile";
import { IoMdSearch } from "react-icons/io";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../../Providers/AuthProvider";

const profilePic =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D";

const NavBar = ({
  setOwnProfileState,
  setSearchPopUpState,
  setOtherProfileState,
}) => {
  const [navMobileModeState, setNavMobileModeState] = useState(false);
  const navBarMobileRef = useRef(null);
  const { authenticationState, setAuthenticationState, handleLogOut } =
    useContext(AuthContext);

  useEffect(() => {
    const handleClickEvent = (e) => {
      if (
        navBarMobileRef?.current &&
        !navBarMobileRef?.current.contains(e?.target)
      )
        setNavMobileModeState((prev) => false);
    };
    document.addEventListener("click", handleClickEvent);

    return () => document.removeEventListener("click", handleClickEvent);
  }, []);

  const tabs = [
    {
      text: "home",
      link: "/",
      icon: <GoHomeFill />,
    },
    {
      text: "group",
      link: "/groups",
      icon: <MdGroups />,
    },
    {
      text: "page",
      link: "/pages",
      icon: <FaPager />,
    },
    {
      text: "search",
      link: null,
      icon: <IoMdSearch />,
      method: setSearchPopUpState,
    },
  ];
  const tabsMobile = [
    ...tabs,
    {
      text: "login",
      link: "/login",
      icon: <CgLogOut />,
    },
    {
      text: "logout",
      link: null,
      icon: <CgLogIn />,
    },
  ];

  return (
    <div className="fixed top-0 left-0 z-[99] w-full grid grid-cols-2 md:grid-cols-3 justify-center items-center  px-5 py-2 bg-primaryColor gap-2 min-h-[60px] shadow-2xl">
      <Link
        to="/"
        className="select-none w-full max-w-32 bg-whiteColor rounded-full flex-shrink-0"
      >
        <img src={logo} alt="" className="w-full h-full object-contain" />
      </Link>
      <div className="fullScreenNavLinks hidden md:flex justify-center items-center gap-4">
        {authenticationState &&
          tabs.map(({ text, link, icon, method }, i) => (
            <React.Fragment key={i}>
              {link ? (
                <NavLink to={link} className="navTabIcon" title={text}>
                  {icon}
                </NavLink>
              ) : (
                <div
                  className="navTabIcon"
                  title={text}
                  onClick={() => method((prev) => true)}
                >
                  {icon}
                </div>
              )}
            </React.Fragment>
          ))}
      </div>
      <div className="flex justify-end items-center gap-2">
        <div className="hidden md:flex justify-center items-center gap-2">
          {authenticationState || (
            <Link to="/login" className="navTabIcon" title="Login">
              <CgLogOut />
            </Link>
          )}
          {authenticationState && (
            <div className="navTabIcon" onClick={handleLogOut} title="Logout">
              <CgLogIn />
            </div>
          )}
        </div>
        {authenticationState && (
          <div
            className="navTabIcon"
            onClick={() => setOwnProfileState((prev) => true)}
          >
            <img src={profilePic} alt="" className="size-full object-cover" />
          </div>
        )}
        <div className="relative block md:hidden" ref={navBarMobileRef}>
          <div
            className="navTabIcon"
            onClick={() => setNavMobileModeState((prev) => !prev)}
          >
            <FaBars />
          </div>
          {navMobileModeState && <NavBarMobile tabsMobile={tabsMobile} />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
