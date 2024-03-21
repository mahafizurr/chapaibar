import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";

const AdvocatePhoto = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "demo",
    },
  });

  return <div>AdvocatePhoto</div>;
};

export default AdvocatePhoto;
