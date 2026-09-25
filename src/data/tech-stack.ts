import type { TechStackType } from "../sections/tech_stack/TechStackSection";

export const techStacksData: TechStackType = {
  title: "Tech-Stack & Usage",
  subtitle: "A comprehensive breakdown of the technologies, frameworks, and tools I use to build scalable full-stack applications.",
  languages: [
    {
      name: "VS Code",
      iconSrc: "/images/stack/vscode.svg",
      percentage: 100,
      description:
        "Primary development workspace, configured with custom extensions, keybindings, and debugging tooling for optimized productivity.",
      usages: ["Frontend Development", "Debugging", "Workspace Customization"],
    },
    {
      name: "React",
      iconSrc: "/images/stack/react.svg",
      percentage: 90,
      description:
        "Building interactive, modular, and performant user interfaces using hooks, custom state management, and component-driven architecture.",
      usages: ["UI Components", "Hooks & Context", "State Management", "SPAs"],
    },
    {
      name: "Next.js",
      iconSrc: "/images/stack/nextjs.svg",
      percentage: 10,
      description:
        "Developing full-stack React applications with server-side rendering, static site generation, API routes, and optimized routing.",
      usages: ["SSR / SSG", "App Router", "Full-stack React", "SEO Optimization"],
    },
    {
      name: "TypeScript",
      iconSrc: "/images/stack/typescript.svg",
      percentage: 90,
      description:
        "Strong experience with type-safe web development, interface design, generics, and leveraging strict typing for maintainable codebases.",
      usages: ["Type Safety", "Interfaces & Generics", "Code Reliability"],
    },
    {
      name: "Tailwind CSS",
      iconSrc: "/images/stack/tailwind.svg",
      percentage: 90,
      description:
        "Utility-first styling for responsive layouts, custom design tokens, dark mode variants, and smooth UI transitions.",
      usages: ["Utility-First CSS", "CVA Variants", "Design Tokens", "Dark Mode"],
    },
    {
      name: "Class Variance Authority (CVA)",
      iconSrc: "/images/stack/cva.svg",
      percentage: 85,
      description:
        "Constructing type-safe, highly composable UI component variants alongside Tailwind CSS and custom component libraries.",
      usages: ["Component Variants", "Type-Safe Props", "Tailwind Integration", "Design Systems"],
    },
    {
      name: "HTML 5",
      iconSrc: "/images/stack/html.svg",
      percentage: 75,
      description:
        "Solid foundation in semantic HTML5 structure, accessibility standards, DOM hierarchy, and SEO best practices.",
      usages: ["Semantic Markup", "Accessibility (a11y)", "SEO"],
    },
    {
      name: "CSS 3",
      iconSrc: "/images/stack/css.svg",
      percentage: 75,
      description:
        "Expertise in modern CSS3, including Flexbox, CSS Grid, animations, custom variants, and responsive layout architectures.",
      usages: ["Responsive Design", "Flexbox & Grid", "Animations"],
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
      name: "Vitest",
      iconSrc: "/images/stack/vitest.svg",
      percentage: 50,
      description:
        "Unit and integration testing for React components and TypeScript utilities using Vitest, React Testing Library, and user-event.",
      usages: ["Unit Testing", "Integration Testing", "React Testing Library", "TDD"],
    },
    {
      name: "Shadcn UI",
      iconSrc: "/images/stack/shadcn.svg",
      iconDarkSrc: "/images/stack/shadcn-dark.svg",
      percentage: 60,
      description:
        "Crafting accessible, customizable, and polished component libraries built on Radix primitives and Tailwind CSS.",
      usages: ["Component Library", "Radix Primitives", "Accessible UI"],
    },
    {
      name: "Base UI",
      iconSrc: "/images/stack/baseui.svg",
      iconDarkSrc: "/images/stack/baseui-dark.svg",
      percentage: 60,
      description:
        "Building accessible, unstyled UI components with Base UI primitives for fully customizable design systems.",
      usages: ["Headless UI", "Accessibility", "Custom Components"],
    },
    {
      name: "Git",
      iconSrc: "/images/stack/git.svg",
      percentage: 90,
      description:
        "Proficient in local version control, staging, branching strategies, commit history management, and resolving merge conflicts.",
      usages: ["Version Control", "Branch Management", "CLI Workflow"],
    },
    {
      name: "GitHub",
      iconSrc: "/images/stack/github.svg",
      iconDarkSrc: "/images/stack/github-dark.svg",
      percentage: 90,
      description:
        "Collaborative development using remote repositories, pull requests, code reviews, and automated CI/CD workflows.",
      usages: ["Remote Repositories", "Pull Requests", "Code Reviews", "CI/CD"],
    },
    {
      name: "Figma",
      iconSrc: "/images/stack/figma.svg",
      percentage: 50,
      description:
        "Translating UI/UX wireframes, design systems, and visual prototypes into pixel-perfect frontend implementations.",
      usages: ["UI/UX Prototyping", "Design Systems", "Wireframing"],
    },
    {
      name: "AWS",
      iconSrc: "/images/stack/aws.svg",
      iconDarkSrc: "/images/stack/aws-dark.svg",
      percentage: 15,
      description:
        "Understanding core cloud infrastructure services, deployment workflows, and server hosting fundamentals.",
      usages: ["Cloud Hosting", "S3 Storage", "Deployment Workflows"],
    },
    {
      name: "MySQL",
      iconSrc: "/images/stack/mysql.svg",
      percentage: 30,
      description:
        "Relational database design, schema management, indexing, writing complex SQL queries, and integrating ORMs like Hibernate/JPA.",
      usages: ["Relational DB", "Schema Design", "SQL", "Flyway Migrations"],
    },
    {
      name: "MongoDB",
      iconSrc: "/images/stack/mongo.svg",
      percentage: 5,
      description:
        "Basic experience with NoSQL document-based database operations, collections, and JSON schema modeling.",
      usages: ["NoSQL DB", "Document Storage", "Schema Modeling"],
    },
    {
      name: "IntelliJ IDEA",
      iconSrc: "/images/stack/intellij.svg",
      percentage: 30,
      description:
        "Primary IDE for Java and Spring Boot development, leveraging built-in profiling, database tools, refactoring features, and Maven/Gradle integration.",
      usages: ["Java / Spring Boot IDE", "Backend Development", "Refactoring & Debugging"],
    },
    {
      name: "WebStorm",
      iconSrc: "/images/stack/webstorm.svg",
      percentage: 5,
      description:
        "JetBrains IDE environment for JavaScript and TypeScript development, featuring smart code completion and integrated developer tools.",
      usages: ["Frontend IDE", "JavaScript", "TypeScript"],
    },
    {
      name: "Junie",
      iconSrc: "/images/stack/junie.svg",
      percentage: 5,
      description:
        "Exploration and integration of Junie tooling into active development workflows for code generation and workspace assistance.",
      usages: ["AI Coding Assistant", "Developer Tooling", "Workflow Optimization"],
    },
    {
      name: "Java",
      iconSrc: "/images/stack/java.svg",
      percentage: 30,
      description:
        "Proficient in core Java with OOP principles, collections, streams, multithreading, and exception handling for building robust backend applications.",
      usages: ["Backend Development", "OOP", "Streams API", "Multithreading"],
    },
    {
      name: "Spring Boot",
      iconSrc: "/images/stack/spring.svg",
      percentage: 30,
      description:
        "Experience building enterprise-grade applications, RESTful APIs, modular Monolithic architectures, and scalable Microservices using Spring Boot, JPA, Hibernate, and Spring Security.",
      usages: ["Monolithic Architecture", "Microservices", "REST APIs", "JPA/Hibernate", "Spring Security"],
    },
    {
      name: "Postman",
      iconSrc: "/images/stack/postman.svg",
      percentage: 30,
      description:
        "API testing, endpoint documentation, environment variable configuration, request validation, and automated collection testing for backend services.",
      usages: ["API Testing", "Endpoint Verification", "Collections", "Documentation"],
    },
    {
      name: "Docker",
      iconSrc: "/images/stack/docker.svg",
      percentage: 30,
      description:
        "Containerizing applications, writing Dockerfiles, managing multi-container environments with Docker Compose, and simplifying deployment.",
      usages: ["Containerization", "Docker Compose", "DevOps", "Deployments"],
    },
  ],
};