type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-16 text-center">
      {eyebrow && (
        <p className="mb-3 uppercase tracking-[0.35em] text-sm text-[#7c7c7c]">
          {eyebrow}
        </p>
      )}

      <h2 className="font-[var(--font-heading)] text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-lg text-[#666]">
          {subtitle}
        </p>
      )}
    </div>
  );
}