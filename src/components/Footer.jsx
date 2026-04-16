import baoCaoAI from '../assets/bao_cao_ai.png';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-[#EBE5D9] py-16 border-t-[8px] border-[#D32F2F] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="flex flex-col items-center justify-center gap-2 mb-8">
          <span className="text-4xl font-black tracking-tighter text-[#D32F2F] drop-shadow-[4px_4px_0_#000]">
            ★
          </span>
          <div className="flex gap-2 text-3xl font-black">
            <span className="text-[#D32F2F]">MLN</span>
            <span className="bg-[#EBE5D9] text-[#111] px-2 font-bold transform -skew-x-[15deg]">
              131
            </span>
          </div>
        </div>

        <p className="text-[#EBE5D9] font-bold uppercase tracking-wider text-sm mb-12 max-w-xl mx-auto leading-relaxed border-b-[4px] border-[#D32F2F] pb-8">
          VẤN ĐỀ DÂN TỘC VÀ TÔN GIÁO <br />
          <span className="text-gray-400">
            TRONG THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI
          </span>
        </p>

        {/* AI USAGE REPORT SECTION */}
        <div className="max-w-xl mx-auto mb-16 border-[6px] border-[#111] bg-[#D32F2F] p-2 shadow-[8px_8px_0_0_#111] transform hover:-translate-y-1 transition-transform">
          <div className="bg-[#111] p-6 text-center border-[4px] border-[#111]">
            <h3 className="text-[#EBE5D9] font-black uppercase tracking-widest text-lg mb-6">
              Báo cáo sử dụng công cụ AI
            </h3>
            <div className="border-[4px] border-[#D32F2F] p-2 bg-white flex justify-center">
              <img 
                src={baoCaoAI} 
                alt="Báo cáo định lượng và cách thức dùng AI" 
                className="w-auto h-auto max-h-[150px] sm:max-h-[250px] filter grayscale contrast-[1.1] hover:filter-none transition-all duration-500" 
              />
            </div>
            <p className="text-[#EBE5D9]/70 text-[10px] mt-4 font-bold uppercase tracking-widest">MINH BẠCH VÀ TRÁCH NHIỆM HỌC THUẬT</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 text-xs text-gray-400 mb-10 tracking-widest font-black uppercase">
          <div>
            <p className="text-[#EBE5D9] mt-1 tracking-wider text-sm">
              Chủ nghĩa Mác – Lênin
            </p>
          </div>

          <div>
            <p className="text-[#D32F2F] mt-1 tracking-wider text-sm mb-2">
              Thành viên Nhóm 2
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-[#EBE5D9]">Đặng Trường Phát</span>
              <span className="text-[#EBE5D9]">Lê Nguyên Khang</span>
              <span className="text-[#EBE5D9]">Trương Sỹ Nam</span>
              <span className="text-[#EBE5D9]">La Thị Ngọc Thiện</span>
            </div>
          </div>

          <div>
            <p className="text-[#EBE5D9] mt-1 tracking-wider text-sm">
              FPT University
            </p>
          </div>
        </div>

        <div className="border-t-[4px] border-[#1a1a1a] pt-10 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
          <p className="mb-2 text-[#D32F2F]">TÀI LIỆU THAM KHẢO CHÍNH THỨC</p>
          <p>
            Giáo trình Chủ nghĩa Mác – Lênin | Văn kiện Đại hội XIII | Hiến pháp
            2013
          </p>
        </div>
      </div>
    </footer>
  );
}
