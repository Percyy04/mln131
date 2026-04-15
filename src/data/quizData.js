// Quiz data – 18 câu, 3 phần theo Quiz.md
// A = 2 điểm | B = 1 điểm | C = 0 điểm

export const quizData = [
  // ─── PHẦN 1: Não bạn nghĩ gì khi đời "toang"? ───
  {
    id: 1,
    part: 1,
    question: 'Cố gắng hoài vẫn fail, bạn nghĩ:',
    options: [
      { key: 'A', text: '"Chắc mình độ thành tâm cầu nguyện trời Phật chưa đủ"' },
      { key: 'B', text: '"Chắc do nhiều thứ cộng lại (vong che mắt, lười…)"' },
      { key: 'C', text: '"Sai đâu sửa đó, phân tích lại"' },
    ],
  },
  {
    id: 2,
    part: 1,
    question: 'Điều gì làm bạn yên tâm nhất?',
    options: [
      { key: 'A', text: 'Bùa phù hộ hết không phải lo gì cả' },
      { key: 'B', text: 'Có kế hoạch + chút niềm tin' },
      { key: 'C', text: 'Có dữ liệu, có kiểm soát' },
    ],
  },
  {
    id: 3,
    part: 1,
    question: 'Lời "thầy phán" trúng 1 lần:',
    options: [
      { key: 'A', text: '"Thầy xịn lần sau đi coi tiếp"' },
      { key: 'B', text: '"Cũng đáng suy nghĩ"' },
      { key: 'C', text: '"Một lần chưa nói lên gì"' },
    ],
  },
  {
    id: 4,
    part: 1,
    question: 'Bạn nghĩ niềm tin giúp gì nhiều nhất?',
    options: [
      { key: 'A', text: 'Quyết định kết quả' },
      { key: 'B', text: 'Giúp đỡ stress' },
      { key: 'C', text: 'Không ảnh hưởng trực tiếp' },
    ],
  },
  {
    id: 5,
    part: 1,
    question: 'Thấy nhiều người tin một điều:',
    options: [
      { key: 'A', text: '"Chắc đúng rồi"' },
      { key: 'B', text: '"Có thể đúng một phần"' },
      { key: 'C', text: '"Đông chưa chắc đúng"' },
    ],
  },
  {
    id: 6,
    part: 1,
    question: 'Bạn từng đoán trúng chuyện gì đó:',
    options: [
      { key: 'A', text: '"Chắc ông bà, khuất mặt khuất mày dẫn đường"' },
      { key: 'B', text: '"Có thể là trực giác"' },
      { key: 'C', text: '"Do kinh nghiệm và xác suất"' },
    ],
  },

  // ─── PHẦN 2: Bạn hành động kiểu gì? ───
  {
    id: 7,
    part: 2,
    question: 'Bạn bè rủ: "Làm lễ cho đỡ xui":',
    options: [
      { key: 'A', text: 'Làm ngay cho chắc' },
      { key: 'B', text: 'Làm nếu không quá tốn' },
      { key: 'C', text: 'Không, tự giải quyết' },
    ],
  },
  {
    id: 8,
    part: 2,
    question: 'Một "thầy" có nhiều người theo và review tốt:',
    options: [
      { key: 'A', text: 'Đi coi liền chứ sao' },
      { key: 'B', text: 'Có thể thử' },
      { key: 'C', text: 'Cần kiểm tra kỹ' },
    ],
  },
  {
    id: 9,
    part: 2,
    question: 'Trước kỳ thi/phỏng vấn:',
    options: [
      { key: 'A', text: 'Khấn thầy, khấn đất phù hộ, mua bùa' },
      { key: 'B', text: 'Chuẩn bị chính, cầu may thêm' },
      { key: 'C', text: 'Chỉ tập trung chuẩn bị' },
    ],
  },
  {
    id: 10,
    part: 2,
    question: 'Xem ngày tốt có tác dụng không?',
    options: [
      { key: 'A', text: 'Có, ảnh hưởng thật' },
      { key: 'B', text: 'Giúp tâm lý' },
      { key: 'C', text: 'Không liên quan' },
    ],
  },
  {
    id: 11,
    part: 2,
    question: 'Làm lễ rồi mà vẫn fail:',
    options: [
      { key: 'A', text: 'Tâm chưa đủ, cần phải làm thêm' },
      { key: 'B', text: 'Do nhiều yếu tố khác' },
      { key: 'C', text: 'Không liên quan' },
    ],
  },
  {
    id: 12,
    part: 2,
    question: 'Nghe "khoa học chưa giải thích được":',
    options: [
      { key: 'A', text: 'Vậy chắc có thật' },
      { key: 'B', text: 'Có thể chưa hiểu hết' },
      { key: 'C', text: 'Cần thêm bằng chứng' },
    ],
  },

  // ─── PHẦN 3: Nhận thức xã hội ───
  {
    id: 13,
    part: 3,
    question: 'Có người chi tiền lớn cho tâm linh và nói "đó là quyền":',
    options: [
      { key: 'A', text: 'Hoàn toàn đúng' },
      { key: 'B', text: 'Đúng nhưng cần cân nhắc' },
      { key: 'C', text: 'Có thể bị lợi dụng' },
    ],
  },
  {
    id: 14,
    part: 3,
    question: 'Ranh giới giữa tín ngưỡng và mê tín là:',
    options: [
      { key: 'A', text: 'Chỉ cần có niềm tin' },
      { key: 'B', text: 'Mức độ tin' },
      { key: 'C', text: 'Hệ quả và tác động' },
    ],
  },
  {
    id: 15,
    part: 3,
    question: 'Mê tín nguy hiểm nhất ở chỗ:',
    options: [
      { key: 'A', text: 'Mất tiền' },
      { key: 'B', text: 'Bị lệ thuộc' },
      { key: 'C', text: 'Sai lệch nhận thức' },
    ],
  },
  {
    id: 16,
    part: 3,
    question: 'Xã hội có nhiều niềm tin khác nhau thì:',
    options: [
      { key: 'A', text: 'Ai tin gì cũng được' },
      { key: 'B', text: 'Cần dung hòa' },
      { key: 'C', text: 'Cần định hướng' },
    ],
  },
  {
    id: 17,
    part: 3,
    question: 'Nhà nước nên làm gì với tôn giáo:',
    options: [
      { key: 'A', text: 'Không can thiệp' },
      { key: 'B', text: 'Quản lý một phần' },
      { key: 'C', text: 'Định hướng và kiểm soát' },
    ],
  },
  {
    id: 18,
    part: 3,
    question: 'Một niềm tin là "lành mạnh" khi:',
    options: [
      { key: 'A', text: 'Mang lại kết quả' },
      { key: 'B', text: 'Mang lại cảm giác tốt' },
      { key: 'C', text: 'Không gây hại và không lệ thuộc' },
    ],
  },
]
