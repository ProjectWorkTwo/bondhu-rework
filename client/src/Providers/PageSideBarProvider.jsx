import React, { createContext, useState } from "react";
export const PageSideBarContext = createContext(null);
const PageSideBarProvider = ({ children }) => {
  const [showHidePageSideBarState, setShowHidePageSideBarState] =
    useState(false);
  const values = { showHidePageSideBarState, setShowHidePageSideBarState };
  return (
    <PageSideBarContext.Provider value={values}>
      {children}
    </PageSideBarContext.Provider>
  );
};

export default PageSideBarProvider;
