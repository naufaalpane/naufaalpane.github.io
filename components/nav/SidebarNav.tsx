"use client";

import clsx from "clsx";
import {
  HiOutlineBriefcase,
  HiOutlineHome,
  HiOutlineTrophy,
  HiOutlineWrenchScrewdriver
} from "react-icons/hi2";
import {ThemeToggle} from "@/components/theme/ThemeToggle";
import {useActiveSection} from "@/contexts/ActiveSectionContext";

const navItems = [
  {id: "home", label: "Home", icon: HiOutlineHome},
  {id: "experience", label: "Experience", icon: HiOutlineBriefcase},
  {id: "skills", label: "Skills", icon: HiOutlineWrenchScrewdriver},
  {id: "achievements", label: "Achievements", icon: HiOutlineTrophy}
];

export function SidebarNav() {
  const activeId = useActiveSection();
  const onHero = activeId === "home";

  return (
    <>
      {/* The main nav is hidden on the hero, so give the hero its own
          floating theme toggle instead of leaving no way to switch there. */}
      <div
        className={clsx(
          "fixed right-6 top-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-surface-raised/90 shadow-lg backdrop-blur transition-all duration-500 ease-out",
          onHero
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <ThemeToggle />
      </div>

      <nav
        className={clsx(
          "fixed z-50 flex items-center justify-between rounded-pill bg-surface-raised/90 px-4 py-3 shadow-lg backdrop-blur transition-all duration-500 ease-out",
          "bottom-4 left-1/2 w-[calc(100%-2rem)] max-w-sm flex-row",
          "md:bottom-auto md:left-6 md:top-1/2 md:w-auto md:max-w-none md:flex-col md:gap-6 md:px-3 md:py-6",
          onHero
            ? "translate-x-[-50%] translate-y-3 opacity-0 pointer-events-none md:-translate-x-6 md:-translate-y-1/2"
            : "translate-x-[-50%] translate-y-0 opacity-100 pointer-events-auto md:translate-x-0 md:-translate-y-1/2"
        )}
      >
        <a
          href="#home"
          aria-label="Home"
          className="hidden h-10 w-10 items-center justify-center rounded-full font-display text-lg font-semibold text-accent md:flex"
        >
          N.
        </a>

        {navItems.map(item => {
          const isActive = activeId === item.id;
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-label={item.label}
              aria-current={isActive ? "true" : undefined}
              className={clsx(
                "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                isActive
                  ? "bg-accent text-accent-ink"
                  : "text-ink-muted hover:bg-surface hover:text-ink"
              )}
            >
              <Icon size={20} />
            </a>
          );
        })}

        <ThemeToggle />
      </nav>
    </>
  );
}
