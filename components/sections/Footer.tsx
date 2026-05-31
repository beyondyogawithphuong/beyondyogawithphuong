export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-overlay text-brand-text py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16 items-start">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <div className="h-20 w-20 rounded-lg overflow-hidden flex items-center justify-center bg-white/20">
              <img src="/logo.png" alt="Beyond Yoga" className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <p className="text-sm font-semibold text-brand-text/90 mb-6 tracking-wider">LIÊN HỆ</p>
            <ul className="space-y-4 text-sm text-brand-text/80">
              <li className="flex items-start gap-3">
                <span className="text-brand-highlight flex-shrink-0">📍</span>
                <span>33 Hậu Giang, P4, Q.Tân Bình, TPHCM</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-highlight flex-shrink-0">📞</span>
                <a href="tel:0772488828" className="hover:text-brand-highlight transition">
                  0772488828
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-highlight flex-shrink-0">📧</span>
                <a href="mailto:beyondyogawithphuong@gmail.com" className="hover:text-brand-highlight transition">
                  beyondyogawithphuong@gmail.com
                </a>
              </li>
              <li className="flex gap-6 pt-2">
                <a href="https://www.facebook.com/phuong.wellbeing" target="_blank" rel="noopener noreferrer" className="hover:text-brand-highlight transition text-brand-highlight">
                  f Facebook
                </a>
                <a href="https://www.youtube.com/@phuong.wellbeingstrategist/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-highlight transition text-brand-highlight">
                  ▶ YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-text/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-brand-text/70 text-xs">
              © {currentYear} Beyond Yoga with Phương. Tất cả các quyền được bảo lưu.
            </p>
            <div className="flex gap-8 text-brand-text/70 text-xs">
              <a href="/chinh-sach-bao-mat" className="hover:text-brand-highlight transition">
                Chính sách bảo mật
              </a>
              <a href="/dieu-khoan-dich-vu" className="hover:text-brand-highlight transition">
                Điều khoản dịch vụ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
