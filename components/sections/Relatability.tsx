export default function Relatability() {
  const signs = [
    "Thường tỉnh lúc 3AM và đầu óc bắt đầu chạy",
    "Cơ thể mệt nhưng tâm trí không chịu nghỉ",
    "Nghỉ ngơi thường đi kèm cảm giác tội lỗi",
    "Bạn dùng sự kiểm soát để xử lý mọi thứ",
    "Bên ngoài vẫn hoạt động tốt nhưng bên trong luôn căng",
    "Caffeine là thứ duy nhất giúp bạn đi tiếp"
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-brand-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-text mb-12 text-center">
          Bạn có thể sẽ thấy mình ở đây nếu:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {signs.map((sign, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="text-brand-primary text-2xl font-bold flex-shrink-0">✓</div>
              <p className="text-lg text-brand-text/70">{sign}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl text-brand-text font-semibold mb-6">
            Đó chính là bạn?
          </p>
          <p className="text-brand-text/60 mb-8">
            Nhiều người trong cộng đồng này là các founder, manager, solopreneur hay những người đang gánh nhiều trách nhiệm.
          </p>
        </div>
      </div>
    </section>
  )
}
