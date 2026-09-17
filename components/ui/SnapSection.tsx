"use client";

import clsx from "clsx";
import {SECTION_IDS, useActiveSection} from "@/contexts/ActiveSectionContext";

export function SnapSection({
  id,
  className = "",
  children
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  const activeId = useActiveSection();
  const activeIndex = SECTION_IDS.indexOf(activeId);
  const selfIndex = SECTION_IDS.indexOf(id);
  const isActive = selfIndex === activeIndex;
  const isBefore = selfIndex < activeIndex;

  return (
    <section
      id={id}
      className={clsx(
        "flex min-h-screen snap-start flex-col justify-start pt-24 transition-all duration-700 ease-out md:pt-28",
        isActive
          ? "opacity-100 translate-y-0"
          : "pointer-events-none opacity-0",
        !isActive && (isBefore ? "-translate-y-10" : "translate-y-10"),
        className
      )}
    >
      {children}
    </section>
  );
}
