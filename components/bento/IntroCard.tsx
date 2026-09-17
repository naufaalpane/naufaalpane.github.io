import {greeting} from "@/lib/content";

const shortBio =
  "Fullstack developer building web and mobile apps, with a soft spot for clean software design patterns.";

export function IntroCard() {
  return (
    <div className="relative z-20 w-full rounded-bento border border-black/10 bg-surface-raised p-6 shadow-xl dark:border-transparent md:p-8">
      <div
        aria-hidden
        className="absolute -bottom-6 -right-6 -z-10 h-28 w-28 rounded-full bg-accent/30 blur-xl"
      />
      <h2 className="font-display text-2xl font-semibold text-ink">
        {greeting.name}
      </h2>
      <p className="mt-3 text-sm text-ink-muted md:text-base">{shortBio}</p>
      <a
        href="#achievements"
        className="mt-5 inline-flex items-center gap-2 rounded-pill bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-transform hover:scale-105"
      >
        View achievements
      </a>
    </div>
  );
}
