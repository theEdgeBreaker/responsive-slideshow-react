import React, { useState } from "react";
import Slide from "./Slide";

const Slider = ({ images }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurr((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-row justify-center mt-20 ">
      <div className="relative ml-12  ">
        <div
          className="absolute inset-y-0 flex items-center z-50 "
          style={{ left: "-1.2rem" }}
        >
          <button
            onClick={prev}
            className="bg-gray-200 hover:bg-gray-300 px-3 py-1 text-xl md:text-2xl rounded-full"
          >
            {"<"}
          </button>
        </div>

        <div
          className="absolute inset-y-0 flex items-center z-50"
          style={{ right: "-1.2rem" }}
        >
          <button
            onClick={next}
            className="bg-gray-200 hover:bg-gray-300 px-3 py-1 text-xl md:text-2xl rounded-full"
          >
            {">"}
          </button>
        </div>

        <div className="absolute -bottom-12 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {images.map((e, i) => (
              <div
                key={e.id}
                className={`transition-all ease-linear w-4 h-4 bg-slate-500 rounded-full z-50 ${
                  curr === i ? "p-3" : "bg-opacity-50"
                }`}
                onClick={() => setCurr(i)}
              ></div>
            ))}
          </div>
        </div>

        {images.map((image, index) => (
          <div
            key={image.id}
            className="flex transition-transform ease-out duration-500"
            style={{
              display: index === curr ? "block" : "none",
            }}
          >
            <div className=" text-gray-500">{`${curr + 1} of ${
              images.length
            }`}</div>

            <Slide imageUrl={image.image_url} caption={image.caption} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
