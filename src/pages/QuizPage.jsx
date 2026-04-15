import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useQuizStore } from '../store/quizStore'
import { quizData } from '../data/quizData'

const PART_LABELS = {
  1: 'Não bạn nghĩ gì khi đời "toang"?',
  2: 'Bạn hành động kiểu gì?',
  3: 'Nhận thức xã hội',
}

const SCORE_WEIGHT = { A: 2, B: 1, C: 0 }

function getResult(score) {
  if (score <= 10)
    return {
      emoji: '🤙',
      label: 'OKEEE BRO!',
      desc: 'Bạn có niềm tin nhưng vẫn giữ được sự tỉnh táo và khả năng kiểm soát.',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50 border-emerald-200',
      bar: 'bg-emerald-500',
    }
  if (score <= 22)
    return {
      emoji: '😌',
      label: 'Đang tạm ổn rồi bro',
      desc: 'Bạn vẫn ổn trong điều kiện bình thường, nhưng khi áp lực cao có thể dễ bị ảnh hưởng.',
      color: 'text-amber-600',
      bg: 'bg-amber-50 border-amber-200',
      bar: 'bg-amber-500',
    }
  return {
    emoji: '😬',
    label: 'Không ổn rồi bro!!!',
    desc: 'Niềm tin đang ảnh hưởng mạnh đến cách bạn suy nghĩ và hành động, cần cẩn trọng.',
    color: 'text-rose-600',
    bg: 'bg-rose-50 border-rose-200',
    bar: 'bg-rose-500',
  }
}

const MAX_SCORE = 36 // 18 câu × 2 điểm

export default function QuizPage() {
  const { answers, setAnswer, reset } = useQuizStore()
  const [submitted, setSubmitted] = useState(false)
  const [currentPart, setCurrentPart] = useState(1)

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
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-10">
          <Link to="/" className="hover:text-[#1E3A8A] transition-colors">Trang chủ</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Quiz nhận thức</span>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-block px-3 py-1 bg-violet-100 text-violet-700 text-sm font-semibold rounded-full mb-4">
            Kiểm Tra Nhận Thức
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
            Quiz: Bạn nghĩ gì?
          </h1>
          <p className="text-gray-500 text-lg">18 câu · 3 phần · A=2 / B=1 / C=0 điểm</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* Part tabs */}
              <div className="flex gap-1.5 mb-2 bg-gray-100 p-1.5 rounded-2xl">
                {[1, 2, 3].map((p) => (
                  <button
                    key={p}
                    id={`quiz-part-tab-${p}`}
                    onClick={() => setCurrentPart(p)}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      currentPart === p
                        ? 'bg-[#1E3A8A] text-white shadow'
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    Phần {p}
                    <span className="ml-1 text-xs opacity-60">
                      ({partAnswered(p)}/{partTotal(p)})
                    </span>
                  </button>
                ))}
              </div>

              {/* Part title */}
              <p className="text-xs font-medium text-gray-400 mb-6 px-1">
                {PART_LABELS[currentPart]}
              </p>

              {/* Questions */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPart}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  {partQuestions.map((q) => (
                    <div
                      key={q.id}
                      id={`quiz-question-${q.id}`}
                      className="bg-[#F3F4F6] rounded-2xl p-5"
                    >
                      <p className="font-semibold text-gray-800 mb-4 text-sm">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F97316] text-white text-xs font-black mr-2">
                          {q.id}
                        </span>
                        {q.question}
                      </p>
                      <div className="space-y-2">
                        {q.options.map((opt) => (
                          <button
                            key={opt.key}
                            id={`quiz-q${q.id}-opt-${opt.key}`}
                            onClick={() => setAnswer(q.id, opt.key)}
                            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium border-2 transition-all duration-150 ${
                              answers[q.id] === opt.key
                                ? 'border-[#1E3A8A] bg-[#1E3A8A] text-white'
                                : 'border-transparent bg-white text-gray-700 hover:border-[#1E3A8A]/25 hover:bg-[#1E3A8A]/5'
                            }`}
                          >
                            <span className="font-bold mr-2 opacity-60">{opt.key}.</span>
                            {opt.text}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Footer bar */}
              <div className="mt-8 flex items-center justify-between">
                <p className="text-sm text-gray-400">
                  Đã trả lời:{' '}
                  <span className="font-bold text-[#1E3A8A]">{totalAnswered}</span>
                  <span className="text-gray-300">/18</span>
                </p>
                <div className="flex gap-3">
                  {currentPart < 3 && (
                    <button
                      id="quiz-next-part"
                      onClick={() => setCurrentPart((p) => p + 1)}
                      className="px-5 py-2.5 bg-gray-100 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                    >
                      Phần tiếp →
                    </button>
                  )}
                  {currentPart === 3 && (
                    <button
                      id="quiz-submit"
                      onClick={() => allAnswered && setSubmitted(true)}
                      disabled={!allAnswered}
                      className="px-6 py-2.5 bg-[#F97316] text-white text-sm font-semibold rounded-xl hover:bg-[#ea6c0c] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                      Xem kết quả 🎯
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {/* Result card */}
              <div className={`rounded-3xl border-2 p-10 mb-8 text-center ${result.bg}`}>
                <div className="text-7xl mb-5">{result.emoji}</div>
                <div className="flex items-end justify-center gap-1 mb-3">
                  <span className={`text-5xl font-black ${result.color}`}>{score}</span>
                  <span className="text-gray-400 text-xl mb-1">/ {MAX_SCORE}</span>
                </div>
                {/* Score bar */}
                <div className="w-full max-w-xs mx-auto bg-gray-200 rounded-full h-2 mb-6">
                  <motion.div
                    className={`h-2 rounded-full ${result.bar}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${(score / MAX_SCORE) * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </div>
                <h2 className={`text-2xl font-black mb-3 ${result.color}`}>{result.label}</h2>
                <p className="text-gray-700 max-w-sm mx-auto leading-relaxed text-sm">
                  {result.desc}
                </p>
              </div>

              {/* Legend */}
              <div className="grid grid-cols-3 gap-3 mb-8 text-xs">
                {[
                  { range: '0 – 10', label: 'OKEEE BRO!', cls: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
                  { range: '11 – 22', label: 'Tạm ổn', cls: 'bg-amber-50 border-amber-200 text-amber-700' },
                  { range: '23+', label: 'Cần cẩn trọng', cls: 'bg-rose-50 border-rose-200 text-rose-700' },
                ].map((r) => (
                  <div key={r.range} className={`rounded-xl border p-3 text-center ${r.cls}`}>
                    <p className="font-bold">{r.range} điểm</p>
                    <p className="opacity-80 mt-0.5">{r.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 justify-center">
                <button
                  id="quiz-retry"
                  onClick={handleReset}
                  className="px-6 py-3 bg-[#1E3A8A] text-white font-semibold rounded-xl hover:bg-[#163175] transition-colors"
                >
                  Làm lại
                </button>
                <Link
                  to="/"
                  className="px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-gray-300 transition-colors"
                >
                  Về trang chủ
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
