const RealisationIcon = (props: any) => {
  const { greyed } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="17"
      viewBox="0 0 21 17"
      fill="none"
      {...(greyed && { opacity: "0.4" })}
    >
      <rect
        x="1.46133"
        y="0.684534"
        width="13.6413"
        height="14.7998"
        rx="2.4"
        stroke="black"
        strokeWidth="1.2"
      />
      <path
        d="M15.5371 5.11477L17.9836 3.29676C18.6434 2.80646 19.58 3.27739 19.58 4.0994L19.5801 12.0109C19.5801 12.8437 18.6216 13.3116 17.9649 12.7993L15.5247 10.8953C15.2823 10.7062 15.1403 10.416 15.1399 10.1084L15.1336 5.91891C15.1331 5.60207 15.2828 5.30375 15.5371 5.11477Z"
        stroke="black"
        strokeWidth="1.2"
      />
    </svg>
  );
};

export default RealisationIcon;
