import React, { createContext, useState } from "react";
export const GroupSideBarContext = createContext(null);
const GroupSideBarProvider = ({ children }) => {
  const [showHideGroupSideBarState, setShowHideGroupSideBarState] =
    useState(false);
  const values = { showHideGroupSideBarState, setShowHideGroupSideBarState };
  return (
    <GroupSideBarContext.Provider value={values}>
      {children}
    </GroupSideBarContext.Provider>
  );
};

export default GroupSideBarProvider;
