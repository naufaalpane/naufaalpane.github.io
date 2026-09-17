"use client";

import {useEffect, useState} from "react";

/**
 * Tracks whichever section id is closest to the vertical center of the
 * viewport, recomputed directly from scroll position on every frame. Driven
 * by geometry rather than IntersectionObserver so there's no async gap where
 * no section is "active" yet during a fast or instant scroll jump — sections
 * whose visibility depends on this being in sync with actual scroll position
 * would otherwise flash blank during that gap.
 */
export function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    let ticking = false;

    const updateActive = () => {
      ticking = false;
      const viewportCenter = window.innerHeight / 2;

      // Sections are stacked back to back with no gaps, so the viewport
      // center should always fall inside exactly one of them — check
      // containment (not centroid distance) so a section taller than the
      // viewport is still correctly detected as active while scrolled
      // through its middle, not just near its own midpoint.
      let matched: HTMLElement | null = null;
      let fallback = elements[0];
      let fallbackDistance = Infinity;

      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          matched = el;
        }
        const edgeDistance =
          rect.top > viewportCenter
            ? rect.top - viewportCenter
            : viewportCenter - rect.bottom;
        if (edgeDistance < fallbackDistance) {
          fallbackDistance = edgeDistance;
          fallback = el;
        }
      }

      setActiveId((matched ?? fallback).id);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActive);
      }
    };

    updateActive();
    window.addEventListener("scroll", onScroll, {passive: true});
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(",")]);

  return activeId;
}
