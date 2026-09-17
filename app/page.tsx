import {BentoGrid} from "@/components/bento/BentoGrid";
import {AchievementCard} from "@/components/sections/AchievementCard";
import {EducationCard} from "@/components/sections/EducationCard";
import {ExperienceTimeline} from "@/components/sections/ExperienceTimeline";
import {ProficiencyBars} from "@/components/sections/ProficiencyBars";
import {SkillsGrid} from "@/components/sections/SkillsGrid";
import {SectionHeading} from "@/components/ui/SectionHeading";
import {SnapSection} from "@/components/ui/SnapSection";
import {achievementCards, skillsSection} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <SnapSection id="home">
        <BentoGrid />
      </SnapSection>

      <SnapSection id="experience">
        <div className="mx-auto max-w-7xl px-6 md:pl-32">
          <SectionHeading
            title="Experience"
            subtitle="Where I've worked, what I built, and what I picked up along the way."
          />
          <ExperienceTimeline />
        </div>
      </SnapSection>

      <SnapSection id="skills">
        <div className="mx-auto max-w-7xl px-6 md:pl-32">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-10">
                <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
                  Education
                </h2>
              </div>
              <EducationCard />

              <h3 className="mb-4 mt-10 font-display text-xl font-semibold text-ink">
                Proficiency
              </h3>
              <ProficiencyBars />
            </div>

            <div>
              <SectionHeading
                title={skillsSection.title}
                subtitle={skillsSection.subtitle}
              />

              <ul className="mb-10 space-y-2">
                {skillsSection.bullets.map(bullet => (
                  <li key={bullet} className="text-ink-muted">
                    {bullet}
                  </li>
                ))}
              </ul>

              <h3 className="mb-4 font-display text-xl font-semibold text-ink">
                Tech stack
              </h3>
              <SkillsGrid />
            </div>
          </div>
        </div>
      </SnapSection>

      <SnapSection id="achievements">
        <div className="mx-auto max-w-7xl px-6 md:pl-32">
          <SectionHeading
            title="Achievements"
            subtitle="Certifications, publications, and other proof of work."
          />

          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            {achievementCards.map(achievement => (
              <AchievementCard
                key={achievement.title}
                achievement={achievement}
              />
            ))}
          </div>
        </div>
      </SnapSection>
    </>
  );
}
