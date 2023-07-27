const EtalonnageIcon = (props: any) => {
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
      <circle
        cx="8.86133"
        cy="8.08447"
        r="7.4"
        stroke="black"
        strokeWidth="1.2"
      />
      <path
        d="M8.86085 2.97986L8.86085 5.85871M8.86085 13.1891L8.86096 10.3103"
        stroke="black"
        strokeWidth="1.2"
      />
      <path
        d="M13.9657 8.08442L11.0868 8.08442M3.75645 8.08442L6.63527 8.08453"
        stroke="black"
        strokeWidth="1.2"
      />
    </svg>
  );
};

export default EtalonnageIcon;
