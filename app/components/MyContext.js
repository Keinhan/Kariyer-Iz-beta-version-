"use client";
import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const useMyContext = () => {
  return useContext(MyContext);
};

export const MyContextProvider = ({ children }) => {
  const [divVisible, setDivVisible] = useState(false);

  const toggleDiv = () => {
    setDivVisible(!divVisible);
  };

  return (
    <MyContext.Provider value={{ divVisible, toggleDiv }}>
      {children}
    </MyContext.Provider>
  );
};
