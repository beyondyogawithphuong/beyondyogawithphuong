export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-brand-light py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <a href="/" className="text-brand-primary hover:underline mb-8 inline-block">
            ← Quay lại trang chủ
          </a>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-text mb-4">
            Chính Sách Bảo Mật
          </h1>
          <p className="text-brand-text/70">
            Cập nhật lần cuối: 05/2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8 text-brand-text/80">
          <section>
            <h2 className="text-2xl font-serif text-brand-text mb-4">Thu Thập Dữ Liệu</h2>
            <p>
              Beyond Yoga with Phương thu thập tên, địa chỉ email và thông tin đơn hàng khi người dùng đăng ký các sản phẩm, khóa học hoặc workshop. Chúng tôi <strong>không thu thập thông tin thẻ ngân hàng hay mật khẩu</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-text mb-4">Mục Đích Sử Dụng</h2>
            <p>
              Thông tin cá nhân được sử dụng cho:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Xác nhận đăng ký</li>
              <li>Gửi tài liệu khóa học và sản phẩm</li>
              <li>Cung cấp hỗ trợ kỹ thuật</li>
              <li>Cải thiện dịch vụ</li>
              <li>Gửi thông tin cập nhật về các chương trình mới</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-text mb-4">Chia Sẻ Dữ Liệu Với Bên Thứ Ba</h2>
            <p>
              Dữ liệu của bạn <strong>không bán, trao đổi hoặc chia sẻ</strong> với các bên thứ ba thương mại, trừ khi cần thiết cho việc cung cấp dịch vụ hoặc theo yêu cầu pháp luật.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-text mb-4">Bảo Vệ Dữ Liệu</h2>
            <p>
              Thông tin được lưu trữ trên cơ sở hạ tầng được bảo mật bằng cách sử dụng Upstash Redis và Vercel với các biện pháp kỹ thuật hợp lý để bảo vệ dữ liệu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-text mb-4">Quyền Của Người Dùng</h2>
            <p>
              Bạn có quyền yêu cầu xem, xóa hoặc truy cập thông tin cá nhân của mình, hoặc hủy đăng ký từ các thông báo bất cứ lúc nào bằng cách liên hệ qua email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-text mb-4">Liên Hệ</h2>
            <p>
              Nếu có bất kỳ câu hỏi nào về chính sách này, vui lòng liên hệ:
            </p>
            <p className="font-semibold">
              📧 beyondyogawithphuong@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
