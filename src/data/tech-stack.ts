import type { TechStackType } from "../sections/tech_stack/TechStackSection";

export const techStacksData: TechStackType = {
  title: "Tech-Stack",
  subtitle: "A comprehensive breakdown of the technologies, frameworks, and tools I use to build scalable full-stack applications.",
  languages: [
    {
      name: "Java",
      iconSrc: "/images/stack/java.svg",
      percentage: 90,
      description:
        "Proficient in core Java with OOP principles, collections, streams, multithreading, and exception handling for building robust backend applications.",
      usages: ["Backend Development", "OOP", "Streams API", "Multithreading"],
    },
    {
      name: "Spring Boot",
      iconSrc: "/images/stack/spring.svg",
      percentage: 85,
      description:
        "Experience building enterprise-grade applications, RESTful APIs, modular Monolithic architectures, and scalable Microservices using Spring Boot, JPA, Hibernate, and Spring Security.",
      usages: ["Monolithic Architecture", "Microservices", "REST APIs", "JPA/Hibernate", "Spring Security"],
    },
    {
      name: "TypeScript",
      iconSrc: "/images/stack/typescript.svg",
      percentage: 80,
      description:
        "Strong experience with type-safe web development, interface design, generics, and leveraging strict typing for maintainable codebases.",
      usages: ["Type Safety", "Interfaces & Generics", "Code Reliability"],
    },
    {
      name: "React",
      iconSrc: "/images/stack/react.svg",
      percentage: 80,
      description:
        "Building interactive, modular, and performant user interfaces using hooks, custom state management, and component-driven architecture.",
      usages: ["UI Components", "Hooks & Context", "State Management", "SPAs"],
    },
    {
      name: "Vitest",
      iconSrc: "/images/stack/vitest.svg",
      percentage: 75,
      description:
        "Unit and integration testing for React components and TypeScript utilities using Vitest, React Testing Library, and user-event.",
      usages: ["Unit Testing", "Integration Testing", "React Testing Library", "TDD"],
    },
    {
      name: "MySQL",
      iconSrc: "/images/stack/mysql.svg",
      percentage: 80,
      description:
        "Relational database design, schema management, indexing, writing complex SQL queries, and integrating ORMs like Hibernate/JPA.",
      usages: ["Relational DB", "Schema Design", "SQL", "Flyway Migrations"],
    },
    {
      name: "Postman",
      iconSrc: "/images/stack/postman.svg",
      percentage: 85,
      description:
        "API testing, endpoint documentation, environment variable configuration, request validation, and automated collection testing for backend services.",
      usages: ["API Testing", "Endpoint Verification", "Collections", "Documentation"],
    },
    {
      name: "Tailwind CSS",
      iconSrc: "/images/stack/tailwind.svg",
      percentage: 80,
      description:
        "Utility-first styling for responsive layouts, custom design tokens, dark mode variants, and smooth UI transitions.",
      usages: ["Utility-First CSS", "CVA Variants", "Design Tokens", "Dark Mode"],
    },
    {
      name: "JavaScript",
      iconSrc: "/images/stack/javascript.svg",
      percentage: 75,
      description:
        "Growing proficiency in modern JavaScript including ES6+ features, DOM manipulation, and asynchronous programming.",
      usages: ["ES6+", "Async/Await", "DOM Manipulation", "Web APIs"],
    },
    {
      name: "HTML 5",
      iconSrc: "/images/stack/html.svg",
      percentage: 85,
      description:
        "Solid foundation in semantic HTML5 structure, accessibility standards, DOM hierarchy, and SEO best practices.",
      usages: ["Semantic Markup", "Accessibility (a11y)", "SEO"],
    },
    {
      name: "CSS 3",
      iconSrc: "/images/stack/css.svg",
      percentage: 80,
      description:
        "Expertise in modern CSS3, including Flexbox, CSS Grid, animations, custom variants, and responsive layout architectures.",
      usages: ["Responsive Design", "Flexbox & Grid", "Animations"],
    },
    {
      name: "Next.js",
      iconSrc: "/images/stack/nextjs.svg",
      percentage: 70,
      description:
        "Developing full-stack React applications with server-side rendering, static site generation, API routes, and optimized routing.",
      usages: ["SSR / SSG", "App Router", "Full-stack React", "SEO Optimization"],
    },
    {
      name: "Shadcn UI",
      iconSrc: "/images/stack/shadcn.svg",
      iconDarkSrc: "/images/stack/shadcn-dark.svg",
      percentage: 75,
      description:
        "Crafting accessible, customizable, and polished component libraries built on Radix primitives and Tailwind CSS.",
      usages: ["Component Library", "Radix Primitives", "Accessible UI"],
    },
    {
      name: "Docker",
      iconSrc: "/images/stack/docker.svg",
      percentage: 60,
      description:
        "Containerizing applications, writing Dockerfiles, managing multi-container environments with Docker Compose, and simplifying deployment.",
      usages: ["Containerization", "Docker Compose", "DevOps", "Deployments"],
    },
    {
      name: "Git",
      iconSrc: "/images/stack/git.svg",
      percentage: 85,
      description:
        "Proficient in local version control, staging, branching strategies, commit history management, and resolving merge conflicts.",
      usages: ["Version Control", "Branch Management", "CLI Workflow"],
    },
    {
      name: "GitHub",
      iconSrc: "/images/stack/github.svg",
      iconDarkSrc: "/images/stack/github-dark.svg",
      percentage: 85,
      description:
        "Collaborative development using remote repositories, pull requests, code reviews, and automated CI/CD workflows.",
      usages: ["Remote Repositories", "Pull Requests", "Code Reviews", "CI/CD"],
    },
    {
      name: "VS Code",
      iconSrc: "/images/stack/vscode.svg",
      percentage: 90,
      description:
        "Primary development workspace, configured with custom extensions, keybindings, and debugging tooling for optimized productivity.",
      usages: ["Frontend Development", "Debugging", "Workspace Customization"],
    },
    {
      name: "Figma",
      iconSrc: "/images/stack/figma.svg",
      percentage: 65,
      description:
        "Translating UI/UX wireframes, design systems, and visual prototypes into pixel-perfect frontend implementations.",
      usages: ["UI/UX Prototyping", "Design Systems", "Wireframing"],
    },
    {
      name: "AWS",
      iconSrc: "/images/stack/aws.svg",
      percentage: 50,
      description:
        "Understanding core cloud infrastructure services, deployment workflows, and server hosting fundamentals.",
      usages: ["Cloud Hosting", "S3 Storage", "Deployment Workflows"],
    },
  ],
};