type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#7c8465] sm:text-sm">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-light leading-tight text-[#1f1f1f] sm:text-6xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#5f5f5f] sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}