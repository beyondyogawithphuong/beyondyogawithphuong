export default function Services() {
  const services = [
    {
      title: 'REIKI',
      description: 'Năng lượng chữa lành từ cổ xưa',
      icon: '✨',
    },
    {
      title: 'YOGA',
      description: 'Kết nối cơ thể và tâm trí',
      icon: '🧘',
    },
    {
      title: 'SOUND BATH',
      description: 'Âm thanh thoa mát cho tâm hồn',
      icon: '🔊',
    },
  ]

  return (
    <section id="services" className="overlay-section section-padding">
      <div className="container-wide mx-auto">
        <h2 className="font-title text-4xl text-center mb-4">Dịch Vụ</h2>

        <div className="w-16 h-px bg-brand-highlight mx-auto mb-16 opacity-60"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="font-title text-2xl mb-3">{service.title}</h3>
              <p className="text-lg opacity-90">{service.description}</p>
              <p className="text-sm mt-6 opacity-75">Thông tin sẽ cập nhật sớm...</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
