type Props = {
  children: React.ReactNode;
  className?: string;
};

export function SectionContainer({
  children,
  className = "",
}: Props) {
  return (
    <section
      className={`mx-auto max-w-7xl px-6 py-28 lg:px-12 ${className}`}
    >
      {children}
    </section>
  );
}