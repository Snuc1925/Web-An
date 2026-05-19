import { useState } from 'react'

const courses = ['Khoá Cơ Bản', 'Khoá Nâng Cao', 'Khoá Mentor Đặc Biệt']

export default function RegisterModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', course: 'Khoá Cơ Bản' })
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const getCleanCourseName = (c) => {
    if (!c) return 'Cơ bản'
    if (c.includes('Cơ Bản')) return 'Cơ bản'
    if (c.includes('Nâng Cao')) return 'Nâng cao'
    if (c.includes('Mentor')) return 'Mentor Đặc Biệt'
    return 'Cơ bản'
  }

  const courseCleanName = getCleanCourseName(form.course)
  const sampleMessage = `Tôi muốn nhận tư vấn Khóa ${courseCleanName}`

  const handleCopyManual = () => {
    navigator.clipboard.writeText(sampleMessage)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  const handleContact = (platform) => {
    // Save lead details (even if optional, we log what they entered)
    console.log('Lead registered:', form)

    // Copy sample message automatically
    navigator.clipboard.writeText(sampleMessage)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)

    // Open chat window
    if (platform === 'zalo') {
      window.open('https://zalo.me/0975107181', '_blank')
    } else if (platform === 'messenger') {
      window.open(`https://m.me/an.vb231390?text=${encodeURIComponent(sampleMessage)}`, '_blank')
    }
  }

  const handleClose = () => {
    setForm({ name: '', phone: '', course: 'Khoá Cơ Bản' })
    setCopied(false)
    onClose()
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1"
          aria-label="Đóng"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-6">
          <h3 className="text-2xl font-black text-gray-900 mb-1">Đăng ký tư vấn miễn phí</h3>
          <p className="text-gray-500 text-sm">Điền thông tin và chọn kênh liên hệ để bắt đầu nhận lộ trình phù hợp</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Họ và tên <span className="text-gray-400 text-xs font-normal">(Không bắt buộc)</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nguyễn Văn A"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Số điện thoại <span className="text-gray-400 text-xs font-normal">(Không bắt buộc)</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="0912 345 678"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Khóa học bạn quan tâm
            </label>
            <select
              name="course"
              value={form.course}
              onChange={(e) => {
                handleChange(e)
                setCopied(false)
              }}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-white font-medium"
            >
              {courses.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Preview and Copy Message Box */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center justify-between gap-3 animate-fade-in">
            <div className="flex-1">
              <span className="block text-[10px] uppercase font-black text-gray-400 tracking-wider mb-0.5">
                Nội dung tin nhắn:
              </span>
              <p className="text-gray-700 text-sm font-bold">
                "{sampleMessage}"
              </p>
            </div>
            <button
              type="button"
              onClick={handleCopyManual}
              className="bg-white border border-gray-300 hover:border-gray-400 text-gray-700 p-2.5 rounded-lg shadow-sm active:scale-95 transition-all flex items-center justify-center shrink-0"
              title="Copy tin nhắn mẫu"
            >
              {copied ? (
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m-2 4h5m-2-2v5" />
                </svg>
              )}
            </button>
          </div>

          <div className="pt-2">
            <p className="block text-sm font-semibold text-gray-700 mb-3 text-center">
              Chọn kênh để nhắn tin trực tiếp:
            </p>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => handleContact('zalo')}
                className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-black py-4 px-6 rounded-xl transition-all shadow-md active:scale-95 text-base w-full"
              >
                <span className="text-2xl">💬</span>
                Nhắn tin qua Zalo
              </button>
              <button
                type="button"
                onClick={() => handleContact('messenger')}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-pink-500 hover:opacity-90 text-white font-black py-4 px-6 rounded-xl transition-all shadow-md active:scale-95 text-base w-full"
              >
                <span className="text-xl">⚡</span>
                Nhắn tin qua Messenger
              </button>
            </div>
          </div>

          {copied && (
            <div className="bg-green-50 border border-green-200 text-green-700 text-xs font-semibold py-2 px-3 rounded-lg text-center w-full">
              Đã copy tin nhắn, gửi cho mình qua Zalo hoặc Messenger nhé <span className="text-lg">😊</span>!
            </div>
          )}
        </div>

        <p className="text-center text-gray-400 text-xs mt-6">
          Tư vấn hoàn toàn miễn phí • Hoạt động 24/7
        </p>
      </div>
    </div>
  )
}
