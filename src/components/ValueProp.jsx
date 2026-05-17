const features = [
  {
    icon: '👤',
    title: 'Cá nhân hóa tối đa',
    desc: 'Đào tạo theo hình thức 1 kèm 1, đảm bảo sát sao từng bước đi của bạn.',
  },
  {
    icon: '📅',
    title: 'Lịch học linh hoạt',
    desc: 'Học Online hoặc Offline tại Hà Nội. Lịch học do bạn quyết định phù hợp thời gian.',
  },
  {
    icon: '🎁',
    title: 'Công cụ miễn phí',
    desc: <>Cấp tài khoản <strong className="font-black">AI MIỄN PHÍ</strong> trong suốt quá trình đào tạo để bạn thỏa sức sáng tạo.</>,
  },
  {
    icon: '♾️',
    title: 'Hỗ trợ không giới hạn',
    desc: 'Đồng hành mọi lúc mọi nơi, gỡ rối kỹ thuật đến khi thành thạo — kể cả sau khoá học.',
  },
  {
    icon: '✅',
    title: 'Cam kết làm được việc',
    desc: 'Không lý thuyết suông, học đi đôi với hành để ra sản phẩm chuẩn công nghiệp.',
  },
  {
    icon: '🗺️',
    title: 'Lộ trình bài bản',
    desc: 'Nội dung chi tiết, dễ hiểu, không lo bị rối hay quên kiến thức.',
  },
]

export default function ValueProp({ onRegister }) {
  return (
    <section className="py-20 bg-sky-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Tại sao chọn chúng tôi</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            HỌC LÀM VIDEO AI — KHOẢN ĐẦU TƯ<br className="hidden md:block" />
            THÔNG MINH NHẤT NĂM 2026
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Năm 2026, biết dùng AI để làm hình ảnh/video không còn là lợi thế, mà là điều kiện bắt buộc.
            Tại đây, tôi không chỉ dạy bạn công cụ — tôi trao cho bạn cơ hội thực chiến.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex gap-4"
            >
              <div className="text-3xl shrink-0">{f.icon}</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-primary font-bold text-lg mb-1">✅ ĐẶC QUYỀN CHỈ CÓ TẠI LỘ TRÌNH ĐÀO TẠO CỦA MÌNH</p>
          <button
            onClick={onRegister}
            className="mt-4 bg-primary hover:bg-primary-dark text-white font-bold text-base px-10 py-3 rounded-full transition-colors shadow-md"
          >
            Đăng ký ngay →
          </button>
          <p className="mt-2 text-sm"><span className="text-2xl md:text-3xl font-extrabold text-primary mr-2">500+</span><span className="text-gray-500">người đã đăng ký</span></p>
        </div>
      </div>
    </section>
  )
}
