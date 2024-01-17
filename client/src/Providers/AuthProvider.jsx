import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authenticationState, setAuthenticationState] = useState(false);
  useEffect(() => {
    setAuthenticationState((prev) =>
      Boolean(localStorage.getItem("authorData"))
    );
  }, [localStorage.getItem("authorData")]);
  const handleLogOut = () => {
    setAuthenticationState((prev) =>
      Boolean(localStorage.removeItem("authorData"))
    );
  };
  const values = {
    authenticationState,
    setAuthenticationState,
    handleLogOut,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
