import Image from "next/image";

const connectItems = [
  {
    icon: "/images/connect/connect-group.png",
    iconWidth: 125,
    iconHeight: 125,
    title: "NHÓM",
    lines: ["Tham gia cộng đồng học hỏi", "mỗi ngày"],
  },
  {
    icon: "/images/connect/connect-fb.png",
    iconWidth: 128,
    iconHeight: 128,
    title: "FACEBOOK",
    lines: ["Kết nối & cập nhật tin tức", "mới nhất"],
  },
  {
    icon: "/images/connect/connect-zl.png",
    iconWidth: 128,
    iconHeight: 128,
    title: "ZALO",
    lines: ["Hỗ trợ nhanh chóng", "24/7"],
  },
  {
    icon: "/images/connect/connect-tiktok.png",
    iconWidth: 128,
    iconHeight: 128,
    title: "TIKTOK",
    lines: ["Video chia sẻ chiến lược", "và tư duy đầu tư"],
  },
  {
    icon: "/images/connect/connect-tele.png",
    iconWidth: 128,
    iconHeight: 128,
    title: "TELEGRAM",
    lines: ["Kênh thông tin nhanh", "và bảo mật"],
  },
];

export default function ConnectWithUs() {
  return (
    <section id="lien-he" className="w-full px-4 text-white lg:px-8">
      <div className="mx-auto flex w-full max-w-[1493px] flex-col">
        <Image
          src="/images/connect/title-connect.webp"
          alt="Connect with us title"
          width={1493}
          height={36}
          className="mb-8 h-auto w-full"
          priority
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8 px-12 lg:px-[74px]">
          {connectItems.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[203px] flex-col items-center rounded-[21px] border-[1.5px] border-[#00AAFF] bg-linear-to-b from-[#040016D9] to-[#0043A8D9] px-[11px] pt-3 pr-3 pb-[9px] text-center shadow-[0px_0px_8.6px_0px_#00EEFF,0px_0px_17.1px_-1px_#00AAFF_inset]"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={item.iconWidth}
                height={item.iconHeight}
                className="h-[108px] w-[108px] object-contain lg:h-[128px] lg:w-[128px]"
              />
              <h3 className="mt-2 text-[28px] leading-none font-bold uppercase">
                {item.title}
              </h3>
              <p className="mt-1 text-[16px] leading-[1.05] font-normal lg:text-[17px]">
                {item.lines[0]}
                <br />
                {item.lines[1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
