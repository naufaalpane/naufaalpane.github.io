import {SocialLinks} from "./SocialLinks";
import {greeting} from "@/lib/content";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-6 py-10 md:pl-32">
      <div className="flex flex-col items-center gap-4 border-t border-surface-raised pt-8 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-sm text-ink-muted">
          © {new Date().getFullYear()} {greeting.name}. Built with Next.js.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
