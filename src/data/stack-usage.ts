import type { StackUsageType } from './type';

export const stackUsageData: StackUsageType = {
  
  sectionTitle: "Stack Usage",
  subtitle: "A percentage breakdown of how much I use each technology",
  individualTechnologies: [
    { id: 1, name: "Java", icon: "/images/icons/java.svg", percentage: 78, color: "#0056b3"},
    { id: 2, name: "Spring Boot", icon: "/images/icons/spring.svg", percentage: 65, color: "#28a745"},
    { id: 3, name: "REST APIs", icon: "/images/icons/api.svg", percentage: 72, color: "#007bff"},
    { id: 4, name: "SQL / JPA", icon: "/images/icons/database.svg", percentage: 60, color: "#6f42c1"},
    { id: 5, name: "HTML & CSS", icon: "/images/icons/html.svg", percentage: 55, color: "#fd7e14"},
    { id: 6, name: "JavaScript", icon: "/images/icons/js.svg", percentage: 42, color: "#d97706"},
    { id: 7, name: "Git", icon: "/images/icons/git.svg", percentage: 68, color: "#e83e8c"}
  ],
  categoryOverview: [
    { id: 1, category: "Backend", percentage: 72, color: "#0056b3"},
    { id: 2, category: "Frontend", percentage: 45, color: "#fd7e14"},
    { id: 3, category: "DevOps / Tools", percentage: 68, color: "#28a745"}
  ],
  proficiencyKey: [
    { range: "70 – 100%", description: "Professional / Production use"},
    { range: "50 – 69%", description: "Intermediate / Project-proven"},
    { range: "30 – 49%", description: "Learning / Actively practising"}
  ]
}