import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import TheoryPage from './pages/TheoryPage'
import ComicPage from './pages/ComicPage'
import QuizPage from './pages/QuizPage'
import Chatbot from './components/Chatbot'
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen bg-[#EBE5D9]">
        <Navbar />
        <main className="flex-1 w-full md:pl-[90px] pt-[70px] md:pt-0 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ly-thuyet" element={<TheoryPage />} />
            <Route path="/truyen-tranh" element={<ComicPage />} />
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
          <Footer />
          <Chatbot />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
