"use client";

import React from "react";
import Image from "next/image";
import { HeroBanner as HeroBannerType } from "@/types/hygraph";

interface HeroBannerProps {
  heroBanner: HeroBannerType;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ heroBanner }) => {
  return (
    <div className="relative max-w-[1920px] mx-auto w-full overflow-hidden h-[350px] sm:h-[480px] lg:h-[720px]">
      <Image
        src={heroBanner.image.url}
        alt={heroBanner.title}
        fill
        className="object-cover w-full h-full"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/50 to-transparent">
        <div className="bg-white/80 p-4 sm:p-6 lg:p-10 m-[20px] text-center w-full max-w-[960px] rounded-lg">
          <h2 className="font-[orbitron] text-[22px] sm:text-[30px] lg:text-[36px] font-bold text-black mb-4">
            {heroBanner.title}
          </h2>
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-black mb-6">
            {heroBanner.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
