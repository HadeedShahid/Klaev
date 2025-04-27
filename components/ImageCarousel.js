"use client";
import { useState, useEffect } from "react";

const images = [
  "/image-1-min.jpg",
  "/image-2-min.jpg",
  "/image-3-min.jpg",
  "/image-4-min.jpg",
  "/image-5-min.jpg",
];

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Klaev clothing ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
