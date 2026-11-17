import Link from "next/link";
import { site } from "@/lib/site";

interface LogoProps {
  /** "nav" = lille i menuen, "full" = stort (footer) */
  variant?: "nav" | "full";
}

/** ATELIER SCANDINAVIA-ordmærket. Stilen ligger i .wordmark i app/globals.css. */
export default function Logo({ variant = "nav" }: LogoProps) {
  const size = variant === "full" ? "text-[60px] max-[640px]:text-[44px]" : "text-[25px] max-[400px]:text-[22px]";
  return (
    <Link href="/" aria-label={`${site.name} — forside`} className={`wordmark ${size}`}>
      <span className="wordmark-main" aria-hidden="true">ATELIER</span>
      <span className="wordmark-sub text-[.36em]" aria-hidden="true">SCANDINAVIA</span>
    </Link>
  );
}
