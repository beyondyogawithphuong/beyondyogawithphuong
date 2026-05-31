export default function Products() {
  const audioProducts = [
    {
      id: 'audio-1',
      title: 'Sleep Meditation Kit',
      price: 99000,
      description: 'Bộ công cụ âm thanh cho những đêm đầu óc không chịu tắt',
      number: '01',
    },
    {
      id: 'audio-2',
      title: 'Breathing Sequences',
      price: 49000,
      description: 'Các bài thở được chọn lọc giúp hệ thần kinh bình tĩnh',
      number: '02',
    },
    {
      id: 'audio-3',
      title: 'Nervous System Practices',
      price: 79000,
      description: 'Các bài thực hành đưa cơ thể ra khỏi trạng thái căng',
      number: '03',
    },
  ]

  return (
    <section className="py-20 md:py-32 px-4 bg-brand-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-text mb-4 text-center">
          Sản Phẩm Audio
        </h2>
        <p className="text-center text-brand-text/70 mb-12">
          Các công cụ âm thanh để hỗ trợ hành trình phục hồi của bạn
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {audioProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow border border-brand-primary/10"
            >
              <div className="text-5xl font-serif font-bold text-brand-primary/20 mb-4">{product.number}</div>
              <h3 className="text-xl font-bold text-brand-text mb-2">
                {product.title}
              </h3>
              <p className="text-brand-text/60 mb-4 text-sm">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-brand-primary">
                  {product.price.toLocaleString('vi-VN')}đ
                </span>
                <a href={`/checkout/${product.id}`} className="btn-gold text-sm">
                  Mua ngay
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-brand-text/60 text-sm">
            ✨ Thêm các sản phẩm mới sẽ được cập nhật sớm
          </p>
        </div>
      </div>
    </section>
  )
}
