import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import TheoryPage from './pages/TheoryPage'
import ComicPage from './pages/ComicPage'
import QuizPage from './pages/QuizPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ly-thuyet" element={<TheoryPage />} />
        <Route path="/truyen-tranh" element={<ComicPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
