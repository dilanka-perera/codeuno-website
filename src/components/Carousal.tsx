"use client";

import Slider from "react-slick";
import Image from "next/image";
import { CarousalItem } from "@/types/hygraph";

type CarousalProps = {
  items: CarousalItem[];
};

const Carousal = ({ items }: CarousalProps) => {
  if (items.length === 0) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="relative max-w-[1920px] mx-auto w-full overflow-hidden h-[300px] sm:h-[480px] lg:h-[720px]">
      <Slider {...settings}>
        {items.map((item) => (
          <div
            key={item.slug}
            className="relative h-[300px] sm:h-[480px] lg:h-[720px]"
          >
            <Image
              src={item.image.url}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 p-4 sm:p-6 lg:p-10 text-center m-[20px] w-full max-w-[960px]">
                <h2 className="font-[orbitron] sm:pb-4 sm:px-10 text-[22px] sm:text-[30px] lg:text-[36px] font-bold text-black mb-2">
                  {item.title}
                </h2>
                <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-black">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousal;
