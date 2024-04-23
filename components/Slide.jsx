import React from "react";
import Image from "next/image";

const Slide = ({ imageUrl, caption }) => {
  return (
    <div
      className="overflow-hidden"
      style={{ position: "relative", width: "380px", height: "550px" }}
    >
      <Image
        className="relative"
        src={imageUrl}
        alt={caption}
        layout="fill" // This fills the parent container with the image
      />
      <p
        style={{
          position: "absolute",
          bottom: "8px",
          textAlign: "center",
          width: "100%",
          margin: "0",
        }}
      >
        {caption}
      </p>
    </div>
  );
};

export default Slide;
