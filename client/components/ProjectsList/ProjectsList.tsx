import { useResponsiveDetect } from "@/hooks/useResponsiveDetect";
import { MouseEvent } from "react";
import { useRouter } from "next/router";

const ProjectsList = (props: any) => {
  const { containerRef, projectsList } = props;
  const { isDesktop } = useResponsiveDetect();
  const router = useRouter();

  const onClickImage = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    router.push(`/${id}/details`);
  };

  return (
    <div>
      <div className="border mb-6"></div>
      <h2 className="font-normal text-[20px] mb-[24px]">
        Découvrez mes autres projets
      </h2>
      <div
        className="grid grid-flow-col overflow-x-auto white-space-no-wrap scrollbar-hidden gap-2"
        id="listProjects"
        ref={containerRef}
      >
        {projectsList.map((project, index) => {
          const widthImg = isDesktop ? "325px" : "175px";
          return (
            project.images?.[0] && (
              <a
                className="imgContainer group"
                style={{ width: widthImg }}
                onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                  onClickImage(event, project.id);
                }}
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/${project.id}/details`}
                key={`${project.projectTitle} - Details`}
                title={`Lien vers ${project.projectTitle} de ${project.projectDirector}`}
              >
                <img
                  src={`/projects/${project.projectDirectory}/${project.images[0]}`}
                  style={{ width: widthImg, height: "200px" }}
                  alt={`Image du projet ${project.projectTitle}`}
                  loading={index <= 6 ? "eager": "lazy"}
                />
                <div className="smooth-opacity block lg:hidden cursor-pointer absolute bottom-0 px-[12px] py-[16px] group-hover:block">
                  <div className="w-[100%] text-[14px] lg:hidden group-hover:block">
                    <div className="text-white font-medium mb-1 leading-[14px]">
                      {project.projectTitle}
                    </div>
                    <div className="text-white leading-[14px]">
                      de {project.projectDirector}
                    </div>
                  </div>
                </div>
              </a>
            )
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsList;
