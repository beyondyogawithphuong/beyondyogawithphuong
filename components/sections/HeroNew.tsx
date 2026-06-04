export default function HeroNew() {
  return (
    <section className="bg-paper py-12 md:py-20 px-4">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-14 items-center">

          {/* Portrait — 40% column */}
          <div className="md:col-span-2 order-1">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-[0_30px_70px_-24px_rgba(34,101,74,0.35)] w-full max-w-xs mx-auto md:max-w-none">
              <img
                src="/phuong.png"
                alt="Phuong, Beyond Yoga"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Text — 60% column */}
          <div className="md:col-span-3 order-2">
            <span className="eyebrow mb-5 block">Beyond Yoga with Phương</span>

            <h1
              className="text-ink mb-5"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', lineHeight: 1.2 }}
            >
              Hệ thần kinh kiệt sức không tự hồi phục chỉ bằng việc nằm nghỉ.
            </h1>

            <p className="text-lg text-ink-soft mb-10 leading-relaxed">
              Giải pháp điều hòa hệ thần kinh, tái tạo năng lượng gốc và phục hồi giấc ngủ sâu dành cho những người làm việc trí óc cường độ cao.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://sos-sleep-kit.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Xử lý quá tải ngay (SOS Sleep Kit)
              </a>
              <a
                href="https://workshop-nervous-system-reset.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-center"
              >
                Workshop Tắt Nút Chiến Đấu
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
