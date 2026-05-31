export default function About() {
  return (
    <section className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-12 text-center">
          Về Phương
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Avatar Frame - Replace with Phương's photo */}
          <div className="md:col-span-1">
            <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center overflow-hidden border-4 border-brand-gold">
              {/* PHOTO PLACEHOLDER - Square 400x400px */}
              <img src="/phuong.jpg" alt="Phương" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hơn 8 năm trước, mình cũng từng rời văn phòng với một cơ thể rệu rã để tìm đến Rishikesh, Ấn Độ.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Nhưng yoga không thật sự dạy mình qua những tư thế đẹp hay khả năng kéo giãn. Nó dạy mình ngay thời điểm mình chạm ngưỡng kiệt sức.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Khi đó mình nhận ra, <span className="font-bold">ý chí không thể nào ép một hệ thần kinh đã quá tải quá lâu phải bình yên ngay lập tức.</span>
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              <strong>Beyond Yoga with Phương</strong> là nơi mình đồng hành cùng bạn để cơ thể học lại cách phục hồi. Không phải bằng cách ép mình phải thư giãn, mà bằng cách thay đổi quy luật vận hành của hệ thần kinh.
            </p>

            <div className="bg-brand-cream p-6 rounded-lg border-l-4 border-brand-gold">
              <p className="text-brand-dark font-semibold">
                "Mình hiểu vì mình đã trải qua. Mình là chứng nhân của cách hệ thần kinh có thể thay đổi khi được đối xử đúng cách."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
