export default function ContactInfo() {
  const contacts = [
    {
      label: '▶ YouTube',
      link: 'https://youtube.com',
      icon: '📺',
    },
    {
      label: 'f Facebook',
      link: 'https://facebook.com',
      icon: '📘',
    },
    {
      label: '✉ Email',
      link: 'mailto:phuong@beyondyoga.com',
      icon: '📧',
    },
  ]

  return (
    <section id="contact" className="section-padding px-4 bg-white">
      <div className="container-tight mx-auto">
        <h2 className="font-title text-4xl text-center mb-4">Liên Hệ</h2>

        <div className="w-16 h-px bg-brand-overlay mx-auto mb-16 opacity-60"></div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg font-semibold text-neutral-900 hover:text-brand-overlay transition-colors"
            >
              <span className="text-3xl">{contact.icon}</span>
              <span>{contact.label}</span>
            </a>
          ))}
        </div>

        <p className="text-center text-neutral-600 mt-12">
          Phương sẵn sàng đồng hành cùng bạn trên hành trình phục hồi.
        </p>
      </div>
    </section>
  )
}
