import React, { createContext, useState } from "react";

export const CreateGroupPageFormContext = createContext(null);

const CreateGroupPageFormProvider = ({ children }) => {
  const [createGroupPageFormState, setCreateGroupPageFormState] = useState("");
  const values = { createGroupPageFormState, setCreateGroupPageFormState };
  return (
    <CreateGroupPageFormContext.Provider value={values}>
      {children}
    </CreateGroupPageFormContext.Provider>
  );
};

export default CreateGroupPageFormProvider;
