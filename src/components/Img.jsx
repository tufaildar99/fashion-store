import React from "react";

const Img = ({ className, src = "defaultNodata.png", alt = "testImg" }) => {
  return <img className={className} src={src} alt={alt} />;
};

export { Img };
