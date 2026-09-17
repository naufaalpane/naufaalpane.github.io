"use client";

import {createContext, useContext} from "react";
import {useScrollSpy} from "@/hooks/useScrollSpy";

export const SECTION_IDS = ["home", "experience", "skills", "achievements"];

const ActiveSectionContext = createContext(SECTION_IDS[0]);

export function ActiveSectionProvider({children}: {children: React.ReactNode}) {
  const activeId = useScrollSpy(SECTION_IDS);
  return (
    <ActiveSectionContext.Provider value={activeId}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}
