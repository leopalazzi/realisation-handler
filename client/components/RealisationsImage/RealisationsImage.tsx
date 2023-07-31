import { useRouter } from "next/router";
import { MouseEvent } from "react";
import ImageComponent from "../Image/Image";
import filtersConfig from "../../config/filtersConfig";
import { useResponsiveDetect } from "@/hooks/useResponsiveDetect";

const RealisationsImage = (props: any) => {
  const { isMobile, isDesktop } = useResponsiveDetect();
  const { projectsList, maxImages } = props;
  const router = useRouter();

  const columns = isMobile ? 2 : 4; // Number of columns
  const rows = Math.ceil(projectsList.slice(0, maxImages).length / columns); // Calculate number of rows

  const columnsData = Array.from({ length: columns }, (_, colIndex) => {
    const start = colIndex * rows;
    const end = start + rows;
    return projectsList.slice(start, end);
  });

  const onClickImage = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    router.push(`/${id}/details`);
  };

  return (
    <div className="flex">
      {columnsData[0][0]?.images?.[0] &&
        columnsData.map((column, colIndex) => {
          return (
            <div key={colIndex} className="imgColumn">
              {column.map((project: any, rowIndex: number) => {
                const padding = isDesktop ? 128 : 32;
                const numberColumn = isDesktop ? 4 : 2;
                const columnWidth =
                  ((document.documentElement.clientWidth - padding) / numberColumn) - 8;
                const imageRatio =
                  parseInt(project.imageWidth, 10) / columnWidth;
                const heightImage = Math.round(
                  parseInt(project.imageHeight, 10) / imageRatio
                );
                const percentageHeightScreen = heightImage / document.documentElement.clientHeight * 100
                return (
                  project.images?.[0] && (
                    <a
                      className="imgContainer"
                      key={`${project.projectTitle}-${rowIndex}`}
                      onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                        onClickImage(event, project.id);
                      }}
                      href={`${process.env.NEXT_PUBLIC_BASE_URL}/${project.id}/details`}
                    >
                      <ImageComponent
                        src={`/projects/${project.projectDirectory}/${project.images[0]}`}
                        alt={`${project.projectTitle} - Image 1`}
                        height={isNaN(heightImage) ? 200 : `${heightImage}`}
                        width={columnWidth}
                        priority={percentageHeightScreen > 20 ? true : false }

                      />
                      <div className="imgInfos smooth-opacity">
                        <div className="filtersContainer">
                          {project.filters.map((filterCode: string) => {
                            const currentFilterConfig = filtersConfig.find(
                              (filter) => filter.code === filterCode
                            );
                            if (!currentFilterConfig) {
                              return;
                            }
                            return (
                              <span
                                key={`${filterCode}`}
                                className="text-white px-2 py-1 rounded-[80px] border border-white"
                              >
                                {currentFilterConfig.label}
                              </span>
                            );
                          })}
                        </div>
                        <div className="imgTitleContainer">
                          <div className="text-white uppercase font-medium mb-1 leading-[14px]">
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
          );
        })}
    </div>
  );
};

export default RealisationsImage;
