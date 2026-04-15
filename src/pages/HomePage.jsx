import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const sections = [
  {
    to: '/ly-thuyet',
    icon: '📚',
    title: 'Lý thuyết',
    desc: 'Quan điểm Mác – Lênin & chính sách tôn giáo Việt Nam',
    color: 'from-blue-600 to-blue-800',
    btn: 'Xem lý thuyết',
  },
  {
    to: '/truyen-tranh',
    icon: '🎨',
    title: 'Truyện tranh',
    desc: '"Niềm Tin Đúng Đắn" – 6 khung minh họa tín ngưỡng vs mê tín',
    color: 'from-orange-500 to-orange-700',
    btn: 'Xem truyện tranh',
  },
  {
    to: '/quiz',
    icon: '❓',
    title: 'Quiz nhận thức',
    desc: '18 câu hỏi · 3 phần · Chấm điểm A=2 / B=1 / C=0',
    color: 'from-violet-600 to-violet-800',
    btn: 'Làm quiz ngay',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1E3A8A] relative overflow-hidden">
      {/* Bg blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#F97316]/10 blur-3xl" />
        <div className="absolute -bottom-60 -left-60 w-[800px] h-[800px] rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F97316]/20 border border-[#F97316]/30 rounded-full text-[#FB923C] text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
            MLN131 – FPT University · Nhóm 02
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-white text-center leading-tight mb-6"
        >
          Giải quyết Vấn đề{' '}
          <span className="text-[#F97316]">Tôn giáo</span>
          <br />
          theo Quan điểm Chủ nghĩa Mác – Lênin
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-blue-200 text-lg md:text-xl text-center max-w-2xl mx-auto mb-16"
        >
          và Đảng Cộng sản Việt Nam trong Thời kỳ Quá độ lên Chủ nghĩa Xã hội
        </motion.p>

        {/* Section cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid md:grid-cols-3 gap-6"
        >
          {sections.map((s) => (
            <motion.div
              key={s.to}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <Link
                to={s.to}
                id={`home-card-${s.to.replace('/', '')}`}
                className="group block rounded-3xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 hover:shadow-2xl"
              >
                <div className={`bg-gradient-to-br ${s.color} p-8 h-full`}>
                  <div className="text-5xl mb-5">{s.icon}</div>
                  <h2 className="text-xl font-black text-white mb-2">{s.title}</h2>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-white text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                    {s.btn} <span className="text-base">→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
