export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-text text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="inline-block bg-brand-primary text-white px-4 py-2 rounded-sm mb-4 font-bold">
              Beyond Yoga
            </div>
            <p className="text-white/70">
              Tái tạo năng lượng và tìm lại giấc ngủ cùng Phương
            </p>
          </div>

          {/* Links */}
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

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Liên Hệ</h4>
            <p className="text-white/70 mb-4">
              Cần giúp đỡ? Hãy liên hệ với Phương
            </p>
            <a
              href="https://forms.gle/zhQWGEZcoaVKzQWX6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block"
            >
              Liên hệ
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-white/60">
            © {currentYear} Beyond Yoga with Phương. Tất cả các quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  )
}
