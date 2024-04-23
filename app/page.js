"use client";

import Slider from "@/components/Slider";

export default function Home() {
  const images = [
    {
      id: "1",
      image_url: "/images/image1.jpg",
      caption: "Image 1",
    },
    {
      id: "1",
      image_url: "/images/image2.jpg",
      caption: "Image 2",
    },
    {
      id: "1",
      image_url: "/images/image3.jpg",
      caption: "Image 3",
    },
  ];
  return (
    <div>
      <Slider images={images} />
    </div>
  );
}
