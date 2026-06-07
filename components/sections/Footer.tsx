type IconProps = { className?: string }

const PhoneIcon = ({ className = '' }: IconProps) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 12 19.79 19.79 0 0 1 1.06 3.38 2 2 0 0 1 3.05 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)
const MailIcon = ({ className = '' }: IconProps) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)
const FacebookIcon = ({ className = '' }: IconProps) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const YouTubeIcon = ({ className = '' }: IconProps) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
)
const InstagramIcon = ({ className = '' }: IconProps) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickNav = [
    { label: 'Bắt đầu', href: '#entry-points' },
    { label: 'Sản phẩm & Chương trình', href: '#entry-points' },
    { label: 'Về Phương', href: '#about' },
    { label: 'Thư viện', href: '#free-resources' },
  ]

  return (
    <footer className="bg-sage text-paper py-16 md:py-20 px-4">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-14 w-14 rounded-full overflow-hidden bg-paper/15 shrink-0">
                <img src="/logo.png" alt="Beyond Yoga" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="font-serif text-lg leading-tight">Beyond Yoga</p>
                <p className="font-serif text-sm text-paper/70 italic">with Phương</p>
              </div>
            </div>
            <p className="text-sm text-paper/70 leading-relaxed max-w-xs">
              Đồng hành cùng bạn điều hòa hệ thần kinh và tìm lại giấc ngủ sâu từ gốc.
            </p>
          </div>

          {/* Quick nav */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold text-paper/90 mb-5 tracking-[0.15em] uppercase">Khám phá</p>
            <ul className="space-y-3 text-sm text-paper/80">
              {quickNav.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-cyan transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-5">
            <p className="text-xs font-semibold text-paper/90 mb-5 tracking-[0.15em] uppercase">Liên hệ</p>
            <ul className="space-y-4 text-sm text-paper/80">
<li className="flex items-center gap-3">
                <PhoneIcon className="text-cyan shrink-0" />
                <span>0772 488 828 <span className="text-paper/50">(chỉ nhắn tin Zalo)</span></span>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="text-cyan shrink-0" />
                <a href="mailto:beyondyogawithphuong@gmail.com" className="hover:text-cyan transition-colors break-all">
                  beyondyogawithphuong@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-5 pt-3 flex-wrap">
                <a href="https://www.facebook.com/phuong.wellbeing" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cyan transition-colors" aria-label="Facebook">
                  <FacebookIcon /><span>Facebook</span>
                </a>
                <a href="https://www.youtube.com/@phuong.wellbeingstrategist/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cyan transition-colors" aria-label="YouTube">
                  <YouTubeIcon /><span>YouTube</span>
                </a>
                <a href="https://www.instagram.com/beyondyogawithphuong/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cyan transition-colors" aria-label="Instagram">
                  <InstagramIcon /><span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-paper/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-paper/60 text-xs">
            © {currentYear} Beyond Yoga with Phương. Tất cả các quyền được bảo lưu.
          </p>
          <div className="flex gap-6 text-paper/60 text-xs">
            <a href="/chinh-sach-bao-mat" className="hover:text-cyan transition-colors">Chính sách bảo mật</a>
            <a href="/dieu-khoan-dich-vu" className="hover:text-cyan transition-colors">Điều khoản dịch vụ</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
