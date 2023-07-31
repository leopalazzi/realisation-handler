import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../globals.css";
import { ToastContainer } from "react-toastify";
import { projectsConfig } from "../config/projectsConfig";
import { useEffect, useRef, useState } from "react";
import { ContextApp } from "../context/Context/Context";

const App = ({ Component, pageProps }: any) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [projectsList, setProjectsList] = useState(projectsConfig);
  const initialProjectList = useRef();

  useEffect(() => {
    async function fetchFileNames() {
      try {
        const response = await fetch("/api/filenames", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ projectsList: projectsConfig }),
        });
        const data = await response.json();
        initialProjectList.current = data;
        setProjectsList(data);
      } catch (error) {
        console.error("Failed to fetch file names:", error);
      }
    }
    if (selectedFilters.length === 0) {
      fetchFileNames();
    }
  }, [selectedFilters]);

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
    <>
      <Header />
      <ContextApp.Provider
        value={{
          selectedFilters,
          setSelectedFilters,
          projectsList,
          setProjectsList,
        }}
      >
        <main className={" lg:px-[64px] px-[16px] pb-[120px]"}>
          <Component {...pageProps} initialProjectList={initialProjectList} />
        </main>
      </ContextApp.Provider>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
