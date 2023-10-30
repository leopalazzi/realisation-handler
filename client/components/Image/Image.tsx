import { useState } from "react";
import Image from "next/image";

const ImageCompponent = (props: any) => {
  const { src, alt, height, onClick, className, width, loading, priority } =
    props;
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && (
        <div
          className="containerImg"
          style={{ width: `${width}px`, height: `${height}px` }}
        ></div>
      )}
      <div className={"image-container"}>
        <Image
          src={src}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(false)}
          alt={alt}
          className={`image ${className ? className : ""}`}
          onClick={onClick}
          loading={loading}
          fill={true}
          sizes="(max-width: 768px)"
          priority={priority}
          unoptimized
        />
      </div>
    </>
  );
};

export default ImageCompponent;
