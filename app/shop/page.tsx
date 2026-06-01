'use client'

import { useState, useMemo, useId } from 'react'

// ─── Types & Data ────────────────────────────────────────────────────────────

type Product = {
  id: string
  tag: string
  name: string
  desc: string
  duration?: string
  price: number
}

const AUDIO: Product[] = [
  {
    id: 'a1', tag: 'Audio', duration: '10 phút', price: 89000,
    name: 'Thở Để Tắt Chế Độ Chiến Đấu',
    desc: 'Hệ thần kinh rời khỏi trạng thái cảnh giác chỉ trong 10 phút thở có hướng dẫn.',
  },
  {
    id: 'a2', tag: 'Audio', duration: '25 phút', price: 89000,
    name: 'Buông Thư Hệ Thần Kinh Sâu',
    desc: 'Dẫn cơ thể vào trạng thái an toàn và thả lỏng hoàn toàn sau một ngày dài.',
  },
  {
    id: 'a3', tag: 'Audio', duration: '20 phút', price: 89000,
    name: 'Body Scan: Quét Thân Và Thả Lỏng',
    desc: 'Nhận diện và giải phóng từng vùng căng thẳng đang tích tụ trong cơ thể.',
  },
  {
    id: 'a4', tag: 'Audio', duration: '12 phút', price: 89000,
    name: 'Ngủ Lại Giữa Đêm',
    desc: 'Điều hòa nhanh hệ thần kinh khi bạn tỉnh giấc và không ngủ lại được.',
  },
  {
    id: 'a5', tag: 'Audio', duration: '15 phút', price: 89000,
    name: 'Reset Sau Áp Lực Công Việc',
    desc: 'Hạ nhiệt hệ thần kinh sau một ngày làm việc cường độ cao.',
  },
  {
    id: 'a6', tag: 'Audio', duration: '15 phút', price: 89000,
    name: 'Thả Lỏng Vai, Gáy Và Hàm',
    desc: 'Giải phóng những vùng cơ hay gồng nhất khi bạn đang chịu áp lực.',
  },
  {
    id: 'a7', tag: 'Audio', duration: '10 phút', price: 89000,
    name: 'Nạp Năng Lượng Buổi Sáng',
    desc: 'Khởi động hệ thần kinh nhẹ nhàng, bắt đầu ngày mới không cần cà phê.',
  },
  {
    id: 'a8', tag: 'Audio', duration: '8 phút', price: 89000,
    name: 'Breathing Sequence Trước Khi Ngủ',
    desc: 'Chuỗi hơi thở giúp cơ thể chìm vào giấc ngủ tự nhiên và sâu hơn.',
  },
]

const DOCS: Product[] = [
  {
    id: 'd1', tag: 'Checklist', price: 69000,
    name: 'Tối Ưu Không Gian & Thói Quen Ngủ',
    desc: '24 điểm kiểm tra giúp thiết lập môi trường và thói quen ngủ sâu từ gốc.',
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmt(n: number) {
  return n.toLocaleString('vi-VN') + 'đ'
}

function makeOrderId() {
  return 'BY' + Date.now().toString(36).toUpperCase()
}

// Update these when you have the bank account info
const BANK = {
  code: 'MB',
  account: '0772488828',
  name: 'NGUYEN MAI PHUONG',
}

// ─── Product Row ─────────────────────────────────────────────────────────────

function ProductRow({
  product,
  checked,
  onToggle,
}: {
  product: Product
  checked: boolean
  onToggle: () => void
}) {
  const inputId = useId()
  return (
    <label
      htmlFor={inputId}
      className={`flex items-center gap-4 px-4 py-4 rounded-xl cursor-pointer transition-all border ${
        checked
          ? 'bg-sage-soft border-sage/30'
          : 'bg-paper border-transparent hover:bg-cream hover:border-ink/8'
      }`}
    >
      <input
        id={inputId}
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="h-5 w-5 rounded border-ink/30 accent-sage shrink-0 cursor-pointer"
      />

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-0.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
            {product.tag}
          </span>
          {product.duration && (
            <span className="text-xs text-ink-mute">{product.duration}</span>
          )}
        </div>
        <p className="font-semibold text-ink text-sm leading-snug">
          {product.name}
        </p>
        <p className="text-xs text-ink-mute mt-0.5 leading-relaxed">
          {product.desc}
        </p>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        {/* Preview button — enabled when audio files are available */}
        <span
          title="Preview sắp có"
          className="flex items-center justify-center w-8 h-8 rounded-full border border-ink/10 text-ink-mute opacity-30 cursor-not-allowed select-none"
          aria-hidden="true"
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </span>

        <span className="font-semibold text-ink text-sm whitespace-nowrap">
          {fmt(product.price)}
        </span>
      </div>
    </label>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

type Step = 'shop' | 'payment' | 'done'

export default function ShopPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [step, setStep] = useState<Step>('shop')
  const [orderId] = useState(makeOrderId)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const allProducts = [...AUDIO, ...DOCS]

  const selectedProducts = useMemo(
    () => allProducts.filter((p) => selected.has(p.id)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selected]
  )

  const total = useMemo(
    () => selectedProducts.reduce((sum, p) => sum + p.price, 0),
    [selectedProducts]
  )

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  async function handleSubmit() {
    if (selected.size === 0) return setError('Vui lòng chọn ít nhất một sản phẩm.')
    if (!name.trim()) return setError('Vui lòng điền họ tên.')
    if (!email.trim() || !email.includes('@')) return setError('Vui lòng điền email hợp lệ.')

    setError('')
    setLoading(true)

    try {
      await fetch('/api/shop-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId,
          name: name.trim(),
          email: email.trim(),
          products: selectedProducts.map((p) => `${p.tag}: ${p.name} — ${fmt(p.price)}`),
          total: fmt(total),
        }),
      })
    } catch (_) {
      // Discord notification failure shouldn't block checkout
    }

    setLoading(false)
    setStep('payment')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const qrUrl = `https://img.vietqr.io/image/${BANK.code}-${BANK.account}-compact2.png?amount=${total}&addInfo=${encodeURIComponent(orderId)}&accountName=${encodeURIComponent(BANK.name)}`

  // ── Payment Step ──────────────────────────────────────────────────────────

  if (step === 'payment') {
    return (
      <div className="min-h-screen bg-cream py-20 px-4">
        <div className="max-w-sm mx-auto text-center">
          <span className="eyebrow mb-4 block">Bước cuối</span>
          <h2 className="text-ink mb-3" style={{ fontSize: '1.75rem', lineHeight: 1.25 }}>
            Chuyển khoản để nhận file
          </h2>
          <p className="text-ink-soft mb-10 leading-relaxed">
            Quét mã QR bên dưới. Phương sẽ gửi file đến{' '}
            <span className="font-semibold text-ink">{email}</span> trong vòng 24 giờ sau khi xác nhận.
          </p>

          {/* QR Card */}
          <div className="bg-paper rounded-2xl border border-ink/10 p-8 mb-6 text-left">
            <img
              src={qrUrl}
              alt="QR chuyển khoản"
              className="w-48 h-48 mx-auto mb-6 rounded-xl"
              onError={(e) => {
                ;(e.target as HTMLImageElement).style.display = 'none'
              }}
            />

            <div className="text-center mb-6">
              <p className="text-2xl font-semibold text-sage">{fmt(total)}</p>
              <p className="text-sm text-ink-soft mt-1">
                Nội dung chuyển khoản:{' '}
                <span className="font-mono font-semibold text-ink">{orderId}</span>
              </p>
            </div>

            <div className="space-y-2 text-sm text-ink-soft border-t border-ink/10 pt-5">
              <div className="flex justify-between">
                <span>Ngân hàng</span>
                <span className="font-semibold text-ink">{BANK.code} Bank</span>
              </div>
              <div className="flex justify-between">
                <span>Tài khoản</span>
                <span className="font-mono font-semibold text-ink">{BANK.account}</span>
              </div>
              <div className="flex justify-between">
                <span>Chủ tài khoản</span>
                <span className="font-semibold text-ink">{BANK.name}</span>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-sage-soft rounded-xl p-5 mb-8 text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-mute mb-3">
              Sản phẩm đã chọn
            </p>
            <ul className="space-y-2">
              {selectedProducts.map((p) => (
                <li key={p.id} className="flex justify-between text-sm">
                  <span className="text-ink-soft">{p.name}</span>
                  <span className="font-semibold text-ink ml-3 shrink-0">{fmt(p.price)}</span>
                </li>
              ))}
            </ul>
          </div>

          <button onClick={() => setStep('done')} className="btn-primary w-full">
            Tôi đã chuyển khoản xong
          </button>
          <button
            onClick={() => setStep('shop')}
            className="text-sm text-ink-mute mt-4 hover:text-sage transition-colors block mx-auto"
          >
            Quay lại chỉnh sửa
          </button>
        </div>
      </div>
    )
  }

  // ── Done Step ─────────────────────────────────────────────────────────────

  if (step === 'done') {
    return (
      <div className="min-h-screen bg-cream py-20 px-4">
        <div className="max-w-md mx-auto text-center">
          <div
            className="w-16 h-16 rounded-full bg-sage flex items-center justify-center mx-auto mb-8"
            aria-hidden="true"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <span className="eyebrow mb-4 block">Cảm ơn bạn</span>
          <h2 className="text-ink mb-4" style={{ fontSize: '1.75rem', lineHeight: 1.25 }}>
            Đã nhận xác nhận của bạn
          </h2>
          <p className="text-ink-soft text-lg leading-relaxed mb-10">
            Phương sẽ kiểm tra giao dịch và gửi file đến{' '}
            <span className="font-semibold text-ink">{email}</span> trong vòng 24 giờ.
            Nếu cần hỗ trợ, bạn có thể nhắn qua{' '}
            <a
              href="https://www.facebook.com/phuong.wellbeing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage hover:underline"
            >
              Facebook
            </a>{' '}
            hoặc email beyondyogawithphuong@gmail.com.
          </p>

          <a href="/" className="btn-ghost">
            Quay về trang chủ
          </a>
        </div>
      </div>
    )
  }

  // ── Shop Step ─────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-paper">
      {/* Header */}
      <div className="bg-cream py-16 px-4 border-b border-ink/5">
        <div className="container-reading text-center">
          <span className="eyebrow mb-4 block">Sản phẩm số</span>
          <h1
            className="text-ink mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: 1.2 }}
          >
            Kho công cụ hạ cánh cho hệ thần kinh
          </h1>
          <p className="text-ink-soft text-lg leading-relaxed">
            Các bài dẫn thiền và tài liệu thực hành ngắn được thiết kế chuyên biệt để giúp cơ thể tháo gỡ trạng thái gồng căng, vào giấc ngủ sâu và tái tạo năng lượng gốc.
          </p>
        </div>
      </div>

      {/* Body: product list + sticky sidebar */}
      <div className="px-4 py-12 pb-32 lg:pb-12">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-start">

          {/* Product list */}
          <div className="flex-1 min-w-0 space-y-10">

            {/* Category 1: Audio */}
            <div>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-ink/8">
                <span className="eyebrow">Chuỗi Audio Dẫn Thiền & Hơi Thở</span>
                <span className="text-xs text-ink-mute bg-ink/5 px-2 py-0.5 rounded-full">
                  {AUDIO.length} bài
                </span>
              </div>
              <div className="space-y-1">
                {AUDIO.map((p) => (
                  <ProductRow
                    key={p.id}
                    product={p}
                    checked={selected.has(p.id)}
                    onToggle={() => toggle(p.id)}
                  />
                ))}
              </div>
            </div>

            {/* Category 2: Docs */}
            <div>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-ink/8">
                <span className="eyebrow">Tài liệu & Hướng dẫn thực hành</span>
              </div>
              <div className="space-y-1">
                {DOCS.map((p) => (
                  <ProductRow
                    key={p.id}
                    product={p}
                    checked={selected.has(p.id)}
                    onToggle={() => toggle(p.id)}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Sidebar */}
          <div id="order-sidebar" className="w-full lg:w-72 shrink-0 lg:sticky lg:top-24">
            <div className="bg-cream rounded-2xl border border-ink/10 p-6">
              <p className="font-semibold text-ink mb-4">Đơn hàng của bạn</p>

              {selected.size === 0 ? (
                <p className="text-sm text-ink-mute mb-5">
                  Tích chọn sản phẩm bạn muốn mua bên trái.
                </p>
              ) : (
                <ul className="space-y-2 mb-5">
                  {selectedProducts.map((p) => (
                    <li key={p.id} className="flex justify-between text-sm">
                      <span className="text-ink-soft truncate mr-2">{p.name}</span>
                      <span className="font-semibold text-ink shrink-0">{fmt(p.price)}</span>
                    </li>
                  ))}
                  <li className="flex justify-between pt-3 border-t border-ink/10">
                    <span className="font-semibold text-ink">Tổng cộng</span>
                    <span className="font-semibold text-sage text-lg">{fmt(total)}</span>
                  </li>
                </ul>
              )}

              <div className="space-y-3 mb-4">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-ink/15 rounded-xl px-4 py-3 text-sm text-ink bg-paper placeholder-ink-mute focus:outline-none focus:border-sage transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email nhận file"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-ink/15 rounded-xl px-4 py-3 text-sm text-ink bg-paper placeholder-ink-mute focus:outline-none focus:border-sage transition-colors"
                />
              </div>

              {error && (
                <p className="text-red-500 text-xs mb-3">{error}</p>
              )}

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="btn-primary w-full text-center"
                style={{ opacity: loading ? 0.6 : 1 }}
              >
                {loading ? 'Đang xử lý...' : 'Xác nhận & Thanh toán ngay'}
              </button>

              <p className="text-xs text-ink-mute mt-3 text-center leading-relaxed">
                File gửi qua email trong 24 giờ sau khi xác nhận thanh toán.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile sticky bar */}
      {selected.size > 0 && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-paper border-t border-ink/10 px-4 py-4 flex items-center justify-between gap-4 z-50 shadow-[0_-8px_30px_-10px_rgba(0,0,0,0.1)]">
          <div>
            <p className="text-xs text-ink-mute">
              {selected.size} sản phẩm
            </p>
            <p className="font-semibold text-ink">{fmt(total)}</p>
          </div>
          <button
            onClick={() =>
              document.getElementById('order-sidebar')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="btn-primary text-sm"
            style={{ padding: '0.6rem 1.25rem' }}
          >
            Xem đơn &amp; Thanh toán
          </button>
        </div>
      )}
    </div>
  )
}
