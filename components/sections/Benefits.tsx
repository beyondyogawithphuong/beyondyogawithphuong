type IconProps = { className?: string }

const MoonIcon = ({ className = '' }: IconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)
const ZapIcon = ({ className = '' }: IconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)
const HeartIcon = ({ className = '' }: IconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)
const LeafIcon = ({ className = '' }: IconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
)
const WindIcon = ({ className = '' }: IconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
  </svg>
)
const ShieldIcon = ({ className = '' }: IconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)
const UnlockIcon = ({ className = '' }: IconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
  </svg>
)
const SunIcon = ({ className = '' }: IconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)

const benefits = [
  {
    Icon: MoonIcon,
    title: 'Ngủ sâu thật sự',
    desc: 'Cơ thể chịu buông lỏng hoàn toàn để nghỉ ngơi, không còn những đêm trằn trọc gồng mình.',
  },
  {
    Icon: ZapIcon,
    title: 'Năng lượng bền vững',
    desc: 'Nguồn năng lượng tự nhiên từ bên trong, không còn những pha sụt pin đột ngột vào cuối ngày.',
  },
  {
    Icon: HeartIcon,
    title: 'Cảm xúc chừng mực',
    desc: 'Làm chủ được tâm trạng, bớt những nhịp trồi sụt hay gắt gỏng vô cớ.',
  },
  {
    Icon: LeafIcon,
    title: 'Tiêu hóa êm ấm',
    desc: 'Chiếc bụng nhẹ nhàng hơn hẳn vì không còn phải gánh chịu áp lực từ sự căng thẳng.',
  },
  {
    Icon: WindIcon,
    title: 'Giải tỏa áp lực trực diện',
    desc: 'Stress đến, xử lý được ngay, không để nó âm thầm đóng băng trong các bó cơ.',
  },
  {
    Icon: ShieldIcon,
    title: 'Miễn dịch phục hồi',
    desc: 'Sức đề kháng tự nhiên tốt hơn, cơ thể không còn dễ sập nguồn hay đổ bệnh vặt.',
  },
  {
    Icon: UnlockIcon,
    title: 'Tự do khỏi thói quen xấu',
    desc: 'Không còn nhu cầu tìm đến đồ ngọt, chất kích thích hay lướt điện thoại vô thức.',
  },
  {
    Icon: SunIcon,
    title: 'Tâm trí sáng rõ',
    desc: 'Đầu không còn mù sương, duy trì sự tập trung bén nhạy ngay cả khi làm việc cường độ cao.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 md:py-32 px-4 bg-sage-soft">
      <div className="container-wide">

        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="eyebrow mb-4 block">Sự thay đổi</span>
          <h2 className="text-ink mb-4">
            Khi hệ thần kinh được điều hòa, cuộc sống bên trong sẽ thay đổi thế nào?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map(({ Icon, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-paper rounded-2xl p-6 border border-ink/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shrink-0">
                  <Icon className="text-sage" />
                </div>
                <span className="text-xs font-semibold text-ink-mute tracking-wider">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-ink mb-2" style={{ fontSize: '1.05rem', fontWeight: 600, lineHeight: 1.4 }}>
                {title}
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
