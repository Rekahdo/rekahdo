import { stackValidator } from "@/convex/schema";
import { Infer } from "convex/values";

export const stacksData: Promise<Infer<typeof stackValidator>[]> =
  Promise.resolve([
    {
      name: "VS Code",
      icon: { src: "/images/stack/vscode.svg", alt: "VS Code" },
      percentage: 100,
      description:
        "Primary development workspace, configured with custom extensions, keybindings, and debugging tooling for optimized productivity.",
      usages: [
        { title: "Frontend Development" },
        { title: "Debugging" },
        { title: "Workspace Customization" },
      ],
      type: "tool",
    },
    {
      name: "React",
      icon: { src: "/images/stack/react.svg", alt: "React" },
      percentage: 80,
      description:
        "Building interactive, modular, and performant user interfaces using hooks, custom state management, and component-driven architecture.",
      usages: [
        { title: "UI Components" },
        { title: "Hooks & Context" },
        { title: "State Management" },
        { title: "SPAs" },
      ],
      type: "language",
    },
    {
      name: "Next.js",
      icon: { src: "/images/stack/nextjs.svg", alt: "Next.js" },
      percentage: 90,
      description:
        "Developing full-stack React applications with server-side rendering, static site generation, API routes, and optimized routing.",
      usages: [
        { title: "SSR / SSG" },
        { title: "App Router" },
        { title: "Full-stack React" },
        { title: "SEO Optimization" },
      ],
      type: "language",
    },
    {
      name: "TypeScript",
      icon: { src: "/images/stack/typescript.svg", alt: "TypeScript" },
      percentage: 90,
      description:
        "Strong experience with type-safe web development, interface design, generics, and leveraging strict typing for maintainable codebases.",
      usages: [
        { title: "Type Safety" },
        { title: "Interfaces & Generics" },
        { title: "Code Reliability" },
      ],
      type: "language",
    },
    {
      name: "Tailwind CSS",
      icon: { src: "/images/stack/tailwind.svg", alt: "Tailwind CSS" },
      percentage: 90,
      description:
        "Utility-first styling for responsive layouts, custom design tokens, dark mode variants, and smooth UI transitions.",
      usages: [
        { title: "Utility-First CSS" },
        { title: "CVA Variants" },
        { title: "Design Tokens" },
        { title: "Dark Mode" },
      ],
      type: "language",
    },
    {
      name: "Class Variance Authority (CVA)",
      icon: { src: "/images/stack/cva.svg", alt: "Class Variance Authority" },
      percentage: 85,
      description:
        "Constructing type-safe, highly composable UI component variants alongside Tailwind CSS and custom component libraries.",
      usages: [
        { title: "Component Variants" },
        { title: "Type-Safe Props" },
        { title: "Tailwind Integration" },
        { title: "Design Systems" },
      ],
      type: "tool",
    },
    {
      name: "HTML 5",
      icon: { src: "/images/stack/html.svg", alt: "HTML 5" },
      percentage: 75,
      description:
        "Solid foundation in semantic HTML5 structure, accessibility standards, DOM hierarchy, and SEO best practices.",
      usages: [
        { title: "Semantic Markup" },
        { title: "Accessibility (a11y)" },
        { title: "SEO" },
      ],
      type: "language",
    },
    {
      name: "CSS 3",
      icon: { src: "/images/stack/css.svg", alt: "CSS 3" },
      percentage: 75,
      description:
        "Expertise in modern CSS3, including Flexbox, CSS Grid, animations, custom variants, and responsive layout architectures.",
      usages: [
        { title: "Responsive Design" },
        { title: "Flexbox & Grid" },
        { title: "Animations" },
      ],
      type: "language",
    },
    {
      name: "JavaScript",
      icon: { src: "/images/stack/javascript.svg", alt: "JavaScript" },
      percentage: 75,
      description:
        "Growing proficiency in modern JavaScript including ES6+ features, DOM manipulation, and asynchronous programming.",
      usages: [
        { title: "ES6+" },
        { title: "Async/Await" },
        { title: "DOM Manipulation" },
        { title: "Web APIs" },
      ],
      type: "language",
    },
    {
      name: "Convex",
      icon: { src: "/images/stack/convex.svg", alt: "Convex" },
      percentage: 90,
      description:
        "Backend-as-a-Service providing real-time data synchronization, end-to-end type-safe database queries, and serverless reactive backend functions.",
      usages: [
        { title: "Real-time DB" },
        { title: "Reactive Queries" },
        { title: "Serverless Functions" },
        { title: "Type-Safe Backend" },
      ],
      type: "tool",
    },
    {
      name: "Better Auth",
      icon: {
        src: "/images/stack/better-auth.svg",
        srcDark: "/images/stack/better-auth-dark.svg",
        alt: "Better Auth",
      },
      percentage: 90,
      description:
        "Comprehensive authentication library for modern web applications with built-in support for multiple providers, session management, and plugins.",
      usages: [
        { title: "Authentication" },
        { title: "Session Management" },
        { title: "OAuth" },
        { title: "Type-Safe Auth" },
      ],
      type: "tool",
    },
    {
      name: "Vitest",
      icon: { src: "/images/stack/vitest.svg", alt: "Vitest" },
      percentage: 50,
      description:
        "Unit and integration testing for React components and TypeScript utilities using Vitest, React Testing Library, and user-event.",
      usages: [
        { title: "Unit Testing" },
        { title: "Integration Testing" },
        { title: "React Testing Library" },
        { title: "TDD" },
      ],
      type: "tool",
    },
    {
      name: "Shadcn UI",
      icon: {
        src: "/images/stack/shadcn.svg",
        srcDark: "/images/stack/shadcn-dark.svg",
        alt: "Shadcn UI",
      },
      percentage: 85,
      description:
        "Crafting accessible, customizable, and polished component libraries built on Radix primitives and Tailwind CSS.",
      usages: [
        { title: "Component Library" },
        { title: "Radix Primitives" },
        { title: "Accessible UI" },
      ],
      type: "tool",
    },
    {
      name: "Base UI",
      icon: {
        src: "/images/stack/baseui.svg",
        srcDark: "/images/stack/baseui-dark.svg",
        alt: "Base UI",
      },
      percentage: 85,
      description:
        "Building accessible, unstyled UI components with Base UI primitives for fully customizable design systems.",
      usages: [
        { title: "Headless UI" },
        { title: "Accessibility" },
        { title: "Custom Components" },
      ],
      type: "tool",
    },
    {
      name: "Git",
      icon: { src: "/images/stack/git.svg", alt: "Git" },
      percentage: 90,
      description:
        "Proficient in local version control, staging, branching strategies, commit history management, and resolving merge conflicts.",
      usages: [
        { title: "Version Control" },
        { title: "Branch Management" },
        { title: "CLI Workflow" },
      ],
      type: "tool",
    },
    {
      name: "GitHub",
      icon: {
        src: "/images/stack/github.svg",
        srcDark: "/images/stack/github-dark.svg",
        alt: "GitHub",
      },
      percentage: 90,
      description:
        "Collaborative development using remote repositories, pull requests, code reviews, and automated CI/CD workflows.",
      usages: [
        { title: "Remote Repositories" },
        { title: "Pull Requests" },
        { title: "Code Reviews" },
        { title: "CI/CD" },
      ],
      type: "tool",
    },
    {
      name: "Figma",
      icon: { src: "/images/stack/figma.svg", alt: "Figma" },
      percentage: 50,
      description:
        "Translating UI/UX wireframes, design systems, and visual prototypes into pixel-perfect frontend implementations.",
      usages: [
        { title: "UI/UX Prototyping" },
        { title: "Design Systems" },
        { title: "Wireframing" },
      ],
      type: "resource",
    },
    {
      name: "Excalidraw",
      icon: { src: "/images/stack/excalidraw.svg", alt: "Excalidraw" },
      percentage: 50,
      description:
        "Sketching low-fidelity wireframes, system architecture diagrams, and virtual whiteboard brainstorming sessions.",
      usages: [
        { title: "Architecture Diagrams" },
        { title: "Wireframing" },
        { title: "Whiteboarding" },
        { title: "System Design" },
      ],
      type: "resource",
    },
    {
      name: "AWS",
      icon: {
        src: "/images/stack/aws.svg",
        srcDark: "/images/stack/aws-dark.svg",
        alt: "AWS",
      },
      percentage: 15,
      description:
        "Understanding core cloud infrastructure services, deployment workflows, and server hosting fundamentals.",
      usages: [
        { title: "Cloud Hosting" },
        { title: "S3 Storage" },
        { title: "Deployment Workflows" },
      ],
      type: "tool",
    },
    {
      name: "MySQL",
      icon: { src: "/images/stack/mysql.svg", alt: "MySQL" },
      percentage: 30,
      description:
        "Relational database design, schema management, indexing, writing complex SQL queries, and integrating ORMs like Hibernate/JPA.",
      usages: [
        { title: "Relational DB" },
        { title: "Schema Design" },
        { title: "SQL" },
        { title: "Flyway Migrations" },
      ],
      type: "tool",
    },
    {
      name: "MongoDB",
      icon: { src: "/images/stack/mongo.svg", alt: "MongoDB" },
      percentage: 5,
      description:
        "Basic experience with NoSQL document-based database operations, collections, and JSON schema modeling.",
      usages: [
        { title: "NoSQL DB" },
        { title: "Document Storage" },
        { title: "Schema Modeling" },
      ],
      type: "tool",
    },
    {
      name: "IntelliJ IDEA",
      icon: { src: "/images/stack/intellij.svg", alt: "IntelliJ IDEA" },
      percentage: 30,
      description:
        "Primary IDE for Java and Spring Boot development, leveraging built-in profiling, database tools, refactoring features, and Maven/Gradle integration.",
      usages: [
        { title: "Java / Spring Boot IDE" },
        { title: "Backend Development" },
        { title: "Refactoring & Debugging" },
      ],
      type: "tool",
    },
    {
      name: "WebStorm",
      icon: { src: "/images/stack/webstorm.svg", alt: "WebStorm" },
      percentage: 5,
      description:
        "JetBrains IDE environment for JavaScript and TypeScript development, featuring smart code completion and integrated developer tools.",
      usages: [
        { title: "Frontend IDE" },
        { title: "JavaScript" },
        { title: "TypeScript" },
      ],
      type: "tool",
    },
    {
      name: "Java",
      icon: { src: "/images/stack/java.svg", alt: "Java" },
      percentage: 30,
      description:
        "Proficient in core Java with OOP principles, collections, streams, multithreading, and exception handling for building robust backend applications.",
      usages: [
        { title: "Backend Development" },
        { title: "OOP" },
        { title: "Streams API" },
        { title: "Multithreading" },
      ],
      type: "language",
    },
    {
      name: "Spring Boot",
      icon: { src: "/images/stack/spring.svg", alt: "Spring Boot" },
      percentage: 30,
      description:
        "Experience building enterprise-grade applications, RESTful APIs, modular Monolithic architectures, and scalable Microservices using Spring Boot, JPA, Hibernate, and Spring Security.",
      usages: [
        { title: "Monolithic Architecture" },
        { title: "Microservices" },
        { title: "REST APIs" },
        { title: "JPA/Hibernate" },
        { title: "Spring Security" },
      ],
      type: "language",
    },
    {
      name: "Postman",
      icon: { src: "/images/stack/postman.svg", alt: "Postman" },
      percentage: 30,
      description:
        "API testing, endpoint documentation, environment variable configuration, request validation, and automated collection testing for backend services.",
      usages: [
        { title: "API Testing" },
        { title: "Endpoint Verification" },
        { title: "Collections" },
        { title: "Documentation" },
      ],
      type: "tool",
    },
    {
      name: "Docker",
      icon: { src: "/images/stack/docker.svg", alt: "Docker" },
      percentage: 30,
      description:
        "Containerizing applications, writing Dockerfiles, managing multi-container environments with Docker Compose, and simplifying deployment.",
      usages: [
        { title: "Containerization" },
        { title: "Docker Compose" },
        { title: "DevOps" },
        { title: "Deployments" },
      ],
      type: "tool",
    },
  ]);
