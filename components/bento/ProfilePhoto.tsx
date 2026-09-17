"use client";

import Image from "next/image";
import {useState} from "react";

export function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-full bg-accent/20 md:h-56 md:w-56">
      {failed ? (
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-display text-5xl font-semibold text-accent md:text-6xl">
            NP
          </span>
        </div>
      ) : (
        <Image
          src="/images/profile.jpg"
          alt="Naufal"
          fill
          priority
          sizes="(min-width: 768px) 224px, 160px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
