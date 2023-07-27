const preloadImage = (src,setIsLoaded) => {
    new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function () {
          setIsLoaded(true);
          resolve(img)
        }
        img.onerror = img.onabort = function () {
            setIsLoaded(false);

          reject(src)
        }
        img.src= src;
      });
}

export default preloadImage;