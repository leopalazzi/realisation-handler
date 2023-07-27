import { cloneElement } from "react";

const Button = (props: any) => {
  const {
    ariaLabel,
    onClick,
    children,
    active,
    disabled,
    label,
    type,
    className,
  } = props;

  return (
    <button
      className={`flex px-[16px] py-[8px] bg-white border border-[#DADCDF] justify-center rounded-[80px] items-center hover:bg-[#EDEDED] ${
        active ? "activeBtn" : ""
      } ${className ? className : ""}`}
      aria-label={ariaLabel}
      type={type}
      onClick={onClick}
      disabled={disabled}
      role="button"
    >
      {label && <span className="mr-[10px] font-normal">{label}</span>}
      {typeof children === "string" ? children : cloneElement(children)}
    </button>
  );
};

export default Button;
