type Product = {
  number: string
  tag: string
  title: string
  description: string
  cta: string
  link: string
  secondCta?: string
  secondLink?: string
  secondDisabled?: boolean
}

const products: Product[] = [
  // Nhom 1: San pham so
  {
    number: '01',
    tag: 'Audio & Breathing',
    title: 'SOS Sleep Kit',
    description:
      'Một bộ công cụ cho những đêm đầu óc không chịu tắt. Gồm audio, các bài thở và thực hành ngắn giúp khẩn cấp điều hòa hệ thần kinh, đưa cơ thể rời khỏi trạng thái cảnh giác để vào giấc khi bạn tỉnh giữa đêm.',
    cta: 'Xử lý quá tải ngay',
    link: 'https://sos-sleep-kit.vercel.app/',
    secondCta: 'Khám phá Kho Audio Phục Hồi',
    secondLink: '/shop',
    secondDisabled: true, // bỏ dòng này khi /shop hoàn thiện
  },
  {
    number: '02',
    tag: 'Paid Newsletter',
    title: 'Điểm Nghỉ · The Rest Stop',
    description:
      'Bản tin chuyên sâu có phí dành cho những người đã quen sống trong trạng thái căng. Mỗi 7 ngày, bạn nhận recovery letters, audio và kiến thức phục hồi để cơ thể không chỉ chịu đựng, mà dần học lại cách nghỉ.',
    cta: 'Tìm hiểu thêm',
    link: 'https://thereststop.vercel.app/',
  },
  {
    number: '03',
    tag: 'Online Workshop',
    title: 'Workshop Tắt Nút Chiến Đấu',
    description:
      'Buổi chia sẻ online giúp bạn hiểu vì sao người làm việc cường độ cao thường khó nghỉ ngơi, chuyện gì xảy ra khi stress kéo dài, và cách chủ động nhìn rõ vòng lặp phía sau sự kiệt sức.',
    cta: 'Tìm hiểu thêm',
    link: 'https://workshop-nervous-system-reset.vercel.app/',
  },

  // Nhom 2: Khoa hoc & Chuong trinh dong hanh
  {
    number: '04',
    tag: 'Weekly Yoga Practice',
    title: 'Recovery Rhythm · Nhịp Phục Hồi',
    description:
      'Không gian thực hành giúp hệ thần kinh quay lại nhịp độ tự nhiên qua các buổi Yoga phục hồi 3 buổi/tuần (không tư thế khó, không hiệu suất) và các bài dẫn đưa cơ thể ra khỏi trạng thái căng giác kéo dài.',
    cta: 'Tìm hiểu thêm',
    link: 'https://lop-group.vercel.app/yoga-class.html',
  },
  {
    number: '05',
    tag: '90-Day Mentorship',
    title: 'The Reclaim Protocol',
    description:
      'Lộ trình chuyên sâu giúp tái cấu trúc cách bạn phản ứng với áp lực và thay đổi mối quan hệ giữa cơ thể và công việc. Chúng mình đi sâu vào nervous system patterns để tìm lại sự chuyển dịch bền vững từ gốc.',
    cta: 'Khám phá lộ trình',
    link: 'https://the-reclaim-program.vercel.app/',
  },
  {
    number: '06',
    tag: 'Premium 1:1 Support',
    title: '1:1 Premium Support',
    description:
      'Giải pháp được thiết kế riêng biệt dựa trên thể trạng, nhịp sống và mức độ quá tải thực tế của từng người để mang lại sự phục hồi tối ưu nhất.',
    cta: 'Đăng ký tư vấn',
    link: 'https://forms.gle/zhQWGEZcoaVKzQWX6',
  },
]

export default function EntryPoints() {
  return (
    <section id="entry-points" className="py-24 md:py-32 px-4 bg-cream">
      <div className="container-wide">

        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="eyebrow mb-4 block">Sản phẩm & Chương trình</span>
          <h2 className="text-ink mb-4">Bạn đang ở đâu trong hành trình này?</h2>
          <p className="text-ink-soft text-lg">
            Chọn điểm khởi đầu phù hợp nhất với trạng thái hiện tại của bạn để gặp lại cơ thể mình một lần nữa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p) => {
            const hasTwoButtons = !!p.secondLink

            // Card with 2 buttons: div wrapper (not full-link)
            if (hasTwoButtons) {
              return (
                <div
                  key={p.number}
                  className="flex flex-col bg-paper border border-ink/10 rounded-2xl p-7 transition-all duration-200 hover:border-sage/40 hover:shadow-[0_12px_40px_-20px_rgba(34,101,74,0.25)]"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-sage text-paper text-xs font-semibold shrink-0">
                      {p.number}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="text-ink mb-3" style={{ fontSize: '1.25rem', lineHeight: 1.3 }}>
                    {p.title}
                  </h3>

                  <p className="text-ink-soft text-sm leading-relaxed mb-6 flex-1">
                    {p.description}
                  </p>

                  {/* Two buttons side by side */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-center text-sm"
                      style={{ padding: '0.65rem 1.25rem' }}
                    >
                      {p.cta}
                    </a>
                    {/* TODO: bỏ opacity-40 pointer-events-none khi /shop hoàn thiện */}
                    <a
                      href={p.secondLink}
                      className={`btn-ghost text-center text-sm ${p.secondDisabled ? 'opacity-40 pointer-events-none' : ''}`}
                      style={{ padding: '0.65rem 1.25rem' }}
                    >
                      {p.secondCta}
                    </a>
                  </div>
                </div>
              )
            }

            // Regular card: full-link wrapper
            return (
              <a
                key={p.number}
                href={p.link}
                target={p.link.startsWith('http') ? '_blank' : undefined}
                rel={p.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex flex-col bg-paper border border-ink/10 rounded-2xl p-7 transition-all duration-200 hover:border-sage/40 hover:shadow-[0_12px_40px_-20px_rgba(34,101,74,0.25)]"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-sage text-paper text-xs font-semibold shrink-0">
                    {p.number}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
                    {p.tag}
                  </span>
                </div>

                <h3
                  className="text-ink mb-3 group-hover:text-sage transition-colors"
                  style={{ fontSize: '1.25rem', lineHeight: 1.3 }}
                >
                  {p.title}
                </h3>

                <p className="text-ink-soft text-sm leading-relaxed mb-6 flex-1">
                  {p.description}
                </p>

                <span className="inline-flex items-center gap-2 text-sage font-semibold text-sm mt-auto">
                  {p.cta}
                  <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                </span>
              </a>
            )
          })}
        </div>

      </div>
    </section>
  )
}
