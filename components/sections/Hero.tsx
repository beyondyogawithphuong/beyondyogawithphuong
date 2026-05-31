export default function Hero() {
  return (
    <section
      className="relative py-32 md:py-40 px-4 text-white"
      style={{
        backgroundImage: 'url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-4xl mx-auto">
        {/* Main Headline - Left Aligned */}
        <h1 className="font-title text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight text-left">
          Có những ngày, cơ thể chỉ muốn đình công.
        </h1>

        {/* Divider */}
        <div className="w-16 h-1 bg-brand-primary mb-12"></div>

        {/* Description - Left Aligned */}
        <div className="space-y-6 mb-12 max-w-2xl">
          <p className="text-lg leading-relaxed text-white/90">
            Sáng thức dậy không phải là sự tỉnh táo. Mà là cái cổ cứng đờ. Hàm siết chặt. Hai vai nặng như đang đeo đá.
          </p>

          <p className="text-lg leading-relaxed text-white/90">
            Bạn không thiếu <span className="font-semibold text-white">kỷ luật</span> hay <span className="font-semibold text-white">ý chí</span>. Chỉ là hệ thần kinh của bạn đã quá tải quá lâu để tự chuyển về trạng thái <span className="font-semibold text-white">nghỉ ngơi</span>.
          </p>
        </div>

        {/* Tagline */}
        <p className="text-sm tracking-wide mb-12 opacity-80 text-white/80">
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
