'use client'

import { FormEvent, useState } from 'react'

interface CheckoutFormProps {
  product: any
  productId: string
}

export default function CheckoutForm({ product, productId }: CheckoutFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          productId,
          productTitle: product.title,
          price: product.price,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '' })
        // Redirect after 2 seconds
        setTimeout(() => {
          window.location.href = '/?success=true'
        }, 2000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-sm">
      <h2 className="text-xl font-bold text-brand-text mb-8 uppercase">
        Thông tin nhận sản phẩm
      </h2>

      {/* Name Field */}
      <div className="mb-8">
        <label htmlFor="name" className="block text-sm font-semibold text-brand-text mb-3">
          Họ và tên <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nguyễn Thị Mai"
          required
          className="w-full px-4 py-3 border border-brand-overlay/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />
      </div>

      {/* Email Field */}
      <div className="mb-8">
        <label htmlFor="email" className="block text-sm font-semibold text-brand-text mb-3">
          Email Gmail cá nhân <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-2">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tên.của.bạn"
            required
            className="flex-1 px-4 py-3 border border-brand-overlay/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
          <span className="px-3 py-3 bg-brand-overlay text-white rounded-sm font-semibold">
            @gmail.com
          </span>
        </div>
        <p className="text-sm text-red-600 mt-3 flex gap-2">
          <span>⚠️</span>
          <span>
            Kiểm tra kỹ email trước khi tiếp tục. Link tải sản phẩm sẽ gửi tới đây và <strong>không thể thay đổi sau khi thanh toán</strong>.
          </span>
        </p>
      </div>

      {/* Submit Button */}
      <div className="mb-6">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-gold w-full py-4 font-bold text-lg disabled:opacity-50"
        >
          {status === 'loading' ? 'Đang xử lý...' : `Thanh toán ${product.price.toLocaleString('vi-VN')}đ`}
        </button>
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-sm text-green-700">
          ✓ Thanh toán thành công! Hướng dẫn sẽ được gửi tới email của bạn.
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-sm text-red-700">
          ✗ Có lỗi xảy ra. Vui lòng thử lại.
        </div>
      )}

      {/* Footer Info */}
      <div className="mt-12 pt-8 border-t border-brand-overlay/10 text-center text-sm text-brand-text/60">
        <p className="mb-2">
          Bạn sẽ nhận tài liệu qua email trong vòng 24 giờ
        </p>
        <p>
          Nếu có vấn đề gì, <a href="/" className="text-brand-highlight hover:underline">liên hệ với chúng tôi</a>
        </p>
      </div>
    </form>
  )
}
