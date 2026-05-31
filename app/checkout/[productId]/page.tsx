import CheckoutForm from '@/components/CheckoutForm'

const products: Record<string, any> = {
  'audio-1': {
    title: 'Sleep Meditation Kit',
    price: 99000,
    description: 'Bộ công cụ âm thanh cho những đêm đầu óc không chịu tắt',
    duration: '20:00 - 21:30',
    period: 'Buổi tối',
  },
  'audio-2': {
    title: 'Breathing Sequences',
    price: 49000,
    description: 'Các bài thở được chọn lọc giúp hệ thần kinh bình tĩnh',
    duration: '15:00 - 15:20',
    period: 'Buổi chiều',
  },
  'audio-3': {
    title: 'Nervous System Practices',
    price: 79000,
    description: 'Các bài thực hành đưa cơ thể ra khỏi trạng thái căng',
    duration: '18:00 - 19:00',
    period: 'Buổi tối',
  },
}

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ productId: string }>
}) {
  const { productId } = await params
  const product = products[productId]

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-brand-text mb-4">
            Sản phẩm không tìm thấy
          </h1>
          <a href="/" className="text-brand-highlight hover:underline">
            Quay lại trang chủ
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <a href="/" className="text-brand-highlight hover:underline mb-8 inline-block">
            ← Quay lại
          </a>
          <h1 className="text-4xl font-serif text-brand-text mb-2">
            {product.title}
          </h1>
          <p className="text-brand-text/70">{product.description}</p>
        </div>

        {/* Product Info */}
        <div className="bg-white rounded-lg p-6 mb-8 border-l-4 border-brand-overlay">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🕐</span>
              <div>
                <div className="text-2xl font-bold text-brand-text">
                  {product.duration}
                </div>
                <div className="text-brand-text/60">{product.period}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-brand-highlight">
                {product.price.toLocaleString('vi-VN')}đ
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Form */}
        <CheckoutForm product={product} productId={productId} />
      </div>
    </div>
  )
}
