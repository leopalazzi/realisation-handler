const FitlerButton = (props: any) => {
  const { label, ariaLabel, onClick, textColor, disabled, isSelected, code } =
    props;
  let icon;
  switch (code) {
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
