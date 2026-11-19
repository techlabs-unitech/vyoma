// "Vyoma's Universe": globe, open book and orbital rings in midnight navy and electric blue.
// Represents 360-degree learning and limitless possibilities. Original vector artwork, theme-independent.
export default function UniverseVisual() {
  const B = "#2f7bff", L = "#8fb8ff", W = "#e6eeff";
  return (
    <svg className="illo universe" viewBox="0 0 480 400" role="img" aria-label="Vyoma's Universe: a globe above an open book, encircled by orbital rings, representing 360-degree learning and limitless possibilities">
      <defs>
        <radialGradient id="u-bg" cx="50%" cy="42%" r="75%"><stop offset="0" stopColor="#14399a" /><stop offset=".55" stopColor="#0a1a4a" /><stop offset="1" stopColor="#050d2b" /></radialGradient>
        <radialGradient id="u-globe" cx="38%" cy="32%" r="75%"><stop offset="0" stopColor="#4d94ff" /><stop offset=".6" stopColor="#1654d9" /><stop offset="1" stopColor="#0a2a8a" /></radialGradient>
        <filter id="u-glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="6" /></filter>
        <clipPath id="u-clip"><circle cx="240" cy="158" r="70" /></clipPath>
      </defs>
      <rect width="480" height="400" fill="url(#u-bg)" />
      {[[40,50],[90,320],[430,60],[445,300],[120,110],[372,350],[60,200],[420,180],[320,40],[170,360]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i%3===0?2.2:1.4} fill={W} opacity={i%2?0.55:0.85} />)}
      {/* orbital rings */}
      <ellipse cx="240" cy="168" rx="205" ry="62" transform="rotate(-18 240 168)" fill="none" stroke={B} strokeWidth="2" opacity=".75" />
      <ellipse cx="240" cy="168" rx="170" ry="48" transform="rotate(24 240 168)" fill="none" stroke={L} strokeWidth="1.5" opacity=".45" />
      <ellipse cx="240" cy="168" rx="230" ry="96" transform="rotate(-18 240 168)" fill="none" stroke="rgba(120,170,255,.25)" strokeWidth="1.5" />
      <circle cx="418" cy="118" r="7" fill={W} /><circle cx="418" cy="118" r="14" fill={B} opacity=".35" filter="url(#u-glow)" />
      <circle cx="64" cy="214" r="5" fill={L} /><circle cx="64" cy="214" r="11" fill={B} opacity=".35" filter="url(#u-glow)" />
      {/* globe */}
      <circle cx="240" cy="158" r="84" fill={B} opacity=".28" filter="url(#u-glow)" />
      <circle cx="240" cy="158" r="70" fill="url(#u-globe)" />
      <g clipPath="url(#u-clip)" fill="none" stroke={W} strokeWidth="1.3" opacity=".55">
        <ellipse cx="240" cy="158" rx="70" ry="26" /><ellipse cx="240" cy="158" rx="70" ry="52" />
        <ellipse cx="240" cy="158" rx="26" ry="70" /><ellipse cx="240" cy="158" rx="52" ry="70" />
        <line x1="170" y1="158" x2="310" y2="158" /><line x1="240" y1="88" x2="240" y2="228" />
        <path d="M200 112c14 6 24 2 34 14s-4 22 6 30 22-4 26 10-10 22-20 28" strokeWidth="2" opacity=".9" />
      </g>
      <circle cx="240" cy="158" r="70" fill="none" stroke={L} strokeWidth="2" />
      {/* front half of the main orbit passes in front of the globe */}
      <path d="M36 198A205 62 0 0 0 444 138" transform="rotate(0)" fill="none" stroke="none" />
      {/* open book */}
      <path d="M240 330c-34-20-86-24-132-14V248c46-10 98-6 132 14z" fill="#0d2a78" stroke={L} strokeWidth="2" strokeLinejoin="round" />
      <path d="M240 330c34-20 86-24 132-14V248c-46-10-98-6-132 14z" fill="#123a9a" stroke={L} strokeWidth="2" strokeLinejoin="round" />
      <path d="M240 262v68" stroke={W} strokeWidth="2" />
      {[0,1,2].map(i=><path key={i} d={`M126 ${268+i*14}c34-6 76-2 100 10M354 ${268+i*14}c-34-6-76-2-100 10`} stroke={L} strokeWidth="1.5" opacity=".55" fill="none" strokeLinecap="round" />)}
      <path d="M240 262c0-26 0-40 0-52" stroke={B} strokeWidth="3" strokeLinecap="round" opacity=".9" />
      <circle cx="240" cy="204" r="4" fill={W} />
    </svg>
  );
}
