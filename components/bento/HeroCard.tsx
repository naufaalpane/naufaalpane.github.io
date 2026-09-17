import {HiChevronDown} from "react-icons/hi2";
import {ProfilePhoto} from "./ProfilePhoto";
import {greeting} from "@/lib/content";

export function HeroCard() {
  return (
    <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-bento border border-black/10 bg-surface p-8 text-center dark:border-transparent md:aspect-[16/11]">
      <ProfilePhoto />
      <div>
        <p className="font-display text-2xl font-semibold text-ink md:text-3xl">
          {greeting.title} 👋
        </p>
        <a
          href="#experience"
          aria-label="Scroll to experience"
          className="mx-auto mt-4 block w-fit text-ink-muted transition-colors hover:text-ink"
        >
          <HiChevronDown className="animate-bounce" size={24} />
        </a>
      </div>
    </div>
  );
}
