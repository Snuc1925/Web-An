import { Link } from 'react-router-dom'

// All videos for the "Xem thêm" page
const allVideos = [
  { id: 1, title: 'Video AI học viên #1', src: 'https://youtu.be/R8W8fLZps2s' },
  { id: 2, title: 'Video AI học viên #2', src: 'https://youtu.be/0OoVsdUm_mc' },
  { id: 3, title: 'Video AI học viên #3', src: 'https://youtu.be/IMfeeHTqH2Y' },
  { id: 4, title: 'Video AI học viên #4', src: 'https://youtu.be/wzvhS9ub0aM' },
  { id: 5, title: 'Video AI học viên #5', src: 'https://youtube.com/shorts/elMLazNnkYU?feature=share' },
  { id: 6, title: 'Video AI học viên #6', src: 'https://youtube.com/shorts/U7yF-Y9z0cc?feature=share' },
  { id: 7, title: 'Video AI học viên #7', src: 'https://youtube.com/shorts/xkP0dk5eWl0?feature=share' },
  { id: 8, title: 'Video AI học viên #8', src: 'https://youtube.com/shorts/iEnT7R2eseU?feature=share' },
  { id: 9, title: 'Video AI học viên #9', src: 'https://youtube.com/shorts/RLOyirBY9Rg?feature=share' },
  { id: 10, title: 'Video AI học viên #10', src: 'https://youtube.com/shorts/Z7wf5dqORA0?feature=share' },
  { id: 11, title: 'Video AI học viên #11', src: 'https://youtube.com/shorts/iO94f_L8jc4?feature=share' },
  { id: 12, title: 'Video AI học viên #12', src: 'https://youtube.com/shorts/VBMXv2nz33Y?feature=share' },
]

// Helper to convert standard YouTube links to embed links dynamically
function getEmbedUrl(url) {
  if (!url) return '';
  if (url.includes('youtube.com/embed/')) return url;
  
  // Support YouTube Shorts format: youtube.com/shorts/VIDEO_ID
  if (url.includes('/shorts/')) {
    const parts = url.split('/shorts/');
    if (parts[1]) {
      const videoId = parts[1].split('?')[0].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }

  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  
  return (match && match[2].length === 11)
    ? `https://www.youtube.com/embed/${match[2]}`
    : url;
}

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-sky-50">
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
          {allVideos.map((v) => {
            const embedUrl = getEmbedUrl(v.src);
            return (
              <div key={v.id} className="rounded-2xl overflow-hidden shadow-md bg-black aspect-video">
                <iframe
                  src={embedUrl}
                  title={v.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
