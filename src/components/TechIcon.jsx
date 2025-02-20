import React from "react";

function TechIcon({ className, src, alt, ...props }) {
  return (
    <div
      className={`${className} flex size-8 items-center justify-center`}
      {...props}
    >
      <img src={src} alt={alt} />
    </div>
  );
}

export default TechIcon;
