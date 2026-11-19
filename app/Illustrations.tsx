// Original line-art illustrations in the Vyoma palette (midnight navy, white, electric blue).
// Swap any of these for licensed photography by replacing the component with <Image />.
const L = "#8fb8ff", B = "#2f7bff", W = "#e6eeff";
const line = { fill: "none", stroke: L, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function Frame({ id, label, w = 320, h = 200, children }: { id: string; label: string; w?: number; h?: number; children: React.ReactNode }) {
  return (
    <svg className="illo" viewBox={`0 0 ${w} ${h}`} role="img" aria-label={label} preserveAspectRatio="xMidYMid slice">
      <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0d2260" /><stop offset="1" stopColor="#050d2b" /></linearGradient></defs>
      <rect width={w} height={h} fill={`url(#${id})`} />
      <ellipse cx={w * 0.78} cy={h * 0.18} rx={w * 0.42} ry={h * 0.2} fill="none" stroke="rgba(120,170,255,.22)" strokeWidth="2" transform={`rotate(-22 ${w * 0.78} ${h * 0.18})`} />
      {children}
    </svg>
  );
}
const Person = ({ x, y, s = 1, fill = W }: { x: number; y: number; s?: number; fill?: string }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}><circle cx="0" cy="-44" r="11" fill={fill} /><path d="M-20 0v-10a20 20 0 0 1 40 0v10z" fill={B} /></g>
);
const Book = ({ x, y, w = 56, c = B }: { x: number; y: number; w?: number; c?: string }) => <g><rect x={x} y={y} width={w} height="12" rx="2" fill={c} /><line x1={x + 6} y1={y + 6} x2={x + w - 6} y2={y + 6} stroke="#050d2b" strokeWidth="1.5" /></g>;
const Atom = ({ x, y, r = 22 }: { x: number; y: number; r?: number }) => (
  <g transform={`translate(${x} ${y})`} {...line}><ellipse rx={r} ry={r * 0.4} /><ellipse rx={r} ry={r * 0.4} transform="rotate(60)" /><ellipse rx={r} ry={r * 0.4} transform="rotate(120)" /><circle r="3.5" fill={B} stroke="none" /></g>
);

export type PathwayKind = "school" | "puc" | "ug" | "pro" | "exam" | "tech" | "voc";

export function PathwayIllustration({ kind }: { kind: PathwayKind }) {
  switch (kind) {
    case "school": return (
      <Frame id="i-school" label="Illustration: school students learning Mathematics and Science at a classroom board">
        <rect {...line} x="70" y="28" width="190" height="98" rx="6" fill="#0a1a4a" />
        <text x="92" y="62" fill={W} fontSize="17" fontFamily="sans-serif">a² + b² = c²</text>
        <path d="M96 112V84l34 28z" {...line} /><circle cx="205" cy="92" r="14" {...line} /><path d="M205 78v28M191 92h28" stroke={B} strokeWidth="2" />
        <rect x="64" y="126" width="202" height="6" rx="3" fill={B} />
        <Person x={110} y={178} s={1.1} /><Person x={170} y={180} s={1.1} fill="#c9d8ff" /><Person x={232} y={178} s={1.1} />
        <Book x={20} y={160} w={40} /><Book x={24} y={148} w={34} c="#5ca3ff" />
      </Frame>);
    case "puc": return (
      <Frame id="i-puc" label="Illustration: higher secondary students studying Science and Commerce">
        <path d="M70 60h26M76 60v30l-22 38a8 8 0 0 0 7 12h50a8 8 0 0 0 7-12L96 90V60" {...line} /><path d="M60 118h50" stroke={B} strokeWidth="6" strokeLinecap="round" />
        <rect {...line} x="150" y="38" width="62" height="84" rx="8" fill="#0a1a4a" /><rect x="160" y="48" width="42" height="16" rx="3" fill={B} />
        {[0, 1, 2].flatMap(r => [0, 1, 2].map(c => <circle key={`${r}${c}`} cx={168 + c * 14} cy={82 + r * 14} r="4" fill={L} />))}
        <Atom x={256} y={64} r={24} />
        <Person x={96} y={180} s={1.15} fill="#c9d8ff" /><Person x={160} y={182} s={1.15} /><Person x={224} y={180} s={1.15} fill="#c9d8ff" />
        <text x="236" y="122" fill={L} fontSize="22" fontFamily="sans-serif">₹ %</text>
      </Frame>);
    case "ug": return (
      <Frame id="i-ug" label="Illustration: a university campus with a computer and engineering laboratory">
        <path {...line} d="M60 78 160 30l100 48z" fill="#0a1a4a" /><path d="M72 86h176M84 86v62M120 86v62M160 86v62M200 86v62M236 86v62" {...line} /><path d="M60 148h200M52 160h216" stroke={B} strokeWidth="6" strokeLinecap="round" />
        <rect {...line} x="116" y="164" width="88" height="24" rx="3" fill="#0a1a4a" /><path d="M104 190h112" {...line} />
        <circle cx="160" cy="62" r="8" {...line} /><text x="262" y="30" fill={L} fontSize="13" fontFamily="sans-serif">B.Com · BBA · BCA</text>
        <g transform="translate(34 30)" {...line}><circle r="9" /><circle r="3" fill={B} stroke="none" /></g>
      </Frame>);
    case "pro": return (
      <Frame id="i-pro" label="Illustration: accounting books, calculator and financial charts for professional examinations">
        <rect {...line} x="46" y="34" width="70" height="96" rx="8" fill="#0a1a4a" /><rect x="56" y="44" width="50" height="22" rx="3" fill={B} />
        {[0, 1, 2, 3].flatMap(r => [0, 1, 2].map(c => <circle key={`${r}${c}`} cx={66 + c * 20} cy={82 + r * 14} r="4.5" fill={L} />))}
        <rect {...line} x="140" y="40" width="130" height="84" rx="6" fill="#0a1a4a" />
        <rect x="156" y="88" width="16" height="26" fill={B} /><rect x="182" y="72" width="16" height="42" fill="#5ca3ff" /><rect x="208" y="58" width="16" height="56" fill={B} /><rect x="234" y="50" width="16" height="64" fill="#5ca3ff" />
        <Book x={60} y={150} w={110} /><Book x={72} y={162} w={96} c="#5ca3ff" /><Book x={56} y={174} w={116} c="#1654d9" />
        <circle cx="236" cy="162" r="16" {...line} /><text x="230" y="168" fill={L} fontSize="16" fontFamily="sans-serif">₹</text>
      </Frame>);
    case "exam": return (
      <Frame id="i-exam" label="Illustration: entrance examination preparation with Science and Mathematics study materials">
        <rect {...line} x="50" y="30" width="110" height="140" rx="8" fill="#0a1a4a" />
        {[0, 1, 2, 3, 4].map(r => <g key={r}>{[0, 1, 2, 3].map(c => <circle {...line} key={c} cx={80 + c * 20} cy={58 + r * 22} r="6" fill={r === 1 && c === 2 || r === 3 && c === 0 ? B : "none"} />)}<line x1="64" y1={58 + r * 22} x2="70" y2={58 + r * 22} {...line} strokeWidth="1.5" /></g>)}
        <circle cx="236" cy="70" r="40" {...line} /><circle cx="236" cy="70" r="24" {...line} /><circle cx="236" cy="70" r="8" fill={B} />
        <path d="M236 70 280 26M270 26h10v10" {...line} stroke={W} />
        <Atom x={236} y={150} r={22} /><text x="190" y="190" fill={L} fontSize="14" fontFamily="sans-serif">π  ∑  ∫</text>
      </Frame>);
    case "tech": return (
      <Frame id="i-tech" label="Illustration: artificial intelligence, cybersecurity and coding">
        <rect {...line} x="110" y="56" width="68" height="68" rx="8" fill="#0a1a4a" /><rect x="130" y="76" width="28" height="28" rx="4" fill={B} />
        {[122, 144, 166].map(x => <g key={x}><line x1={x} y1="56" x2={x} y2="40" {...line} /><line x1={x} y1="124" x2={x} y2="140" {...line} /></g>)}
        {[68, 90, 112].map(y => <g key={y}><line x1="110" y1={y} x2="94" y2={y} {...line} /><line x1="178" y1={y} x2="194" y2={y} {...line} /></g>)}
        <text x="137" y="95" fill="#050d2b" fontSize="12" fontWeight="700" fontFamily="sans-serif">AI</text>
        <path {...line} d="M244 52 282 66v30c0 22-14 36-38 46-24-10-38-24-38-46V66z" transform="translate(-8 -4)" fill="#0a1a4a" /><path d="m228 98 10 10 20-22" {...line} stroke={W} strokeWidth="3" />
        <rect {...line} x="40" y="150" width="130" height="34" rx="6" fill="#0a1a4a" /><text x="54" y="172" fill={L} fontSize="15" fontFamily="monospace">{"</> code"}</text>
        <rect x="190" y="156" width="80" height="12" rx="3" fill={B} opacity=".7" /><rect x="190" y="174" width="52" height="10" rx="3" fill={L} opacity=".5" />
      </Frame>);
    case "voc": return (
      <Frame id="i-voc" label="Illustration: practical vocational training and a small business, with a shopfront and creative skills">
        <path d="M60 70h140l10 28H50z" fill={B} /><path d="M50 98c0 8 8 12 14 12s14-4 14-12c0 8 8 12 14 12s14-4 14-12c0 8 8 12 14 12s14-4 14-12c0 8 8 12 14 12s14-4 14-12" {...line} stroke={W} />
        <rect {...line} x="62" y="112" width="136" height="68" fill="#0a1a4a" /><rect x="76" y="126" width="48" height="54" {...line} /><rect x="136" y="126" width="50" height="30" rx="3" {...line} />
        <g transform="translate(250 70)" {...line}><path d="M-22 12c-4-18 4-30 22-30s26 12 22 30z" fill="#0a1a4a" /><path d="M-22 12h44l-6 22h-32z" fill={B} stroke={L} /><circle cy="-24" r="5" fill={W} stroke="none" /></g>
        <g transform="translate(250 144)" {...line}><circle cx="-12" cy="14" r="8" /><circle cx="12" cy="14" r="8" /><path d="M-6 8 18-24M6 8-18-24" /></g>
      </Frame>);
  }
}

export function LiveClassIllustration() {
  return (
    <Frame id="i-live" w={480} h={320} label="Illustration: a small group of students in a live online class on a laptop">
      <rect {...line} x="96" y="44" width="288" height="190" rx="12" fill="#0a1a4a" />
      <rect x="112" y="60" width="164" height="112" rx="8" fill="#123a9a" /><Person x={194} y={168} s={1.9} />
      {[0, 1, 2].map(i => <g key={i}><rect x="288" y={60 + i * 38} width="80" height="34" rx="6" fill="#0d2a78" /><circle cx={316} cy={74 + i * 38} r="6" fill={W} /><path d={`M303 ${90 + i * 38}a13 8 0 0 1 26 0z`} fill={B} /></g>)}
      <rect x="112" y="182" width="256" height="36" rx="8" fill="#0d2a78" />
      {[0, 1, 2, 3].map(i => <circle key={i} cx={150 + i * 28} cy="200" r="8" fill={i === 3 ? "#ff5d73" : "none"} stroke={i === 3 ? "none" : L} strokeWidth={2} />)}
      <rect x="296" y="192" width="64" height="16" rx="4" fill={B} />
      <path {...line} d="M60 246h360l-24 20H84z" fill="#123a9a" />
      <rect x="112" y="18" width="62" height="22" rx="11" fill="#ff5d73" /><text x="126" y="34" fill="#fff" fontSize="13" fontWeight="700" fontFamily="sans-serif">● LIVE</text>
    </Frame>
  );
}

export function CounsellingIllustration() {
  return (
    <Frame id="i-couns" w={480} h={320} label="Illustration: an education counsellor discussing learning pathways with a student or parent">
      <rect {...line} x="80" y="30" width="130" height="56" rx="16" fill="#0a1a4a" /><path {...line} d="M120 86l-8 18 24-18" fill="#0a1a4a" />
      {[112, 145, 178].map(x => <circle key={x} cx={x} cy="58" r="5" fill={L} />)}
      <rect {...line} x="270" y="40" width="140" height="64" rx="16" fill="#0a1a4a" />
      <path d="M290 84h30l20-22h40M320 84l20 18h50" {...line} stroke={W} /><circle cx="390" cy="62" r="4" fill={B} /><circle cx="390" cy="102" r="4" fill={B} />
      <Person x={150} y={246} s={2.4} fill="#c9d8ff" /><Person x={330} y={246} s={2.4} />
      <path d="M118 246l10-8M182 246l-10-8" stroke="#fff" strokeWidth="3" />
      <rect x="60" y="244" width="360" height="14" rx="7" fill="#1654d9" />
      <rect x="196" y="226" width="88" height="18" rx="3" fill={W} /><line x1="206" y1="235" x2="274" y2="235" stroke="#0a1a4a" strokeWidth="2" />
    </Frame>
  );
}
