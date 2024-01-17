import React, { createContext, useState } from "react";
export const LoaderContext = createContext(null);

const LoaderProvider = ({ children }) => {
  const [loadingState, setLoadingState] = useState(false);
  const values = { loadingState, setLoadingState };
  return (
    <LoaderContext.Provider value={values}>{children}</LoaderContext.Provider>
  );
};

export default LoaderProvider;
