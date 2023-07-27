const NextArrowCaroussel = (props: any) => {
  const { onClick, arrowClassName } = props;
  return (
    <div tabIndex={0} onClick={onClick} className={arrowClassName}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.04057 32.2675C1.37452 32.9199 2.17419 33.1782 2.82667 32.8442L31.4844 18.1764C32.4512 17.6815 32.4519 16.2993 31.4844 15.8041L2.82667 1.13627C2.17419 0.802312 1.37452 1.06053 1.04056 1.713C0.706608 2.36548 0.964821 3.16515 1.6173 3.49911L27.1064 16.5451C27.4693 16.7309 27.4693 17.2496 27.1064 17.4353L1.6173 30.4814C0.964824 30.8153 0.70661 31.615 1.04057 32.2675Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
export default NextArrowCaroussel;
