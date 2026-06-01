export default function Story() {
  return (
    <section id="story" className="bg-paper py-24 md:py-32 px-4">
      <div className="container-reading">

        {/* Eyebrow */}
        <span className="eyebrow mb-6 block">Câu chuyện</span>

        {/* Opening */}
        <h2 className="text-ink mb-10">
          Khi cơ thể chưa nhận được tín hiệu{' '}
          <span className="highlight">"An toàn"</span>
        </h2>

        {/* Body 1 */}
        <div className="space-y-6 mb-10 text-lg leading-relaxed text-ink-soft">
          <p>
            Có những ngày cơ thể giống như đang đình công. Sáng mở mắt ra, thứ đầu tiên bạn cảm nhận không phải là sự tỉnh táo. Là cái cổ cứng đờ. Là hai vai nặng trĩu như đang gánh đá. Hàm siết chặt từ lúc nào không biết.
          </p>

          <p>
            Có người kể với mình, một buổi sáng thức dậy, họ nằm bất động nhìn lên trần nhà. Không phải vì lười. Chỉ là cơ thể đột nhiên phản kháng, không nhúc nhích nổi nữa. Nhìn vào điện thoại, lịch họp vẫn kín bưng, việc vẫn chờ. Họ cứ ngồi lặng đi như vậy, tự dưng nước mắt chảy ra, không hiểu nổi mình đang bị làm sao.
          </p>
        </div>

        {/* Body 2 */}
        <div className="space-y-6 mb-4 text-lg leading-relaxed text-ink-soft">
          <p>
            Đau đầu thì uống viên giảm đau rồi vào họp tiếp. Vai gáy căng mỏi thì bóp vài cái rồi lại dán mắt vào màn hình. Cơ thể lên tiếng hoài, bạn nghe thấy hoài, nhưng lúc nào cũng có một việc khác quan trọng hơn được ưu tiên.
          </p>

          <p>
            Mình gặp nhiều người sống như vậy lắm. Họ vẫn chạy tốt, vẫn gánh vác mọi thứ êm xuôi. Nhưng vỉ thuốc giảm đau lúc nào cũng để cạnh máy tính. Cổ vai gáy cứng từ sáng đến tối. Tỉnh dậy mỗi sáng mà không chắc đêm qua mình có thực sự ngủ hay không.
          </p>

          <p>
            Nếu bạn cũng từng dành cả hai ngày cuối tuần để nằm dài nhưng thứ hai đi làm vẫn thấy mệt, thì vấn đề không nằm ở số giờ nghỉ đâu.
          </p>
        </div>

        {/* Pull quote */}
        <blockquote className="pullquote">
          Cơ thể không hồi phục chỉ vì bạn đã ngừng làm việc. Nó chỉ thực sự hồi phục khi hệ thần kinh nhận được hai chữ:{' '}
          <span className="not-italic font-semibold text-sage">"An toàn"</span>.
        </blockquote>

        {/* Scientific explanation */}
        <span className="eyebrow mb-6 mt-16 block">
          Vì sao cơ thể không chịu buông
        </span>

        <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
          <p>
            Khi hệ thần kinh của bạn vẫn bật chế độ cảnh giác, cơ thể sẽ tiếp tục canh chừng, tiếp tục gồng lên để phòng thủ và tiêu hao năng lượng. Đó là lý do vì sao bạn nằm im nhưng các bó cơ ở cổ, vai, hàm hay bụng vẫn cứ thắt chặt lại. Nó đang chờ xem có nguy hiểm gì sắp tới không. Và chừng nào nó chưa nhận được tín hiệu "an toàn rồi", nó sẽ không cho bạn nghỉ thật.
          </p>

          <p className="font-semibold text-ink">
            Cái này không giải quyết được bằng cách ráng ngủ thêm hay đi nghỉ dưỡng. Phải nói chuyện với hệ thần kinh theo cách nó hiểu.
          </p>
        </div>

      </div>
    </section>
  )
}
