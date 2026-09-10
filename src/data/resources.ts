export const resourcesData = {
  hidden: false,
  sectionTitle: "Resources",
  subtitle: "References and tools I rely on every day",
  description: "A curated collection of documentation, testing tools, and community references that keep me productive and learning across the full stack.",
  categories: [
    {
      id: "fullstack",
      name: "Full Stack",
      subtitle: "Foundation references",
      count: 2,
      hidden: false,
      items: [
        {
          id: 1,
          title: "MDN Web Docs",
          badge: "Reference",
          description: "The go-to reference for HTML, CSS, and JavaScript — comprehensive, authoritative, and always up to date.",
          link: "https://developer.mozilla.org/en-US",
          hidden: false
        },
        {
          id: 2,
          title: "DevDocs",
          badge: "Docs Hub",
          description: "Aggregated, searchable API documentation for hundreds of languages and frameworks in one fast interface.",
          link: "https://devdocs.io",
          hidden: false
        }
      ]
    },
    {
      id: "frontend",
      name: "Frontend",
      subtitle: "UI & testing toolkit",
      count: 4,
      hidden: false,
      items: [
        {
          id: 3,
          title: "Vitest",
          badge: "Testing",
          description: "A blazing-fast unit test framework powered by Vite — my go-to for testing React components and utilities.",
          link: "https://vitest.dev/guide/why.html",
          hidden: false
        },
        {
          id: 4,
          title: "Testing Library",
          badge: "Testing",
          description: "User-centric testing utilities that encourage writing tests resembling real user interactions.",
          link: "https://testing-library.com/docs",
          hidden: false
        },
        {
          id: 5,
          title: "NPM JS",
          badge: "Package Registry",
          description: "The world's largest software registry — where I discover, evaluate, and manage JavaScript packages.",
          link: "https://www.npmjs.com",
          hidden: false
        },
        {
          id: 6,
          title: "React Router",
          badge: "Routing",
          description: "Declarative, component-based routing for React apps — handles navigation from simple SPAs to Full-stack frameworks.",
          link: "https://reactrouter.com/start/modes",
          hidden: false
        }
      ]
    },
    {
      id: "backend",
      name: "Backend",
      subtitle: "Server-side essentials",
      count: 4,
      hidden: false,
      items: [
        {
          id: 7,
          title: "Spring Docs",
          badge: "Framework Docs",
          description: "Official Spring Framework and Spring Boot documentation — my primary guide for building robust Java backends.",
          link: "https://spring.io/docs",
          hidden: false
        },
        {
          id: 8,
          title: "Baeldung",
          badge: "Tutorials",
          description: "In-depth tutorials and guides on Java, Spring Boot, REST APIs, and security. Invaluable for real-world patterns.",
          link: "https://www.baeldung.com",
          hidden: false
        },
        {
          id: 9,
          title: "Postman",
          badge: "API Testing",
          description: "The API platform I use to design, test, and document REST endpoints throughout development.",
          "link": "https://www.postman.com",
          "hidden": false
        },
        {
          "id": 10,
          "title": "Docker Docs",
          "badge": "DevOps",
          "description": "Official Docker documentation for containerising Java services and orchestrating development environments.",
          "link": "https://docs.docker.com",
          "hidden": false
        }
      ]
    }
  ]
}