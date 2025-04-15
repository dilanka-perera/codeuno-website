"use client";

import Slider from "react-slick";
import Image from "next/image";
import { Carousal as CarousalType } from "@/types/hygraph";

type CarousalProps = {
  carousal: CarousalType;
};

const Carousal = ({ carousal }: CarousalProps) => {
  if (carousal.carousalItems.length === 0) return null;

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
    <div className="relative max-w-[1920px] mx-auto w-full overflow-hidden h-[350px] sm:h-[480px] lg:h-[720px]">
      <Slider {...settings}>
        {carousal.carousalItems.map((item) => (
          <div
            key={item.slug}
            className="relative w-full h-[350px] sm:h-[480px] lg:h-[720px]"
          >
            <Image
              src={item.image.url}
              alt={item.title}
              fill
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/50 to-transparent">
              <div className="bg-white/80 p-4 sm:p-6 lg:p-10 m-[20px] text-center w-full max-w-[960px] rounded-lg">
                <h2 className="font-[orbitron] text-[22px] sm:text-[30px] lg:text-[36px] font-bold text-black mb-4">
                  {item.title}
                </h2>
                <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-black mb-6">
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
