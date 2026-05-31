export default function EntryPoints() {
  const entryPoints = [
    {
      number: '01',
      title: 'Quá tải ngay lúc này?',
      product: 'SOS Sleep Kit',
      description: 'Audio, breathing sequences và thực hành ngắn giúp cơ thể rời khỏi trạng thái cảnh giác.',
      link: 'https://sos-sleep-kit.vercel.app/',
    },
    {
      number: '02',
      title: 'Muốn hiểu chuyện gì đang xảy ra?',
      product: 'Workshop Tắt Nút Chiến Đấu',
      description: 'Chia sẻ online để hiểu vì sao khó nghỉ và cách phá vòng lặp kiệt sức.',
      link: 'https://workshop-nervous-system-reset.vercel.app/',
    },
    {
      number: '03',
      title: 'Muốn cách phục hồi lâu dài?',
      product: 'The Reclaim Protocol',
      description: 'Lộ trình chuyên sâu để thay đổi mối quan hệ giữa cơ thể và công việc từ gốc.',
      link: 'https://the-reclaim-program.vercel.app/',
    },
    {
      number: '04',
      title: 'Cần hỗ trợ cá nhân hóa?',
      product: '1:1 Support',
      description: 'Thiết kế riêng theo thể trạng, nhịp sống và mức độ quá tải của bạn.',
      link: 'https://forms.gle/zhQWGEZcoaVKzQWX6',
    },
  ]

  return (
    <section id="entry-points" className="py-20 md:py-32 px-4 bg-brand-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-text mb-6 text-center">
          Bắt đầu từ đâu?
        </h2>
        <p className="text-center text-brand-text/70 mb-16 max-w-2xl mx-auto">
          Chọn điểm khởi đầu phù hợp với tình trạng và nhu cầu của bạn
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {entryPoints.map((point, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-8 border-l-4 border-brand-primary">
              <div className="text-5xl font-serif font-bold text-brand-primary/30 mb-4">{point.number}</div>
              <h3 className="text-lg font-semibold text-brand-text/70 mb-2">{point.title}</h3>
              <h4 className="text-2xl font-serif text-brand-text mb-4">{point.product}</h4>
              <p className="text-brand-text/60 mb-6">{point.description}</p>
              <a
                href={point.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-block"
              >
                Tìm hiểu thêm
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
