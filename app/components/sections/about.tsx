"use client";

import Image from "next/image";

const aboutItems = [
  {
    icon: "/images/about/about-inc.png",
    iconWidth: 95,
    iconHeight: 91,
    title: ["TƯ DUY", "ĐÚNG ĐẮN"],
    lines: ["Đặt nền tảng tư", "duy đầu tư dài hạn"],
  },
  {
    icon: "/images/about/about-chienluot.png",
    iconWidth: 105,
    iconHeight: 91,
    title: ["CHIẾN LƯỢC", "KHOA HỌC"],
    lines: ["Hệ thống chiến lược", "bài bản, kiểm chứng"],
  },
  {
    icon: "/images/features/feature-robot.png",
    iconWidth: 144,
    iconHeight: 129,
    title: ["CÔNG NGHỆ", "TIÊN PHONG"],
    lines: ["AI BCR phân tích", "và tối ưu hiệu suất"],
  },
  {
    icon: "/images/about/about-donghanh.png",
    iconWidth: 112,
    iconHeight: 91,
    title: ["ĐỒNG HÀNH", "BỀN VỮNG"],
    lines: ["Đồng hành cùng bạn", "trên mọi hành trình"],
  },
];

const toolCards = [
  {
    accent: "Aibcr.me",
    title: "AI Soi Cầu Chuẩn Xác",
    description:
      "Quét sạch lịch sử cầu. Thuật toán tự động phân tích và chốt lệnh có tỷ lệ thắng cao nhất. Nghỉ đánh mò. Dùng AI để làm chủ bàn cược.",
    button: "DÙNG THỬ AI",
    url: "https://xx88v1.vip",
  },
  {
    accent: "Xoacuocchimai.com",
    title: "Rửa IP, Xóa Dấu Vết",
    description:
      "Dọn sạch lịch sử cược. Làm mới IP hoàn toàn. Chặn đứng trò nhà cái theo dõi thói quen để bẻ cầu. Đánh ẩn danh, bảo toàn tỷ lệ thắng.",
    button: "LÀM SẠCH IP",
    url: "https://xx88v1.vip",
  },
  {
    accent: "Check.aibcr.me",
    title: "Quét Sạch Mã Đại Lý",
    description:
      "Một giây check ngay tài khoản có dính mã môi hay không. Chống rủi ro giam tiền, khóa nạp rút. Tài khoản sạch, tiền rút về túi mới là tiền thật.",
    button: "KIỂM TRA NGAY",
    url: "https://xx88v1.vip",
  },
  {
    accent: "Auto Bot AI",
    title: "Kỷ Luật Vốn Thép",
    description:
      "Triệt tiêu tâm lý 'khát nước' và gãy cầu. Tool tự động vào lệnh, chốt lời, cắt lỗ theo cài đặt. Đánh như máy, không cảm xúc, bảo toàn vốn tuyệt đối.",
    button: "KIỂM TRA NGAY",
    url: "https://xx88v1.vip",
  },
];

export default function About() {
  return (
    <section id="gioi-thieu" className="w-full max-w-[1492px]">
      <div className="mx-auto relative w-full overflow-hidden rounded-[22px] border border-[#00AFFF] bg-[#07182F] lg:min-h-[543px]">
        <div className="relative z-10 flex w-full flex-col px-6 py-7 lg:px-12 lg:py-8 lg:pr-[690px] xl:pr-[760px]">
          <div className="bg-linear-to-b from-[#00C8FF] to-[#0073D0] bg-clip-text text-transparent">
            <h2 className="pb-2 text-[42px] leading-none font-bold uppercase lg:text-[58.45px]">
              VỀ CHÚNG TÔI
            </h2>
            <p className="text-[28px] leading-none font-bold uppercase lg:text-[34.56px]">
              XÂY DỰNG TỰ DO TÀI CHÍNH
              <br />
              BẰNG TRÍ TUỆ & KỶ LUẬT
            </p>
          </div>

          <div className="mt-6 max-w-[620px] text-[18px] leading-[1.08] font-normal text-white lg:text-[25px]">
            <p className="pb-1">
              được thành lập với sứ mệnh giúp mọi người, đặc biệt là
            </p>
            <p className="pb-1">
              giới trẻ Việt Nam, nắm vững kiến thức tài chính cá nhân.
            </p>
            <p className="pb-1">
              Chúng tôi tin rằng ai cũng có thể làm chủ tài chính khi
            </p>
            <p className="pb-1">được trang bị đúng kiến thức và phương pháp.</p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-5">
            {aboutItems.map((item) => (
              <div
                key={item.title.join("-")}
                className="flex min-h-[175px] flex-col items-center rounded-[18px] border border-[#00AAFF] bg-linear-to-b from-[#012248BF] to-[#010F20BF] px-3 py-4 text-center shadow-[0px_0px_12px_rgba(0,170,255,0.16)]"
              >
                <div className="flex h-[74px] items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title.join(" ")}
                    width={item.iconWidth}
                    height={item.iconHeight}
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-4 text-[17.63px] leading-none font-bold uppercase text-[#009DFF]">
                  {item.title.map((line) => (
                    <span key={line} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </h3>
                <p className="mt-3 text-[14.73px] leading-[1.05] font-bold text-white">
                  {item.lines.map((line) => (
                    <span key={line} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full min-h-[320px] lg:absolute lg:top-6 lg:right-[-50px] lg:h-[543px] lg:w-[941px]">
          <Image
            src="/images/about/about-person.png"
            alt="Khanh Vy Avatar"
            fill
            className="object-cover object-right-top"
            sizes="(max-width: 1024px) 100vw, 941px"
            priority
          />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4 xl:gap-20">
        {toolCards.map((card) => (
          <div
            key={card.title}
            className="rounded-[18px] border-[1.5px] border-[#00AAFF] bg-linear-to-b from-[#040016D9] to-[#0043A8D9] px-[13px] py-[21px] shadow-[0px_0px_8.6px_0px_#00EEFF,0px_0px_17.1px_-1px_#00AAFF_inset]"
          >
            <div className="h-[62px]">
              <p className="text-[26.08px] leading-none font-bold text-[#2BFF1B]">
                {card.accent}
              </p>
              <p className="pt-2 text-[26.08px] leading-none font-bold text-[#26D9FF]">
                {card.title}
              </p>
            </div>

            <p className="mt-3 text-[12px] leading-[1.45] font-normal text-white">
              {card.description}
            </p>

            <button
              type="button"
              className="mt-3 w-full rounded-[6px] border border-[#00EEFF] bg-[#001A38] py-4 text-center text-[16.36px] leading-none font-bold text-white transition hover:bg-[#012248]"
              onClick={() =>
                window.open(card.url, "_blank", "noopener,noreferrer")
              }
            >
              {card.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
