export default function HeroNew() {
  return (
    <section className="bg-white py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* CTA Button Top */}
        <div className="mb-8">
          <a href="#entry-points" className="inline-block px-6 py-2 bg-brand-overlay text-brand-text font-semibold rounded-full text-sm hover:shadow-lg transition-all duration-300">
            Bắt đầu từ đâu?
          </a>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-brand-dark mb-6 leading-tight">
          Có những ngày,
          <br />
          cơ thể chỉ muốn
          <br />
          <span className="text-brand-overlay">đình công</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-brand-dark/80 mb-8 leading-relaxed max-w-2xl mx-auto">
          Sáng thức dậy, thứ đầu tiên bạn cảm nhận không phải là sự tỉnh táo. Mà là cái cổ cứng đờ, hàm siết chặt, hai vai nặng trĩu.
        </p>

        {/* Accent Line & Key Message */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-brand-highlight"></div>
            <p className="text-sm font-semibold text-brand-overlay tracking-widest">
              HIỂU RÕ HỆ THẦN KINH
            </p>
            <div className="h-px w-12 bg-brand-highlight"></div>
          </div>

          <p className="text-lg text-brand-dark/70 italic max-w-3xl mx-auto leading-relaxed">
            Bạn không thiếu <span className="font-semibold text-brand-dark">kỷ luật</span> hay <span className="font-semibold text-brand-dark">ý chí</span>.
            Chỉ là hệ thần kinh của bạn đã quá tải quá lâu để tự chuyển về trạng thái <span className="text-brand-overlay font-semibold">an toàn</span>.
          </p>
        </div>

        {/* CTA Button Main */}
        <div className="flex justify-center gap-4">
          <a
            href="#story"
            className="inline-block px-12 py-4 bg-brand-overlay text-brand-text font-semibold rounded-full text-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300"
          >
            Tìm hiểu thêm
          </a>
        </div>

        {/* Bottom accent */}
        <div className="mt-16 pt-12 border-t border-brand-overlay/20">
          <p className="text-sm text-brand-dark/50 tracking-wider">
            Phương — Tái tạo năng lượng từ gốc
          </p>
        </div>
      </div>
    </section>
  )
}
