type IconProps = { className?: string }

const YouTubeIcon = ({ className = '' }: IconProps) => (
  <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
)

const SubstackIcon = ({ className = '' }: IconProps) => (
  <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="3" rx="1"/>
    <rect x="3" y="9" width="18" height="3" rx="1"/>
    <path d="M3 15h18l-9 6-9-6z"/>
  </svg>
)

const BookmarkIcon = ({ className = '' }: IconProps) => (
  <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
  </svg>
)

export default function FreeResources() {
  const resources = [
    {
      Icon: YouTubeIcon,
      label: 'YouTube',
      title: 'Kênh YouTube',
      description:
        'Không gian chia sẻ các bài tập thực hành ngắn, chuỗi thở và video hướng dẫn phục hồi năng lượng thực tế, hoàn toàn miễn phí.',
      cta: 'Ghé thăm kênh',
      href: 'https://www.youtube.com/@phuong.wellbeingstrategist/',
      external: true,
      active: true,
    },
    {
      Icon: SubstackIcon,
      label: 'Substack',
      title: 'Trang Substack',
      description:
        'Nơi lưu giữ những bài viết sâu sắc về lối sống, tư duy và hành trình tìm lại sự an yên. Đọc miễn phí, đăng ký có phí cho nội dung chuyên sâu.',
      cta: 'Đọc các bài viết',
      href: 'https://beyondyogawithphuong.substack.com/',
      external: true,
      active: true,
    },
    {
      Icon: BookmarkIcon,
      label: 'Tủ đồ Phương',
      title: 'Những thứ Phương tin dùng',
      description:
        'Những cuốn sách gối đầu giường và các công cụ chăm sóc sức khỏe mà mình thực sự tin tưởng: thảm tập, máy lọc nước, sách phục hồi.',
      cta: 'Sắp ra mắt',
      href: '#',
      external: false,
      active: false,
    },
  ]

  return (
    <section id="free-resources" className="py-24 md:py-32 px-4 bg-paper">
      <div className="container-wide">

        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="eyebrow mb-4 block">Thư viện miễn phí</span>
          <h2 className="text-ink mb-4">Góc bình yên của Phương</h2>
          <p className="text-ink-soft text-lg">
            Những nơi bạn có thể ghé qua để nghe chuyện đời, chuyện nghề và tìm những công cụ nuôi dưỡng thân tâm mỗi ngày.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map(({ Icon, label, title, description, cta, href, external, active }) => (
            <div
              key={label}
              className={`flex flex-col rounded-2xl border p-8 transition-all duration-200 ${
                active
                  ? 'border-ink/10 bg-paper hover:border-sage/40 hover:shadow-[0_12px_40px_-20px_rgba(34,101,74,0.2)]'
                  : 'border-ink/5 bg-cream'
              }`}
            >
              <div className="flex items-start justify-between mb-5">
                <Icon className={active ? 'text-sage' : 'text-ink-mute'} />
                {!active && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-mute bg-ink/5 px-2.5 py-1 rounded-full">
                    Sắp có
                  </span>
                )}
              </div>

              <span className={`eyebrow mb-2 block ${!active ? 'text-ink-mute' : ''}`}>{label}</span>
              <h3
                className={`mb-3 ${active ? 'text-ink' : 'text-ink-soft'}`}
                style={{ fontSize: '1.2rem', lineHeight: 1.3 }}
              >
                {title}
              </h3>
              <p className="text-ink-mute text-sm leading-relaxed mb-6 flex-1">
                {description}
              </p>

              {active ? (
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 text-sage font-semibold text-sm group"
                >
                  {cta}
                  <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                </a>
              ) : (
                <span className="text-ink-mute text-sm">Đang chuẩn bị, sắp ra mắt.</span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
