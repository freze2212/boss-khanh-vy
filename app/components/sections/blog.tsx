import Image from "next/image";
import Link from "next/link";

const blogPosts = Array.from({ length: 6 }, (_, index) => ({
  id: `blog-${index + 1}`,
  title: "Chiến lược Baccarat cơ bản cho người mới chơi",
  description:
    "Hướng dẫn từng bước nắm vững luật chơi, cách đặt cược và quản lý vốn hiệu quả",
  href: "#",
}));

export default function Blog() {
  return (
    <section id="blog" className="mb-6 w-full max-w-[1492px]">
      <Image
        src="/images/blog/blog-title.webp"
        alt="Đặc điểm nổi bật"
        width={1492}
        height={36}
        className="my-6 h-auto w-full"
        style={{ width: "100%", height: "auto" }}
        priority
      />
      {/* list card */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="rounded-[14px] border-[1.32px] border-[#00AAFF] bg-linear-to-b from-[#012248BF] to-[#010F20BF] p-[11px]"
          >
            <div className="flex items-stretch gap-3">
              <div className="relative w-[168px] shrink-0 self-stretch overflow-hidden rounded-[10px]">
                <Image
                  src="/images/blog/blog-bcr.png"
                  alt="Baccarat blog"
                  fill
                  className="object-cover"
                  sizes="168px"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col">
                <h3 className="pb-[10px] text-[23.37px] leading-none font-bold text-white">
                  {post.title}
                </h3>

                <p className="text-[14.2px] leading-[1.02] tracking-[-0.02em] font-normal text-white/95">
                  {post.description}
                </p>

                <Link
                  href={post.href}
                  className="mt-2 inline-flex w-fit items-center justify-center rounded-[6px] border border-[#00EEFF] bg-[#001A38] px-9 py-3 text-center text-[16.03px] leading-none font-bold text-white transition hover:bg-[#012248]"
                >
                  XEM NGAY
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div
        id="ai-bcr"
        className="mt-10 flex items-center justify-center rounded-[18px] border-[1.32px] border-[#00AAFF] bg-linear-to-b from-[#012248BF] to-[#010F20BF] px-6 py-[40px]"
      >
        <div className="flex max-w-[1140px] flex-col items-center justify-center text-center">
          <h3 className="mb-6 bg-linear-to-b from-[#00C8FF] to-[#0073D0] bg-clip-text text-[42px] leading-none font-bold text-transparent drop-shadow-[0px_0px_13.53px_#005499] lg:text-[59px]">
            DÙNG THỬ AI BCR MIỄN PHÍ
          </h3>

          <p className="max-w-[1030px] text-center text-[22px] leading-[1.08] font-medium text-white lg:text-[28.54px]">
            69 công thức soi cầu Baccarat chạy bằng AI. Không cần nạp tiền,
            không ràng buộc. Bấm thử ngay - thấy kết quả rồi quyết định.
          </p>

          <Link
            href="https://xx88v1.vip"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#FF0000] to-[#FF8800] px-[65px] py-[20px] text-center text-[28px] leading-none font-bold text-white shadow-[0px_0px_22.3px_0px_#FF6200] transition hover:scale-[1.01]"
          >
            DÙNG THỬ MIỄN PHÍ - BẤM NGAY
          </Link>
        </div>
      </div>
    </section>
  );
}
