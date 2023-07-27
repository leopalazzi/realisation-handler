const PrevArrowCaroussel = (props: any) => {
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
          d="M32.0639 32.1303C31.73 32.7827 30.9303 33.0409 30.2778 32.707L1.62011 18.0392C0.653302 17.5443 0.652567 16.1621 1.62011 15.6669L30.2778 0.999061C30.9303 0.665105 31.73 0.923319 32.0639 1.5758C32.3979 2.22828 32.1397 3.02794 31.4872 3.3619L5.99808 16.4079C5.63516 16.5937 5.63516 17.1124 5.99808 17.2981L31.4872 30.3442C32.1397 30.6781 32.3979 31.4778 32.0639 32.1303Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
export default PrevArrowCaroussel;
