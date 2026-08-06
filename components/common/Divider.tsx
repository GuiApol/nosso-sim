type DividerProps = {
  label?: string;
  className?: string;
};

export function Divider({
  label = "G + R",
  className = "",
}: DividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center gap-4 ${className}`}
    >
      <span className="h-px w-16 bg-current opacity-20 sm:w-24" />

      <span className="text-xs font-semibold uppercase tracking-[0.3em] opacity-50">
        {label}
      </span>

      <span className="h-px w-16 bg-current opacity-20 sm:w-24" />
    </div>
  );
}