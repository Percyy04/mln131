import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { comicFrames } from '../data/comicData'

export default function ComicPage() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => Math.max(0, a - 1))
  const next = () => setActive((a) => Math.min(comicFrames.length - 1, a + 1))

  const frame = comicFrames[active]
  const isFirst = active === 0
  const isLast = active === comicFrames.length - 1

  return (
    <div className="min-h-screen bg-[#F3F4F6] pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-10">
          <Link to="/" className="hover:text-[#1E3A8A] transition-colors">Trang chủ</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Truyện tranh</span>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-block px-3 py-1 bg-[#F97316]/10 text-[#F97316] text-sm font-semibold rounded-full mb-4">
            Truyện Tranh Minh Họa
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
            "Niềm Tin Đúng Đắn"
          </h1>
          <p className="text-gray-500 text-lg">Câu chuyện về tín ngưỡng và mê tín qua 6 khung tranh</p>
        </motion.div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-6">
          <motion.div
            className="bg-[#F97316] h-1.5 rounded-full"
            animate={{ width: `${((active + 1) / comicFrames.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="text-xs text-gray-400 text-right mb-6">
          Khung {active + 1} / {comicFrames.length}
        </p>

        {/* Comic viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden mb-6"
        >
          {/* Frame area */}
          <div className="relative bg-gradient-to-br from-blue-50 to-orange-50 min-h-72 flex flex-col items-center justify-center p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className="text-center w-full"
              >
                <div className="text-8xl mb-7">{frame.emoji}</div>
                <div className="inline-block bg-white rounded-2xl shadow-md px-7 py-5 max-w-md">
                  <p className="text-xs font-bold text-[#1E3A8A] mb-2 uppercase tracking-wider">
                    Khung {frame.id}
                  </p>
                  <p className="text-gray-800 text-base leading-relaxed">{frame.content}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="px-8 py-5 flex items-center justify-between border-t border-gray-100">
            <button
              id="comic-prev"
              onClick={prev}
              disabled={isFirst}
              className="px-5 py-2 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              ← Trước
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {comicFrames.map((_, i) => (
                <button
                  key={i}
                  id={`comic-dot-${i}`}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-200 ${
                    i === active
                      ? 'w-6 h-2.5 bg-[#1E3A8A]'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              id="comic-next"
              onClick={next}
              disabled={isLast}
              className="px-5 py-2 rounded-xl text-sm font-semibold bg-[#1E3A8A] text-white hover:bg-[#163175] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Tiếp →
            </button>
          </div>
        </motion.div>

        {/* Message pillars */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {['Tôn trọng tín ngưỡng chân chính', 'Bài trừ mê tín dị đoan', 'Thành công từ tri thức & nỗ lực'].map(
            (msg, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <span className="text-3xl">{['🙏', '🚫', '💡'][i]}</span>
                <p className="mt-2 text-xs font-medium text-gray-700">{msg}</p>
              </div>
            )
          )}
        </div>

        {/* Next CTA */}
        <div className="flex justify-end">
          <Link
            to="/quiz"
            id="comic-next-quiz"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white font-semibold rounded-xl hover:bg-[#ea6c0c] transition-colors"
          >
            Tiếp: Quiz nhận thức →
          </Link>
        </div>
      </div>
    </div>
  )
}
