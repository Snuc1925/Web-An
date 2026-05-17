import { Link } from 'react-router-dom'

// All videos for the "Xem thêm" page
const allVideos = [
  { id: 1, title: 'Video AI học viên #1', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 2, title: 'Video AI học viên #2', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 3, title: 'Video AI học viên #3', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 4, title: 'Video AI học viên #4', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 5, title: 'Video AI học viên #5', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 6, title: 'Video AI học viên #6', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
]

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary py-6 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-white font-black text-xl">← Quay lại</Link>
          <span className="text-white font-bold text-lg">🎬 Video học viên</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Video học viên làm sau khi tốt nghiệp
          </h1>
          <p className="text-gray-500">Kết quả thực tế từ các học viên của khóa học</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allVideos.map((v) => (
            <div key={v.id} className="rounded-2xl overflow-hidden shadow-md bg-black aspect-video">
              <iframe
                src={v.src}
                title={v.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
