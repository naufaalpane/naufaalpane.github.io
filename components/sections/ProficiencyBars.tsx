import {techStack} from "@/lib/content";

export function ProficiencyBars() {
  return (
    <div className="space-y-4">
      {techStack.map(item => (
        <div key={item.stack}>
          <div className="mb-1.5 flex items-baseline justify-between text-sm">
            <span className="font-medium text-ink">{item.stack}</span>
            <span className="text-ink-muted">{item.percentage}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-pill bg-surface-raised">
            <div
              className="h-full rounded-pill bg-accent"
              style={{width: `${item.percentage}%`}}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
