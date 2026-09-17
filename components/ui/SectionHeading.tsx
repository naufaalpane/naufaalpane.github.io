export function SectionHeading({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 max-w-2xl text-ink-muted">{subtitle}</p>}
    </div>
  );
}
