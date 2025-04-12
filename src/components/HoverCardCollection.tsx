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
          className="relative group overflow-hidden h-[360px] w-full sm:w-[48%] lg:w-[31%] transition-transform duration-300 hover:scale-[1.02] rounded-2xl shadow-md"
        >
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
            className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity"
            style={{ backgroundColor: card.themeColour.hex }}
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent"
            style={{
              backgroundImage: `linear-gradient(to top, ${card.themeColour.hex}, transparent, transparent)`,
            }}
          ></div>

          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h2 className="text-white font-medium group-hover:translate-y-[-280px] transition-transform duration-1000 ease-in-out">
              {card.title}
            </h2>
          </div>

          {/* Description */}
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out">
            <p className="text-white">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverCardCollection;
