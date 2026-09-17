import type {
  AchievementCardData,
  BentoLink,
  EducationEntry,
  ProficiencyItem,
  SocialLink,
  SoftwareSkill,
  WorkExperience
} from "./types";

export const greeting = {
  username: "naufaalpane",
  name: "Naufal",
  title: "Hi all, I'm Naufal",
  subTitle:
    "A passionate Fullstack Software Developer / Back end Engineer / Front end Engineer 🧑‍💻 having an experience of building Web and Mobile applications with intrest on Pattern Software Design.",
  resumeLink: "/documents/naufal-resume.pdf"
};

// The real address — the old portfolio.js had a stale template value
// (saadpasta70@gmail.com) in contactInfo.email_address. This is the correct one.
export const email = "kharisma.naufal@gmail.com";

export const socialLinks: SocialLink[] = [
  {label: "GitHub", href: "https://github.com/naufaalpane", icon: "github"},
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kharismanaufal/",
    icon: "linkedin"
  },
  {label: "Email", href: `mailto:${email}`, icon: "gmail"},
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/9454613/naufaalpane",
    icon: "stackoverflow"
  }
];

export const skillsSection = {
  title: "What I do",
  subtitle: "FULL STACK DEVELOPER WHO LIKES TO EXPLORE EVERY TECH STACK",
  bullets: [
    "⚡ Develop robust applications for your web and mobile platforms",
    "⚡ Clean code enthusiast that likes to implement software design pattern",
    "⚡ Integration of third party services such as Firebase/AWS"
  ]
};

// Note: the old portfolio.js mistakenly reused the "fab fa-dart" FontAwesome
// classname for Spring Boot, Flutter, MongoDB, Firebase, PostgreSQL and
// Katalon. Each skill below gets its own correct icon instead of copying
// that bug forward.
export const softwareSkills: SoftwareSkill[] = [
  {skillName: "Java", icon: "java"},
  {skillName: "JavaScript", icon: "javascript"},
  {skillName: "Python", icon: "python"},
  {skillName: "Dart", icon: "text", label: "Dt"},
  {skillName: "Spring Boot", icon: "springboot"},
  {skillName: "ReactJS", icon: "react"},
  {skillName: "Flutter", icon: "flutter"},
  {skillName: "MongoDB", icon: "mongodb"},
  {skillName: "Firebase", icon: "firebase"},
  {skillName: "MySQL", icon: "mysql"},
  {skillName: "PostgreSQL", icon: "postgresql"},
  {skillName: "Docker", icon: "docker"},
  {skillName: "Katalon", icon: "text", label: "Kt"}
];

export const techStack: ProficiencyItem[] = [
  {stack: "Fullstack", percentage: 50},
  {stack: "Backend", percentage: 90},
  {stack: "Frontend", percentage: 30},
  {stack: "SQL Query", percentage: 20},
  {stack: "Deployment", percentage: 60}
];

export const educationInfo: EducationEntry = {
  schoolName: "Bina Nusantara University",
  logo: "/images/logos/binus.png",
  subHeader: "Bachelor in Computer Science",
  duration: "September 2018 - December 2020",
  desc: "Skills I acquired",
  descBullets: [
    "Engineering",
    "Project Management",
    "Problem Solving",
    "Analytical Skills",
    "Communication",
    "Presentations",
    "Web Development",
    "Mobile Application Development"
  ]
};

export const workExperiences: WorkExperience[] = [
  {
    role: "Fullstack Engineer",
    company: "3Dolphins AI",
    companyLogo: "/images/logos/3dolphins.png",
    date: "Jun 2023 – Present",
    desc: "Involved in developing 3Dolphins SRM Website Using Generative AI and 3Dolphins SRM Website",
    descBullets: [
      "Led a team as a tech lead on one of the major projects",
      "Handle the Frontend and Backend for Enhancements and Bug Fixing",
      "Achieved a 70% improvement in application and server performance by designing and implementing a Java-based data chunking solution for large-scale data processing.",
      "Architected and implemented a custom lazy-loading tree component, reducing unnecessary database queries and improving application responsiveness.",
      "Collaborate on developing 3Dolphin's Generative AI",
      "Deploying System and Software to server",
      "Handle data using ORM (Object-Relational Mapping)",
      "Collaborating and Integrating 3Dolphins SRM Website using API"
    ]
  },
  {
    role: "Backend Developer",
    company: "DOKU",
    companyLogo: "/images/logos/doku.png",
    date: "Oct 2022 – Feb 2023",
    desc: "Participate in DOKU Academy Program",
    descBullets: [
      "Collaborate to create transaction service using DOKU's payment gateway for capstone project",
      "Developed a POS system mainly for backend use for mini project",
      "Learned Java Springboot for API creation",
      "Learned Docker for building my application locally",
      "Learned AWS EC2 and Kubernetes for deployment",
      "Learned Katalon for automation testing comprehensively",
      "Learned soft skill (ex. communication, teamwork, leadership)"
    ]
  },
  {
    role: "Fullstack Engineer Intern",
    company: "IDStar Cipta Teknologi",
    companyLogo: "/images/logos/idstar.png",
    date: "Sept 2021 – Feb 2022",
    desc: "Involved in developing PT Orbit Nasional Edukasi on ONE Talent Mobile Application",
    descBullets: [
      "Developing mobile application using Ionic Framework, with the base of AngularJS Framework to create new page and update existing pages for either new a feature or a new redesigned page based on UI/UX designer in Figma",
      "Managed integration from backend to frontend using REST API with HTTP Client in Angular to instantiate HTTP Request Methods, and Ionic Events that is Subscribe to handle the data",
      "Implementing logic for frontend use for example, making animations, create accordion (not available in older versions), render time, responsiveness"
    ]
  },
  {
    role: "Software Test Engineer Intern",
    company: "WhiteOpen Teknologi",
    companyLogo: "/images/logos/whiteopen.webp",
    date: "Feb 2021 – Jun 2021",
    desc: "Involved in PT TMIIN Toyota, PT Surya Mandiri Group E-POS, and PT Whiteopen Teknologi HR Help Desk project to Create and Execute",
    descBullets: [
      "Test Scripts on developing website for Manual Testing using Microsoft Excel",
      "Test Scripts on developing website, for Automation Testing using Katalon Studio",
      "Test Scripts on MySQL query for Manual Testing using Microsoft Excel"
    ]
  }
];

export const achievementCards: AchievementCardData[] = [
  {
    title:
      "Blockchain and API Development to Improve Relational Database Integrity and System Interoperability",
    subtitle:
      'Thesis published on international paper: "Blockchain and API Development to Improve Relational Database Integrity and System Interoperability" (7th International Conference on Computer Science and Computational Intelligence 2022).',
    image: "/images/achievements/procedia-paper.jpg",
    imageAlt: "International Paper Cover",
    linkLabel: "International Paper",
    linkUrl:
      "https://www.sciencedirect.com/science/article/pii/S1877050922022001"
  },
  {
    title: "DOKU Completion Certificate",
    subtitle: "Participated in DOKU Academy bootcamp.",
    image: "/images/achievements/doku-academy-cert.jpeg",
    imageAlt: "DOKU Academy Completion Certificate",
    linkLabel: "Certificate",
    linkUrl:
      "https://www.linkedin.com/in/kharismanaufal/overlay/1635518431002/single-media-viewer/?profileId=ACoAADK7xO0BWHS0SOQNNwx3qg8kA6Sk8Fpmis0"
  },
  {
    title: "EF Standard English Test 50",
    subtitle: "Participated on EF English Test 50 in July 14th 2021.",
    image: "/images/achievements/ef-logo.png",
    imageAlt: "EF Logo",
    linkLabel: "Certificate",
    linkUrl: "https://www.efset.org/cert/Zc7Loz"
  }
];

export const githubUsername = "naufaalpane";

export const bentoLinks: BentoLink[] = [
  {
    label: "Experience",
    description: "Where I've worked and what I built there",
    href: "#experience",
    gradientClassName: "from-zinc-800 to-zinc-950",
    cornerVariant: "a"
  },
  {
    label: "Skills",
    description: "The stack I reach for and how deep I go",
    href: "#skills",
    gradientClassName: "from-red-950 to-zinc-950",
    cornerVariant: "b"
  },
  {
    label: "Achievements",
    description: "Certifications, publications, and other proof",
    href: "#achievements",
    gradientClassName: "from-zinc-900 to-red-950",
    cornerVariant: "c"
  }
];

export const contactInfo = {
  title: "Contact Me ☎️",
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open for all.",
  email
};

export const isHireable = false;
