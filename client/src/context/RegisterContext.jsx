import React, { createContext } from "react";

export const RegisterContext = createContext();

const RegisterContextProvider = ({ children }) => {

  return (
    <RegisterContext.Provider
      value={{}}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContextProvider
