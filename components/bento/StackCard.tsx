import {HiArrowUpRight} from "react-icons/hi2";
import type {BentoLink} from "@/lib/types";

const cornerVariants: Record<BentoLink["cornerVariant"], string> = {
  a: "rounded-tl-[2.5rem] rounded-tr-md rounded-br-[3rem] rounded-bl-md",
  b: "rounded-tr-[2.5rem] rounded-tl-md rounded-bl-[3rem] rounded-br-md",
  c: "rounded-bl-[2.5rem] rounded-br-md rounded-tr-[3rem] rounded-tl-md"
};

export function StackCard({link}: {link: BentoLink}) {
  return (
    <a
      href={link.href}
      className={`group relative block h-48 overflow-hidden bg-gradient-to-br ${link.gradientClassName} ${cornerVariants[link.cornerVariant]}`}
    >
      <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
      <span className="absolute bottom-6 left-6 font-display text-xl font-semibold text-white drop-shadow">
        {link.label}
      </span>
      <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-ink transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
        <HiArrowUpRight size={20} />
      </span>
    </a>
  );
}
