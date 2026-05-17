"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const externalUrl = "https://xx88v1.vip";

const menuItems = [
  { label: "Trang chủ", href: "#top" },
  { label: "Giới thiệu", href: "#gioi-thieu" },
  { label: "Blog", href: "#blog" },
  { label: "AI BCR", href: "#ai-bcr" },
  { label: "Liên hệ", href: "#lien-he" },
];

export default function Header() {
  const [activeHref, setActiveHref] = useState("#top");

  return (
    <header className="sticky top-0 z-50 w-full border-b-[3px] border-[#00EEFF] bg-[#050816F2] backdrop-blur-md">
      <div className="mx-auto flex min-h-24 w-full max-w-[1492px] items-center justify-between gap-6 px-5 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/common/logo-khanhvy.png"
            alt="Khanh Vy Master"
            width={283}
            height={69}
            priority
            className="h-auto w-40 lg:w-[290px]"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex lg:gap-14">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setActiveHref(item.href)}
              aria-current={activeHref === item.href ? "page" : undefined}
              className={`relative text-center text-sm font-extrabold uppercase tracking-wide transition lg:text-[17px] ${
                activeHref === item.href
                  ? "text-[#00C8FF] after:absolute after:-bottom-3 after:left-0 after:h-[3px] after:w-full after:bg-[#00C8FF] after:content-['']"
                  : "text-white hover:text-[#8FCDFF]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 items-center md:flex"
          aria-label="Chăm sóc khách hàng 24/7"
        >
          <Image
            src="/images/common/logo-cskh.png"
            alt="CSKH 24/7"
            width={172}
            height={57}
            className="h-auto w-28 lg:w-[172px]"
          />
        </Link>
      </div>

      <nav className="px-4 py-3 md:hidden">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setActiveHref(item.href)}
              aria-current={activeHref === item.href ? "page" : undefined}
              className={`text-xs font-extrabold uppercase tracking-wide transition ${
                activeHref === item.href
                  ? "text-[#00C8FF]"
                  : "text-white hover:text-[#8FCDFF]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-extrabold uppercase tracking-wide text-white"
          >
            CSKH 24/7
          </Link>
        </div>
      </nav>
    </header>
  );
}
