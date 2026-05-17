const steps = [
  {
    num: '01',
    title: 'Giới thiệu & hướng dẫn sử dụng công cụ',
    desc: 'Làm quen với các công cụ sản xuất video và hình ảnh bằng AI hàng đầu hiện nay.',
  },
  {
    num: '02',
    title: 'Phương pháp & cấu trúc tạo câu lệnh',
    desc: 'Học cách viết Prompt hiệu quả để tạo ra video và hình ảnh AI đúng ý muốn.',
  },
  {
    num: '03',
    title: 'Quy trình sản xuất & tư duy sáng tạo',
    desc: 'Nắm vững quy trình từ ý tưởng đến sản phẩm hoàn chỉnh, xây dựng tư duy sản xuất chuyên nghiệp.',
  },
  {
    num: '04',
    title: 'Các dạng video AI thịnh hành',
    desc: 'Thực hành làm các dạng video AI đang hot nhất trên thị trường — đảm bảo có thể làm ngay.',
  },
  {
    num: '05',
    title: 'Thư viện câu lệnh (Prompt) mẫu',
    desc: 'Nhận kho Prompt mẫu phong phú, giúp bạn tăng tốc sản xuất và liên tục ra sản phẩm mới.',
  },
  {
    num: '06',
    title: 'Thực hành & job thực tế',
    desc: 'Làm video/hình ảnh thực tế và được định hướng cách kiếm tiền từ kỹ năng vừa học.',
  },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Chương trình học</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">Lộ trình học bài bản</h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-[42px] top-0 bottom-0 w-0.5 bg-primary/20" />

          <div className="space-y-8">
            {steps.map((s, i) => (
              <div key={s.num} className="flex gap-6 items-start group">
                <div className="shrink-0 w-[84px] flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-black text-lg shadow-md group-hover:scale-110 transition-transform z-10">
                    {s.num}
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
