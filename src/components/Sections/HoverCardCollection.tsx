import React from "react";
import { HoverCardCollection as HoverCardCollectionType } from "@/types/hygraph";
import Image from "next/image";

interface HoverCardCollectionProps {
  hoverCardCollection: HoverCardCollectionType;
}

const HoverCardCollection: React.FC<HoverCardCollectionProps> = ({
  hoverCardCollection,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {hoverCardCollection.hoverCards.map((card) => (
        <div
          key={card.slug}
          className="group h-[280px] w-full sm:w-[47%] md:w-[30%] lg:w-[23%] [perspective:1000px]"
        >
          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
              <Image
                src={card.image.url}
                alt={card.title}
                width={720}
                height={360}
                className="w-full h-full object-cover rounded-xl"
                unoptimized
              />
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  backgroundImage: `linear-gradient(to top, #0f172a, transparent)`, // Dark gradient
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="font-medium text-white text-[18px] sm:text-[16px] xl:text-[18px]">
                  {card.title}
                </h2>
              </div>
            </div>

            <div className="absolute inset-0 h-full w-full rounded-xl px-4 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  backgroundColor: card.themeColour.hex,
                }}
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white rounded-xl">
                <h2 className="text-[18px] sm:text-[16px] xl:text-[18px] font-bold mb-4">
                  {card.title}
                </h2>
                <p className="text-[16px] sm:text-[14px] xl:text-[16px] mb-4">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverCardCollection;
