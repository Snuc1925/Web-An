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
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 uppercase">
          CHỈ SAU 3-4 BUỔI HỌC!!!
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black leading-tight mb-8 text-yellow-300">
          TỪ ĂN LÔNG Ở LỖ ĐẾN<br className="hidden sm:block" />
          CỖ MÁY SẢN XUẤT VIDEO AI
        </h2>

        {/* Sub headline */}
        <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          Học làm video AI — Khoản đầu tư thông minh nhất năm 2026
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onRegister}
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black text-lg px-10 py-4 rounded-full shadow-xl transition-all transform hover:scale-105 active:scale-95"
          >
            🚀 ĐĂNG KÝ NGAY
          </button>
          <a
            href="#roadmap"
            className="text-white/80 hover:text-white font-medium underline underline-offset-4 transition-colors"
          >
            Xem lộ trình học →
          </a>
        </div>

        <p className="mt-4 text-sm"><span className="text-2xl md:text-3xl font-extrabold text-yellow-300 mr-2">✅ 500+</span><span className="text-blue-100">người đã đăng ký</span></p>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
