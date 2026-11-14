interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  accent: string;
  intro?: string;
  center?: boolean;
}

export default function SectionHeading({ eyebrow, title, accent, intro, center }: SectionHeadingProps) {
  return (
    <div className={center ? "text-center flex flex-col items-center" : ""}>
      <div className={`eyebrow reveal ${center ? "eyebrow-center" : ""}`}>{eyebrow}</div>
      <h2 className="h2 reveal mt-6">
        {title} <em className="italic text-gold">{accent}</em>
      </h2>
      {intro && <p className="reveal max-w-[560px] text-[16px] leading-[1.8] text-muted mt-6">{intro}</p>}
    </div>
  );
}
