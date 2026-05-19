const plans = [
  {
    name: 'Cơ Bản',
    price: '2.500.000₫',
    originalPrice: null,
    tag: null,
    color: 'border-gray-200',
    btnColor: 'bg-gray-800 hover:bg-gray-700',
    features: [
      'Nền tảng vững chắc để bắt đầu',
      <>Làm chủ công cụ cốt lõi: <strong className="font-black">Veo 3, CapCut Pro</strong></>,
      'Nắm vững quy trình sản xuất',
      'Tư duy: nhìn qua video là biết làm ngay',
      'Hỗ trợ trong thời gian học',
    ],
  },
  {
    name: 'Nâng Cao',
    price: '5.500.000₫',
    originalPrice: null,
    tag: 'Phổ biến',
    color: 'border-primary ring-2 ring-primary',
    btnColor: 'bg-primary hover:bg-primary-dark',
    features: [
      'Tất cả trong Khoá Cơ Bản',
      'Học gần như toàn bộ công cụ AI tối tân',
      'Đột phá tư duy & kỹ thuật chuyên sâu',
      'Thực hiện mọi dạng video đơn giản → phức tạp',
      'Hỗ trợ sau khóa học',
    ],
  },
  {
    name: '💎 Mentor Đặc Biệt',
    price: '6.900.000₫',
    originalPrice: '7.500.000₫',
    tag: 'CHỐT LÀ RA TIỀN',
    color: 'border-yellow-400 ring-2 ring-yellow-400',
    btnColor: 'bg-yellow-400 hover:bg-yellow-300 text-gray-900',
    features: [
      'Tất cả trong Khoá Nâng Cao',
      'Đồng hành trực tiếp trong quá trình làm việc',
      'Kiếm tiền ngay trong khoá học',
      'Định hướng "đào vàng" hiệu quả từ AI',
      'Hỗ trợ không giới hạn mọi lúc mọi nơi',
    ],
  },
]

export default function Pricing({ onRegister }) {
  return (
    <section id="pricing" className="py-20 bg-sky-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold uppercase tracking-widest text-lg mb-3">Bảng giá</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Chọn lộ trình phù hợp</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Đầu tư một lần, kỹ năng dùng cả đời để kiếm tiền.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`bg-white rounded-2xl border-2 ${p.color} shadow-sm hover:shadow-xl transition-shadow p-8 flex flex-col relative`}
            >
              {p.tag && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full shadow whitespace-nowrap">
                  {p.tag}
                </span>
              )}
              <h3 className="text-xl font-black text-gray-900 mb-2">{p.name}</h3>
              {p.originalPrice ? (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-red-500 font-bold line-through text-lg">{p.originalPrice}</span>
                    <span className="bg-red-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Tiết kiệm 600.000đ
                    </span>
                  </div>
                  <p className="text-4xl font-black text-primary">{p.price}</p>
                </div>
              ) : (
                <p className="text-3xl font-black text-primary mb-6">{p.price}</p>
              )}
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={onRegister}
                className={`w-full ${p.btnColor} text-white font-bold py-3 rounded-xl transition-colors`}
              >
                Đăng ký ngay
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
