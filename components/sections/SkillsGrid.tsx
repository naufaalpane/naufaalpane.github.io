import {
  SiDocker,
  SiFirebase,
  SiFlutter,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot
} from "react-icons/si";
import type {IconType} from "react-icons";
import {softwareSkills} from "@/lib/content";
import type {SkillIconKey} from "@/lib/types";
import {TextBadgeIcon} from "@/components/ui/TextBadgeIcon";

const iconByKey: Partial<Record<SkillIconKey, IconType>> = {
  java: SiOpenjdk,
  javascript: SiJavascript,
  python: SiPython,
  springboot: SiSpringboot,
  react: SiReact,
  flutter: SiFlutter,
  mongodb: SiMongodb,
  firebase: SiFirebase,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  docker: SiDocker
};

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
      {softwareSkills.map(skill => {
        const Icon = iconByKey[skill.icon];
        return (
          <div
            key={skill.skillName}
            className="flex items-center gap-3 rounded-2xl border border-black/10 bg-surface p-4 dark:border-transparent"
          >
            {skill.icon === "text" ? (
              <TextBadgeIcon
                label={skill.label ?? skill.skillName.slice(0, 2)}
              />
            ) : Icon ? (
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-raised text-ink">
                <Icon size={20} />
              </span>
            ) : null}
            <span className="text-sm font-medium text-ink">
              {skill.skillName}
            </span>
          </div>
        );
      })}
    </div>
  );
}
