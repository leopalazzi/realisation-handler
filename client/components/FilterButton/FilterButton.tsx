import EtalonnageIcon from "../Icons/EtalonnageIcon";
import ImageIcon from "../Icons/ImageIcon";
import PhotographieIcon from "../Icons/PhotographieIcon";
import RealisationIcon from "../Icons/RealisationIcon";

const FitlerButton = (props: any) => {
  const { label, ariaLabel, onClick, textColor, disabled, isSelected, code } =
    props;
  let icon;
  switch (code) {
    case "image":
      icon = <ImageIcon />;
      break;
    case "etalonnage":
      icon = <EtalonnageIcon />;
      break;
    case "realisation":
      icon = <RealisationIcon />;
      break;
    case "photographie":
      icon = <PhotographieIcon />;
      break;
    default:
      break;
  }

  return (
    <button
      className={`${disabled ? "filterButtonDisable" : ""} ${
        isSelected ? "filterSelected" : ""
      } rounded-[40px] border border-[#DADCE0] py-[8px] px-[16px] flex items-center gap-[10px] hover:bg-[#EDEDED] bg-white `}
      aria-label={ariaLabel}
      type="button"
      onClick={() => {
        onClick();
      }}
      disabled={disabled}
    >
      {icon}
      <span className="lg:text-[16px] text-[12px] font-normal">{label}</span>
    </button>
  );
};

export default FitlerButton;
