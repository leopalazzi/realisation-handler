import { useContext } from "react";
import filtersConfig from "../../config/filtersConfig";
import { ContextApp } from "../../context/Context/Context";
import { ContextType } from "@/context/Context/ContextType";
import FitlerButton from "../FilterButton/FilterButton";
import { useResponsiveDetect } from "@/hooks/useResponsiveDetect";

const FiltersList = (props: any) => {
  const { onClickFilter } = props;
  const { selectedFilters } = useContext(ContextApp) as ContextType;
  const { isDesktop } = useResponsiveDetect();

  return (
    <div className={`flex gap-4 flex-wrap ${isDesktop ? "slide-right" : ""}`}>
      {filtersConfig.map((filter) => {
        const isSelected = selectedFilters.includes(filter.code);
        return (
          <FitlerButton
            code={filter.code}
            label={filter.label}
            ariaLabel={filter.ariaLabel}
            onClick={() => onClickFilter(filter.code)}
            key={filter.code}
            backgroundColor={filter.backgroundColor}
            textColor={filter.textColor}
            isSelected={isSelected}
          />
        );
      })}
    </div>
  );
};

export default FiltersList;
