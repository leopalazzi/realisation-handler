import { Suspense, useEffect, useState } from "react";
import { projectsConfig } from "../config/projectsConfig";
import RealisationsImage from "../components/RealisationsImage/RealisationsImage";
import RealisationsTable from "../components/RealisationsTable/RealisationsTable";
import Button from "../components/Button/Button";
import FitlerIcon from "../components/Icons/FilterIcon";
import ButtonBlock from "../components/ButtonBlock/ButtonBlock";
import { ContextApp } from "../context/Context/Context";
import { useContext } from "react";
import { ContextType } from "@/context/Context/ContextType";
import { useResponsiveDetect } from "@/hooks/useResponsiveDetect";
import FiltersList from "@/components/FiltersList/FiltersList";
import Head from "next/head";

export default function Home(props: any) {
  const { initialProjectList } = props;
  const { selectedFilters, setSelectedFilters, projectsList, setProjectsList } =
    useContext(ContextApp) as ContextType;
  const [maxImages, setMaxImages] = useState(16);
  const [btnClicked, setBtnClicked] = useState("mosaicView");
  const { isDesktop, isMobile } = useResponsiveDetect();

  const onClickMoreResults = () => {
    if (maxImages + 16 > projectsList.length) {
      setMaxImages(projectsList.length);
    } else {
      setMaxImages(maxImages + 16);
    }
  };

  const onClickFilter = (filterCode: string) => {
    console.log("filter", filterCode)
    if (selectedFilters.includes(filterCode)) {
      setSelectedFilters((prevFilters: string[]) =>
      {
        return  prevFilters.filter((filter) => filter !== filterCode)
      }
      );
    } else {
      setSelectedFilters((prevFilters) => [...prevFilters, filterCode]);
    }
  };

  useEffect(() => {
      setProjectsList(() => {
        return initialProjectList.current.filter((project: any) =>
          selectedFilters.every((filter) => project.filters?.includes(filter))
        );
      });
  }, [selectedFilters]);

  useEffect(() => {
    if (isMobile) {
      setBtnClicked("mosaicView");
    }
  }, [isMobile]);

  return (
    <div className="flex flex-col grow gap-[40px]">
      <Head>
        <title>Tous les projets d&apos;Emmanuel Fraisse</title>
        <meta
          name="description"
          content="Retrouvez tous les projets d'Emmanuel Fraisse."
        />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}`} />
        <script
          type="application/ld+json"
          // dangerouslySetInnerHTML={{
          //   __html: JSON.stringify(
          //     generateLDJSONBreadcrumbs(
          //       config,
          //       normalizedLinks(links, country, t)
          //     )
          //   ),
          // }}
        />
      </Head>
      <div className="flex flex-row gap-6 items-center justify-between">
        <div className="flex justify-center items-center">
            <FiltersList onClickFilter={onClickFilter} />
        </div>
        {isDesktop && (
          <ButtonBlock setBtnClicked={setBtnClicked} btnClicked={btnClicked} />
        )}
      </div>
      {btnClicked === "mosaicView" ? (
          <RealisationsImage
            projectsList={projectsList}
            maxImages={maxImages}
          />
      ) : (
        <RealisationsTable projectsList={projectsList} />
      )}
      {projectsList[0]?.images?.length > 0 &&
        maxImages !== projectsList?.length &&
        btnClicked === "mosaicView" && (
          <div className="flex justify-center">
            <Button
              type="button"
              aria-label="Afficher plus de résultats"
              onClick={onClickMoreResults}
              className="rounded-[40px] border border-[#D3D3D3] bg-[#F8F8F8] text-[#0F0F0F] py-[16px] px-[24px]"
            >
              Afficher plus de résultats
            </Button>
          </div>
        )}
      {projectsList.length == 0 && (
        <div className="flex justify-center">
          <span>Pas de projet trouvé pour votre recherche</span>
        </div>
      )}
    </div>
  );
}
