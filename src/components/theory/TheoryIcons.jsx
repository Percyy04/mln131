/** Icon SVG tối giản, nét đậm — phong cách đồ họa tuyên truyền / constructivism */

const prop = {
  stroke: '#111',
  fill: 'currentColor',
}

export function IconStar({ className = 'w-6 h-6', accent = '#D32F2F' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={accent} aria-hidden>
      <path d="M12 2l2.9 7.4h7.8l-6.3 4.8 2.4 7.8L12 17.8 5.2 22l2.4-7.8L1.3 9.4H9L12 2z" stroke={prop.stroke} strokeWidth="1.2" />
    </svg>
  )
}

export function IconHome({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={prop.stroke} strokeWidth="2.2" aria-hidden>
      <path d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z" fill="#EBE5D9" />
    </svg>
  )
}

export function IconBook({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 4h8a4 4 0 014 4v12H8a4 4 0 00-4 4V4z" fill="#D32F2F" stroke="#111" strokeWidth="2" />
      <path d="M20 4h-8a4 4 0 00-4 4v12h8a4 4 0 004-4V4z" fill="#EBE5D9" stroke="#111" strokeWidth="2" />
      <path d="M8 8h4M8 12h4" stroke="#111" strokeWidth="1.5" />
    </svg>
  )
}

/** Cân công lý — trụ, thanh, hai đĩa cân (đọc ngay là “luật / công bằng”) */
export function IconScale({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 4v14" stroke="#111" strokeWidth="2.5" strokeLinecap="square" />
      <path d="M4 20h16v2H4v-2z" fill="#111" />
      <path d="M3 9h18" stroke="#111" strokeWidth="2.5" strokeLinecap="square" />
      <path d="M6 9v5" stroke="#111" strokeWidth="2" />
      <path d="M18 9v5" stroke="#111" strokeWidth="2" />
      <rect x="3" y="14" width="6" height="4" rx="0.5" fill="#EBE5D9" stroke="#111" strokeWidth="2" />
      <rect x="15" y="14" width="6" height="4" rx="0.5" fill="#D32F2F" stroke="#111" strokeWidth="2" />
    </svg>
  )
}

/**
 * Đoàn kết dân tộc – tôn giáo: ngôi sao + hai nhân vật khối + vạch nối
 * (thay cho hai vòng tròn trông như “hai chấm” trong ô đen).
 */
export function IconUnity({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2.5l1.8 4.2h4.5l-3.6 2.6 1.4 4.3L12 11.2 8.9 13.6l1.4-4.3L6.7 6.7h4.5L12 2.5z"
        fill="#D32F2F"
        stroke="#111"
        strokeWidth="1.3"
      />
      <path d="M12 12v2.5" stroke="#111" strokeWidth="2" strokeLinecap="square" />
      <circle cx="8" cy="17.2" r="1.9" fill="#EBE5D9" stroke="#111" strokeWidth="1.6" />
      <rect x="5.4" y="18.8" width="5.2" height="3.8" fill="#EBE5D9" stroke="#111" strokeWidth="1.6" />
      <circle cx="16" cy="17.2" r="1.9" fill="#D32F2F" stroke="#111" strokeWidth="1.6" />
      <rect x="13.4" y="18.8" width="5.2" height="3.8" fill="#D32F2F" stroke="#111" strokeWidth="1.6" />
      <path d="M10.5 19.5h3" stroke="#111" strokeWidth="2" strokeLinecap="square" />
    </svg>
  )
}

export function IconMountain({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 20l6-10 4 6 3-4 5 8H3z" fill="#D32F2F" stroke="#111" strokeWidth="2" />
      <path d="M10 12l2-3 2 3" stroke="#111" strokeWidth="1.5" />
    </svg>
  )
}

export function IconBrain({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <ellipse cx="12" cy="11" rx="7" ry="6" fill="#EBE5D9" stroke="#111" strokeWidth="2" />
      <path
        d="M9 9c0-1 1-2 3-2s3 1 3 2M9 13h6"
        stroke="#111"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconHeart({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 21s-7-4.5-7-10a4 4 0 017-3 4 4 0 017 3c0 5.5-7 10-7 10z"
        fill="#D32F2F"
        stroke="#111"
        strokeWidth="2"
      />
    </svg>
  )
}

export function IconMegaphone({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 10v4l4 2V8l-4 2z" fill="#EBE5D9" stroke="#111" strokeWidth="2" />
      <path d="M8 8l10-4v16L8 16V8z" fill="#D32F2F" stroke="#111" strokeWidth="2" />
    </svg>
  )
}

export function IconChevronRight({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
      <path d="M9 5l6 7-6 7" />
    </svg>
  )
}

export function IconScroll({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M8 3h6a4 4 0 014 4v12H8a4 4 0 01-4-4V7a4 4 0 014-4z" fill="#EBE5D9" stroke="#111" strokeWidth="2" />
      <path d="M8 8h8M8 12h6" stroke="#111" strokeWidth="1.5" />
    </svg>
  )
}

export const sectionIconById = {
  'phan-ii': IconBook,
  'muc-2': IconScale,
  'phan-iii': IconUnity,
}

export const columnIcons = [IconMountain, IconBrain, IconHeart]
