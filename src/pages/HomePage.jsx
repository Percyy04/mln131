import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import introBg from '../assets/intro.jpg'

const roadmap = [
  {
    num: '01',
    title: 'Lý thuyết cơ bản',
    desc: 'Quan điểm Chủ nghĩa Mác – Lênin và định hướng của Đảng, Nhà nước Việt Nam về tôn giáo.',
  },
  {
    num: '02',
    title: 'Truyện tranh',
    desc: 'Theo dõi "Niềm tin đúng đắn" – minh họa ranh giới trực quan giữa tín ngưỡng chân chính và mê tín.',
  },
  {
    num: '03',
    title: 'Quiz nhận thức',
    desc: '18 câu hỏi đánh giá thực tế cách nhìn nhận và ứng xử trước các vấn đề tâm linh.',
  },
]

export default function HomePage() {
  const scrollToRoadmap = () => {
    document.getElementById('roadmap-section').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-[#EBE5D9] text-[#111] font-sans selection:bg-[#D32F2F] selection:text-[#EBE5D9] overflow-hidden">
      {/* 1. Hero Section (Propaganda Constructivism Style) */}
      <section className="relative min-h-screen flex items-center bg-[#D32F2F] border-b-[12px] border-[#111] overflow-hidden">
        
        {/* Nền thiết kế đồ họa Constructivism (Các khối xéo) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-full md:w-[150%] h-[70%] bg-[#111] origin-top-right -rotate-[15deg] translate-x-[30%] -translate-y-[20%]"></div>
          <div className="absolute bottom-0 left-0 w-full h-[60%] bg-[#EBE5D9] origin-bottom-left rotate-[8deg] -translate-y-10 -translate-x-[10%]"></div>
          {/* Các sọc chéo dã chiến */}
          <div className="absolute top-0 left-0 w-8 h-full bg-[#111] transform -skew-x-[20deg] translate-x-[20vw] opacity-20"></div>
          <div className="absolute top-0 left-0 w-32 h-full bg-[#EBE5D9] transform -skew-x-[20deg] translate-x-[25vw] opacity-10"></div>
        </div>

        {/* Xử lý ảnh nền phong cách in lưới áp phích */}
        <div className="absolute right-0 bottom-0 w-full md:w-[65%] h-[80%] md:h-full z-10 mix-blend-multiply pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-center md:bg-right grayscale contrast-150 saturate-0 opacity-80" 
            style={{ backgroundImage: `url(${introBg})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-[#D32F2F]/60 mix-blend-overlay"></div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#111_2px,transparent_2px)] [background-size:8px_8px]"></div> {/* Halftone Dots */}
        </div>

        {/* Khối Nội Dung Chính */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-32 flex flex-col justify-center">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="max-w-[42rem] bg-[#EBE5D9] p-8 md:p-12 border-[8px] md:border-[12px] border-[#111] shadow-[16px_16px_0px_0px_#111] relative"
          >
            {/* Ngôi sao cổ động */}
            <div className="absolute -top-16 -right-10 text-[100px] text-[#D32F2F] drop-shadow-[6px_6px_0_#111] rotate-[15deg] select-none">
              ★
            </div>

            <div className="mb-6 inline-block bg-[#111] text-[#EBE5D9] px-4 py-2 font-black tracking-[0.2em] uppercase border-4 border-[#D32F2F]">
              MLN131 — FPT UNIVERSITY
            </div>

            <h1 className="text-5xl md:text-[5rem] lg:text-[6rem] font-black leading-[0.85] text-[#D32F2F] uppercase tracking-tighter mb-8 border-y-[8px] border-[#111] py-6 break-words">
              VẤN ĐỀ <br/>
              <span className="text-[#111]">DÂN TỘC</span> <br/>
              & TÔN GIÁO
            </h1>

            <div className="bg-[#111] text-[#EBE5D9] px-6 py-4 mb-8 inline-block drop-shadow-[8px_8px_0_#D32F2F]">
              <h2 className="text-xl md:text-3xl font-black uppercase tracking-tight leading-none">
                TRONG THỜI KỲ QUÁ ĐỘ <br/> LÊN CHỦ NGHĨA XÃ HỘI
              </h2>
            </div>

            <p className="text-xl md:text-2xl font-black text-[#111] uppercase tracking-wider border-l-[8px] border-[#D32F2F] pl-6 mb-12">
              THEO QUAN ĐIỂM <br/>CHỦ NGHĨA <span className="text-[#D32F2F] text-3xl md:text-4xl">MÁC – LÊNIN</span>
            </p>

            <button 
              onClick={scrollToRoadmap}
              className="group relative bg-[#D32F2F] text-[#EBE5D9] font-black text-2xl md:text-3xl uppercase px-10 py-5 w-full hover:bg-[#111] transition-colors border-[6px] border-[#111] shadow-[8px_8px_0px_0px_#111] hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-[4px_4px_0px_0px_#111] active:translate-y-[8px] active:translate-x-[8px] active:shadow-none"
            >
              Phân tích ngay
              <span className="absolute right-6 top-1/2 -translate-y-1/2 transform group-hover:translate-x-2 transition-transform">➡</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Roadmap Section (Vững bước lộ trình) */}
      <section id="roadmap-section" className="py-24 bg-[#111] relative overflow-hidden">
        {/* Nền sọc chéo mờ */}
        <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,#EBE5D9,#EBE5D9_10px,transparent_10px,transparent_20px)] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-[#D32F2F] text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 drop-shadow-[4px_4px_0_#EBE5D9]">
              LỘ TRÌNH TƯ TƯỞNG
            </h2>
            <div className="h-[8px] w-48 bg-[#EBE5D9] mx-auto mb-6"></div>
            <p className="text-[#EBE5D9] text-xl md:text-2xl uppercase tracking-[0.2em] font-black">
              3 BƯỚC ĐỂ NẮM VỮNG LÝ LUẬN
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {roadmap.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-[#EBE5D9] p-8 border-[6px] border-[#111] relative flex flex-col group shadow-[12px_12px_0_0_#D32F2F] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[20px_20px_0_0_#D32F2F] transition-all"
              >
                <div className="absolute -top-8 -left-6 bg-[#111] text-[#EBE5D9] text-4xl md:text-5xl font-black px-6 py-4 border-[6px] border-[#D32F2F] rotate-[-5deg] group-hover:rotate-0 transition-transform shadow-[6px_6px_0_0_#EBE5D9]">
                  {step.num}
                </div>
                <h3 className="text-3xl font-black text-[#111] uppercase tracking-tight mb-6 mt-10 group-hover:text-[#D32F2F] transition-colors leading-[0.9]">
                  {step.title}
                </h3>
                <p className="text-[#111] font-bold text-lg leading-relaxed border-l-[6px] border-[#111] pl-4">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-32 flex justify-center"
          >
             <Link
              to="/ly-thuyet"
              className="inline-block bg-[#EBE5D9] text-[#111] font-black text-3xl md:text-4xl uppercase px-16 py-8 border-[8px] border-[#D32F2F] shadow-[16px_16px_0_0_#D32F2F] hover:bg-[#D32F2F] hover:text-[#EBE5D9] hover:shadow-[16px_16px_0_0_#111] hover:-translate-y-2 hover:-translate-x-2 transition-all group"
             >
               TIẾN LÊN! <span className="inline-block transform group-hover:translate-x-4 transition-transform">★</span>
             </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
