const contacts = [
  {
    icon: '📧',
    label: 'Email',
    value: 'an.vb231390@gmail.com',
    href: 'mailto:an.vb231390@gmail.com',
  },
  {
    icon: '📞',
    label: 'Hotline',
    value: '0975 107 181',
    href: 'tel:0975107181',
  },
  {
    icon: '💬',
    label: 'Zalo',
    value: '0975 107 181',
    href: 'https://zalo.me/0975107181',
  },
  {
    icon: '✈️',
    label: 'Telegram',
    value: '@binhanAI',
    href: 'https://t.me/binhanAI',
  },
  {
    icon: '👥',
    label: 'Group Facebook',
    value: 'Cộng đồng AI',
    href: 'https://www.facebook.com/share/g/1EN4TnaKwT/',
  },
]

export default function Contact({ onRegister }) {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* CTA block */}
        <div className="bg-primary rounded-2xl p-8 text-center mb-14 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-black mb-3">Sẵn sàng trở thành cỗ máy sản xuất video AI?</h2>
          <p className="text-blue-100 mb-6 text-base">Chỉ 3-4 buổi học — bắt đầu ngay hôm nay!</p>
          <button
            onClick={onRegister}
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black px-10 py-3 rounded-full transition-all transform hover:scale-105"
          >
            🚀 ĐĂNG KÝ NGAY — MIỄN PHÍ TƯ VẤN
          </button>
        </div>

        {/* Contact info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-gray-800 hover:bg-gray-700 rounded-xl p-4 transition-colors group"
            >
              <span className="text-2xl">{c.icon}</span>
              <div>
                <p className="text-gray-400 text-xs">{c.label}</p>
                <p className="text-white font-semibold group-hover:text-primary transition-colors">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2026 Video AI by Binh An — All rights reserved</p>
          <p className="mt-1">🎬 Biến AI thành công cụ kiếm tiền của bạn</p>
        </div>
      </div>
    </footer>
  )
}
