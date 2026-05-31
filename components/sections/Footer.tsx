export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-text text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Thông Tin Liên Hệ</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>
                📍 <span>33 Hậu Giang, P4, Q.Tân Bình, TPHCM</span>
              </li>
              <li>
                <a href="tel:0772488828" className="hover:text-white transition">
                  📞 0772488828
                </a>
              </li>
              <li>
                <a href="mailto:beyondyogawithphuong@gmail.com" className="hover:text-white transition">
                  📧 beyondyogawithphuong@gmail.com
                </a>
              </li>
              <li className="pt-2 space-y-2">
                <a href="https://www.facebook.com/phuong.wellbeing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition block">
                  f Facebook
                </a>
                <a href="https://www.youtube.com/@phuong.wellbeingstrategist/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition block">
                  ▶ YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Các Chương Trình</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="https://sos-sleep-kit.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  SOS Sleep Kit
                </a>
              </li>
              <li>
                <a href="https://workshop-nervous-system-reset.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Workshop
                </a>
              </li>
              <li>
                <a href="https://the-reclaim-program.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  The Reclaim Protocol
                </a>
              </li>
              <li>
                <a href="https://lop-group.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Yoga Classes
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Beyond Yoga with Phương. Tất cả các quyền được bảo lưu.
            </p>
            <div className="flex gap-6 text-white/60 text-sm">
              <a href="#" className="hover:text-white transition">
                Chính sách bảo mật
              </a>
              <a href="#" className="hover:text-white transition">
                Điều khoản dịch vụ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
