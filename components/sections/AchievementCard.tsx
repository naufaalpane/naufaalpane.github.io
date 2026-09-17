import Image from "next/image";
import {HiOutlineArrowUpRight} from "react-icons/hi2";
import type {AchievementCardData} from "@/lib/types";

export function AchievementCard({
  achievement
}: {
  achievement: AchievementCardData;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-bento border border-black/10 bg-surface p-6 dark:border-transparent sm:flex-row md:p-8">
      <div className="relative h-32 w-full flex-shrink-0 overflow-hidden rounded-2xl bg-surface-raised sm:h-28 sm:w-28">
        <Image
          src={achievement.image}
          alt={achievement.imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="font-display text-base font-semibold text-ink">
          {achievement.title}
        </h3>
        <p className="mt-2 text-sm text-ink-muted">{achievement.subtitle}</p>
        <a
          href={achievement.linkUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
        >
          {achievement.linkLabel}
          <HiOutlineArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
}
