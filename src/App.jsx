import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueProp from './components/ValueProp'
import StudentVideos from './components/StudentVideos'
import Roadmap from './components/Roadmap'
import Pricing from './components/Pricing'
import Instructor from './components/Instructor'
import Contact from './components/Contact'
import RegisterModal from './components/RegisterModal'
import RegisterToast from './components/RegisterToast'
import VideosPage from './pages/VideosPage'
import './index.css'

function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Navbar onRegister={() => setModalOpen(true)} />
      <Hero onRegister={() => setModalOpen(true)} />
      <ValueProp onRegister={() => setModalOpen(true)} />
      <StudentVideos />
      <Roadmap />
      <Pricing onRegister={() => setModalOpen(true)} />
      <Instructor />
      <Contact onRegister={() => setModalOpen(true)} />
      <RegisterModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <RegisterToast />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos" element={<VideosPage />} />
      </Routes>
    </BrowserRouter>
  )
}

