export type Technology = {
  id: number;
  name: string;
  icon: string;
  percentage: number;
  color: string;
  hidden: boolean;
}

export type CategoryOverview = {
  id: number;
  category: string;
  percentage: number;
  color: string;
  hidden: boolean;
}

export type ProficiencyKey = {
  range: string;
  description: string;
  hidden: boolean;
}

export type StackUsageType = {
  hidden: boolean;
  sectionTitle: string;
  subtitle: string;
  individualTechnologies: Technology[];
  categoryOverview: CategoryOverview[];
  proficiencyKey: ProficiencyKey[];
}

export const stackUsageData: StackUsageType = {
  hidden: false,
  sectionTitle: "Stack Usage",
  subtitle: "A percentage breakdown of how much I use each technology",
  individualTechnologies: [
    { id: 1, name: "Java", icon: "/images/icons/java.svg", percentage: 78, color: "#0056b3", hidden: false },
    { id: 2, name: "Spring Boot", icon: "/images/icons/spring.svg", percentage: 65, color: "#28a745", hidden: false },
    { id: 3, name: "REST APIs", icon: "/images/icons/api.svg", percentage: 72, color: "#007bff", hidden: false },
    { id: 4, name: "SQL / JPA", icon: "/images/icons/database.svg", percentage: 60, color: "#6f42c1", hidden: false },
    { id: 5, name: "HTML & CSS", icon: "/images/icons/html.svg", percentage: 55, color: "#fd7e14", hidden: false },
    { id: 6, name: "JavaScript", icon: "/images/icons/js.svg", percentage: 42, color: "#d97706", hidden: false },
    { id: 7, name: "Git", icon: "/images/icons/git.svg", percentage: 68, color: "#e83e8c", hidden: false }
  ],
  categoryOverview: [
    { id: 1, category: "Backend", percentage: 72, color: "#0056b3", hidden: false },
    { id: 2, category: "Frontend", percentage: 45, color: "#fd7e14", hidden: false },
    { id: 3, category: "DevOps / Tools", percentage: 68, color: "#28a745", hidden: false }
  ],
  proficiencyKey: [
    { range: "70 – 100%", description: "Professional / Production use", hidden: false },
    { range: "50 – 69%", description: "Intermediate / Project-proven", hidden: false },
    { range: "30 – 49%", description: "Learning / Actively practising", hidden: false }
  ]
}