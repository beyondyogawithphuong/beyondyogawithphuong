export default function Hero() {
  return (
    <section className="hero-section text-white py-24 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Logo Frame - Replace with your logo */}
        <div className="mb-8">
          <div className="inline-block bg-brand-cream text-brand-dark px-6 py-3 rounded-lg font-bold h-24 w-24 flex items-center justify-center">
            {/* LOGO PLACEHOLDER - 200x200px */}
            <img src="/logo.png" alt="Beyond Yoga" className="h-full w-full object-contain" />
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
          Có những ngày, cơ thể chỉ muốn đình công.
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl mb-4 opacity-90">
          Sáng thức dậy không phải là sự tỉnh táo, mà là cái cổ cứng đờ. Hàm siết chặt. Hai vai nặng như đang đeo đá.
        </p>

        <p className="text-base md:text-lg mb-8 opacity-80">
          Bạn không thiếu kỷ luật hay ý chí. Chỉ là hệ thần kinh của bạn đã quá tải quá lâu để tự chuyển về trạng thái nghỉ ngơi.
        </p>

        {/* Tagline */}
        <p className="text-lg md:text-xl font-semibold mb-12">
          Phương - Đồng hành cùng bạn tái tạo năng lượng và tìm lại giấc ngủ
        </p>

        {/* CTA Button */}
        <a href="#entry-points" className="btn-gold inline-block">
          Bắt đầu từ đâu?
        </a>
      </div>
    </section>
  )
}
