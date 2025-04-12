"use client";
import { Section } from "@/types/hygraph";
import React, { useEffect, useState, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";

interface TableOfContentsProps {
  sections: Section[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0]?.slug || "");
  const tocRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (tocRef.current) {
        const tocTop = tocRef.current.offsetTop - 79;

        if (window.scrollY > tocTop) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }

        for (const section of sections) {
          const element = document.getElementById(section.slug);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
              setActiveSection(section.slug);
              break;
            }
          }
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const handleSectionClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offset = 117;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <div ref={tocRef}>
        {isFixed && <div style={{ height: "40px" }}></div>}
      </div>

      <div
        id="toc-container"
        className={`max-w-[1920px] z-20 h-[40px] mx-auto bg-blue-600 ring-1 ring-gray-500/10 shadow-md ${
          isFixed
            ? "fixed top-[79px] right-1/2 transform translate-x-1/2 w-full shadow-lg"
            : ""
        }`}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="hidden sm:flex px-6 h-[40px] items-center text-[12px] sm:text-[14px] lg:text-[16px]">
            {sections.map((section) => (
              <button
                key={section.slug}
                onClick={(e) => handleSectionClick(e, section.slug)}
                className={`${
                  section.slug === activeSection
                    ? "bg-blue-400 text-black"
                    : "text-slate-950 hover:text-black"
                } px-4 h-[40px]`}
              >
                {section.tableOfContentEntry}
              </button>
            ))}
          </div>

          <div className="sm:hidden text-[16px] flex px-6 h-[40px]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex justify-between items-center text-black font-medium"
            >
              <div className="truncate whitespace-nowrap">
                {
                  sections.find((section) => section.slug === activeSection)
                    ?.tableOfContentEntry
                }
              </div>

              <FiChevronDown
                className={`transition-transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className={`${
            isFixed ? "fixed top-[119px]" : "absolute"
          } sm:hidden text-[16px] right-0 w-full bg-slate-200 ring-1 ring-gray-500/10 shadow-md rounded-b-lg z-30`}
        >
          {sections.map((section, index) => (
            <button
              key={section.slug}
              onClick={(e) => handleSectionClick(e, section.slug)}
              className={`block w-full text-left px-4 py-2 ${
                section.slug === activeSection ? "bg-slate-100" : ""
              } overflow-hidden text-slate-900 hover:text-black ${
                index === sections.length - 1 ? "rounded-b-lg" : ""
              }`}
            >
              {section.tableOfContentEntry}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default TableOfContents;
