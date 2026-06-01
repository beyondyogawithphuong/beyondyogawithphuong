export default function HeroNew() {
  return (
    <section className="bg-paper py-16 md:py-24 px-4">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Portrait: left on desktop, below on mobile */}
          <div className="order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-[0_40px_80px_-30px_rgba(34,101,74,0.3)] max-w-sm mx-auto md:max-w-none">
              <img
                src="/phuong.png"
                alt="Phuong, Beyond Yoga"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text: right on desktop, above on mobile */}
          <div className="order-1 md:order-2">
            <span className="eyebrow mb-6 block">Beyond Yoga with Phương</span>

            <h1 className="text-ink mb-6" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.3 }}>
              Hệ thần kinh kiệt sức không tự hồi phục chỉ bằng việc nằm nghỉ.
            </h1>

            <p className="text-lg text-ink-soft mb-10 leading-relaxed max-w-lg">
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
              {/* TODO: bỏ opacity-40 pointer-events-none khi hoàn thiện trang /shop */}
              <a href="/shop" className="btn-ghost text-center opacity-40 pointer-events-none">
                Khám phá Kho Audio Phục Hồi
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
