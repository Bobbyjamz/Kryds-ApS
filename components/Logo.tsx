import Link from "next/link";
import Monogram from "./Monogram";

interface LogoProps {
  /** "nav" = kompakt vandret, "full" = stablet som i det originale logo */
  variant?: "nav" | "full";
}

export default function Logo({ variant = "nav" }: LogoProps) {
  if (variant === "full") {
    return (
      <Link href="/" aria-label="Atelier Copenhagen — forside" className="inline-flex flex-col items-center no-underline">
        <Monogram size={64} />
        <span className="font-serif font-medium text-[30px] tracking-[.3em] mr-[-.3em] text-gold leading-none mt-5">
          ATELIER
        </span>
        <span className="flex items-center gap-3 mt-3 text-gold/80">
          <span className="block w-8 h-px bg-current" />
          <span className="font-sans text-[10px] tracking-[.45em] mr-[-.45em] leading-none">COPENHAGEN</span>
          <span className="block w-8 h-px bg-current" />
        </span>
      </Link>
    );
  }

  return (
    <Link href="/" aria-label="Atelier Copenhagen — forside" className="flex items-center gap-3 no-underline">
      <Monogram size={38} />
      <span className="flex flex-col">
        <span className="font-serif font-medium text-[21px] tracking-[.28em] text-gold leading-none">ATELIER</span>
        <span className="font-sans text-[8.5px] tracking-[.48em] text-gold/75 leading-none mt-[6px]">COPENHAGEN</span>
      </span>
    </Link>
  );
}
