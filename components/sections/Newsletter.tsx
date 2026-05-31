'use client'

import { FormEvent, useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="newsletter" className="py-20 md:py-32 px-4 bg-brand-primary text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">
          Theo dõi Phương
        </h2>
        <p className="text-lg opacity-90 mb-12">
          Nhận những bài viết chuyên sâu về hệ thần kinh, giấc ngủ và phục hồi năng lượng
        </p>

        {/* Email Signup */}
        <form onSubmit={handleSubmit} className="mb-12">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 bg-white text-brand-primary font-semibold rounded-sm hover:opacity-90 transition-opacity"
            >
              {status === 'loading' ? 'Đang gửi...' : 'Đăng ký'}
            </button>
          </div>
          {status === 'success' && (
            <p className="text-white/90 mt-4">✓ Cảm ơn! Kiểm tra email của bạn.</p>
          )}
          {status === 'error' && (
            <p className="text-white/70 mt-4">Có lỗi xảy ra. Vui lòng thử lại.</p>
          )}
        </form>

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="font-semibold text-xl mb-6">Kết nối với Phương</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-white rounded-sm hover:bg-white hover:text-brand-primary transition-colors"
            >
              ▶ YouTube
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-white rounded-sm hover:bg-white hover:text-brand-primary transition-colors"
            >
              f Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-white rounded-sm hover:bg-white hover:text-brand-primary transition-colors"
            >
              @ Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
