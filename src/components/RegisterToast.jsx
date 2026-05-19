import { useState, useEffect, useRef } from 'react'

const NAMES = [
  // 3-word names (50 names)
  'Nguyễn Minh Tuấn', 'Trần Lan Anh', 'Phạm Quốc Hùng', 'Lê Thu Hà', 'Hoàng Bảo Châu',
  'Nguyễn Đức Mạnh', 'Vũ Hồng Nhung', 'Phan Văn Tùng', 'Đỗ Phương Linh', 'Trịnh Trọng Nghĩa',
  'Đặng Kiều Oanh', 'Bùi Thành Đạt', 'Dương Hoàng Nam', 'Lý Minh Thư', 'Tống Khánh Linh',
  'Phùng Tuấn Anh', 'Vương Thùy Chi', 'Ngô Quang Huy', 'Hồ Thanh Hằng', 'Đoàn Duy Khánh',
  'Mai Quốc Bảo', 'Lâm Thùy Dương', 'Nguyễn Gia Bảo', 'Trần Tiến Dũng', 'Lê Hải Đăng',
  'Phạm Quang Hải', 'Vũ Minh Hằng', 'Phan Quốc Khánh', 'Đặng Thảo Linh', 'Hoàng Nhật Minh',
  'Nguyễn Quỳnh Chi', 'Trần Hữu Đạt', 'Lê Hoài Nam', 'Phạm Ngọc Ánh', 'Vũ Hoàng Yến',
  'Phan Thế Vinh', 'Đặng Minh Khang', 'Hoàng Bảo Nam', 'Nguyễn Ngọc Diệp', 'Trần Tuấn Kiệt',
  'Lê Phương Thảo', 'Phạm Đăng Khoa', 'Vũ Khánh An', 'Phan Thanh Bình', 'Đặng Đức Duy',
  'Hoàng Minh Triết', 'Nguyễn Tấn Phát', 'Trần Gia Huy', 'Lê Hữu Phước', 'Phạm Trọng Tấn',

  // 2-word names (50 names)
  'Bình An', 'Minh An', 'Hoàng Nam', 'Quốc Hùng', 'Lan Anh',
  'Thu Hà', 'Bảo Châu', 'Đức Mạnh', 'Hồng Nhung', 'Văn Tùng',
  'Phương Linh', 'Trọng Nghĩa', 'Kiều Oanh', 'Thành Đạt', 'Khánh Linh',
  'Thùy Chi', 'Quang Huy', 'Thanh Hằng', 'Duy Khánh', 'Quốc Bảo',
  'Thùy Dương', 'Gia Bảo', 'Tiến Dũng', 'Hải Đăng', 'Quang Hải',
  'Minh Hằng', 'Quốc Khánh', 'Thảo Linh', 'Nhật Minh', 'Quỳnh Chi',
  'Hữu Đạt', 'Hoài Nam', 'Ngọc Ánh', 'Hoàng Yến', 'Thế Vinh',
  'Minh Khang', 'Bảo Nam', 'Ngọc Diệp', 'Tuấn Kiệt', 'Phương Thảo',
  'Đăng Khoa', 'Khánh An', 'Thanh Bình', 'Đức Duy', 'Minh Triết',
  'Tấn Phát', 'Gia Huy', 'Hữu Phước', 'Trọng Tấn', 'Nhật Anh'
]

const COURSES = [
  'Khoá Mentor Đặc Biệt',
  'Khoá Nâng Cao',
  'Khoá Cơ Bản'
]

const TIMES = [
  'vừa xong'
]

export default function RegisterToast() {
  const [toast, setToast] = useState(null)
  const [visible, setVisible] = useState(false)
  const timerRef = useRef(null)
  const hideTimerRef = useRef(null)

  const showNext = () => {
    // Generate random notification details to make it feel organic and endless
    const randomName = NAMES[Math.floor(Math.random() * NAMES.length)]
    const randomCourse = COURSES[Math.floor(Math.random() * COURSES.length)]
    const randomTime = TIMES[Math.floor(Math.random() * TIMES.length)]

    setToast({ name: randomName, course: randomCourse, time: randomTime })
    setVisible(true)

    // Hide after 10s
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
    hideTimerRef.current = setTimeout(() => {
      setVisible(false)
    }, 10000)
  }

  useEffect(() => {
    // Show first toast after 5 seconds
    const initial = setTimeout(() => {
      showNext()
    }, 5000)

    return () => {
      clearTimeout(initial)
      if (timerRef.current) clearTimeout(timerRef.current)
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
    }
  }, [])

  useEffect(() => {
    if (!visible && toast) {
      // Schedule next after random 20-30s
      const delay = Math.random() * 10000 + 20000
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        showNext()
      }, delay)
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [visible])

  if (!toast) return null

  return (
    <div
      className={`
        fixed bottom-6 left-6 right-6 sm:right-auto z-[90]
        mx-auto sm:mx-0 max-w-[420px] w-auto
        transition-all duration-700 ease-out transform
        ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'}
      `}
    >
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.18)] border border-white/30 p-5 flex items-center gap-4">
        {/* Animated Avatar */}
        <div className="shrink-0 w-14 h-14 rounded-full bg-gradient-to-tr from-primary via-blue-500 to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-md">
          {toast.name.charAt(0)}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-gray-900 text-base sm:text-lg font-bold leading-snug">
            <span className="text-primary font-black">{toast.name}</span> đã đăng ký
          </p>
          <p className="text-gray-500 text-sm mt-1 font-medium truncate">
            {toast.course} <span className="mx-1.5">•</span> <span className="text-primary-light font-bold">{toast.time}</span>
          </p>
        </div>

        {/* Pulse Green Dot Status indicator */}
        <div className="shrink-0 relative flex h-4 w-4 ml-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
        </div>
      </div>
    </div>
  )
}
