import { FunctionComponent, useRef } from "react";
import Slider from "react-slick";
import PrevArrowCaroussel from "../Icons/PrevArrowCaroussel";
import NextArrowCaroussel from "../Icons/NextArrowCaroussel";

const AppSlider: FunctionComponent<any> = (props) => {
    const { children, className, setIndexImage } = props;
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        arrows: true,
        ref: sliderRef,
        prevArrow: <PrevArrowCaroussel arrowClassName="cursor-pointer"/>,
        nextArrow: <NextArrowCaroussel arrowClassName="cursor-pointer"/>,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (oldIndex, newIndex) => {
            setIndexImage(newIndex + 1) ;
        }
    };


    return (
        <Slider
            {...settings}
            className={className}
        >
            {children}
        </Slider>
    );
};

export default AppSlider;