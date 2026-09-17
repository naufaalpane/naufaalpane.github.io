export function TextBadgeIcon({label}: {label: string}) {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-raised text-xs font-bold text-ink-muted">
      {label}
    </span>
  );
}
