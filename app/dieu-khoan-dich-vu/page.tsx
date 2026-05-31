export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-brand-light py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <a href="/" className="text-brand-primary hover:underline mb-8 inline-block">
            ← Quay lại trang chủ
          </a>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-text mb-4">
            Điều Khoản Dịch Vụ
          </h1>
          <p className="text-brand-text/70">
            Cập nhật lần cuối: 05/2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8 text-brand-text/80">
          <section>
            <h2 className="text-2xl font-serif text-brand-text mb-4">Dịch Vụ Cung Cấp</h2>
            <p>
              Beyond Yoga with Phương cung cấp các sản phẩm audio, khóa học online, workshop trực tiếp qua Zoom, và các dịch vụ hỗ trợ wellness khác. Mỗi dịch vụ bao gồm hướng dẫn trực tiếp hoặc tài liệu được chuẩn bị.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-text mb-4">Đăng Ký Và Thanh Toán</h2>
            <p>
              Đăng ký được xác nhận sau khi thanh toán thành công. Xác nhận email sẽ được gửi tự động đến địa chỉ Gmail được cung cấp.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-text mb-4">Chính Sách Hoàn Tiền</h2>
            <p>
              <strong>Không hoàn tiền</strong> sau khi thanh toán được xác nhận. Tuy nhiên:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Nếu Phương hủy dịch vụ, bạn sẽ nhận được hoàn tiền đầy đủ hoặc có thể chuyển sang phiên khác</li>
              <li>Bạn có thể chuyển nhượng đăng ký cho một người khác</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-text mb-4">Yêu Cầu Tham Gia</h2>
            <p>
              Đối với các workshop trực tiếp:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Liên kết Zoom sẽ được gửi qua email 1 ngày trước</li>
              <li>Chuẩn bị một không gian yên tĩnh và thảm yoga</li>
              <li><strong>Workshop không có ghi hình</strong> — trải nghiệm chỉ xảy ra khi bạn có mặt</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-text mb-4">Quyền Sở Hữu Trí Tuệ</h2>
            <p>
              Tất cả tài liệu khóa học, phương pháp dạy học, và nội dung đều là tài sản độc quyền của Beyond Yoga with Phương. Không được sao chép hoặc sử dụng cho mục đích thương mại mà không có sự cho phép.
            </p>
            <p className="text-red-600 font-semibold mt-4">
              Cấm ghi hình, quay phim, hoặc chia sẻ nội dung mà không được phép.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-text mb-4">Hạn Chế Trách Nhiệm</h2>
            <p>
              Beyond Yoga with Phương là một <strong>dịch vụ giáo dục wellness, không phải dịch vụ y tế</strong>. Các dịch vụ không thay thế tư vấn y tế chuyên nghiệp.
            </p>
            <p className="mt-4 text-sm text-red-600">
              Nếu bạn đang gặp vấn đề sức khỏe, vui lòng tham khảo ý kiến của các chuyên gia y tế trước khi tham gia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-text mb-4">Liên Hệ</h2>
            <p>
              Nếu có bất kỳ câu hỏi hoặc thắc mắc về các điều khoản này, vui lòng liên hệ:
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
