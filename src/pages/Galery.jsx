import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Masonry from "react-masonry-css";

const generateImages = () => {
  const images = [];
  for (let i = 1; i <= 90; i++) {
    images.push({ 
      src: `src/assets/img/1 (${i}).jpeg`, 
      alt: `Image ${i}`,
      category: "general"
    });
  }
  return images;
};

const Gallery = () => {
  const [index, setIndex] = useState(-1);
  const [images, setImages] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    setImages(generateImages());
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl  text-blue-900 mb-8 text-center font-bold">Gallery</h1>
      
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto"
        columnClassName="masonry-column"
      >
        {images.map((img, i) => (
          <div 
            key={i}
            className="mb-4 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setIndex(i)}
              onLoad={() => setLoadedCount(prev => prev + 1)}
              style={{ display: loadedCount > i ? 'block' : 'none' }}
            />
            {loadedCount <= i && (
              <div className="w-full bg-gray-200 animate-pulse" style={{ height: '200px' }} />
            )}
          </div>
        ))}
      </Masonry>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images}
      />

      <style jsx global>{`
        .masonry-column {
          padding-left: 8px;
          background-clip: padding-box;
        }
      `}</style>
    </div>
  );
};

export default Gallery;