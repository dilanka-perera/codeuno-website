import { Paragraph as ParagraphType } from "@/types/hygraph";

interface ParagraphProps {
  paragraph: ParagraphType;
}

const Paragraph = ({ paragraph }: ParagraphProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: paragraph.richText.html }}
      className="text-[16px] sm:text-[18px] lg:text-[20px] text-center"
    />
  );
};

export default Paragraph;
