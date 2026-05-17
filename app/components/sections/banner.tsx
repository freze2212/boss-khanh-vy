import Image from "next/image";
import Link from "next/link";

const externalUrl = "https://xx88v1.vip";

export default function Banner() {
  return (
    <section className="w-full bg-[url('/images/banner/bg-banner.png')] bg-cover bg-center bg-no-repeat px-4 py-10 text-white lg:px-8 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1492px] flex-col">
        <div className="mb-5.5 inline-flex w-fit rounded-[43px] border border-[#00EEFF] bg-[#040016D9] px-6 py-4 text-center text-[23.61px] leading-none font-bold uppercase shadow-[0px_0px_14.8px_0px_#00AAFF]">
          MENTOR BACCARAT - ĐẦU TƯ & TỰ DO TÀI CHÍNH
        </div>

        <div className="mb-9.25">
          <p className="mb-2 text-[36px] leading-none font-bold uppercase lg:text-[53.74px]">
            chiến lược baccarat
          </p>
          <p className="mt-2 bg-linear-to-b from-[#00C8FF] to-[#0073D0] bg-clip-text text-[44px] leading-none font-bold text-transparent uppercase lg:text-[70.35px]">
            đầu tư thông minh
          </p>
        </div>

        <div className="mb-[37px]">
          <Image
            src="/images/banner/title-banner.webp"
            alt="Title banner"
            width={363}
            height={29}
            className="mb-[22px] h-auto w-[220px] lg:w-[363px]"
            priority
          />

          <div className="text-[18px] leading-none font-normal lg:text-[23.15px]">
            Tôi không hứa hẹn làm giàu nhanh. <br />
            Tôi mang đến tư duy đúng. Phương pháp chuẩn và hệ thống AI BCR{" "}
            <br />
            giúp bạn đầu tư bền vững tự do tài chính
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:gap-[30px]">
          <Link
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-3 rounded-[43px] border border-[#00EEFF] bg-[#040016D9] px-6 py-4 shadow-[0px_0px_14.8px_0px_#00AAFF] transition hover:scale-[1.01]"
          >
            <p className="text-[18px] leading-none font-bold uppercase lg:text-[21.2px]">
              KHÁM PHÁ HỆ THỐNG AI BCR
            </p>
            <Image
              src="/images/banner/arrow-right.png"
              alt="Mũi tên sang phải"
              width={23}
              height={20}
              className="h-auto w-[18px] lg:w-[23px]"
            />
          </Link>

          <Link
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-3 rounded-[43px] border border-[#00EEFF] bg-[#040016D9] px-6 py-4 shadow-[0px_0px_14.8px_0px_#00AAFF] transition hover:scale-[1.01]"
          >
            <Image
              src="/images/banner/icon-cskh.png"
              alt="Biểu tượng CSKH"
              width={29}
              height={28}
              className="h-auto w-[22px] lg:w-[29px]"
            />
            <p className="text-[18px] leading-none font-bold uppercase lg:text-[21.2px]">
              TƯ VẤN CHIẾN LƯỢC
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
