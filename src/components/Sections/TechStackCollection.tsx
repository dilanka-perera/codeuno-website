import React from "react";
import { TechStackCollection as TechStackCollectionType } from "@/types/hygraph";
import Image from "next/image";
import Link from "next/link";

interface TechStackCollectionProps {
  techStackCollection: TechStackCollectionType;
}

const TechStackCollection: React.FC<TechStackCollectionProps> = ({
  techStackCollection,
}) => {
  return (
    <div className="space-y-12">
      {techStackCollection.techStacks.map((stack) => (
        <div key={stack.slug}>
          <div className="flex flex-wrap justify-center gap-6">
            {stack.techs.map((tech) => (
              <Link
                key={tech.slug}
                href={`/solutions/tech-stack/${tech.slug}`}
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <div
                  className="w-32 h-32 flex flex-col items-center justify-center gap-2 p-3 rounded-xl shadow-md"
                  style={{
                    backgroundColor: techStackCollection.cardColour.hex,
                  }}
                >
                  <div className="w-12 h-12 relative">
                    <Image
                      src={tech.logo.url}
                      alt={tech.techName}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <p className="text-xs font-medium text-center text-slate-700 dark:text-slate-100">
                    {tech.techName}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStackCollection;
