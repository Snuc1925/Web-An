import { useState } from 'react'

export default function Navbar({ onRegister }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Trang chủ', href: '#home' },
    { label: 'Lộ trình', href: '#roadmap' },
    { label: 'Khóa học', href: '#pricing' },
    { label: 'Giảng viên', href: '#instructor' },
    { label: 'Liên hệ', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-xl font-black text-primary">🎬 Video AI</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} className="text-gray-600 hover:text-primary font-medium transition-colors text-sm">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={onRegister}
          className="hidden md:block bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2 rounded-full transition-colors text-sm"
        >
          Đăng ký ngay
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-3">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="block text-gray-700 hover:text-primary font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); onRegister() }}
            className="w-full bg-primary text-white font-semibold py-2 rounded-full mt-2"
          >
            Đăng ký ngay
          </button>
        </div>
      )}
    </nav>
  )
}
