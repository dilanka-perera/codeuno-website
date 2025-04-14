import { TcpiCollection as TcpiCollectionType } from "@/types/hygraph";
import Image from "next/image";
import Link from "next/link";

interface TcpiCollectionProps {
  tcpiCollection: TcpiCollectionType;
}

const TcpiCollection = ({ tcpiCollection }: TcpiCollectionProps) => {
  return (
    <div className="flex flex-col gap-6">
      {tcpiCollection.tcpis.map((item) => (
        <div
          key={item.slug}
          className="transition-transform duration-300 hover:scale-[1.02]"
        >
          <div
            className={`flex flex-col md:flex-row ${
              item.imageFirst ? "" : "md:flex-row-reverse"
            } items-stretch gap-4 p-4 md:p-6 rounded-2xl shadow-md`}
            style={{
              backgroundColor: item.backgroundColour.hex,
              color: item.textColour.hex,
            }}
          >
            <div className="w-full md:w-1/2 flex">
              <div className="flex-grow flex items-stretch">
                <Image
                  src={item.image.url}
                  alt={item.image.fileName}
                  width={item.image.width}
                  height={item.image.height}
                  className="w-full object-cover rounded-xl"
                  style={{ height: "100%" }}
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
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
                  className="w-fit inline-block mt-4 px-8 py-2 bg-black text-white rounded hover:opacity-90 transition"
                >
                  {item.buttonText}
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TcpiCollection;
