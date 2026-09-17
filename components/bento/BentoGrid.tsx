import {bentoLinks} from "@/lib/content";
import {AboutCard} from "./AboutCard";
import {HeroCard} from "./HeroCard";
import {IntroCard} from "./IntroCard";
import {StackCard} from "./StackCard";

export function BentoGrid() {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-6 pb-16 pt-10 md:grid-cols-[3fr_1fr] md:items-start md:pl-32 md:pt-16">
      {/* About and Hero+Intro are grouped in their own grid so they stretch to
          match each other's height, independent of the stack links column,
          which is naturally much taller. */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr]">
        <div className="order-1 flex flex-col gap-6 md:order-2">
          <HeroCard />
          <IntroCard />
        </div>

        <div className="order-2 md:order-1">
          <AboutCard />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {bentoLinks.map(link => (
          <StackCard key={link.href} link={link} />
        ))}
      </div>
    </div>
  );
}
