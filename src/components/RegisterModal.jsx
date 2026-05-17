import { useState } from 'react'

const courses = ['Khoá Cơ Bản (2.5tr)', 'Khoá Nâng Cao (5.5tr)', 'Khoá Mentor Đặc Biệt (6.9tr)']

export default function RegisterModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', course: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.course) return
    setLoading(true)
    // Simulate submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  const handleClose = () => {
    setForm({ name: '', phone: '', course: '' })
    setSubmitted(false)
    onClose()
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

        {submitted ? (
          <div className="text-center py-6">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-xl font-black text-gray-900 mb-2">Đăng ký thành công!</h3>
            <p className="text-gray-600 mb-6">
              Cảm ơn <span className="font-semibold text-primary">{form.name}</span>! Mình sẽ liên hệ lại qua số{' '}
              <span className="font-semibold">{form.phone}</span> trong thời gian sớm nhất nhé 🚀
            </p>
            <button
              onClick={handleClose}
              className="bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary-dark transition-colors"
            >
              Tuyệt vời!
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h3 className="text-2xl font-black text-gray-900 mb-1">Đăng ký tư vấn miễn phí</h3>
              <p className="text-gray-500 text-sm">Điền thông tin để nhận tư vấn lộ trình phù hợp nhất</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nguyễn Văn A"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="0912 345 678"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Chọn khóa học <span className="text-red-500">*</span>
                </label>
                <select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-white"
                >
                  <option value="">-- Chọn khóa học --</option>
                  {courses.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary-dark text-white font-black text-base py-4 rounded-xl transition-colors disabled:opacity-70 shadow-md mt-2"
              >
                {loading ? 'Đang gửi...' : '🚀 ĐĂNG KÝ NGAY'}
              </button>
            </form>

            <p className="text-center text-gray-400 text-xs mt-4">
              Tư vấn hoàn toàn miễn phí • Không spam
            </p>
          </>
        )}
      </div>
    </div>
  )
}
