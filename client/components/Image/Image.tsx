import { useState } from "react";
import Image from "next/image";

const ImageCompponent = (props: any) => {
  const { src, alt, height, onClick, className, width, loading } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && (
        <div
          className="containerImg"
          style={{ width: `${width}px`, height: `${height}px` }}
        ></div>
      )}
      {
        <Image
          src={src}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(false)}
          alt={alt}
          className={`image ${className ? className : ""}`}
          onClick={onClick}
          height={height}
          width={width}
          loading={loading}
        />
      }
    </>
  );
};

export default ImageCompponent;
