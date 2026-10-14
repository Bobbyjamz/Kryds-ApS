import Link from "next/link";
import LogoMark from "./LogoMark";
import { site } from "@/lib/site";

interface LogoProps {
  /** "nav" = kompakt vandret, "full" = stablet og større (footer) */
  variant?: "nav" | "full";
}

export default function Logo({ variant = "nav" }: LogoProps) {
  if (variant === "full") {
    return (
      <Link href="/" aria-label={`${site.name} — forside`} className="inline-flex flex-col items-center no-underline">
        <LogoMark size={58} />
        <span className="font-serif font-medium text-[34px] tracking-[.3em] mr-[-.3em] text-cream leading-none mt-6">
          ATELIER
        </span>
      </Link>
    );
  }

  return (
    <Link href="/" aria-label={`${site.name} — forside`} className="flex items-center gap-3 no-underline">
      <LogoMark size={30} />
      <span className="font-serif font-medium text-[24px] tracking-[.26em] text-cream leading-none">ATELIER</span>
    </Link>
  );
}
