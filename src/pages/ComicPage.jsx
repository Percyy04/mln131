import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { comicFrames } from '../data/comicData'
import { IconHome, IconChevronRight } from '../components/theory/TheoryIcons'

export default function ComicPage() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => Math.max(0, a - 1))
  const next = () => setActive((a) => Math.min(comicFrames.length - 1, a + 1))

  const frame = comicFrames[active]
  const isFirst = active === 0
  const isLast = active === comicFrames.length - 1

  return (
    <div className="min-h-screen bg-[#EBE5D9] text-[#111] selection:bg-[#D32F2F] selection:text-[#EBE5D9] overflow-hidden">
      
      {/* HEADER */}
      <section className="relative border-b-[12px] border-[#111] bg-[#111] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <div className="absolute inset-0 bg-[radial-gradient(#EBE5D9_2px,transparent_2px)] [background-size:16px_16px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#EBE5D9] mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 border-[4px] border-[#EBE5D9] bg-[#111] px-4 py-2 hover:bg-[#D32F2F] transition-colors shadow-[4px_4px_0_0_#D32F2F]"
            >
              <IconHome className="w-4 h-4" />
              Trang Chủ
            </Link>
            <span className="text-[#EBE5D9]/60">/</span>
            <span className="flex items-center gap-2 opacity-80">
              Khởi Họa
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <div className="mb-4 inline-flex items-center gap-2 bg-[#D32F2F] text-[#EBE5D9] px-4 py-2 font-black tracking-[0.2em] uppercase text-xs md:text-sm border-[4px] border-[#EBE5D9] shadow-[6px_6px_0_0_#EBE5D9]">
              GÓC NHÌN THỰC TIỄN
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#EBE5D9] uppercase tracking-tighter mb-4 drop-shadow-[4px_4px_0_#D32F2F]">
              NIỀM TIN ĐÚNG ĐẮN
            </h1>
            <p className="text-[#D32F2F] text-lg md:text-xl font-bold uppercase tracking-wider">
              Câu chuyện về tín ngưỡng và mê tín
            </p>
          </motion.div>
        </div>
      </section>

      {/* VIEWER CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Progress bar */}
          <div className="w-full bg-[#111] border-[4px] border-[#111] h-6 mb-2 relative overflow-hidden shadow-[6px_6px_0_0_#111]">
            <motion.div
              className="bg-[#D32F2F] h-full"
              animate={{ width: `${((active + 1) / comicFrames.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-sm font-black uppercase tracking-widest text-[#111] text-right mb-10">
            Khung số <span className="text-[#D32F2F] text-xl ml-2">{active + 1} / {comicFrames.length}</span>
          </p>

          {/* Comic viewer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="border-[12px] border-[#111] bg-[#EBE5D9] shadow-[16px_16px_0_0_#D32F2F] mb-16 relative overflow-hidden group"
          >
            {/* Frame area */}
            <div className="relative min-h-[400px] flex flex-col items-center justify-center p-8 md:p-16 bg-[#ded8cc]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
                  className="text-center w-full"
                >
                  <div className="text-[120px] mb-8 leading-none drop-shadow-[8px_8px_0_rgba(17,17,17,0.15)] filter grayscale contrast-125 sepia-[.3]">
                    {frame.emoji}
                  </div>
                  <div className="inline-block bg-[#111] border-[8px] border-[#D32F2F] text-[#EBE5D9] px-8 py-8 md:px-12 max-w-2xl shadow-[12px_12px_0_0_#111] transform -rotate-1 group-hover:rotate-0 transition-transform">
                    <p className="text-xs font-black text-[#D32F2F] mb-4 uppercase tracking-[0.3em] inline-block border-b-[4px] border-[#D32F2F] pb-1">
                      HIỆN THỰC
                    </p>
                    <p className="text-2xl md:text-3xl font-black uppercase leading-snug tracking-tighter">
                      {frame.content}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="px-6 py-6 flex items-center justify-between border-t-[8px] border-[#111] bg-[#111] text-[#EBE5D9]">
              <button
                onClick={prev}
                disabled={isFirst}
                className="px-6 py-3 border-[4px] border-[#EBE5D9] bg-[#111] text-sm font-black uppercase tracking-wider hover:bg-[#EBE5D9] hover:text-[#111] disabled:opacity-30 disabled:border-transparent disabled:hover:bg-transparent disabled:hover:text-[#EBE5D9] transition-colors"
              >
                Lùi Hóa
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {comicFrames.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`transition-all duration-300 border-2 border-[#EBE5D9] ${
                      i === active
                        ? 'w-8 h-4 bg-[#D32F2F] border-none'
                        : 'w-4 h-4 bg-transparent hover:bg-[#EBE5D9]'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                disabled={isLast}
                className="px-6 py-3 border-[4px] border-[#EBE5D9] bg-[#D32F2F] text-sm font-black uppercase tracking-wider hover:border-[#D32F2F] hover:bg-[#EBE5D9] hover:text-[#111] disabled:opacity-30 disabled:hover:bg-[#D32F2F] disabled:hover:text-[#EBE5D9] disabled:hover:border-[#EBE5D9] transition-colors"
              >
                Tới Hiện
              </button>
            </div>
          </motion.div>

          {/* Message pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: '★', text: 'Tôn trọng tín ngưỡng chân chính' },
              { icon: '✖', text: 'Bài trừ mê tín dị đoan' },
              { icon: '♠', text: 'Thành công từ nỗ lực tự thân' }
            ].map((msg, i) => (
              <div key={i} className="bg-[#111] border-[6px] border-[#D32F2F] p-8 shadow-[8px_8px_0_0_#111] text-center text-[#EBE5D9] hover:-translate-y-2 transition-transform">
                <span className="text-5xl text-[#D32F2F] block mb-4 filter drop-shadow-[2px_2px_0_#EBE5D9]">{msg.icon}</span>
                <p className="font-black uppercase tracking-widest text-sm leading-relaxed">{msg.text}</p>
              </div>
            ))}
          </div>

          {/* Next CTA */}
          <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 border-[8px] border-[#111] bg-[#111] px-10 py-8 shadow-[12px_12px_0_0_#D32F2F]"
         >
           <p className="text-xl font-black uppercase text-[#EBE5D9] text-center sm:text-left flex items-center gap-3">
             ĐÃ NẮM RÕ THÔNG ĐIỆP?
           </p>
           <Link
             to="/quiz"
             className="inline-flex items-center gap-3 border-[6px] border-[#111] bg-[#EBE5D9] px-8 py-4 text-xl font-black uppercase text-[#111] shadow-[8px_8px_0_0_#D32F2F] hover:bg-[#D32F2F] hover:text-[#EBE5D9] hover:border-[#EBE5D9] transition-colors"
           >
             Kiểm Tra Nhận Thức
             <IconChevronRight className="w-6 h-6" />
           </Link>
         </motion.div>
        </div>
      </section>
    </div>
  )
}
