export default function HeroNew() {
  return (
    <section className="bg-paper py-16 md:py-24 px-4">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center">

          {/* Portrait: circular avatar — intentionally compact */}
          <div className="shrink-0 order-2 md:order-1">
            <div className="w-[148px] h-[148px] md:w-[196px] md:h-[196px] rounded-full overflow-hidden shadow-[0_16px_48px_-16px_rgba(34,101,74,0.45)] ring-4 ring-sage/10 mx-auto">
              <img
                src="/phuong.png"
                alt="Phuong, Beyond Yoga"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2 flex-1 min-w-0">
            <span className="eyebrow mb-5 block">Beyond Yoga with Phương</span>

            <h1
              className="text-ink mb-5"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', lineHeight: 1.2 }}
            >
              Hệ thần kinh kiệt sức không tự hồi phục chỉ bằng việc nằm nghỉ.
            </h1>

            <p className="text-lg text-ink-soft mb-10 leading-relaxed max-w-xl">
              Giải pháp điều hòa hệ thần kinh, tái tạo năng lượng gốc và phục hồi giấc ngủ sâu dành cho những người làm việc trí óc cường độ cao.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#entry-points" className="btn-primary text-center">
                Chọn lối vào của bạn
              </a>
              <a
                href="https://www.youtube.com/@phuong.wellbeingstrategist/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-center"
              >
                Ghé thăm kênh YouTube
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
