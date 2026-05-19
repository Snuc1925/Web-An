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
          <p className="text-primary font-semibold uppercase tracking-widest text-lg mb-3">Chương trình học</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">Lộ trình học bài bản</h2>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((s) => (
              <div
                key={s.num}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-sm">
                      {s.num}
                    </span>
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{s.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed sm:pl-11">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
