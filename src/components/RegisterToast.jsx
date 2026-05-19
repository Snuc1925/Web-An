import { useState, useEffect, useRef } from 'react'

const NOTIFICATIONS = [
  { name: 'Minh Tuấn', course: 'Khoá Mentor Đặc Biệt', time: '2 phút trước' },
  { name: 'Lan Anh', course: 'Khoá Nâng Cao', time: '5 phút trước' },
  { name: 'Quốc Hùng', course: 'Khoá Cơ Bản', time: '8 phút trước' },
  { name: 'Thu Hà', course: 'Khoá Mentor Đặc Biệt', time: 'vừa xong' },
  { name: 'Bảo Châu', course: 'Khoá Nâng Cao', time: '12 phút trước' },
  { name: 'Đức Mạnh', course: 'Khoá Cơ Bản', time: '1 phút trước' },
  { name: 'Hồng Nhung', course: 'Khoá Mentor Đặc Biệt', time: '3 phút trước' },
  { name: 'Văn Tùng', course: 'Khoá Nâng Cao', time: '30 giây trước' },
  { name: 'Phương Linh', course: 'Khoá Cơ Bản', time: '7 phút trước' },
  { name: 'Trọng Nghĩa', course: 'Khoá Mentor Đặc Biệt', time: '15 giây trước' },
  { name: 'Kiều Oanh', course: 'Khoá Nâng Cao', time: '4 phút trước' },
  { name: 'Thành Đạt', course: 'Khoá Cơ Bản', time: '6 phút trước' },
]

export default function RegisterToast() {
  const [toast, setToast] = useState(null)
  const [visible, setVisible] = useState(false)
  const timerRef = useRef(null)
  const hideTimerRef = useRef(null)
  const indexRef = useRef(0)

  const showNext = () => {
    const item = NOTIFICATIONS[indexRef.current % NOTIFICATIONS.length]
    indexRef.current += 1
    setToast(item)
    setVisible(true)

    // Hide after 8s
    hideTimerRef.current = setTimeout(() => {
      setVisible(false)
    }, 8000)
  }

  useEffect(() => {
    // First show after 4s
    const initial = setTimeout(() => {
      showNext()
    }, 4000)

    return () => clearTimeout(initial)
  }, [])

  useEffect(() => {
    if (!visible && toast) {
      // Schedule next after random 20-40s from when it fades out
      const delay = Math.random() * 20000 + 20000 // 20-40s
      timerRef.current = setTimeout(() => {
        showNext()
      }, delay)
    }
    return () => {
      clearTimeout(timerRef.current)
    }
  }, [visible])

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current)
      clearTimeout(hideTimerRef.current)
    }
  }, [])

  if (!toast) return null

  return (
    <div
      className={`
        fixed bottom-4 left-4 z-[90] max-w-[calc(100vw-2rem)] sm:max-w-xs
        transition-all duration-500 ease-in-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
    >
      <div className="flex items-center gap-3 bg-white rounded-2xl shadow-2xl border border-gray-100 px-4 py-3">
        {/* Avatar circle */}
        <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-white font-bold text-sm">
          {toast.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="text-gray-900 text-sm font-semibold leading-snug truncate">
            <span className="text-primary">{toast.name}</span> đã đăng ký
          </p>
          <p className="text-gray-500 text-xs truncate">
            {toast.course} • {toast.time}
          </p>
        </div>
        {/* Green dot */}
        <div className="shrink-0 w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse ml-1" />
      </div>
    </div>
  )
}
