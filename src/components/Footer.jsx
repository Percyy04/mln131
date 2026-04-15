export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl font-black">MLN</span>
          <span className="text-2xl font-black text-[#F97316]">131</span>
        </div>
        <p className="text-blue-200 text-sm mb-6 max-w-lg mx-auto">
          Vấn đề Dân tộc và Tôn giáo trong Thời kỳ Quá độ lên Chủ nghĩa Xã hội
        </p>

        <div className="border-t border-white/10 pt-6 grid sm:grid-cols-3 gap-4 text-xs text-blue-300 mb-6">
          <div>
            <p className="font-semibold text-white mb-1">Môn học</p>
            <p>MLN131 – Chủ nghĩa Mác – Lênin</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-1">Trường</p>
            <p>FPT University</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-1">Nhóm</p>
            <p>Nhóm 02</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-blue-400">
          <p className="mb-1 font-medium text-blue-200">Tài liệu tham khảo</p>
          <p>Giáo trình Chủ nghĩa Mác – Lênin · Văn kiện Đại hội XIII · Hiến pháp 2013</p>
        </div>
      </div>
    </footer>
  )
}
