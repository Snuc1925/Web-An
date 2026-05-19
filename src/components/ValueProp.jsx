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
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
            ⚡ Chỉ sau 3-4 buổi, từ 1 người không biết gì về AI,<br className="hidden md:block" />
            bạn sẽ trở thành <span className="text-primary">nhà sản xuất video AI chuyên nghiệp</span>
          </h2>
          <div className="inline-block bg-primary/10 text-primary border border-primary/20 rounded-full px-6 py-2 mt-6 font-bold text-3xl md:text-2xl shadow-sm">
            ✅ Đặc quyền chỉ có tại lộ trình đào tạo của mình
          </div>
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
          <button
            onClick={onRegister}
            className="mt-4 bg-primary hover:bg-primary-dark text-white font-bold text-base px-10 py-3 rounded-full transition-colors shadow-md"
          >
            Đăng ký ngay →
          </button>
          <p className="mt-2 text-lg"><span className="text-2xl md:text-3xl font-extrabold text-primary mr-2">500+</span><span className="text-gray-500">người đã đăng ký</span></p>
        </div>
      </div>
    </section>
  )
}
