import { Link } from 'react-router-dom'

// Placeholder video slots - owner can replace src with real YouTube/video links
const videos = [
  {
    id: 1,
    title: 'Video AI học viên #1',
    thumb: null,
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 2,
    title: 'Video AI học viên #2',
    thumb: null,
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 3,
    title: 'Video AI học viên #3',
    thumb: null,
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
]

function VideoCard({ video }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-black aspect-video">
      <iframe
        src={video.src}
        title={video.title}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default function StudentVideos() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-widest text-lg mb-3">Kết quả thực tế</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Video học viên làm sau khi tốt nghiệp
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Những sản phẩm video AI chất lượng cao được học viên tạo ra ngay sau khi kết thúc khoá học
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {videos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/videos"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-3 rounded-full transition-all"
          >
            Xem thêm video →
          </Link>
        </div>
      </div>
    </section>
  )
}
