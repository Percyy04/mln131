import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { theorySections } from '../data/theoryData'
import {
  IconBook,
  IconBrain,
  IconChevronRight,
  IconHeart,
  IconHome,
  IconMegaphone,
  IconMountain,
  IconScale,
  IconScroll,
  IconStar,
  IconUnity,
  columnIcons,
  sectionIconById,
} from '../components/theory/TheoryIcons'

const C = {
  red: '#D32F2F',
  cream: '#EBE5D9',
  black: '#111',
}

const propAccents = {
  blue: {
    stepBg: 'bg-[#D32F2F] text-[#EBE5D9] border-[6px] border-[#111]',
    panel: 'from-[#e8e2d6] to-[#EBE5D9]',
    navCard:
      'bg-[#EBE5D9] border-[6px] border-[#111] shadow-[12px_12px_0_0_#D32F2F] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[16px_16px_0_0_#D32F2F]',
  },
  orange: {
    stepBg: 'bg-[#111] text-[#EBE5D9] border-[6px] border-[#D32F2F]',
    panel: 'from-[#ded8cc] to-[#EBE5D9]',
    navCard:
      'bg-[#EBE5D9] border-[6px] border-[#111] shadow-[12px_12px_0_0_#111] hover:-translate-y-1 hover:shadow-[16px_16px_0_0_#D32F2F]',
  },
  slate: {
    stepBg: 'bg-[#D32F2F] text-[#EBE5D9] border-[6px] border-[#111]',
    panel: 'from-[#e5dfd3] to-[#EBE5D9]',
    navCard:
      'bg-[#EBE5D9] border-[6px] border-[#111] shadow-[12px_12px_0_0_#D32F2F] hover:-translate-y-1 hover:shadow-[16px_16px_0_0_#111]',
  },
}

function SlideBlock({ block, st }) {
  switch (block.kind) {
    case 'highlight':
      return (
        <div className="flex gap-4 items-start border-l-[8px] border-[#D32F2F] bg-[#111] pl-5 py-4 pr-4">
          <IconMegaphone className="w-8 h-8 shrink-0 text-[#D32F2F]" />
          <p className="text-sm sm:text-base font-black text-[#EBE5D9] uppercase leading-snug tracking-tight">
            {block.text}
          </p>
        </div>
      )
    case 'columns':
      return (
        <div className="space-y-4">
          {block.title && (
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#D32F2F]">
              <IconScroll className="w-5 h-5" />
              {block.title}
            </p>
          )}
          <div className="grid gap-4 sm:grid-cols-3">
            {block.items.map((col, i) => {
              const ColIcon = columnIcons[i] || IconMountain
              return (
                <div
                  key={i}
                  className="border-[6px] border-[#111] bg-[#EBE5D9] p-4 shadow-[6px_6px_0_0_#111] flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <ColIcon className="w-7 h-7 shrink-0" />
                    <span className="text-[10px] font-black text-[#D32F2F]">0{i + 1}</span>
                  </div>
                  <p className="font-black text-[#111] text-xs uppercase leading-tight">{col.t}</p>
                  <p className="text-xs text-[#111] font-bold leading-relaxed">{col.d}</p>
                </div>
              )
            })}
          </div>
        </div>
      )
    case 'pills':
      return (
        <div className="space-y-3">
          {block.title && (
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#111]">
              <IconStar className="w-5 h-5" accent={C.red} />
              {block.title}
            </p>
          )}
          <div className="flex flex-wrap gap-2">
            {block.items.map((p, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 border-[4px] border-[#111] bg-[#D32F2F] px-3 py-2 text-xs font-black uppercase text-[#EBE5D9] shadow-[4px_4px_0_0_#111]"
              >
                <IconStar className="w-4 h-4" accent="#EBE5D9" />
                {p}
              </span>
            ))}
          </div>
        </div>
      )
    case 'bullets_short':
      return (
        <ul className="space-y-3">
          {block.items.map((line, i) => (
            <li
              key={i}
              className="flex gap-3 items-start text-sm sm:text-base text-[#111] font-black uppercase leading-snug border-l-4 border-[#D32F2F] pl-4 py-1"
            >
              <IconStar className="w-5 h-5 shrink-0 mt-0.5" accent={C.red} />
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
              className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 border-[6px] border-[#111] bg-[#EBE5D9] p-4 shadow-[8px_8px_0_0_#D32F2F] relative group"
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center text-lg font-black ${st.stepBg}`}
                aria-hidden
              >
                {i + 1}
              </span>
              <div className="min-w-0 flex-1 pr-6">
                <p className="font-black text-[#111] text-sm sm:text-base uppercase leading-tight">
                  {it.head}
                </p>
                {it.sub && (
                  <p className="mt-1 text-xs sm:text-sm text-[#111] font-bold leading-relaxed normal-case opacity-90">
                    {it.sub}
                  </p>
                )}
              </div>
              <IconChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#111]/25 group-hover:text-[#D32F2F] transition-colors" />
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
    <div className="font-sans bg-[#EBE5D9] text-[#111] selection:bg-[#D32F2F] selection:text-[#EBE5D9] overflow-hidden">
      {/* Hero — cùng ngôn ngữ với Home */}
      <section className="relative border-b-[12px] border-[#111] bg-[#D32F2F] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(#111_2px,transparent_2px)] [background-size:8px_8px]" />
        </div>
        <div className="absolute top-0 right-0 w-[55%] h-full bg-[#111] opacity-90 origin-top-right -skew-x-12 translate-x-1/4 hidden md:block" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 pt-28 pb-16">
          <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-wider text-[#EBE5D9] mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 border-[4px] border-[#EBE5D9] bg-[#111] px-3 py-1.5 hover:bg-[#D32F2F] transition-colors"
            >
              <IconHome className="w-4 h-4" />
              Trang chủ
            </Link>
            <span className="text-[#EBE5D9]/60">/</span>
            <span className="flex items-center gap-2">
              <IconBook className="w-5 h-5" />
              Lý thuyết
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-2xl mx-auto md:mx-0 border-[8px] md:border-[12px] border-[#111] bg-[#EBE5D9] p-6 md:p-10 shadow-[12px_12px_0_0_#111] relative"
          >
            <div className="absolute -top-3 -right-10 text-[4rem] md:text-[5rem] text-[#D32F2F] drop-shadow-[4px_4px_0_#111] rotate-[12deg] select-none pointer-events-none">
              ★
            </div>

            <div className="mb-4 inline-flex items-center gap-2 bg-[#111] text-[#EBE5D9] px-4 py-2 font-black tracking-[0.15em] uppercase text-[10px] sm:text-xs border-[4px] border-[#D32F2F]">
              <IconScroll className="w-4 h-4" />
              MLN131 — Lý thuyết
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#D32F2F] uppercase tracking-tighter leading-[0.95] mb-4">
              Tôn giáo
              <span className="block text-[#111] text-2xl sm:text-3xl md:text-4xl mt-2">
                Thời kỳ quá độ &amp; Dân tộc–tôn giáo
              </span>
            </h1>

            <div className="bg-[#111] text-[#EBE5D9] px-4 py-3 inline-block">
              <p className="text-xs sm:text-sm font-black uppercase tracking-wide max-w-full">
                Lý luận → thực tiễn Việt Nam → định hướng dân tộc &amp; tôn giáo
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mục lục */}
      <section className="py-12 px-5 sm:px-6 bg-[#111] relative">
        <div className="absolute inset-0 opacity-[0.04] bg-[repeating-linear-gradient(45deg,#EBE5D9,#EBE5D9_10px,transparent_10px,transparent_20px)] pointer-events-none" aria-hidden />

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-[#D32F2F] text-3xl md:text-5xl font-black uppercase tracking-tighter text-center mb-2 drop-shadow-[3px_3px_0_#EBE5D9]">
            Nội dung
          </h2>
          <div className="h-2 w-32 bg-[#EBE5D9] mx-auto mb-10" />
          <nav className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-6" aria-label="Mục lục">
            {theorySections.map((part) => {
              const st = propAccents[part.accent] || propAccents.blue
              const SectionIcon = sectionIconById[part.id] || IconBook
              return (
                <a
                  key={part.id}
                  href={`#${part.id}`}
                  className={`group flex flex-col p-6 transition-all ${st.navCard}`}
                >
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="border-[4px] border-[#111] bg-[#111] p-2 text-[#EBE5D9]">
                      <SectionIcon className="w-10 h-10" />
                    </div>
                    <span className="text-4xl font-black text-[#D32F2F] rotate-[-6deg] group-hover:rotate-0 transition-transform">
                      {part.step}
                    </span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#D32F2F]">
                    {part.chapter}
                  </span>
                  <span className="mt-2 text-lg font-black text-[#111] uppercase leading-tight">
                    {part.title}
                  </span>
                  {part.tagline && (
                    <span className="mt-3 text-xs text-[#111] font-bold leading-relaxed normal-case opacity-90">
                      {part.tagline}
                    </span>
                  )}
                </a>
              )
            })}
          </nav>
        </div>
      </section>

      {/* Các phần */}
      <section className="py-12 px-5 sm:px-6 bg-[#EBE5D9]">
        <div className="max-w-4xl mx-auto space-y-12">
          {theorySections.map((part) => {
            const st = propAccents[part.accent] || propAccents.blue
            const SectionIcon = sectionIconById[part.id] || IconBook
            return (
              <motion.article
                key={part.id}
                id={part.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4 }}
                className="scroll-mt-28"
              >
                <div className="border-[8px] border-[#111] bg-[#EBE5D9] shadow-[16px_16px_0_0_#D32F2F] overflow-hidden">
                  <div className={`relative px-6 sm:px-8 py-8 sm:py-10 bg-gradient-to-br ${st.panel}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-16 w-16 shrink-0 items-center justify-center text-2xl font-black ${st.stepBg}`}
                          aria-hidden
                        >
                          {part.step}
                        </div>
                        <div className="border-[4px] border-[#111] bg-[#111] p-2 text-[#EBE5D9] hidden sm:block">
                          <SectionIcon className="w-12 h-12" />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#D32F2F]">
                          {part.chapter}
                        </p>
                        <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-black text-[#111] uppercase leading-[0.95] tracking-tight">
                          {part.title}
                        </h2>
                      </div>
                    </div>
                    {part.lead && (
                      <p className="mt-6 flex items-start gap-3 border-l-[8px] border-[#D32F2F] bg-[#111] pl-4 py-3 text-sm sm:text-base font-black uppercase text-[#EBE5D9] tracking-tight">
                        <IconStar className="w-6 h-6 shrink-0 mt-0.5" accent={C.red} />
                        {part.lead}
                      </p>
                    )}
                  </div>

                  <div className="px-5 sm:px-8 py-8 space-y-10 bg-[#ebe8df] border-t-[8px] border-[#111]">
                    {part.sections.map((sec, sei) => (
                      <div key={sei} className="space-y-8">
                        {sec.heading ? (
                          <h3 className="inline-flex items-center gap-2 bg-[#D32F2F] text-[#EBE5D9] px-4 py-2 text-sm sm:text-base font-black uppercase tracking-wide border-[4px] border-[#111] shadow-[4px_4px_0_0_#111]">
                            {sec.heading === 'Đặc điểm' && <IconUnity className="w-6 h-6" />}
                            {sec.heading === 'Định hướng' && <IconScale className="w-6 h-6" />}
                            {sec.heading === 'CN Mác – Lênin về tôn giáo' && <IconBook className="w-6 h-6" />}
                            {![
                              'Đặc điểm',
                              'Định hướng',
                              'CN Mác – Lênin về tôn giáo',
                            ].includes(sec.heading) && <IconScroll className="w-6 h-6" />}
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
                                  <h4 className="flex flex-wrap items-center gap-3 text-xl sm:text-2xl font-black text-[#111] uppercase">
                                    {hasLabel && (
                                      <span className="inline-flex items-center justify-center min-w-[2.5rem] h-10 border-[4px] border-[#111] bg-[#D32F2F] text-[#EBE5D9] text-lg">
                                        {sub.label}
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
                      <aside className="border-[6px] border-[#111] bg-[#D32F2F] px-6 py-8 text-center sm:text-left shadow-[8px_8px_0_0_#111] relative overflow-hidden">
                        <div className="absolute top-2 right-4 text-6xl text-white/10 pointer-events-none">
                          ★
                        </div>
                        <p className="relative z-10 flex items-center justify-center sm:justify-start gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#EBE5D9] mb-4">
                          <IconStar className="w-5 h-5" accent="#EBE5D9" />
                          {part.conclusion.label}
                        </p>
                        <ul className="relative z-10 space-y-3">
                          {part.conclusion.lines.map((line, i) => (
                            <li
                              key={i}
                              className="text-sm sm:text-base font-bold text-[#EBE5D9] leading-snug border-l-4 border-[#111] pl-4"
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
          className="max-w-4xl mx-auto mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-[#111] border-[8px] bg-[#EBE5D9] px-6 py-6 shadow-[12px_12px_0_0_#D32F2F]"
        >
          <p className="text-sm font-black uppercase text-[#111] text-center sm:text-left flex items-center gap-2">
            <IconBook className="w-6 h-6 shrink-0" />
            Tiếp · truyện tranh &amp; quiz
          </p>
          <Link
            to="/truyen-tranh"
            id="theory-next-comic"
            className="inline-flex items-center gap-2 border-[6px] border-[#111] bg-[#D32F2F] px-6 py-3 text-sm font-black uppercase text-[#EBE5D9] shadow-[6px_6px_0_0_#111] hover:bg-[#111] hover:text-[#EBE5D9] transition-colors"
          >
            Truyện tranh
            <IconChevronRight className="w-5 h-5 text-[#EBE5D9]" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
