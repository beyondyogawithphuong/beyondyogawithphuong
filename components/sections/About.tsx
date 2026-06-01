const credentials = [
  {
    label: 'Thực hành & Giảng dạy',
    desc: 'Hoạt động chuyên nghiệp từ năm 2018, tích lũy hàng ngàn giờ đứng lớp trực tiếp và trực tuyến.',
  },
  {
    label: 'Nền tảng chuyên môn',
    desc: 'Đào tạo chuyên sâu về Yoga trị liệu, Hatha và Vinyasa.',
  },
  {
    label: 'Liệu pháp năng lượng',
    desc: 'Nhà thực hành Reiki, sound bath (chuông xoay Tây Tạng) kết hợp điều hòa năng lượng thân tâm.',
  },
  {
    label: 'Kinh nghiệm thực tế',
    desc: 'Đồng hành cùng nhiều chủ doanh nghiệp, solopreneur và quản lý cấp trung trong hành trình phục hồi hệ thần kinh, giải tỏa căng thẳng và xử lý mất ngủ từ gốc.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-4 bg-cream">
      <div className="container-wide">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow mb-4 block">Về Phương</span>
          <h2 className="text-ink mb-4">Người đồng hành cùng bạn</h2>
          <p className="text-ink-soft text-lg max-w-xl mx-auto">
            Mình không sửa cơ thể của bạn. Mình chỉ giúp bạn tháo đúng chỗ đang kẹt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-start">

          {/* Portrait */}
          <div className="order-2 md:order-1 md:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-[0_30px_60px_-30px_rgba(34,101,74,0.35)] aspect-[4/5]">
              <img
                src="/phuong.png"
                alt="Phuong, Beyond Yoga"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="order-1 md:order-2 md:col-span-3">

            <div className="space-y-6 text-lg text-ink-soft leading-relaxed mb-10">
              <p>
                Mình bắt đầu để ý đến một điều lặp đi lặp lại trong các lớp học của mình: Những người làm việc trí óc cường độ cao, từ chủ doanh nghiệp đến quản lý, bước vào buổi tập với một cơ thể không biết cách tắt. Vai vẫn nhấc lên khi nằm xuống. Hàm vẫn siết chặt. Hơi thở không chạm được xuống bụng. Cơ thể họ nằm yên, nhưng bên trong vẫn đang chạy ở chế độ sinh tồn.
              </p>

              <p>
                Bản thân mình cũng từng đi qua những đoạn gãy đổ như thế. Giai đoạn dịch bệnh căng thẳng, cơ thể mình bùng phát chứng viêm da kéo dài, phản ứng mạnh mẽ sau nhiều năm tích tụ áp lực ẩn dòng. Chỉ đến khi mình dừng lại, đưa hệ thần kinh về đúng điều kiện an toàn, cơ thể mới bắt đầu tự phục hồi.
              </p>

              <p>
                Năm 2018, mình sang Rishikesh, Ấn Độ để học Yoga nội trú. Ở đó, mình học lại từ đầu cách thở, cách cảm nhận và tình cờ gặp Reiki. Trước đó, mình dạy Yoga theo nghĩa thông thường. Nhưng càng đi sâu, mình càng thấy rõ với những người đang gồng gánh quá nhiều, Yoga đơn thuần là chưa đủ. Vấn đề nằm ở một tầng sâu hơn: nơi hệ thần kinh bị kẹt.
              </p>

              <p>
                Beyond Yoga with Phương ra đời từ sự chuyển dịch đó. Mình không còn dạy Yoga hiệu suất để lấy những tư thế đẹp. Mình làm việc với hệ thần kinh, tầng sâu nơi các ứng dụng thiền, trà hay các giải pháp wellness hời hợt khó lòng chạm tới. Sau nhiều năm đứng lớp và làm việc trực tiếp, mình hiểu rằng khi đúng tầng kẹt được tháo mở, cơ thể bạn sẽ tự biết cách tìm lại giấc ngủ sâu và nguồn năng lượng gốc vốn có.
              </p>
            </div>

            {/* Credibility block */}
            <div className="border-t border-ink/10 pt-8">
              <span className="eyebrow mb-6 block">Nền tảng chuyên môn</span>
              <ul className="space-y-5">
                {credentials.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sage shrink-0" aria-hidden="true" />
                    <div>
                      <span className="font-semibold text-ink text-sm">{item.label}: </span>
                      <span className="text-ink-soft text-sm leading-relaxed">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
