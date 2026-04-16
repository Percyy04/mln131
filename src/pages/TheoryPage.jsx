import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import tonGiaoImg from '../assets/ton_giao_la_gi_01.jpg'
import macLeninImg from '../assets/mac-lenin.jpg'
import khoHanImg from '../assets/kho han.jpg'
import nhanThucImg from '../assets/nhan thuc.jpg'
import tamLyImg from '../assets/tam ly.jpg'
import {
  IconBook,
  IconBrain,
  IconChevronRight,
  IconHome,
  IconMegaphone,
  IconMountain,
  IconScale,
  IconScroll,
  IconStar,
  IconUnity
} from '../components/theory/TheoryIcons'

const fadeUpScale = {
  initial: { opacity: 0, y: 60, scale: 0.97 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, type: "spring", stiffness: 80, damping: 20 }
}

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  },
  viewport: { once: true, amount: 0.2 }
}

const itemFadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { type: "spring", stiffness: 100, damping: 20 }
}

export default function TheoryPage() {
  return (
    <div className="font-sans bg-[#EBE5D9] text-[#111] selection:bg-[#D32F2F] selection:text-[#EBE5D9] overflow-hidden min-h-screen">
      {/* HEADER / HERO NHỎ */}
      <section className="relative border-b-[12px] border-[#111] bg-[#D32F2F] overflow-hidden">
        {/* Nền Propaganda sọc ngang chéo */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-[repeating-linear-gradient(45deg,#111,#111_10px,transparent_10px,transparent_20px)] transform translate-x-1/2 -translate-y-1/4" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16">
          <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#EBE5D9] mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 border-[4px] border-[#EBE5D9] bg-[#111] px-4 py-2 hover:bg-[#D32F2F] transition-colors shadow-[4px_4px_0_0_#111]"
            >
              <IconHome className="w-4 h-4" />
              Trang Chủ
            </Link>
            <span className="text-[#EBE5D9]/60">/</span>
            <span className="flex items-center gap-2 opacity-80">
              Cơ sở lý luận
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="max-w-3xl border-[8px] md:border-[12px] border-[#111] bg-[#EBE5D9] p-8 md:p-12 shadow-[16px_16px_0_0_#111] relative"
          >
            <div className="absolute -top-12 -right-12 text-[80px] md:text-[100px] text-[#D32F2F] drop-shadow-[4px_4px_0_#111] rotate-[15deg] select-none pointer-events-none">
              ★
            </div>

            <div className="mb-4 inline-flex items-center gap-2 bg-[#111] text-[#EBE5D9] px-4 py-2 font-black tracking-[0.2em] uppercase text-xs md:text-sm border-[4px] border-[#D32F2F]">
              <IconScroll className="w-4 h-4" />
              HIỂU RÕ BẢN CHẤT
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-[#D32F2F] uppercase tracking-tighter leading-[0.9] mb-6">
              LÝ THUYẾT & <br/> <span className="text-[#111]">QUAN ĐIỂM</span>
            </h1>

            <div className="bg-[#111] text-[#EBE5D9] px-6 py-3 border-l-[8px] border-[#D32F2F] inline-block shadow-[8px_8px_0_0_#D32F2F]">
              <p className="text-sm md:text-base font-black uppercase tracking-widest">
                logic: MỞ VẤN ĐỀ → LÝ LUẬN → THỰC TIỄN VN → KẾT LUẬN
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NỘI DUNG (6 BLOCKS) */}
      <section className="py-20 px-6 bg-[#EBE5D9]">
        <div className="max-w-4xl mx-auto space-y-20">
          
          {/* BLOCK 1: MỞ VẤN ĐỀ + KHÁI NIỆM */}
          <motion.article {...fadeUpScale} className="border-[8px] border-[#111] bg-[#EBE5D9] shadow-[12px_12px_0_0_#D32F2F] overflow-hidden group">
            <div className="relative px-8 py-8 bg-[#111] text-[#EBE5D9] border-b-[8px] border-[#111] flex items-center gap-6">
              <div className="text-6xl font-black text-[#D32F2F] group-hover:-rotate-12 transition-transform">01.</div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D32F2F]">CHƯƠNG V MỤC I</p>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Mở vấn đề & Khái niệm</h2>
              </div>
            </div>
            <div className="p-8 md:p-10 space-y-8">
              <p className="text-xl font-bold uppercase leading-relaxed text-[#111] border-l-[6px] border-[#D32F2F] pl-6 bg-[#ded8cc] py-4 pr-4">
                Tôn giáo là một hiện tượng xã hội mang tính lịch sử. Nó tồn tại ở hầu hết các cộng đồng trên thế giới.
              </p>
              
              <div className="border-[6px] border-[#111] overflow-hidden shadow-[8px_8px_0_0_#D32F2F] relative group">
                <img 
                  src={tonGiaoImg} 
                  alt="Tôn giáo là gì" 
                  className="w-full h-auto md:h-[400px] object-cover transition-all duration-500" 
                />
                <div className="absolute top-4 left-4 bg-[#D32F2F] text-[#EBE5D9] px-4 py-2 font-black uppercase text-sm border-[4px] border-[#111] shadow-[4px_4px_0_0_#111]">
                  TÔN GIÁO LÀ GÌ?
                </div>
              </div>

              <div className="flex gap-4 items-start border-[4px] border-[#111] bg-[#EBE5D9] p-6 shadow-[6px_6px_0_0_#111]">
                <IconMegaphone className="w-8 h-8 shrink-0 text-[#D32F2F]" />
                <p className="text-base font-bold text-[#111] leading-relaxed">
                  Hiểu rõ khái niệm và phân biệt tôn giáo chân chính với sự <strong>mê tín dị đoan</strong> là bước đầu để vận dụng xử lý các tình huống tín ngưỡng trong thời kỳ hiện đại.
                </p>
              </div>
            </div>
          </motion.article>

          {/* BLOCK 2: BẢN CHẤT */}
          <motion.article {...fadeUpScale} className="border-[8px] border-[#111] bg-[#EBE5D9] shadow-[12px_12px_0_0_#D32F2F] overflow-hidden group">
            <div className="relative px-8 py-8 bg-[#D32F2F] text-[#EBE5D9] border-b-[8px] border-[#111] flex items-center gap-6">
              <div className="text-6xl font-black text-[#111] group-hover:-rotate-12 transition-transform drop-shadow-[2px_2px_0_#EBE5D9]">02.</div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#111]">LÝ LUẬN CỐT LÕI</p>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#111]">Bản chất tôn giáo</h2>
              </div>
            </div>
            <div className="p-8 md:p-10 space-y-8">
              <div className="border-[6px] border-[#111] overflow-hidden shadow-[8px_8px_0_0_#111] relative group/img">
                <img 
                  src={macLeninImg} 
                  alt="Mác - Lênin" 
                  className="w-full h-auto md:h-[400px] object-cover transition-all duration-500" 
                />
                <div className="absolute bottom-6 right-6 bg-[#111] text-[#EBE5D9] px-6 py-3 font-black uppercase text-xl md:text-2xl border-[4px] border-[#D32F2F] shadow-[6px_6px_0_0_#D32F2F] transform rotate-[3deg]">
                  QUAN ĐIỂM CHỦ ĐẠO
                </div>
              </div>

              <div className="bg-[#111] text-[#EBE5D9] p-8 border-[6px] border-[#D32F2F] relative">
                <span className="absolute -top-6 -right-6 text-6xl text-[#EBE5D9]/20 font-black">?</span>
                <p className="text-xl font-black uppercase tracking-wide leading-relaxed">
                  "Là hình thái ý thức xã hội phản ánh hiện thực khách quan dưới dạng hư ảo."
                </p>
                <p className="mt-4 text-sm font-bold opacity-80 border-t-[2px] border-gray-700 pt-4">
                  Theo quan điểm của Chủ nghĩa Mác – Lênin, tôn giáo gán sức mạnh thần thánh, siêu nhiên cho tự nhiên và xã hội, bắt nguồn từ sự bất lực của con người trước tự nhiên trước đây.
                </p>
              </div>
            </div>
          </motion.article>

          {/* BLOCK 3: NGUỒN GỐC */}
          <motion.article {...fadeUpScale} className="border-[8px] border-[#111] bg-[#111] text-[#EBE5D9] shadow-[12px_12px_0_0_#111] overflow-hidden group relative">
            <div className="absolute inset-0 opacity-[0.05] bg-[repeating-linear-gradient(45deg,#EBE5D9,#EBE5D9_10px,transparent_10px,transparent_20px)] pointer-events-none"></div>
            <div className="relative px-8 py-8 border-b-[8px] border-[#D32F2F] flex items-center gap-6 bg-[#111] z-10">
              <div className="text-6xl font-black text-[#D32F2F] group-hover:-rotate-12 transition-transform">03.</div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D32F2F]">GỐC RỄ VẤN ĐỀ</p>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Nguồn gốc Tôn giáo</h2>
              </div>
            </div>
            <motion.div variants={staggerContainer} className="p-8 md:p-10 grid sm:grid-cols-3 gap-6 relative z-10">
              {[
                { title: "Tự nhiên & KTXH", desc: "Sự khuất phục trước thiên nhiên khắc nghiệt. Áp bức bóc lột, bất công xã hội tạo ra hy vọng ở thế giới bên kia.", icon: IconMountain, img: khoHanImg },
                { title: "Nhận thức", desc: "Giới hạn của trí tuệ giai đoạn sơ khai chưa giải thích được các hiện tượng khách quan.", icon: IconBrain, img: nhanThucImg },
                { title: "Tâm lý", desc: "Tình trạng lo âu, tâm lý sợ hãi rủi ro trong cuộc sống. Cần chỗ dựa tinh thần để bám víu.", icon: IconMegaphone, img: tamLyImg }
              ].map((item, i) => (
                <motion.div variants={itemFadeIn} key={i} className="bg-[#EBE5D9] text-[#111] border-[4px] border-[#D32F2F] p-5 shadow-[6px_6px_0_0_#D32F2F] flex flex-col items-center text-center group/card hover:-translate-y-1 transition-transform">
                  <div className="w-full h-[140px] md:h-[180px] mb-6 border-[4px] border-[#111] overflow-hidden relative">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-all duration-500 transform group-hover/card:scale-105"
                    />
                    <div className="absolute -bottom-6 right-2 w-12 h-12 bg-[#111] text-[#EBE5D9] flex items-center justify-center rounded-full border-[4px] border-[#D32F2F] z-20">
                      <item.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-black text-lg uppercase leading-tight mb-2 relative z-10">{item.title}</h3>
                  <div className="h-1 w-10 bg-[#D32F2F] mb-4"></div>
                  <p className="text-sm font-bold text-gray-800">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.article>

          {/* BLOCK 4: TÍNH CHẤT */}
          <motion.article {...fadeUpScale} className="border-[8px] border-[#111] bg-[#EBE5D9] shadow-[12px_12px_0_0_#D32F2F] overflow-hidden group">
            <div className="relative px-8 py-8 bg-[#EBE5D9] border-b-[8px] border-[#111] flex items-center gap-6">
              <div className="text-6xl font-black text-[#111] group-hover:-rotate-12 transition-transform">04.</div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#111]">ĐẶC ĐIỂM HOẠT ĐỘNG</p>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#111]">Tính chất</h2>
              </div>
            </div>
            <div className="px-8 md:px-10 py-10 bg-[#ded8cc]">
              <div className="flex flex-wrap gap-4">
                {['TÍNH LỊCH SỬ', 'TÍNH QUẦN CHÚNG', 'TÍNH CHÍNH TRỊ'].map((pill, i) => (
                  <div key={i} className="inline-flex items-center gap-3 border-[4px] border-[#111] bg-[#D32F2F] px-6 py-4 shadow-[6px_6px_0_0_#111] hover:translate-y-1 hover:shadow-none transition-all cursor-default">
                    <IconStar className="w-5 h-5 text-[#EBE5D9]" accent="#EBE5D9" />
                    <span className="text-lg font-black uppercase text-[#EBE5D9] tracking-widest">{pill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          {/* BLOCK 5: NGUYÊN TẮC GIẢI QUYẾT */}
          <motion.article {...fadeUpScale} className="border-[8px] border-[#111] bg-[#EBE5D9] shadow-[12px_12px_0_0_#D32F2F] overflow-hidden group">
            <div className="relative px-8 py-8 bg-[#D32F2F] text-[#EBE5D9] border-b-[8px] border-[#111] flex items-center gap-6">
              <div className="text-6xl font-black text-[#111] group-hover:-rotate-12 transition-transform drop-shadow-[2px_2px_0_#EBE5D9]">05.</div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#111]">THỜI KỲ QUÁ ĐỘ</p>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#111]">Nguyên tắc chung</h2>
              </div>
            </div>
            <div className="p-8 md:p-10 space-y-6 bg-white">
              {[
                { title: "Tôn trọng tự do tín ngưỡng", sub: "Có đạo và không đạo đều được đảm bảo quyền tự do bình đẳng." },
                { title: "Gắn liền cải tạo xã hội", sub: "Khắc phục tiêu cực tôn giáo phải đi đôi với xây dựng vật chất xã hội chủ nghĩa." },
                { title: "Tư tưởng đối lập chính trị", sub: "Giáo dục, thuyết phục là chính; nhưng phải xử lý pháp lý nghiêm nếu lợi dụng chống phá." },
                { title: "Tính lịch sử, cụ thể", sub: "Phải có chính sách phù hợp cho từng vùng, miền, từng giai đoạn riêng biệt." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start border-[6px] border-[#111] bg-[#EBE5D9] p-5 shadow-[6px_6px_0_0_#D32F2F] hover:bg-[#D32F2F] hover:text-[#EBE5D9] transition-colors group/item">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#111] text-[#EBE5D9] text-2xl font-black border-[4px] border-[#D32F2F]">
                    {i + 1}
                  </div>
                  <div className="min-w-0">
                    <p className="font-black text-[#111] text-lg uppercase leading-tight group-hover/item:text-[#EBE5D9] transition-colors">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm font-bold opacity-80 leading-relaxed text-gray-800 group-hover/item:text-gray-100 transition-colors">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.article>

          {/* BLOCK 6: VẬN DỤNG THỰC TIỄN VN (TÔN GIÁO) */}
          <motion.article {...fadeUpScale} className="border-[8px] border-[#111] bg-[#111] text-[#EBE5D9] shadow-[12px_12px_0_0_#D32F2F] overflow-hidden group">
            <div className="relative px-8 py-8 bg-[#111] border-b-[8px] border-[#D32F2F] flex items-center gap-6">
              <div className="text-6xl font-black text-[#D32F2F] group-hover:-rotate-12 transition-transform">06.</div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D32F2F]">ĐẠI HỘI XIII & THỰC TIỄN</p>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#EBE5D9]">Vận dụng Việt Nam (Tôn giáo)</h2>
              </div>
            </div>
            <div className="p-8 md:p-10 space-y-10">
              
              <div className="space-y-4">
                <h3 className="inline-block bg-[#D32F2F] text-[#EBE5D9] px-4 py-2 font-black uppercase tracking-widest border-[4px] border-[#111] shadow-[4px_4px_0_0_#EBE5D9]">
                  QUAN ĐIỂM CỦA ĐẢNG
                </h3>
                <div className="bg-[#EBE5D9] text-[#111] p-6 border-[6px] border-[#D32F2F]">
                  <p className="text-xl md:text-2xl font-black uppercase tracking-wide leading-relaxed border-l-[6px] border-[#111] pl-4 text-[#D32F2F]">
                    TÔN GIÁO LÀ NGUỒN LỰC TINH THẦN & VẬT CHẤT
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="inline-block bg-[#D32F2F] text-[#EBE5D9] px-4 py-2 font-black uppercase tracking-widest border-[4px] border-[#111] shadow-[4px_4px_0_0_#EBE5D9]">
                  Chính sách tôn giáo của Đảng và Nhà nước
                </h3>
                <ul className="space-y-4 pt-4 border-l-[6px] border-[#D32F2F] pl-6 ml-2">
                  <li className="font-bold text-lg uppercase flex items-center gap-3"><span className="text-2xl font-black text-[#D32F2F]">1.</span> NHU CẦU TINH THẦN LÂU DÀI</li>
                  <li className="font-bold text-lg uppercase flex items-center gap-3"><span className="text-2xl font-black text-[#D32F2F]">2.</span> ĐẠI ĐOÀN KẾT DÂN TỘC</li>
                  <li className="font-bold text-lg uppercase flex items-center gap-3"><span className="text-2xl font-black text-[#D32F2F]">3.</span> VẬN ĐỘNG QUẦN CHÚNG</li>
                  <li className="font-bold text-lg uppercase flex items-center gap-3"><span className="text-2xl font-black text-[#D32F2F]">4.</span> SỰ LÃNH ĐẠO CỦA ĐẢNG</li>
                  <li className="font-bold text-lg uppercase flex items-center gap-3"><span className="text-2xl font-black text-[#D32F2F]">5.</span> TUÂN THỦ HIẾN PHÁP</li>
                </ul>
              </div>

            </div>
          </motion.article>

          {/* BLOCK 7: VẬN DỤNG THỰC TIỄN VN (DÂN TỘC) */}
          <motion.article {...fadeUpScale} className="border-[8px] border-[#111] bg-[#EBE5D9] shadow-[12px_12px_0_0_#D32F2F] overflow-hidden group">
            <div className="relative px-8 py-8 bg-[#EBE5D9] border-b-[8px] border-[#111] flex items-center gap-6">
              <div className="text-6xl font-black text-[#111] group-hover:-rotate-12 transition-transform">07.</div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#111]">QUAN ĐIỂM CHỦ ĐẠO</p>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#111]">Vận dụng Việt Nam (Dân tộc)</h2>
              </div>
            </div>
            <div className="p-8 md:p-10 space-y-10 bg-white">
              
              <div className="space-y-4">
                <h3 className="inline-block bg-[#111] text-[#EBE5D9] px-6 py-3 font-black uppercase tracking-widest border-[4px] border-[#D32F2F] shadow-[6px_6px_0_0_#D32F2F]">
                  CHÍNH SÁCH DÂN TỘC TRỌNG TÂM
                </h3>
                <div className="pt-6 pb-2 border-l-[6px] border-[#111] pl-6 ml-4 space-y-6">
                  <p className="font-bold text-lg md:text-xl text-[#111]">1. Các dân tộc bình đẳng, đoàn kết, tôn trọng, giúp nhau cùng phát triển.</p>
                  <p className="font-bold text-lg md:text-xl text-[#111]">2. Ưu tiên phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi.</p>
                  <p className="font-bold text-lg md:text-xl text-[#D32F2F]">3. Nghiêm cấm mọi hành vi kỳ thị, chia rẽ khối đại đoàn kết toàn dân tộc.</p>
                </div>
              </div>

              {/* KẾT LUẬN CHUNG */}
              <div className="border-[6px] border-[#D32F2F] bg-[#111] text-[#EBE5D9] p-8 text-center sm:text-left relative overflow-hidden mt-8 shadow-[8px_8px_0_0_#D32F2F]">
                <div className="absolute top-0 right-4 text-[100px] text-[#D32F2F]/20 font-black rotate-12">★</div>
                <h4 className="flex items-center gap-3 text-2xl font-black uppercase tracking-tighter text-[#D32F2F] mb-4">
                  <IconUnity className="w-8 h-8" />
                  KẾT LUẬN TOÀN CHƯƠNG
                </h4>
                <p className="font-black text-xl uppercase leading-snug text-[#EBE5D9]">
                  Giải quyết đúng tôn giáo & quan hệ dân tộc–tôn giáo = GIỮ VỮNG ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC. <br/><br/>
                  <span className="text-[#111] bg-[#D32F2F] px-2 py-1 relative z-10">Đó là động lực to lớn xây dựng CNXH.</span>
                </p>
              </div>

            </div>
          </motion.article>

        </div>

        {/* ĐIỀU HƯỚNG */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 border-[8px] border-[#111] bg-[#111] px-10 py-8 shadow-[12px_12px_0_0_#D32F2F]"
         >
           <p className="text-xl font-black uppercase text-[#EBE5D9] text-center sm:text-left flex items-center gap-3">
             <IconBook className="w-8 h-8 shrink-0 text-[#D32F2F]" />
             NẮM CHẮC LÝ LUẬN — <br/> TIẾN VÀO THỰC TIỄN
           </p>
           <Link
             to="/truyen-tranh"
             className="inline-flex items-center gap-3 border-[6px] border-[#111] bg-[#EBE5D9] px-8 py-4 text-xl font-black uppercase text-[#111] shadow-[8px_8px_0_0_#D32F2F] hover:bg-[#D32F2F] hover:text-[#EBE5D9] hover:border-[#EBE5D9] transition-colors"
           >
             Xem Ví dụ minh hoạ
             <IconChevronRight className="w-6 h-6" />
           </Link>
         </motion.div>
      </section>
    </div>
  )
}
