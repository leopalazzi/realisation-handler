import { useState } from "react";
import AppSlider from "../AppSlider/AppSlider";
import CrossIcon from "../Icons/CrossIcon";

const ImagesSlider = (props: any) => {
  const {
    images,
    projectDirectory,
    projectTitle,
    setImageClickedIndex,
    onImageClick,
    mousePos
  } = props;


  const [indexImage, setIndexImage] = useState(1);
  return (
    <div
      className="h-[100%] w-[100%] bg-[#00000033] fixed left-0 top-0 z-10 max-sm:pt-[200px] backdrop-blur-lg scaleForward"
      style={{transformOrigin: `${mousePos.x}px ${mousePos.y}px`}}
      tabIndex={0}
    >
      <div className="flex flex-col h-[100%] gap-[32px]">
        <div className="flex justify-between">
          <div className="ml-[40px] mt-[40px]"><span className="text-white text-[18px]">{indexImage}/{images?.length}</span></div>
          <div
            tabIndex={0}
            className="p-[24px] cursor-pointer mt-[16px] mr-[16px]"
            onClick={() => setImageClickedIndex(null)}
          >
            <CrossIcon />
          </div>
        </div>
        <div className="w-[100%] mx-[auto] px-[40px]">
          <AppSlider setIndexImage={setIndexImage}>
            {images?.map((imagePath: string, index: number) => {
              return (
                <img
                  key={`${imagePath}-${index}`}
                  src={`/projects/${projectDirectory}/${imagePath}`}
                  alt={`Image ${projectTitle} - ${index}`}
                  onClick={() => onImageClick(index)}
                  className="lg:max-h-[740px] max-h-[640px] w-[auto]"
                  style={{width: "auto"}}
                />
              );
            })}
          </AppSlider>
        </div>
      </div>
    </div>
  );
};

export default ImagesSlider;
