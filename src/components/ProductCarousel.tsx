"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { PROJECTS } from "../data";

interface Image {
  source: string;
  page: string;
  name: string;
}

const images: Image[] = [
  {
    source: require(`../assets/products/Yalies/headerimage.png`),
    page: "yalies",
    name: "Yalies",
  },
  {
    source: require(`../assets/products/CourseTable/firstsectionimage.png`),
    page: "coursetable",
    name: "CourseTable",
  },
  {
    source: require(`../assets/products/YaleButteries/headerimage2.png`),
    page: "yalebutteries",
    name: "Yale Butteries",
  },
  {
    source: require(`../assets/products/MealMatch/headerimage.png`),
    page: "mealmatch",
    name: "MealMatch",
  },
  {
    source: require(`../assets/products/Ymeets/headerimage.png`),
    page: "ymeets",
    name: "ymeets",
  },
  {
    source: require(`../assets/products/RoomAdvisor/headerimage.png`),
    page: "roomadvisor",
    name: "RoomAdvisor",
  },
  {
    source: require(`../assets/products/AutoDonation/headerimage.png`),
    page: "autodonation",
    name: "AutoDonation",
  },
];

const ProductCarousel: React.FC = () => {
  const [index, setIndex] = useState(1);
  const router = useRouter();

  const prevIndex = () => {
    return index === 0 ? images.length - 1 : index - 1;
  };

  const nextIndex = () => {
    return index === images.length - 1 ? 0 : index + 1;
  };

  const handleImageClick = () => {
    router.push(`/products/${images[index].page}`);
  };

  const handlePrev = () => {
    setIndex(prevIndex());
  };

  const handleNext = () => {
    setIndex(nextIndex());
  };

  return (
    <div className="my-12">
      <div className="text-white font-bold text-3xl mb-8">
        {images[index].name}
      </div>
      <div className="image-carousel flex justify-center items-center">
        <div className="carousel-container flex items-center justify-center mx-auto h-80 w-screen">
          <button
            className="text-white p-4 bg-gray-800 rounded-xl mx-10"
            onClick={handlePrev}
          >
            &lt;
          </button>
          <div className="w-3/4 max-w-3xl relative">
            <div className="w-full flex relative z-0">
              <div
                id="backLeft"
                onClick={handlePrev}
                className="flex absolute left-0 top-1/2 transform -translate-y-1/2"
              >
                <Image
                  src={images[prevIndex()].source}
                  alt={"bum"}
                  loading="lazy"
                  className="rounded-lg shadow-md hover:shadow-lg transition duration-300 h-64 object-cover cursor-pointer"
                  draggable={false}
                />
              </div>
              <div
                id="backRight"
                onClick={handleNext}
                className="flex overflow-hidden absolute right-0 top-1/2 transform -translate-y-1/2"
              >
                <Image
                  onClick={handleNext}
                  src={images[nextIndex()].source}
                  alt={"bum"}
                  loading="lazy"
                  className="rounded-lg shadow-md hover:shadow-lg transition duration-300 h-64 object-cover cursor-pointer"
                  draggable={false}
                  cursor-pointer
                />
              </div>
            </div>
            <div
              id="front"
              className={`absolute flex items-center justify-center h-full w-full top-0 left-0`}
            >
              <Image
                onClick={handleImageClick}
                src={images[index].source}
                alt={"bum"}
                loading="lazy"
                className="rounded-lg h-80 w-auto max-w-full mx-auto cursor-pointer"
                draggable={false}
                cursor-pointer
              />
            </div>
          </div>

          <button
            className="text-white p-4 bg-gray-800 rounded-xl mx-10"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="py-16 flex flex-col items-center">
        <div className="w-1/2 h-18 bg-gray-700 bg-opacity-50 rounded-full flex items-center justify-evenly">
          {PROJECTS.map((project, i) => (
            <Image
              onClick={() => setIndex(i)}
              className={`w-14 h-14 my-2 rounded-lg cursor-pointer ${i === index ? "opacity-100" : "opacity-40"}`}
              key={i}
              src={project.image}
              alt={project.name}
              draggable={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
