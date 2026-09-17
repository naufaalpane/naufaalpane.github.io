import Image from "next/image";
import {workExperiences} from "@/lib/content";

export function ExperienceTimeline() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {workExperiences.map(experience => (
        <div
          key={`${experience.company}-${experience.date}`}
          className="rounded-bento border border-black/10 bg-surface p-6 dark:border-transparent md:p-8"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-4">
              <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl bg-surface-raised">
                <Image
                  src={experience.companyLogo}
                  alt={`${experience.company} logo`}
                  fill
                  className="object-contain p-1.5"
                />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {experience.role}
                </h3>
                <p className="text-sm text-ink-muted">{experience.company}</p>
              </div>
            </div>
            <span className="whitespace-nowrap text-sm text-ink-muted">
              {experience.date}
            </span>
          </div>

          <p className="mt-4 text-ink-muted">{experience.desc}</p>
          <ul className="mt-4 space-y-2">
            {experience.descBullets.map(bullet => (
              <li key={bullet} className="flex gap-2 text-sm text-ink-muted">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
