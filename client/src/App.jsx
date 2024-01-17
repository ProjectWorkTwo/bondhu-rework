import React, { useContext, useEffect, useState } from "react";
import NavBar from "./Components/Simple/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import OwnProfile from "./Sidebars/OwnProfile";
import CustomScrollBar from "./Components/Simple/CustomScrollBar";
import OtherProfile from "./Sidebars/OtherProfile";
import UnAuthorizePopup from "./Components/Simple/UnAuthorizePopup";
import SearchPopUp from "./Sidebars/SearchPopUp";
import { ProfilePopUpContext } from "./Providers/ProfilePopUpProvider";
import { CreateGroupPageFormContext } from "./Providers/CreateGroupPageFormProvider";
import CreateGroupPageForm from "./Components/Simple/CreateGroupPageForm";
import { UnAuthorizeContext } from "./Providers/UnAuthorizeProvider";
import Loader from "./Components/Simple/Loader";

const App = () => {
  const {
    ownProfileState,
    setOwnProfileState,
    otherProfileState,
    setOtherProfileState,
  } = useContext(ProfilePopUpContext);
  const { createGroupPageFormState } = useContext(CreateGroupPageFormContext);
  const [autorizePopUpState, setAutorizePopUpState] = useState(false);
  const [searchPopUpState, setSearchPopUpState] = useState(false);
  return (
    <>
      <NavBar
        setOwnProfileState={setOwnProfileState}
        setSearchPopUpState={setSearchPopUpState}
        setOtherProfileState={setOtherProfileState}
      />
      <section className="w-full flex justify-center items-center mt-[60px] px-4">
        <Outlet />
      </section>
      {localStorage.getItem("authorData") && (
        <>
          {/* <OwnProfile />
          <OtherProfile
            profileState={otherProfileState}
            setProfileState={setOtherProfileState}
          /> */}
          <SearchPopUp
            searchPopUpState={searchPopUpState}
            setSearchPopUpState={setSearchPopUpState}
          />
        </>
      )}
      {autorizePopUpState && (
        <UnAuthorizePopup setStatus={setAutorizePopUpState} />
      )}
      {createGroupPageFormState && <CreateGroupPageForm />}
      <CustomScrollBar />
      {/* <Loader /> */}
    </>
  );
};

export default App;
