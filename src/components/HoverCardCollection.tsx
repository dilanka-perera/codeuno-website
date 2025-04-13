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
          className="relative group overflow-hidden h-[280px] w-full sm:w-[47%] md:w-[30%] lg:w-[23%] transition-transform duration-300 hover:scale-[1.02] rounded-2xl shadow-md"
        >
          {/* Image */}
          <Image
            src={card.image.url}
            alt={card.title}
            width={720}
            height={360}
            className="w-full h-full object-cover"
            unoptimized
          />

          {/* Theme-colored overlay */}
          <div
            className="absolute inset-0 opacity-20 group-hover:opacity-80 transition-opacity duration-1000"
            style={{ backgroundColor: card.themeColour.hex }}
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to top, ${card.themeColour.hex}, transparent, transparent)`,
            }}
          />

          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h2 className="font-medium text-white text-[18px] sm:text-[16px] xl:text-[18px] transform transition-transform duration-1000 ease-in-out group-hover:-translate-y-46">
              {card.title}
            </h2>
          </div>

          {/* Description */}
          <div className="text-[16px] sm:text-[14px] xl:text-[16px] absolute bottom-0 left-0 right-0 p-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out text-white">
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverCardCollection;
