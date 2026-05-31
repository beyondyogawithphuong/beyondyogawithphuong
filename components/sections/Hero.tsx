export default function Hero() {
  return (
    <section className="overlay-section py-32 md:py-40 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Main Headline - Left Aligned */}
        <h1 className="font-title text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight text-left">
          Có những ngày, cơ thể chỉ muốn <span className="highlight">đình công</span>.
        </h1>

        {/* Divider */}
        <div className="w-16 h-1 bg-brand-highlight mb-12"></div>

        {/* Description - Left Aligned */}
        <div className="space-y-6 mb-12 max-w-2xl">
          <p className="text-lg leading-relaxed text-white/95">
            Sáng thức dậy không phải là sự tỉnh táo. Mà là cái cổ cứng đờ. Hàm siết chặt. Hai vai nặng như đang đeo đá.
          </p>

          <p className="text-lg leading-relaxed text-white/95">
            Bạn không thiếu <span className="highlight">kỷ luật</span> hay <span className="highlight">ý chí</span>. Chỉ là hệ thần kinh của bạn đã quá tải quá lâu để tự chuyển về trạng thái <span className="highlight">nghỉ ngơi</span>.
          </p>
        </div>

        {/* Tagline */}
        <p className="text-sm tracking-wide mb-12 opacity-90 text-white/90">
          Phương — Đồng hành cùng bạn tái tạo năng lượng
        </p>

        {/* CTA Button */}
        <div>
          <a href="#entry-points" className="btn-highlight">
            Bắt đầu từ đâu?
          </a>
        </div>
      </div>
    </section>
  )
}
