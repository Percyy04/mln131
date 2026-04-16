import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useQuizStore } from '../store/quizStore'
import { quizData } from '../data/quizData'
import { IconHome } from '../components/theory/TheoryIcons'

const PART_LABELS = {
  1: 'Não bạn nghĩ gì khi đời "toang"?',
  2: 'Bạn hành động kiểu gì?',
  3: 'Nhận thức xã hội',
}

const SCORE_WEIGHT = { A: 2, B: 1, C: 0 }

function getResult(score) {
  if (score <= 10)
    return {
      emoji: '★',
      label: 'TUYỆT VỜI ĐỒNG CHÍ!',
      desc: 'Bạn có nhận thức cực tốt, giữ vững lập trường và không bị ảnh hưởng bởi những thứ hư ảo mê tín.',
      color: 'text-[#D32F2F]',
      bg: 'bg-[#111] text-[#EBE5D9] border-[#D32F2F]',
      bar: 'bg-[#D32F2F]',
    }
  if (score <= 22)
    return {
      emoji: '⚖',
      label: 'CẦN VỮNG VÀNG HƠN',
      desc: 'Lập trường của bạn đôi khi lung lay trước áp lực. Cần bồi dưỡng thêm lý luận.',
      color: 'text-[#111]',
      bg: 'bg-[#EBE5D9] text-[#111] border-[#111]',
      bar: 'bg-[#111]',
    }
  return {
    emoji: '✖',
    label: 'BÁO ĐỘNG ĐỎ!',
    desc: 'Niềm tin mê tín đang xâm chiếm tư duy của bạn. Yêu cầu xem lại giáo trình MLN131 ngay lập tức!',
    color: 'text-[#EBE5D9]',
    bg: 'bg-[#D32F2F] text-[#EBE5D9] border-[#111]',
    bar: 'bg-[#111]',
  }
}

const MAX_SCORE = 36 // 18 câu × 2 điểm

export default function QuizPage() {
  const { answers, setAnswer, reset } = useQuizStore()
  const [submitted, setSubmitted] = useState(false)
  const [currentPart, setCurrentPart] = useState(1)

  // Cuộn lên đầu mô phỏng lật trang khi đổi phần hoặc nộp bài
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPart, submitted])

  const totalAnswered = Object.keys(answers).length
  const allAnswered = totalAnswered === quizData.length
  const score = Object.entries(answers).reduce((s, [, v]) => s + SCORE_WEIGHT[v], 0)
  const result = getResult(score)

  const partQuestions = quizData.filter((q) => q.part === currentPart)
  const partAnswered = (p) => quizData.filter((q) => q.part === p && answers[q.id]).length
  const partTotal = (p) => quizData.filter((q) => q.part === p).length

  const handleReset = () => {
    reset()
    setSubmitted(false)
    setCurrentPart(1)
  }

  return (
    <div className="min-h-screen bg-[#EBE5D9] text-[#111] selection:bg-[#D32F2F] selection:text-[#EBE5D9] overflow-hidden">
      
      {/* HEADER */}
      <section className="relative border-b-[12px] border-[#111] bg-[#D32F2F] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.1]">
          <div className="absolute inset-0 bg-[radial-gradient(#111_2px,transparent_2px)] [background-size:16px_16px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#EBE5D9] mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 border-[4px] border-[#EBE5D9] bg-[#111] px-4 py-2 hover:bg-[#EBE5D9] hover:text-[#111] transition-colors shadow-[4px_4px_0_0_#111]"
            >
              <IconHome className="w-4 h-4" />
              Trang Chủ
            </Link>
            <span className="text-[#EBE5D9]/60">/</span>
            <span className="flex items-center gap-2 opacity-80">
              Kiểm Tra
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <div className="mb-4 inline-flex items-center gap-2 bg-[#111] text-[#EBE5D9] px-4 py-2 font-black tracking-[0.2em] uppercase text-xs border-[4px] border-[#D32F2F]">
              ĐÁNH GIÁ NHẬN THỨC
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#111] uppercase tracking-tighter mb-4 drop-shadow-[4px_4px_0_#EBE5D9]">
            Hệ tâm linh hay Hệ thực tế?
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="py-16 px-6 max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              
              {/* Part tabs */}
              <div className="flex gap-2 mb-4 bg-[#111] p-2 border-[6px] border-[#111] shadow-[8px_8px_0_0_#D32F2F]">
                {[1, 2, 3].map((p) => (
                  <button
                    key={p}
                    onClick={() => setCurrentPart(p)}
                    className={`flex-1 py-3 text-sm md:text-base font-black uppercase tracking-wider transition-colors border-[4px] border-transparent ${
                      currentPart === p
                        ? 'bg-[#D32F2F] text-[#EBE5D9] border-[#EBE5D9]'
                        : 'bg-[#1a1a1a] text-gray-500 hover:bg-[#D32F2F]/20 hover:text-[#EBE5D9]'
                    }`}
                  >
                    Phần {p}
                    <span className="block text-[10px] opacity-80 mt-1">
                      {partAnswered(p)} / {partTotal(p)}
                    </span>
                  </button>
                ))}
              </div>

              {/* Part title */}
              <p className="text-lg font-black uppercase tracking-widest text-[#111] mb-8 bg-[#ded8cc] px-4 py-3 border-l-[8px] border-[#D32F2F]">
                {PART_LABELS[currentPart]}
              </p>

              {/* Questions */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPart}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {partQuestions.map((q) => (
                    <div
                      key={q.id}
                      className="bg-[#EBE5D9] border-[8px] border-[#111] shadow-[8px_8px_0_0_#D32F2F] p-6 md:p-8"
                    >
                      <p className="font-black text-[#111] text-lg uppercase leading-tight mb-6 flex items-start gap-3">
                        <span className="shrink-0 flex items-center justify-center w-10 h-10 bg-[#D32F2F] text-[#EBE5D9] text-xl border-[4px] border-[#111]">
                          {q.id}
                        </span>
                        <span className="mt-1">{q.question}</span>
                      </p>
                      <div className="space-y-3">
                        {q.options.map((opt) => (
                          <button
                            key={opt.key}
                            onClick={() => setAnswer(q.id, opt.key)}
                            className={`w-full text-left px-5 py-4 border-[4px] font-bold text-sm md:text-base transition-all ${
                              answers[q.id] === opt.key
                                ? 'border-[#111] bg-[#111] text-[#EBE5D9] shadow-[4px_4px_0_0_#D32F2F] translate-x-1'
                                : 'border-[#111] bg-[#EBE5D9] text-[#111] hover:bg-[#D32F2F] hover:text-[#EBE5D9]'
                            }`}
                          >
                            <span className="font-black mr-3 text-lg">{opt.key}.</span>
                            {opt.text}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Footer bar */}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t-[8px] border-[#111] pt-8">
                <p className="text-xl font-black text-[#111] uppercase tracking-wider">
                  ĐÃ XỬ LÝ:{' '}
                  <span className="text-[#D32F2F] text-3xl ml-2">{totalAnswered}</span>
                  <span className="text-gray-400"> / 18</span>
                </p>
                <div className="flex gap-4">
                  {currentPart < 3 && (
                    <button
                      onClick={() => setCurrentPart((p) => p + 1)}
                      className="px-8 py-4 bg-[#111] border-[4px] border-[#111] text-[#EBE5D9] font-black uppercase tracking-widest hover:bg-[#D32F2F] hover:border-[#D32F2F] transition-colors shadow-[6px_6px_0_0_#111] hover:shadow-[6px_6px_0_0_#111]"
                    >
                      PHẦN TIẾP →
                    </button>
                  )}
                  {currentPart === 3 && (
                    <button
                      onClick={() => allAnswered && setSubmitted(true)}
                      disabled={!allAnswered}
                      className="px-8 py-4 bg-[#D32F2F] border-[4px] border-[#111] text-[#EBE5D9] font-black uppercase tracking-widest hover:bg-[#111] disabled:opacity-40 disabled:hover:bg-[#D32F2F] transition-colors shadow-[6px_6px_0_0_#111]"
                    >
                      BÁO CÁO KẾT QUẢ ★
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Result card */}
              <div className={`border-[12px] p-10 md:p-16 mb-12 text-center shadow-[16px_16px_0_0_#111] ${result.bg}`}>
                <div className="text-[100px] leading-none mb-6 filter drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
                  {result.emoji}
                </div>
                <div className="flex items-end justify-center gap-2 mb-6">
                  <span className={`text-8xl font-black ${result.color} drop-shadow-[4px_4px_0_#000]`}>{score}</span>
                  <span className="text-3xl font-black opacity-40 mb-2">/ {MAX_SCORE}</span>
                </div>
                
                {/* Score bar */}
                <div className="w-full max-w-sm mx-auto bg-black/20 border-[4px] border-current h-6 mb-10 overflow-hidden relative">
                  <motion.div
                    className={`h-full ${result.bar}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${(score / MAX_SCORE) * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </div>
                
                <h2 className={`text-3xl border-b-[6px] pb-4 md:text-5xl font-black uppercase tracking-tighter mb-6 ${result.color}`}>
                  {result.label}
                </h2>
                <p className="text-lg md:text-xl font-bold uppercase mx-auto leading-relaxed border-l-[6px] pl-6 border-current text-left">
                  {result.desc}
                </p>
              </div>

              {/* Legend */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                {[
                  { range: '0 – 10', label: 'TUYỆT VỜI', cls: 'bg-[#111] text-[#EBE5D9] border-[#D32F2F]' },
                  { range: '11 – 22', label: 'CẦN VỮNG VÀNG', cls: 'bg-[#EBE5D9] text-[#111] border-[#111]' },
                  { range: '23+', label: 'BÁO ĐỘNG ĐỎ', cls: 'bg-[#D32F2F] text-[#EBE5D9] border-[#111]' },
                ].map((r) => (
                  <div key={r.range} className={`border-[6px] p-5 text-center shadow-[6px_6px_0_0_#111] ${r.cls}`}>
                    <p className="text-2xl font-black mb-1">{r.range}</p>
                    <p className="text-sm font-bold uppercase tracking-widest">{r.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={handleReset}
                  className="px-8 py-4 border-[6px] border-[#111] bg-[#111] text-[#EBE5D9] font-black uppercase tracking-widest shadow-[8px_8px_0_0_#D32F2F] hover:bg-[#D32F2F] transition-colors"
                >
                  LÀM LẠI BÀI
                </button>
                <Link
                  to="/"
                  className="px-8 py-4 border-[6px] border-[#111] bg-[#EBE5D9] text-[#111] font-black uppercase tracking-widest shadow-[8px_8px_0_0_#111] hover:bg-[#111] hover:text-[#EBE5D9] transition-colors"
                >
                  TRANG CHỦ
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
