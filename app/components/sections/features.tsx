import Image from "next/image";

const featureItems = [
  {
    icon: "/images/features/feature-exp.png",
    iconWidth: 121,
    iconHeight: 129,
    title: ["KINH NGHIỆM", "THỰC CHIẾN"],
    description: ["Nhiều năm chinh chiến thực tế", "trên thị trường Baccarat."],
  },
  {
    icon: "/images/features/feature-book.png",
    iconWidth: 134,
    iconHeight: 118,
    title: ["PHƯƠNG PHÁP", "BÀI BẢN"],
    description: ["Hệ thống chiến lược rõ ràng,", "dễ hiểu, dễ áp dụng."],
  },
  {
    icon: "/images/features/feature-diamon.png",
    iconWidth: 139,
    iconHeight: 129,
    title: ["CỘNG ĐỒNG VIP"],
    description: [
      "Cộng đồng nhà đầu tư",
      "chất lượng, cùng nhau",
      "phát triển.",
    ],
  },
  {
    icon: "/images/features/feature-time.png",
    iconWidth: 138,
    iconHeight: 129,
    title: ["CẬP NHẬT", "KỊP THỜI"],
    description: ["Cập nhật chiến lược, xu hướng", "và công cụ mới mỗi ngày."],
  },
  {
    icon: "/images/features/feature-security.png",
    iconWidth: 89,
    iconHeight: 108,
    title: ["BẢO MẬT", "KÍN KẼ"],
    description: [
      "Thông tin, dữ liệu",
      "và danh tính được",
      "bảo mật tuyệt đối.",
    ],
  },
  {
    icon: "/images/features/feature-robot.png",
    iconWidth: 144,
    iconHeight: 129,
    title: ["CÔNG NGHỆ", "AI BCR"],
    description: [
      "Ứng dụng AI phân tích dữ liệu",
      "vượt trội, tối ưu lợi nhuận.",
    ],
  },
];

export default function Features() {
  return (
    <section className="w-full px-4 py-6 text-white lg:px-8">
      <div className="mx-auto flex w-full max-w-[1492px] flex-col pt-4">
        <Image
          src="/images/features/title-feature.webp"
          alt="Đặc điểm nổi bật"
          width={1492}
          height={36}
          className="mb-8 h-auto w-full"
          style={{ width: "100%", height: "auto" }}
          priority
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[570px_minmax(0,1fr)] xl:grid-cols-[602px_minmax(0,1fr)]">
          <div className="overflow-hidden rounded-[21px] border border-[#00AFFF] shadow-[0px_0px_8px_rgba(0,170,255,0.35)]">
            <Image
              src="/images/features/feature-person.png"
              alt="Khanh Vy"
              width={602}
              height={553}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {featureItems.map((item) => (
              <div
                key={item.title.join("-")}
                className="flex min-h-[251px] flex-col items-center rounded-[27px] border border-[#00AFFF] bg-linear-to-b from-[#07182F] to-[#07182F] px-4 py-5 text-center shadow-[0px_0px_10px_rgba(0,170,255,0.25)] xl:px-3 2xl:px-5"
              >
                <div className="flex h-[132px] shrink-0 items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title.join(" ")}
                    width={item.iconWidth}
                    height={item.iconHeight}
                    className="object-contain"
                  />
                </div>

                <h3 className="mt-3 text-[25px] leading-[1.02] font-bold uppercase 2xl:text-[27px]">
                  {item.title.map((line) => (
                    <span key={line} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </h3>

                <p className="mt-4 text-[15px] leading-[1.08] font-normal text-white xl:text-[14px] 2xl:text-[18px]">
                  {item.description.map((line) => (
                    <span key={line} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
