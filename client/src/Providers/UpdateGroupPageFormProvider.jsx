import React, { createContext, useState } from "react";

export const UpdateGroupPageFormContext = createContext(null);

const UpdateGroupPageFormProvider = ({ children }) => {
  const [updateGroupPageFormState, setUpdateGroupPageFormState] = useState("");
  const values = { updateGroupPageFormState, setUpdateGroupPageFormState };
  return (
    <UpdateGroupPageFormContext.Provider value={values}>
      {children}
    </UpdateGroupPageFormContext.Provider>
  );
};

export default UpdateGroupPageFormProvider;
