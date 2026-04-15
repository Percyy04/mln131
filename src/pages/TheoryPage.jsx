import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const sections = [
  {
    id: 'mac-Lenin',
    title: '3.1. Quan niệm của Chủ nghĩa Mác – Lênin về Tôn giáo',
    icon: '📖',
    points: [
      'Tôn giáo là một hiện tượng xã hội mang tính lịch sử.',
      'Là hình thái ý thức xã hội phản ánh hiện thực khách quan dưới dạng hư ảo.',
      'Có nguồn gốc từ kinh tế, xã hội, nhận thức và tâm lý.',
      'Sẽ tồn tại lâu dài trong thời kỳ quá độ lên chủ nghĩa xã hội.',
      'Việc giải quyết vấn đề tôn giáo phải gắn với cải tạo xã hội.',
    ],
  },
  {
    id: 'viet-nam',
    title: '3.2. Quan điểm của Đảng và Nhà nước Việt Nam',
    icon: '🇻🇳',
    points: [
      'Tôn trọng và bảo đảm quyền tự do tín ngưỡng, tôn giáo.',
      'Tôn giáo là nhu cầu tinh thần của một bộ phận nhân dân.',
      'Phát huy các giá trị tích cực của tôn giáo.',
      'Ngăn chặn việc lợi dụng tôn giáo để vi phạm pháp luật.',
      'Tăng cường khối đại đoàn kết dân tộc.',
    ],
  },
  {
    id: 'chinh-sach',
    title: '3.3. Chính sách Tôn giáo tại Việt Nam',
    icon: '⚖️',
    points: [
      'Bình đẳng giữa các tôn giáo trước pháp luật.',
      'Không phân biệt đối xử vì lý do tín ngưỡng.',
      'Nghiêm cấm mê tín dị đoan và lợi dụng tôn giáo.',
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
}

export default function TheoryPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-10">
          <Link to="/" className="hover:text-[#1E3A8A] transition-colors">Trang chủ</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Lý thuyết</span>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="inline-block px-3 py-1 bg-[#1E3A8A]/10 text-[#1E3A8A] text-sm font-semibold rounded-full mb-4">
            Phần Lý Thuyết
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Quan niệm về Tôn giáo
          </h1>
          <p className="text-gray-500 max-w-xl text-lg">
            Tổng hợp lý luận từ Chủ nghĩa Mác – Lênin và quan điểm của Đảng Cộng sản Việt Nam
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {sections.map((sec, i) => (
            <motion.div
              key={sec.id}
              id={`theory-card-${sec.id}`}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-[#F3F4F6] rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl mb-5">{sec.icon}</div>
              <h2 className="text-sm font-bold text-[#1E3A8A] mb-4 leading-snug">
                {sec.title}
              </h2>
              <ul className="space-y-2.5">
                {sec.points.map((pt, j) => (
                  <li key={j} className="flex gap-2.5 text-sm text-gray-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F97316] flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Kết luận */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="p-8 bg-[#1E3A8A] rounded-2xl text-white text-center mb-12"
        >
          <span className="text-[#F97316] font-bold text-xs uppercase tracking-widest">
            Kết luận
          </span>
          <p className="mt-3 text-blue-100 leading-relaxed max-w-3xl mx-auto text-base">
            Tôn giáo là hiện tượng xã hội khách quan; việc giải quyết vấn đề tôn giáo cần đảm bảo
            quyền tự do tín ngưỡng, đồng thời góp phần xây dựng xã hội công bằng, dân chủ và văn minh.
          </p>
        </motion.div>

        {/* Next page CTA */}
        <div className="flex justify-end">
          <Link
            to="/truyen-tranh"
            id="theory-next-comic"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white font-semibold rounded-xl hover:bg-[#ea6c0c] transition-colors"
          >
            Tiếp: Truyện tranh →
          </Link>
        </div>
      </div>
    </div>
  )
}
