const ImageIcon = (props: any) => {
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
      <path
        d="M2.60718 14.9576L6.93327 9.18901L8.54261 11.4689L11.1673 4.32446L15.4473 14.9576"
        stroke="black"
        strokeWidth="1.2"
      />
      <rect
        x="1.46035"
        y="0.683984"
        width="14.801"
        height="14.801"
        rx="2.4"
        stroke="black"
        strokeWidth="1.2"
      />
    </svg>
  );
};

export default ImageIcon;
