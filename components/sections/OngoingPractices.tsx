export default function OngoingPractices() {
  const practices = [
    {
      number: '01',
      title: 'Recovery Rhythm | Nhịp Phục Hồi',
      description: 'Weekly yoga regulation sessions',
      features: [
        '3 buổi yoga/tuần giúp cơ thể rời khỏi trạng thái cảnh giác',
        'Guided nervous system practices',
        'Tập trung vào những chuyển động và hơi thở được chọn lọc kỹ lưỡng',
        'Không yoga hiệu suất, tập trung vào phục hồi',
      ],
      link: 'https://lop-group.vercel.app/yoga-class.html',
      cta: 'Tham gia lớp học',
    },
    {
      number: '02',
      title: 'The Rest Stop | Điểm Nghỉ',
      description: 'Paid newsletter 7 ngày',
      features: [
        'Recovery letters hàng ngày',
        'Audio guide cho thực hành',
        'Góc nhìn chuyên sâu về hệ thần kinh, giấc ngủ, stress',
        'Cơ thể không chỉ chuẩn bị, mà dần học lại cách nghỉ',
      ],
      link: 'https://thereststop.vercel.app/',
      cta: 'Đăng ký bản tin',
    },
  ]

  return (
    <section className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-text mb-4 text-center">
          Hỗ Trợ Liên Tục
        </h2>
        <p className="text-center text-brand-text/70 mb-16">
          Các chương trình hàng tuần giúp hệ thần kinh học lại cách bình tĩnh
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {practices.map((practice, idx) => (
            <div key={idx} className="bg-white rounded-lg p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl font-serif font-bold text-brand-highlight/20 mb-4">{practice.number}</div>
              <h3 className="text-2xl font-serif text-brand-text mb-2">
                {practice.title}
              </h3>
              <p className="text-brand-highlight font-semibold mb-6">{practice.description}</p>

              <ul className="space-y-3 mb-8">
                {practice.features.map((feature, fidx) => (
                  <li key={fidx} className="flex gap-3 text-brand-text/70">
                    <span className="text-brand-highlight flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={practice.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-block"
              >
                {practice.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
