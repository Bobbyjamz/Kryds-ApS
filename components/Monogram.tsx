interface MonogramProps {
  size?: number;
  className?: string;
}

/** Cirkel-monogrammet fra logoet: dobbelt guldring med et "A". */
export default function Monogram({ size = 40, className = "" }: MonogramProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`flex-shrink-0 text-gold ${className}`}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <text
        x="50"
        y="67"
        textAnchor="middle"
        fill="currentColor"
        fontSize="50"
        fontWeight="500"
        style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
      >
        A
      </text>
    </svg>
  );
}
