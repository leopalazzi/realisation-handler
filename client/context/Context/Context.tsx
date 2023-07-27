import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { ContextType } from "./ContextType";
import { projectsConfig } from "../../config/projectsConfig";

export const ContextApp = createContext<ContextType | null >(null);

const ContextProvider = ({ children }: any) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    localStorage.setItem("projectsList", JSON.stringify(projectsList));
  }, [projectsList]);

  useEffect(() => {
    const storedProjectsList = localStorage.getItem("projectsList");
    if (storedProjectsList) {
      setProjectsList(JSON.parse(storedProjectsList));
    }
  }, []);

  return (
    <ContextApp.Provider value={{ selectedFilters, setSelectedFilters, projectsList, setProjectsList }}>
      {children}
    </ContextApp.Provider>
  );
};

export default ContextProvider;

