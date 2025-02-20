import React from "react";

function TechIcon({ className, src, alt, ...props }) {
  return (
    <div
      className={`${className} flex size-8 cursor-pointer items-center justify-center transition-all duration-200 hover:scale-120`}
      {...props}
    >
      <img src={src} alt={alt} />
    </div>
  );
}

export default TechIcon;
