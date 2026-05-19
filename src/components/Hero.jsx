export default function Hero({ onRegister }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-blue-700 to-blue-900 overflow-hidden pt-28"
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 uppercase leading-tight">
          <span className="block mb-4">HỌC LÀM VIDEO AI</span>
          <span className="block text-yellow-300 leading-snug">KHOẢN ĐẦU TƯ THÔNG MINH NHẤT NĂM 2026</span>
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
            className="relative bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-gray-900 font-black text-xl px-12 py-5 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden group animate-cta-float animate-cta-glow select-none"
          >
            {/* Shimmer effect */}
            <span className="btn-shimmer-overlay" />

            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full animate-ping bg-yellow-400 opacity-20 group-hover:opacity-40 transition-opacity" />
            <span className="relative flex items-center justify-center gap-2 tracking-wider"> ĐĂNG KÝ NGAY</span>
          </button>
          <a
            href="#roadmap"
            className="text-white/80 hover:text-white font-medium underline underline-offset-4 transition-colors"
          >
            Xem lộ trình học →
          </a>
        </div>

        <p className="text-lg mb-10">
          <span className="text-2xl md:text-3xl font-extrabold text-yellow-300 mr-2">✅ 500+</span>
          <span className="text-blue-100">người đã đăng ký</span>
        </p>



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
