"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {HiOutlineMoon, HiOutlineSun} from "react-icons/hi2";

export function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-10 w-10 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-surface hover:text-ink"
    >
      {isDark ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
    </button>
  );
}
