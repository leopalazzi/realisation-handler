import { filtersConfig } from "../../config/filtersConfig";
import FitlerButton from "../FilterButton/FilterButton";

const DetailsBlock = (props: any) => {
  const {
    title,
    director,
    filters,
    year,
    duration,
    producer,
    camera,
    photographerName,
    nomination,
    videoLink,
  } = props;
  return (
      <div className="flex gap-2 shrink-0 flex-col pr-[90px] text-[18px] mb-[50px] lg:mb-[60px]">
        <span>
          Date de sortie : <span className="font-medium">{year}</span>
        </span>
        {duration && (
          <span>
            Durée : <span className="font-medium">{duration}</span>
          </span>
        )}
        <span>
          Réalisation : <span className="font-medium">{director}</span>
        </span>
        {producer && (
          <span>
            Producteur : <span className="font-medium">{producer}</span>
          </span>
        )}
        {camera && (
          <span>
            Caméra : <span className="font-medium">{camera}</span>
          </span>
        )}
        {photographerName && (
          <span>
            Image : <span className="font-medium">{photographerName}</span>
          </span>
        )}
        {nomination && (
          <span>
            Selection : <span className="font-medium">{nomination}</span>
          </span>
        )}
        {videoLink && (
          <span>
            Lien :{" "}
            <a
              href={videoLink}
              target="_blank"
              className="underline font-medium text-[#64A2FF] break-normal"
            >
              {videoLink}
            </a>
          </span>
        )}
      </div>
  );
};

export default DetailsBlock;
