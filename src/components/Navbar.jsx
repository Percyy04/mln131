import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'TRANG CHỦ', end: true, icon: '★' },
  { to: '/ly-thuyet', label: 'LÝ THUYẾT', icon: '🏛️' },
  { to: '/truyen-tranh', label: 'TRUYỆN', icon: '✊' },
  { to: '/quiz', label: 'QUIZ', icon: '🎯' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <nav className="hidden md:flex fixed top-0 left-0 h-screen w-[90px] hover:w-[260px] bg-[#111] text-[#EBE5D9] border-r-[8px] border-[#D32F2F] flex-col justify-between py-10 transition-all duration-300 z-50 group overflow-hidden shadow-[8px_0_0_0_#111]">
        
        {/* LOGO */}
        <Link to="/" className="flex flex-col items-center gap-2 group-hover:items-start group-hover:px-8 transition-all relative">
          <div className="text-4xl font-black text-[#D32F2F] leading-none tracking-tighter shadow-black drop-shadow-md">MLN</div>
          <div className="text-xl font-black bg-[#EBE5D9] text-[#111] px-1 transform -skew-x-[15deg] group-hover:ml-8 transition-all shadow-[4px_4px_0_0_#D32F2F]">131</div>
        </Link>

        {/* MENU ITEMS */}
        <ul className="flex flex-col gap-4 w-full mt-10 flex-1">
          {navLinks.map((link) => (
            <li key={link.to} className="w-full">
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `flex items-center w-full px-7 py-4 font-black text-[1.1rem] whitespace-nowrap transition-colors border-l-[8px] ${
                    isActive 
                      ? 'border-[#D32F2F] bg-[#1a1a1a] text-[#D32F2F]' 
                      : 'border-transparent text-[#EBE5D9] hover:bg-[#D32F2F] hover:text-[#111]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="w-8 flex justify-center shrink-0 -ml-2 mr-5 text-2xl">{link.icon}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 tracking-widest">
                      {link.label}
                    </span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* BOTTOM DECORATION */}
        <div className="px-6 flex justify-center group-hover:justify-start transition-all">
           <div className="w-10 h-10 rounded-full bg-[radial-gradient(#111_30%,#D32F2F_35%)] border-4 border-[#111]"></div>
        </div>
      </nav>

      {/* MOBILE TOPBAR */}
      <nav className="md:hidden fixed top-0 left-0 w-full h-[70px] bg-[#111] border-b-[6px] border-[#D32F2F] flex items-center justify-between px-6 z-50 shadow-[0_4px_0_0_#111]">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-black text-[#D32F2F] tracking-tighter drop-shadow-md">MLN</span>
          <span className="text-xl font-black bg-[#EBE5D9] text-[#111] px-1 transform -skew-x-[12deg]">131</span>
        </Link>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 text-[#EBE5D9]"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-[4px] bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[10px]' : ''}`} />
            <span className={`block h-[4px] bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[4px] bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[10px]' : ''}`} />
          </div>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-[70px] left-0 w-full bg-[#111] border-b-[8px] border-[#D32F2F] z-40 overflow-hidden shadow-[0_8px_0_0_#111]"
          >
            <ul className="flex flex-col py-6">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) =>
                      `flex items-center px-8 py-5 text-xl font-black tracking-widest transition-colors ${
                        isActive 
                        ? 'text-[#D32F2F] bg-[#1a1a1a] border-l-[8px] border-[#D32F2F] pl-6' 
                        : 'text-[#EBE5D9] hover:bg-[#D32F2F] hover:text-[#111]'
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="mr-6 text-2xl">{link.icon}</span>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
