export default function HeroNew() {
  return (
    <section className="w-full bg-white py-24 px-4 md:py-32">
      <div className="w-full max-w-4xl mx-auto">
        {/* CTA Button */}
        <div className="text-center mb-12">
          <a href="#entry-points" className="inline-block px-6 py-2 bg-brand-overlay text-white font-semibold rounded-full text-sm">
            Bắt đầu từ đâu?
          </a>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-serif mb-4" style={{color: '#1a1a1a'}}>
            Có những ngày, cơ thể chỉ muốn
          </h1>
          <h1 className="text-5xl md:text-6xl font-serif" style={{color: '#22654a'}}>
            đình công
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto" style={{color: '#1a1a1a'}}>
          Sáng thức dậy, thứ đầu tiên bạn cảm nhận không phải là sự tỉnh táo. Mà là cái cổ cứng đờ, hàm siết chặt.
        </p>

        {/* Divider */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <div className="w-12 h-px" style={{backgroundColor: '#00E5FF'}}></div>
          <p className="text-sm font-semibold" style={{color: '#22654a'}}>
            HIỂU RÕ HỆ THẦN KINH
          </p>
          <div className="w-12 h-px" style={{backgroundColor: '#00E5FF'}}></div>
        </div>

        {/* Key Message */}
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto italic" style={{color: '#1a1a1a'}}>
          Bạn không thiếu <strong>kỷ luật</strong> hay <strong>ý chí</strong>.
          Chỉ là hệ thần kinh của bạn đã quá tải quá lâu để tự chuyển về trạng thái <span style={{color: '#22654a', fontWeight: 'bold'}}>an toàn</span>.
        </p>

        {/* CTA Button */}
        <div className="text-center">
          <a href="#story" className="inline-block px-8 py-3 font-semibold rounded-full text-lg" style={{backgroundColor: '#22654a', color: '#FFFFFF'}}>
            Tìm hiểu thêm
          </a>
        </div>

        {/* Footer text */}
        <div className="text-center mt-16 pt-8" style={{borderTop: '1px solid rgba(34, 101, 74, 0.2)'}}>
          <p className="text-sm" style={{color: '#1a1a1a', opacity: 0.5}}>
            Phương — Tái tạo năng lượng từ gốc
          </p>
        </div>
      </div>
    </section>
  )
}
