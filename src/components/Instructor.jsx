const stats = [
  { value: '500+', label: 'Học viên đã đào tạo' },
  { value: '200+', label: 'Người có thu nhập mới' },
  { value: '100K+', label: 'Thành viên cộng đồng AI' },
]

export default function Instructor() {
  return (
    <section id="instructor" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold uppercase tracking-widest text-lg mb-3">Giảng viên</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">Người đồng hành của bạn</h2>
        </div>

        <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
          {/* Avatar / Photo - Rectangular */}
          <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border-4 border-primary">
            <img
              src="/Web-An/anhgroupan.jpg"
              alt="Giảng viên Binh An"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="w-full">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-black text-gray-900 mb-1">Bình An</h3>
              <p className="text-primary font-semibold text-lg">AI Video Creator & Trainer</p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                '🎓 Đại học Bách Khoa Hà Nội',
                '🏆 Kinh nghiệm đào tạo hơn 500 học viên — chủ doanh nghiệp, chủ hộ kinh doanh, giáo viên, chủ shop',
                '💰 Tạo ra nguồn thu nhập mới cho hơn 200 người',
                '🌐 Admin cộng đồng AI hơn 100.000 thành viên',
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 text-gray-700 bg-sky-50/50 p-4 rounded-xl border border-sky-100">
                  <span className="text-2xl shrink-0">{item.slice(0, 2)}</span>
                  <span className="font-medium text-sm sm:text-base leading-relaxed">{item.slice(2).trim()}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center bg-sky-50 rounded-xl p-4 border border-sky-100/50">
                  <p className="text-2xl sm:text-3xl font-black text-primary">{s.value}</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-1 font-semibold uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
