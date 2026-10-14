interface LogoMarkProps {
  size?: number;
  className?: string;
}

/** Krydset fra logoet: én streg i guld og én i tekstfarven (som i KrydsByg-logoet, bare finere). */
export default function LogoMark({ size = 40, className = "" }: LogoMarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 90 90" className={`flex-shrink-0 ${className}`} aria-hidden="true">
      <line x1="16" y1="16" x2="74" y2="74" className="stroke-gold" strokeWidth="9" strokeLinecap="round" />
      <line x1="74" y1="16" x2="16" y2="74" className="stroke-cream" strokeWidth="9" strokeLinecap="round" />
    </svg>
  );
}
