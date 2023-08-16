import filtersConfig from "@/config/filtersConfig";
import { useRouter } from "next/router";
import { KeyboardEvent } from "react";
import ImageIcon from "../Icons/ImageIcon";
import EtalonnageIcon from "../Icons/EtalonnageIcon";
import RealisationIcon from "../Icons/RealisationIcon";
import PhotographieIcon from "../Icons/PhotographieIcon";

const RealisationsTable = (props: any) => {
  const { projectsList } = props;
  const router = useRouter();

  const goToDetails = (projectId: number) => {
    router.push(`/${projectId}/details`);
  };

  const onKeyDown = (
    event: KeyboardEvent<HTMLTableRowElement>,
    projectId: number
  ) => {
    if (event.key === "Enter") {
      goToDetails(projectId);
    }
  };

  const returnCorrectIcon = (filterCode: string) => {
    let icon;
    switch (filterCode) {
      case "image":
        icon = <div className="rounded-[40px] bg-[#40BCF4] w-[16px] h-[16px]"></div>;
        break;
      case "etalonnage":
        icon = <div className="rounded-[40px] bg-[#00E054] w-[16px] h-[16px]"></div>;
        break;
      case "realisation":
        icon = <div className="rounded-[40px] bg-[#FF8000] w-[16px] h-[16px]"></div>;
        break;
      default:
        break;
    }
    return icon;
  };

  const createIcons = (projectFilters: any) => {
    let icons: any[] = [];
    filtersConfig.forEach((filterConfig) => {
      if (filterConfig.hasIcon) {
        const { code } = filterConfig;
        const filterInProject = projectFilters.find(
          (filterCode: string) => filterCode === code
        );
        if (filterInProject) {
          icons.push(returnCorrectIcon(code));
        }
      }
    });
    return icons;
  };

  return (
    <div style={{ width: "100%" }} className="bg-[#F9F9F9]">
      <table className="sortable">
        <thead>
          <tr>
            <th className="sticky top-0 py-[16px]">Année</th>
            <th className="sticky top-0 py-[16px]">Titre</th>
            <th className="sticky top-0 py-[16px]">Realisateur</th>
            <th className="sticky top-0 py-[16px]">Prod</th>
            <th className="sticky top-0 py-[16px]">Caméra</th>
            <th className="sticky top-0 py-[16px]">Filtres</th>
          </tr>
        </thead>
        <tbody>
          {projectsList.map((project: any, index: number) => {
            const {projectTitle, id, projectYear, projectDirector, projectProducer, camera } = project;
            return (
              <tr
                className="text-justify hover:bg-[#D0E3FF]"
                key={`${projectTitle}-${index}`}
                onClick={() => goToDetails(id)}
                tabIndex={0}
                onKeyDown={(event) => onKeyDown(event, id)}
              >
                <td>{projectYear}</td>
                <td>{projectTitle}</td>
                <td>{projectDirector ? projectDirector : "NA"}</td>
                <td>{projectProducer ? projectProducer : "NA"}</td>
                <td>{camera? camera : "NA"}</td>
                <td>
                  <div className="flex gap-4 flex-wrap">
                    {createIcons(project.filters)}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RealisationsTable;
