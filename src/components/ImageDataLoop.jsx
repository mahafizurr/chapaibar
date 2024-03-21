import React from "react";
import { images } from "./ImageData";

export const ImageDataLoop = () => {
  return (
    <div>
      {images.map((image) => (
        <img
          key={image.name}
          src={image.path}
          alt={image.name}
          className="w-20 h-20 object-cover"
        />
      ))}
    </div>
  );
};
