export default function Hero() {
  return (
    <section className="overlay-section section-padding">
      <div className="container-tight mx-auto">
        {/* Logo */}
        <div className="mb-16 flex justify-center">
          <div className="h-24 w-24 rounded-full overflow-hidden flex items-center justify-center bg-white bg-opacity-10">
            <img src="/logo.png" alt="Beyond Yoga" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="font-title text-5xl md:text-6xl text-center mb-8 leading-tight">
          Có những ngày, cơ thể chỉ muốn đình công.
        </h1>

        {/* Divider */}
        <div className="w-16 h-px bg-brand-highlight mx-auto mb-12 opacity-60"></div>

        {/* Description */}
        <div className="space-y-6 text-center mb-12 max-w-2xl mx-auto">
          <p className="text-lg leading-relaxed">
            Sáng thức dậy không phải là sự tỉnh táo. Mà là cái cổ cứng đờ. Hàm siết chặt. Hai vai nặng như đang đeo đá.
          </p>

          <p className="text-lg leading-relaxed">
            Bạn không thiếu <span className="highlight">kỷ luật</span> hay <span className="highlight">ý chí</span>. Chỉ là hệ thần kinh của bạn đã quá tải quá lâu để tự chuyển về trạng thái <span className="highlight">nghỉ ngơi</span>.
          </p>
        </div>

        {/* Tagline */}
        <p className="text-center text-sm tracking-wide mb-12 font-body opacity-80">
          Phương — Đồng hành cùng bạn tái tạo năng lượng
        </p>

        {/* CTA Button */}
        <div className="text-center">
          <a href="#entry-points" className="btn-highlight">
            Bắt đầu từ đâu?
          </a>
        </div>
      </div>
    </section>
  )
}
