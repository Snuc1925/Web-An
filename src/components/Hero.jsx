export default function Hero({ onRegister }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-blue-700 to-blue-900 overflow-hidden pt-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white py-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur border border-white/30 rounded-full px-4 py-1.5 mb-6 text-sm font-medium">
          🔥 Mô hình đào tạo 1 kèm 1 độc quyền
        </div>

        {/* Main headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 uppercase">
          HỌC LÀM VIDEO AI —<br className="hidden sm:block" />
          <span className="text-yellow-300">KHOẢN ĐẦU TƯ THÔNG MINH NHẤT NĂM 2026</span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
          Năm 2026, biết dùng AI để làm hình ảnh/video không còn là lợi thế, mà là điều kiện bắt buộc.
          Tại đây, tôi không chỉ dạy bạn công cụ đơn thuần — tôi trao cho bạn hướng tư duy, quy trình sản xuất,
          cơ hội thực chiến và kỹ năng thực thụ để kiếm tiền, gia tăng thu nhập.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            onClick={onRegister}
            className="relative bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black text-lg px-10 py-4 rounded-full shadow-xl transition-all transform hover:scale-105 active:scale-95 overflow-hidden group"
          >
            {/* Shimmer effect */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full animate-ping bg-yellow-400 opacity-30" />
            <span className="relative">🚀 ĐĂNG KÝ NGAY</span>
          </button>
          <a
            href="#roadmap"
            className="text-white/80 hover:text-white font-medium underline underline-offset-4 transition-colors"
          >
            Xem lộ trình học →
          </a>
        </div>

        <p className="text-sm mb-10">
          <span className="text-2xl md:text-3xl font-extrabold text-yellow-300 mr-2">✅ 500+</span>
          <span className="text-blue-100">người đã đăng ký</span>
        </p>

        {/* Secondary callout */}
        <div className="inline-block bg-white/15 backdrop-blur border border-white/25 rounded-2xl px-6 py-4 text-center max-w-xl mx-auto">
          <p className="text-white font-bold text-base sm:text-lg leading-snug">
            ⚡ Chỉ sau 3-4 buổi, từ 1 người không biết gì về AI,<br className="hidden sm:block" />
            bạn sẽ trở thành <span className="text-yellow-300 font-black">nhà sản xuất video AI chuyên nghiệp</span>
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
