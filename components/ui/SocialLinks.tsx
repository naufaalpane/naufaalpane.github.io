import {FaGithub, FaLinkedin, FaStackOverflow} from "react-icons/fa6";
import {HiOutlineEnvelope} from "react-icons/hi2";
import type {IconType} from "react-icons";
import {socialLinks} from "@/lib/content";
import type {SocialLink} from "@/lib/types";

const iconByKey: Record<SocialLink["icon"], IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  gmail: HiOutlineEnvelope,
  stackoverflow: FaStackOverflow
};

export function SocialLinks({className = ""}: {className?: string}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map(link => {
        const Icon = iconByKey[link.icon];
        return (
          <a
            key={link.icon}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-ink-muted transition-colors hover:bg-accent hover:text-accent-ink"
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}
