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
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Giảng viên</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">Người đồng hành của bạn</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Avatar placeholder */}
          <div className="shrink-0">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center shadow-xl">
              <span className="text-7xl">👨‍💻</span>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-black text-gray-900 mb-1">Binh An</h3>
            <p className="text-primary font-semibold mb-4">AI Video Creator & Trainer</p>

            <ul className="space-y-3 mb-8">
              {[
                '🎓 Sinh viên Đại học Bách Khoa Hà Nội',
                '🏆 Kinh nghiệm đào tạo hơn 500 học viên — chủ doanh nghiệp, chủ hộ kinh doanh, giáo viên, chủ shop',
                '💰 Tạo ra nguồn thu nhập mới cho hơn 200 người',
                '🌐 Admin cộng đồng AI hơn 100.000 thành viên',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="text-xl shrink-0">{item.slice(0, 2)}</span>
                  <span>{item.slice(2).trim()}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center bg-gray-50 rounded-xl p-4">
                  <p className="text-2xl font-black text-primary">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
