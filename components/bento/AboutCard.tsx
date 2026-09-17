import {HiOutlineArrowUpRight} from "react-icons/hi2";
import {contactInfo, greeting} from "@/lib/content";
import {SocialLinks} from "@/components/ui/SocialLinks";

export function AboutCard() {
  return (
    <div className="flex h-full flex-col gap-6 rounded-bento border border-black/10 bg-surface p-6 dark:border-transparent md:p-8">
      <p className="text-ink">{greeting.subTitle}</p>

      {greeting.resumeLink && (
        <a
          href={greeting.resumeLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-pill bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-transform hover:scale-105"
        >
          View Resume
          <HiOutlineArrowUpRight size={16} />
        </a>
      )}

      <div className="mt-auto border-t border-surface-raised pt-6">
        <h3 className="font-display text-lg font-semibold text-ink">
          {contactInfo.title}
        </h3>
        <p className="mt-2 text-sm text-ink-muted">{contactInfo.subtitle}</p>
        <a
          href={`mailto:${contactInfo.email}`}
          className="mt-3 inline-block text-sm font-medium text-accent hover:underline"
        >
          {contactInfo.email}
        </a>
        <div className="mt-4">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
