import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { theorySections } from '../data/theoryData'

const accentStyles = {
  blue: {
    border: 'border-[#1E3A8A]/25',
    stepBg: 'bg-[#1E3A8A] text-white shadow-md shadow-[#1E3A8A]/25',
    stepSoft: 'bg-sky-100 text-[#1E3A8A]',
    dot: 'bg-[#1E3A8A]',
    label: 'text-[#1E3A8A]',
    glow: 'from-sky-50 via-white to-[#f8fafc]',
    navBg: 'from-sky-50/90 to-white border-sky-100/80',
  },
  orange: {
    border: 'border-[#fb923c]/40',
    stepBg: 'bg-[#F97316] text-white shadow-md shadow-orange-400/30',
    stepSoft: 'bg-orange-100 text-orange-900',
    dot: 'bg-[#F97316]',
    label: 'text-[#c2410c]',
    glow: 'from-orange-50 via-white to-amber-50/50',
    navBg: 'from-orange-50/90 to-amber-50/40 border-orange-100/80',
  },
  slate: {
    border: 'border-indigo-200/60',
    stepBg: 'bg-indigo-600 text-white shadow-md shadow-indigo-400/25',
    stepSoft: 'bg-indigo-100 text-indigo-900',
    dot: 'bg-indigo-500',
    label: 'text-indigo-800',
    glow: 'from-indigo-50 via-white to-slate-50',
    navBg: 'from-indigo-50/80 to-slate-50/80 border-indigo-100/80',
  },
}

function SlideBlock({ block, st }) {
  switch (block.kind) {
    case 'highlight':
      return (
        <p className="text-lg sm:text-xl font-semibold text-gray-900 leading-snug tracking-tight">
          {block.text}
        </p>
      )
    case 'columns':
      return (
        <div className="space-y-4">
          {block.title && (
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">{block.title}</p>
          )}
          <div className="grid gap-3 sm:grid-cols-3">
            {block.items.map((col, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-sky-100/90 px-4 py-4 shadow-sm shadow-slate-200/40"
              >
                <p className="font-bold text-[#1E3A8A] text-sm mb-1">{col.t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{col.d}</p>
              </div>
            ))}
          </div>
        </div>
      )
    case 'pills':
      return (
        <div className="space-y-3">
          {block.title && (
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">{block.title}</p>
          )}
          <div className="flex flex-wrap gap-2">
            {block.items.map((p, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-200/50"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      )
    case 'bullets_short':
      return (
        <ul className="space-y-4">
          {block.items.map((line, i) => (
            <li key={i} className="flex gap-3 items-start text-base sm:text-lg text-gray-800 font-medium leading-snug">
              <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${st.dot}`} />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      )
    case 'numbered_short':
      return (
        <ol className="space-y-4">
          {block.items.map((it, i) => (
            <li
              key={i}
              className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 rounded-2xl border border-slate-100 bg-white px-4 py-4 sm:px-5 shadow-sm shadow-slate-200/30"
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black text-white ${st.stepBg}`}
                aria-hidden
              >
                {i + 1}
              </span>
              <div>
                <p className="font-bold text-gray-900 text-base sm:text-lg leading-tight">{it.head}</p>
                {it.sub && <p className="mt-1 text-sm text-gray-500 leading-relaxed">{it.sub}</p>}
              </div>
            </li>
          ))}
        </ol>
      )
    default:
      return null
  }
}

export default function TheoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/70 via-white to-orange-50/40 pt-24 pb-16">
      <div className="relative max-w-4xl mx-auto px-5 sm:px-6">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link to="/" className="hover:text-[#1E3A8A] transition-colors">
            Trang chủ
          </Link>
          <span>/</span>
          <span className="text-slate-700 font-medium">Lý thuyết</span>
        </div>

        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 rounded-3xl border border-white/80 bg-white/70 px-6 py-8 shadow-lg shadow-slate-200/50 backdrop-blur-sm text-center ring-1 ring-slate-100"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#F97316] mb-3">
            Thuyết trình
          </p>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-[1.15] tracking-tight mb-4">
            Tôn giáo trong thời kỳ quá độ
            <span className="block text-[#1E3A8A] mt-1 text-xl sm:text-2xl font-bold">
              & quan hệ dân tộc — tôn giáo
            </span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
            Lý luận → thực tiễn Việt Nam → định hướng dân tộc & tôn giáo
          </p>
        </motion.header>

        <nav
          className="mb-12 grid grid-cols-1 sm:grid-cols-3 gap-3"
          aria-label="Mục lục"
        >
          {theorySections.map((part) => {
            const st = accentStyles[part.accent] || accentStyles.blue
            return (
              <a
                key={part.id}
                href={`#${part.id}`}
                className={`group flex flex-col rounded-2xl border bg-gradient-to-br p-4 shadow-md shadow-slate-200/40 transition hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 focus-visible:ring-offset-sky-50 ${st.navBg}`}
              >
                <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg text-xs font-black mb-2 shadow-sm ${st.stepSoft}`}>
                  {part.step}
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${st.label}`}>
                  {part.chapter}
                </span>
                <span className="mt-1 text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                  {part.title}
                </span>
                {part.tagline && (
                  <span className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {part.tagline}
                  </span>
                )}
              </a>
            )
          })}
        </nav>

        <div className="space-y-10">
          {theorySections.map((part) => {
            const st = accentStyles[part.accent] || accentStyles.blue
            return (
              <motion.article
                key={part.id}
                id={part.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.35 }}
                className="scroll-mt-24"
              >
                <div
                  className={`rounded-[1.75rem] border overflow-hidden bg-white shadow-xl shadow-slate-300/35 ring-1 ring-slate-100 ${st.border}`}
                >
                  <div className={`relative px-6 sm:px-8 py-8 sm:py-10 bg-gradient-to-br ${st.glow}`}>
                    <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-black text-white shadow-lg ${st.stepBg}`}
                          aria-hidden
                        >
                          {part.step}
                        </div>
                        <div>
                          <p className={`text-xs font-bold uppercase tracking-widest ${st.label}`}>
                            {part.chapter}
                          </p>
                          <h2 className="mt-1 text-2xl sm:text-3xl font-black text-gray-900 leading-tight max-w-xl">
                            {part.title}
                          </h2>
                        </div>
                      </div>
                    </div>
                    {part.lead && (
                      <p className="mt-6 text-lg font-semibold text-gray-800 border-l-4 border-[#F97316] pl-4 py-1">
                        {part.lead}
                      </p>
                    )}
                  </div>

                  <div className="px-5 sm:px-8 py-8 space-y-10 bg-white">
                    {part.sections.map((sec, sei) => (
                      <div key={sei} className="space-y-8">
                        {sec.heading ? (
                          <h3 className="text-lg sm:text-xl font-black text-[#1E3A8A] tracking-tight">
                            {sec.heading}
                          </h3>
                        ) : null}

                        <div className="space-y-8">
                          {sec.subsections.map((sub, subi) => {
                            const hasLabel = Boolean(sub.label)
                            const hasTitle = Boolean(sub.title)
                            return (
                              <div key={subi} className="space-y-6">
                                {(hasLabel || hasTitle) && (
                                  <h4 className="flex flex-wrap items-baseline gap-3 text-xl sm:text-2xl font-bold text-gray-900">
                                    {hasLabel && (
                                      <span className="text-[#F97316] font-black tabular-nums">
                                        {sub.label})
                                      </span>
                                    )}
                                    {hasTitle && <span>{sub.title}</span>}
                                  </h4>
                                )}
                                <div className="space-y-8">
                                  {sub.blocks.map((bl, bi) => (
                                    <SlideBlock key={bi} block={bl} st={st} />
                                  ))}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    ))}

                    {part.conclusion && part.conclusion.lines && (
                      <aside className="rounded-2xl border border-[#1E3A8A]/12 bg-gradient-to-br from-sky-50 via-white to-orange-50/40 px-6 py-8 text-center sm:text-left shadow-inner shadow-sky-100/80">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F97316] mb-4">
                          {part.conclusion.label}
                        </p>
                        <ul className="space-y-3">
                          {part.conclusion.lines.map((line, i) => (
                            <li
                              key={i}
                              className="text-lg font-semibold text-slate-800 leading-snug"
                            >
                              {line}
                            </li>
                          ))}
                        </ul>
                      </aside>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white px-6 py-5 shadow-md shadow-slate-200/40"
        >
          <p className="text-sm text-slate-600 text-center sm:text-left">
            Tiếp theo: truyện tranh & quiz
          </p>
          <Link
            to="/truyen-tranh"
            id="theory-next-comic"
            className="inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-6 py-3 text-sm font-bold text-white shadow-md shadow-orange-300/40 hover:bg-[#ea6c0c] transition-colors"
          >
            Truyện tranh →
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
