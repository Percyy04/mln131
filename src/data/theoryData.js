/**
 * Lý thuyết — bản rút gọn cho thuyết trình (ít chữ, gợi ý — giảng viên triển khai thêm khi nói).
 */

export const theorySections = [
  {
    id: "phan-i",
    step: "01",
    chapter: "Phần I",
    title: "Dân tộc trong thời kỳ quá độ lên CNXH",
    tagline: "Mác – Lênin: khái niệm · 2 xu hướng · Cương lĩnh",
    accent: "red",
    lead: "Cơ sở lý luận nền tảng giải quyết vấn đề dân tộc.",
    sections: [
      {
        heading: "CN Mác – Lênin về dân tộc",
        subsections: [
          {
            label: "a",
            title: "Khái niệm & 2 xu hướng",
            blocks: [
              {
                kind: "highlight",
                text: "Dân tộc: Hình thức cộng đồng người ổn định, hình thành trong lịch sử, có chung lãnh thổ, kinh tế, ngôn ngữ và văn hóa/tâm lý.",
              },
              {
                kind: "columns",
                title: "2 Xu hướng khách quan",
                items: [
                  { t: "Tách ra", d: "Thức tỉnh ý thức dân tộc, muốn độc lập." },
                  { t: "Liên hiệp lại", d: "Do lực lượng sản xuất phát triển, giao lưu kinh tế, văn hóa (toàn cầu hóa)." },
                ],
              },
            ],
          },
          {
            label: "b",
            title: "Cương lĩnh dân tộc của V.I.Lênin",
            blocks: [
              {
                kind: "numbered_short",
                items: [
                  { head: "Bình đẳng", sub: "Các dân tộc hoàn toàn bình đẳng, không phân biệt lớn/nhỏ." },
                  { head: "Tự quyết", sub: "Quyền tự quyết định vận mệnh (tách ra hoặc liên hiệp tự nguyện)." },
                  { head: "Đoàn kết", sub: "Liên hiệp công nhân tất cả dân tộc." },
                ],
              },
            ],
          },
        ],
      },
      {
        heading: "Dân tộc Việt Nam",
        subsections: [
          {
            label: "a",
            title: "Đặc điểm cơ bản",
            blocks: [
              {
                kind: "bullets_short",
                items: [
                  "Có sự chênh lệch về số dân giữa các tộc người.",
                  "Cư trú đan xen, không có cực đoan lãnh thổ.",
                  "Đoàn kết gắn bó lâu đời trong lịch sử.",
                  "Văn hóa đa dạng trong thống nhất.",
                ],
              },
            ],
          },
          {
            label: "b",
            title: "Chính sách của Đảng",
            blocks: [
              {
                kind: "pills",
                title: "Nguyên tắc cơ bản",
                items: ["Bình đẳng", "Đoàn kết", "Tôn trọng", "Giúp nhau phát triển"],
              },
              {
                kind: "highlight",
                text: "Phát triển toàn diện kinh tế, văn hóa, xã hội, an ninh quốc phòng vùng đồng bào dân tộc thiểu số.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "phan-ii",
    step: "02",
    chapter: "Phần II",
    title: "Tôn giáo trong thời kỳ quá độ lên CNXH",
    tagline: "Mác – Lênin: bản chất · nguồn gốc · nguyên tắc",
    accent: "blue",
    lead: "Nhận thức đúng → chính sách phù hợp.",
    sections: [
      {
        heading: "CN Mác – Lênin về tôn giáo",
        subsections: [
          {
            label: "a",
            title: "Bản chất · nguồn gốc · tính chất",
            blocks: [
              {
                kind: "highlight",
                text: "Ý thức xã hội — phản ánh hiện thực theo cách hư ảo; gán sức mạnh siêu nhiên cho tự nhiên & xã hội.",
              },
              {
                kind: "columns",
                title: "3 nguồn gốc",
                items: [
                  {
                    t: "Tự nhiên & KTXH",
                    d: "Bất lực trước thiên nhiên; áp bức bóc lột.",
                  },
                  {
                    t: "Nhận thức",
                    d: "Chưa giải thích được → gán cho thần linh.",
                  },
                  { t: "Tâm lý", d: "Lo âu, rủi ro, cần chỗ dựa tinh thần." },
                ],
              },
              {
                kind: "pills",
                title: "3 tính chất",
                items: ["Lịch sử", "Quần chúng", "Chính trị"],
              },
            ],
          },
          {
            label: "b",
            title: "4 nguyên tắc (thời kỳ quá độ)",
            blocks: [
              {
                kind: "numbered_short",
                items: [
                  {
                    head: "Tự do tín ngưỡng",
                    sub: "Có đạo & không đạo đều được tôn trọng.",
                  },
                  {
                    head: "Gắn cải tạo XH",
                    sub: "Khắc phục tiêu cực cùng quá trình XD xã hội mới.",
                  },
                  {
                    head: "Tư tưởng vs chính trị",
                    sub: "Giáo dục thuyết phục · đấu tranh pháp lý khi lợi dụng.",
                  },
                  {
                    head: "Lịch sử — cụ thể",
                    sub: "Chính sách phù hợp từng tôn giáo, từng vùng.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "muc-2",
    step: "03",
    chapter: "Mục 2",
    title: "Tôn giáo VN & chính sách hiện nay",
    tagline: "Đặc điểm thực tiễn · Luật 2016 · Đại hội XIII",
    accent: "orange",
    lead: "Đa tôn giáo, hòa bình · pháp luật rõ ràng.",
    sections: [
      {
        heading: "",
        subsections: [
          {
            label: "a",
            title: "Đặc điểm nổi bật",
            blocks: [
              {
                kind: "bullets_short",
                items: [
                  "Chung sống hòa bình — không chiến tranh tôn giáo.",
                  "Đông đảo tín đồ là nhân dân lao động, yêu nước.",
                  "Có quan hệ quốc tế → cần quản lý, tránh lợi dụng.",
                ],
              },
            ],
          },
          {
            label: "b",
            title: "5 quan điểm (Luật TN-TG 2016)",
            blocks: [
              {
                kind: "numbered_short",
                items: [
                  {
                    head: "Nhu cầu tinh thần",
                    sub: "Tự do TN; bình đẳng trước pháp luật.",
                  },
                  {
                    head: "Đại đoàn kết",
                    sub: "Không phân biệt; cấm lợi dụng phá an ninh.",
                  },
                  { head: "Vận động quần chúng", sub: "“Tốt đời, đẹp đạo”." },
                  { head: "Cả hệ thống", sub: "Mọi cấp, mọi ngành cùng làm." },
                  {
                    head: "Trong khuôn khổ pháp luật",
                    sub: "Hoạt động tôn giáo theo Hiến pháp, luật.",
                  },
                ],
              },
              {
                kind: "highlight",
                text: "Đại hội XIII: phát huy giá trị đạo đức, văn hóa và nguồn lực tôn giáo (từ thiện, y tế, giáo dục…).",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "phan-iii",
    step: "04",
    chapter: "Phần III",
    title: "Dân tộc & tôn giáo",
    tagline: "Đặc điểm · định hướng · ổn định chính trị",
    accent: "slate",
    lead: "Mối quan hệ chặt — dễ bị lợi dụng nếu không chủ động.",
    sections: [
      {
        heading: "Đặc điểm",
        subsections: [
          {
            label: "",
            title: "",
            blocks: [
              {
                kind: "numbered_short",
                items: [
                  {
                    head: "Gắn kết dân tộc — tôn giáo",
                    sub: "Ví dụ: Khmer & PG Nam tông; Tây Nguyên & Tin lành.",
                  },
                  {
                    head: "Giao thoa văn hóa",
                    sub: "Tôn giáo bản địa hóa, bản sắc riêng.",
                  },
                  {
                    head: "Dễ bị lợi dụng",
                    sub: "Chiêu bài “nhân quyền”, ly khai — cảnh giác Tây Nguyên, Tây Bắc.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        heading: "Định hướng",
        subsections: [
          {
            label: "",
            title: "",
            blocks: [
              {
                kind: "numbered_short",
                items: [
                  {
                    head: "Đại đoàn kết",
                    sub: "Dân tộc · tôn giáo cùng phát triển.",
                  },
                  {
                    head: "Gắn với dân tộc & phong tục",
                    sub: "Không tách rời bối cảnh từng vùng.",
                  },
                  {
                    head: "Kinh tế — xã hội là gốc",
                    sub: "Nâng đời sống đồng bào DTS & có đạo.",
                  },
                  {
                    head: "Cảnh giác & đấu tranh",
                    sub: "Thất bại âm mưu lợi dụng DT-TG.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    conclusion: {
      label: "Kết luận",
      lines: [
        "Giải quyết đúng tôn giáo & quan hệ dân tộc–tôn giáo = giữ vững khối đại đoàn kết.",
        "Từ lý luận Mác – Lênin đến chính sách Đảng: động lực XD chủ nghĩa xã hội.",
      ],
    },
  },
];
