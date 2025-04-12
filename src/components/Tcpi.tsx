import { TcpiCollection as TcpiCollectionType } from "@/types/hygraph";
import Image from "next/image";
import Link from "next/link";

interface TcpiCollectionProps {
  tcpiCollection: TcpiCollectionType;
}

const TcpiCollection = ({ tcpiCollection }: TcpiCollectionProps) => {
  return (
    <div className="flex flex-col gap-10">
      {tcpiCollection.tcpis.map((item) => (
        <div
          key={item.slug}
          className={`flex flex-col md:flex-row ${
            item.imageFirst ? "" : "md:flex-row-reverse"
          } items-center gap-6 p-6`}
          style={{
            backgroundColor: item.backgroundColour.hex,
            color: item.textColour.hex,
          }}
        >
          <div className="w-full md:w-1/2">
            <Image
              src={item.image.url}
              alt={item.image.fileName}
              width={item.image.width}
              height={item.image.height}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="font-[orbitron] text-[18px] sm:text-[24px] lg:text-[30px] font-bold mb-4">
              {item.title}
            </h3>
            <div
              className="text-[16px] sm:text-[18px] lg:text-[20px] md:p-4"
              dangerouslySetInnerHTML={{ __html: item.description.html }}
            />
            {item.buttonText && item.buttonUrl && (
              <Link
                href={item.buttonUrl}
                className="inline-block mt-4 px-10 py-2 bg-black text-white rounded hover:opacity-90 transition"
              >
                {item.buttonText}
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TcpiCollection;
