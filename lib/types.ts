export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "gmail" | "stackoverflow";
}

export type SkillIconKey =
  | "java"
  | "javascript"
  | "python"
  | "springboot"
  | "react"
  | "flutter"
  | "mongodb"
  | "firebase"
  | "mysql"
  | "postgresql"
  | "docker"
  | "text";

export interface SoftwareSkill {
  skillName: string;
  icon: SkillIconKey;
  /** Only used when icon === "text" (skills with no reliable brand icon) */
  label?: string;
}

export interface ProficiencyItem {
  stack: string;
  percentage: number;
}

export interface WorkExperience {
  role: string;
  company: string;
  companyLogo: string;
  date: string;
  desc: string;
  descBullets: string[];
}

export interface EducationEntry {
  schoolName: string;
  logo: string;
  subHeader: string;
  duration: string;
  desc: string;
  descBullets: string[];
}

export interface AchievementCardData {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  linkLabel: string;
  linkUrl: string;
}

export interface BentoLink {
  label: string;
  description: string;
  href: string;
  gradientClassName: string;
  cornerVariant: "a" | "b" | "c";
}
