import Image from "next/image";
import {educationInfo} from "@/lib/content";

export function EducationCard() {
  return (
    <div className="rounded-bento border border-black/10 bg-surface p-6 dark:border-transparent md:p-8">
      <div className="flex items-start gap-4">
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl bg-surface-raised">
          <Image
            src={educationInfo.logo}
            alt={`${educationInfo.schoolName} logo`}
            fill
            className="object-contain p-1.5"
          />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">
            {educationInfo.schoolName}
          </h3>
          <p className="text-sm text-ink-muted">{educationInfo.subHeader}</p>
          <p className="text-sm text-ink-muted">{educationInfo.duration}</p>
        </div>
      </div>
      <p className="mt-4 text-sm font-medium text-ink">{educationInfo.desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {educationInfo.descBullets.map(bullet => (
          <span
            key={bullet}
            className="rounded-pill bg-surface-raised px-3 py-1 text-xs text-ink-muted"
          >
            {bullet}
          </span>
        ))}
      </div>
    </div>
  );
}
