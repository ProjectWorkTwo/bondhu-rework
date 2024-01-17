import React, { createContext, useState } from "react";

export const UnAuthorizeContext = createContext(null);

const UnAuthorizeProvider = ({ children }) => {
  const [unAuthorizeState, setUnAuthorizeState] = useState(false);
  const showUnAuthorizeState = () => setUnAuthorizeState((prev) => true);
  const hideUnAuthorizeState = () => setUnAuthorizeState((prev) => false);
  return (
    <UnAuthorizeContext.Provider
      value={{
        unAuthorizeState,
        setUnAuthorizeState,
        showUnAuthorizeState,
        hideUnAuthorizeState,
      }}
    >
      {children}
    </UnAuthorizeContext.Provider>
  );
};

export default UnAuthorizeProvider;
