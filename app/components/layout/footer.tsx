import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const contactItems = [
  "Hỗ trợ: 24/7",
  "Email: khanhvybcr@gmail.com",
  "Telegram: @khanhvybcr",
  "Website: www.khanhvybcr.com",
];

const quickLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "#gioi-thieu" },
  { label: "Blog", href: "#blog" },
  { label: "AI BCR", href: "#" },
];

function ColumnTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="bg-linear-to-b from-[#00C8FF] to-[#0073D0] bg-clip-text text-2xl font-black uppercase text-transparent sm:text-[32px]">
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#03142A] text-white">
      <Image
        src="/images/common/footer-bg.png"
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#03142A]/82" />

      <div className="relative mx-auto grid w-full max-w-[1492px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr] lg:px-8 lg:py-16">
        <div className="space-y-6">
          <Link href="/" className="inline-flex">
            <Image
              src="/images/common/logo-khanhvy.png"
              alt="Khánh Vy Master Logo"
              width={283}
              height={69}
              className="h-auto w-40 sm:w-52"
            />
          </Link>

          <p className="max-w-xl text-sm leading-7 text-[#8FCDFF] sm:text-[19px]">
            Là nền tảng chuyên cung cấp công thức, công cụ phân tích và soi cầu
            Baccarat (BCR), Tài Xỉu với độ chuẩn xác cao. Chúng tôi cam kết mang
            đến dữ liệu minh bạch, thuật toán hiện đại được cập nhật mới nhất
            năm 2026.
          </p>
        </div>

        <div className="space-y-5 border-l-[3px] border-[#00AAFF] pl-5">
          <ColumnTitle>Liên hệ</ColumnTitle>
          <ul className="space-y-4 text-base font-bold text-white sm:text-[19px]">
            {contactItems.map((item) => (
              <li key={item} className="flex items-start gap-2 leading-6">
                <span className="text-[#00C8FF]">{">"}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5 border-l-[3px] border-[#00AAFF] pl-5">
          <ColumnTitle>Liên kết nhanh</ColumnTitle>
          <ul className="space-y-4 text-base font-bold text-white sm:text-[19px]">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-start gap-2 leading-6 transition hover:text-[#8FCDFF]"
                >
                  <span className="text-[#00C8FF]">{">"}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5 border-l-[3px] border-[#00AAFF] pl-5">
          <ColumnTitle>Tuyên bố</ColumnTitle>
          <p className="text-sm leading-7 text-[#8FCDFF] sm:text-[19px]">
            Chúng tôi không khuyến khích cờ bạc. Nội dung chỉ mang tính chất
            chia sẻ kinh nghiệm thị trường Baccarat và đầu tư.
          </p>

          <div className="flex items-center gap-3 px-1 py-3 backdrop-blur-sm">
            <Image
              src="/images/common/18plus.png"
              alt="warning"
              width={49}
              height={49}
              className="h-10 w-10 shrink-0 sm:h-12 sm:w-12"
            />
            <span className="text-sm font-semibold leading-6 text-white sm:text-base">
              Chỉ dành cho người trên 18 tuổi
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
