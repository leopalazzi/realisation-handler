import { FunctionComponent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import FitlerButton from "../../components/FilterButton/FilterButton";
import filtersConfig from "../../config/filtersConfig";
import { ContextType } from "../../context/Context/ContextType";
import { useContext } from "react";
import { ContextApp } from "../../context/Context/Context";
import DetailsBlock from "../../components/DetailsBlock/DetailsBlock";
import BackIcon from "@/components/Icons/BackIcon";
import ImagesSlider from "@/components/ImagesSlider/ImagesSlider";
import Head from "next/head";
import ProjectsList from "@/components/ProjectsList/ProjectsList";

const Details: FunctionComponent = (props: any) => {
  const [imageClickedIndex, setImageClickedIndex] = useState(null);
  const { projectsList } = useContext(ContextApp) as ContextType;
  const router = useRouter();
  const id = router.query.id;
  const currentProject = projectsList.find(
    (project: any) => project.id?.toString() === id
  );
  const divRef = useRef(null);
  const [imagesSlider, setImagesSlider] = useState([]);
  const mousePosRef = useRef({});
  const projectContainerRef = useRef(null);

  useEffect(() => {
    if(projectContainerRef.current)
    {
      projectContainerRef.current.addEventListener("wheel", handleWheel);
    }
    // Clean up the event listener when the component unmounts
    return () => {
      projectContainerRef.current.removeEventListener("wheel", handleWheel);
    };
  }, [projectContainerRef.current]);


  useEffect(() => {
    if (imageClickedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset"; // Enable scrolling when image is closed
    }

    // Clean up the event listener on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [imageClickedIndex]);

  const onMouseMouve = (event) => {
    const mousePos = { x: event.clientX, y: event.clientY };
    mousePosRef.current = mousePos;
  };

  const handleWheel = (event) => {
    event.preventDefault();
    const { wheelDelta } = event;
    if (wheelDelta > 0) {
      projectContainerRef.current.scrollLeft += 75;

      // Scroll the container horizontally
    } else {
      projectContainerRef.current.scrollLeft -= 75;
    }
  };

  const onImageClick = (index) => {
    const tempImages = Array.from(currentProject.images);
    const tempImg = tempImages.splice(index, 1)[0];
    tempImages.unshift(tempImg);
    setImagesSlider(tempImages);
    setImageClickedIndex(index);
  };

  const onKeyPressed = (event) => {
    if (event.keyCode == 27) {
      setImageClickedIndex(null);
    }
  };

  if (!currentProject) {
    return (
      <div className="flex self-center text-[20px]">
        Erreur de numéro de projet
      </div>
    );
  }

  const {
    projectTitle,
    projectDirector,
    filters,
    projectYear,
    projectDuration,
    projectProducer,
    camera,
    photographerName,
    nomination,
    videoLink,
  } = currentProject;

  return (
    <div
      tabIndex={0}
      onKeyDown={onKeyPressed}
      ref={divRef}
      onMouseMove={onMouseMouve}
    >
      <Head>
        <title>Projet - {currentProject.projectTitle}</title>
        <meta
          name="description"
          content={`Vous trouverez les details pour le projet ${currentProject.projectTitle}`}
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/${currentProject.id}/details`}
        />
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
      {imageClickedIndex !== null && (
        <ImagesSlider
          images={imagesSlider}
          projectDirectory={currentProject.projectDirectory}
          projectTitle={projectTitle}
          setImageClickedIndex={setImageClickedIndex}
          onImageClick={onImageClick}
          mousePos={mousePosRef.current}
        />
      )}
      <div className="flex flex-col">
        <button className="mb-[48px]" onClick={() => router.push("/")}>
          <span className="flex text-[20px] font-bold items-center gap-2">
            <BackIcon /> Retour
          </span>
        </button>
        <div className="flex items-center mb-[32px]">
          <h1 className="text-[29px] font-medium text-[#3A3A3A]">
            {projectTitle}
            <span className="italic text-[#3A3A3A] font-light">
              {" "}
              de {projectDirector}
            </span>
          </h1>
        </div>
        <div className="flex gap-[8px] flex-wrap mb-[40px]">
          {filters?.map((filterCode: string) => {
            const currentFilterConfig = filtersConfig.find(
              (filter) => filter.code === filterCode
            );
            return (
              currentFilterConfig && (
                <FitlerButton
                  label={currentFilterConfig?.label}
                  ariaLabel={currentFilterConfig?.ariaLabel}
                  key={currentFilterConfig?.code}
                  disabled={true}
                  code={currentFilterConfig?.code}
                />
              )
            );
          })}
        </div>
        <div className="grid-cols-2 grid gap-2 items-center mb-[40px]">
          {currentProject.images?.map((imagePath: string, index: number) => {
            return (
              <img
                key={`${imagePath}-${index}`}
                src={`/projects/${currentProject.projectDirectory}/${imagePath}`}
                height={currentProject.imageHeight}
                alt={`Image du projet ${currentProject.projectTitle} - ${index}`}
                onClick={() => onImageClick(index)}
                className="cursor-zoom-in image"
              />
            );
          })}
        </div>
        <DetailsBlock
          title={projectTitle}
          director={projectDirector}
          filters={filters}
          year={projectYear}
          duration={projectDuration}
          producer={projectProducer}
          camera={camera}
          photographerName={photographerName}
          nomination={nomination}
          videoLink={videoLink}
        />
        <ProjectsList projectsList={projectsList} containerRef={projectContainerRef} />
      </div>
    </div>
  );
};

export default Details;
