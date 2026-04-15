export default function Footer() {
  return (
    <footer className="bg-[#111] text-[#EBE5D9] py-16 border-t-[8px] border-[#D32F2F] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="flex flex-col items-center justify-center gap-2 mb-8">
          <span className="text-4xl font-black tracking-tighter text-[#D32F2F] drop-shadow-[4px_4px_0_#000]">★</span>
          <div className="flex gap-2 text-3xl font-black">
            <span className="text-[#D32F2F]">MLN</span>
            <span className="bg-[#EBE5D9] text-[#111] px-2 font-bold transform -skew-x-[15deg]">131</span>
          </div>
        </div>
        
        <p className="text-[#EBE5D9] font-bold uppercase tracking-wider text-sm mb-12 max-w-xl mx-auto leading-relaxed border-b-[4px] border-[#D32F2F] pb-8">
          VẤN ĐỀ DÂN TỘC VÀ TÔN GIÁO <br/>
          <span className="text-gray-400">TRONG THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI</span>
        </p>

        <div className="grid sm:grid-cols-3 gap-8 text-xs text-gray-400 mb-10 tracking-widest font-black uppercase">
          <div>


            <p className="text-[#EBE5D9] mt-1 tracking-wider text-sm">Chủ nghĩa Mác – Lênin</p>
          </div>
          <div>


            <p className="text-[#EBE5D9] mt-1 tracking-wider text-sm">FPT University</p>
          </div>
          <div>

            <p className="text-[#EBE5D9] mt-1 tracking-wider text-sm">Nhóm 02</p>
          </div>
        </div>

        <div className="border-t-[4px] border-[#1a1a1a] pt-10 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
          <p className="mb-2 text-[#D32F2F]">TÀI LIỆU THAM KHẢO CHÍNH THỨC</p>
          <p>Giáo trình Chủ nghĩa Mác – Lênin | Văn kiện Đại hội XIII | Hiến pháp 2013</p>
        </div>
      </div>
    </footer>
  )
}
