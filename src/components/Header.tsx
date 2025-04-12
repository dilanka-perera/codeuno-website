"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useData } from "@/context/DataContext";

export default function Header() {
  const { website } = useData();
  const headerLogo = website?.headerLogo;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<number | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: "/blog", text: "Blog" },
    { href: "/careers", text: "Careers" },
    { href: "/about", text: "About" },
    {
      href: "/contact",
      text: "Contact",
      ref: "contact",
      dropdown: [
        { href: "/contact/general-inquiries", text: "General Inquiries" },
        { href: "/contact/contact-services", text: "Contact Services" },
      ],
    },
  ];

  useEffect(() => {
    setIsDropdownOpen(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <header
        className={`fixed top-0 left-0 z-10 w-full flex-col items-center`}
      >
        <nav className="bg-black max-w-[1920px] mx-auto ring-1 ring-gray-500/10 shadow-md">
          <div className="max-w-7xl mx-auto h-[80px] flex items-center">
            <div className="flex-1">
              <div className="">
                <div className="flex">
                  <Link
                    href="/"
                    onClick={() => {
                      setIsSidebarOpen(false);
                      setIsDropdownOpen(null);
                    }}
                    className="flex h-18 items-center px-4"
                  >
                    {headerLogo ? (
                      <Image
                        src={headerLogo.url}
                        alt="Logo"
                        width={(60 * headerLogo.width) / headerLogo.height}
                        height={60}
                        priority
                        unoptimized
                      />
                    ) : (
                      <></>
                    )}
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="mx-auto flex max-w-7xl items-center justify-between p-1 px-8"
              aria-label="Global"
            >
              <div className="flex lg:hidden">
                {isSidebarOpen ? (
                  <button
                    type="button"
                    onClick={() => {
                      setIsSidebarOpen(false);
                      setIsDropdownOpen(null);
                    }}
                    className="-m-2.5 inline-flex text-white hover:text-slate-200 items-center justify-center p-2.5 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]"
                  >
                    <svg
                      className="size-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setIsSidebarOpen(true);
                      setIsDropdownOpen(null);
                    }}
                    className="-m-2.5 inline-flex text-white hover:text-slate-200 items-center justify-center p-2.5 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]"
                  >
                    <svg
                      className="size-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>
                )}
              </div>
              <div className="hidden lg:flex">
                {links.map((link, index) =>
                  link.dropdown ? (
                    <div
                      key={`dropdwn-${link.href}`}
                      className="group mx-[20px]"
                    >
                      <button
                        className="flex pt-2 justify-center w-[80px] h-[40px] text-base font-medium text-slate-900 text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]"
                        onClick={() =>
                          setIsDropdownOpen(
                            isDropdownOpen === index ? null : index
                          )
                        }
                      >
                        <div className="font-[orbitron]">
                          {link.text}
                          <div
                            className={`bottom-0 ${
                              isDropdownOpen === index ? "w-7" : "w-0"
                            } group-hover:w-7 h-[3px] bg-yellow-500`}
                          />
                        </div>
                      </button>
                    </div>
                  ) : (
                    <Link
                      className="group mx-[20px]"
                      key={link.href}
                      href={link.href}
                      onClick={() => {
                        setIsDropdownOpen(null);
                      }}
                    >
                      <div className="flex pt-2 justify-center w-[80px] h-[40px] text-base font-medium text-slate-900 text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                        <div className="font-[orbitron]">
                          {link.text}
                          <div className="bottom-0 w-0 group-hover:w-7 h-[3px] bg-yellow-500" />
                        </div>
                      </div>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
