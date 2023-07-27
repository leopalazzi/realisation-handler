const PhotographieIcon = (props: any) => {
  const { greyed } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      {...(greyed && { opacity: "0.4" })}
    >
      <rect
        x="1.18008"
        y="3.04153"
        width="14.8"
        height="12.4429"
        rx="2.4"
        stroke="black"
        strokeWidth="1.2"
      />
      <rect
        x="5.55984"
        y="6.24301"
        width="6.04012"
        height="6.04012"
        rx="3.02006"
        stroke="black"
        strokeWidth="1.2"
      />
      <path
        d="M12.897 2.90747H9.87136V2.19727C9.87136 1.36177 10.5487 0.684473 11.3842 0.684473C12.2197 0.684473 12.897 1.36178 12.897 2.19727V2.90747Z"
        stroke="black"
        strokeWidth="1.2"
      />
    </svg>
  );
};
export default PhotographieIcon;
