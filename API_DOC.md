# API Documentation

## Table of Contents

- [API Endpoints](https://www.google.com/search?q=%23api-endpoints)
  - [Header](https://www.google.com/search?q=%23header)
  - [Hero Section](https://www.google.com/search?q=%23hero-section)
  - [About Me](https://www.google.com/search?q=%23about-me)
  - [Tech Stack](https://www.google.com/search?q=%23tech-stack)
  - [Stack Usage](https://www.google.com/search?q=%23stack-usage)
  - [Growth](https://www.google.com/search?q=%23growth)
  - [Services](https://www.google.com/search?q=%23services)
  - [Resources](https://www.google.com/search?q=%23resources)
  - [Projects](https://www.google.com/search?q=%23projects)
  - [Contact Me & Social Links](https://www.google.com/search?q=%23contact-me--social-links)
  - [Footer](https://www.google.com/search?q=%23footer)

- [Request and Response Schemas](https://www.google.com/search?q=%23request-and-response-schemas)
  - [Header Section](https://www.google.com/search?q=%23header-section-1)
  - [Hero Section](https://www.google.com/search?q=%23hero-section-1)
  - [About Me Section](https://www.google.com/search?q=%23about-me-section)
  - [Tech Stack Section](https://www.google.com/search?q=%23tech-stack-section)
  - [Stack Usage Section](https://www.google.com/search?q=%23stack-usage-section)
  - [Growth Section](https://www.google.com/search?q=%23growth-section)
  - [Services Section](https://www.google.com/search?q=%23services-section)
  - [Resources Section](https://www.google.com/search?q=%23resources-section)
  - [Projects Section](https://www.google.com/search?q=%23projects-section)
  - [Contact Me Section](https://www.google.com/search?q=%23contact-me-section)
  - [Footer Section](https://www.google.com/search?q=%23footer-section)
  - [Error Responses](https://www.google.com/search?q=%23error-responses)

---

## API Endpoints

### Header

* `GET /api/header` – Retrieve full header metadata, brand identity, navigation links, and primary CTA button.
* `PUT /api/header` – Update general header settings (brand name, CTA button config).
* `GET /api/header/links` – Retrieve navigation links array.
* `POST /api/header/links` – Create a new navigation item.
* `PUT /api/header/links/:id` – Update a navigation link by ID.
* `DELETE /api/header/links/:id` – Delete a navigation link by ID.

### Hero Section

* `GET /api/hero-section` – Retrieve hero section content including greetings, developer titles, profile avatar metadata, tag list, and dynamic action buttons.
* `PUT /api/hero-section` – Update hero section content.

### About Me

* `GET /api/about-me` – Retrieve About Me overview, experience counters, featured quote, education/certifications list, and soft/core skills.
* `PUT /api/about-me` – Update general About Me content (title, bio paragraph, quote).
* `POST /api/about-me/education` – Add an education or certification entry.
* `PUT /api/about-me/education/:id` – Update an education or certification entry.
* `DELETE /api/about-me/education/:id` – Remove an education entry.
* `POST /api/about-me/skills` – Add a core skill pill item.
* `PUT /api/about-me/skills/:id` – Update a core skill item.
* `DELETE /api/about-me/skills/:id` – Remove a core skill item.

### Tech Stack

* `GET /api/tech-stack` – Retrieve all technical stack cards.
* `POST /api/tech-stack` – Add a tech stack card.
* `PUT /api/tech-stack/:id` – Update a tech stack card by ID.
* `DELETE /api/tech-stack/:id` – Delete a tech stack card by ID.

### Stack Usage

* `GET /api/stack-usage` – Retrieve individual usage percentages, category percentages, and proficiency scale legends.
* `PUT /api/stack-usage/category-breakdown` – Update category overview values (e.g., Backend, Frontend, DevOps).
* `POST /api/stack-usage/items` – Add an individual technology progress bar.
* `PUT /api/stack-usage/items/:id` – Update an individual technology progress bar by ID.
* `DELETE /api/stack-usage/items/:id` – Remove a technology progress bar.

### Growth

* `GET /api/growth` – Retrieve learning growth cards and motivational quote.
* `POST /api/growth` – Add a growth/learning item.
* `PUT /api/growth/:id` – Update a growth item by ID.
* `DELETE /api/growth/:id` – Delete a growth item by ID.

### Services

* `GET /api/services` – Retrieve services cards.
* `POST /api/services` – Add a new service offering.
* `PUT /api/services/:id` – Update a service offering by ID.
* `DELETE /api/services/:id` – Delete a service offering by ID.

### Resources

* `GET /api/resources` – Retrieve curated resource categories and links.
* `POST /api/resources` – Add a new resource item.
* `PUT /api/resources/:id` – Update a resource item by ID.
* `DELETE /api/resources/:id` – Delete a resource item by ID.

### Projects

* `GET /api/projects` – Retrieve all project items.
* `POST /api/projects` – Add a new project card.
* `PUT /api/projects/:id` – Update a project card by ID.
* `DELETE /api/projects/:id` – Delete a project card by ID.

### Contact Me & Social Links

* `GET /api/contact-me` – Retrieve contact information and social profiles.
* `POST /api/contact-me/messages` – Submit a new contact message from the frontend.
* `GET /api/contact-me/messages` – Retrieve received contact messages (Admin).
* `DELETE /api/contact-me/messages/:id` – Delete a contact message (Admin).

### Footer

* `GET /api/footer` – Retrieve footer copyright details, layout settings, and links.
* `PUT /api/footer` – Update footer content.

---

## Request and Response Schemas

### Header Section

#### `GET /api/header`

**Response:** `200 OK`

```json
{
  "hidden": false,
  "brandName": "REKAHDO.dev",
  "brandLogoUrl": "/images/logo.png",
  "ctaButton": {
    "hidden": false,
    "label": "Download CV",
    "path": "/resume.pdf",
    "isExternal": true
  },
  "navLinks": [
    {
      "id": 1,
      "label": "Home",
      "path": "#home",
      "hidden": false,
      "indexPosition": 1
    },
    {
      "id": 2,
      "label": "About Me",
      "path": "#about",
      "hidden": false,
      "indexPosition": 2
    },
    {
      "id": 3,
      "label": "Tech-Stack",
      "path": "#tech-stack",
      "hidden": false,
      "indexPosition": 3
    },
    {
      "id": 4,
      "label": "Projects",
      "path": "#projects",
      "hidden": false,
      "indexPosition": 4
    },
    {
      "id": 5,
      "label": "Contact Me",
      "path": "#contact",
      "hidden": false,
      "indexPosition": 5
    }
  ]
}

```

**Field Descriptions:**

* `visible`: Set to `true` to render the header component; `false` hides the navigation header bar entirely.
* `brandName`: The main brand title displayed on the top-left corner.
* `ctaButton.visible`: Controls visibility of the top-right CTA action button (e.g., Download CV).
* `navLinks[].visible`: Controls whether an individual navigation item renders in the menu bar.
* `navLinks[].indexPosition`: Numerical sort order for links on the navbar.

---

### Hero Section

#### `GET /api/hero-section`

**Response:** `200 OK`

```json
{
  "hidden": false,
  "greetings": "Hi there, I'm",
  "fullName": "RICHARD OKAFOR",
  "mainTitle": "Java Backend Developer & An Aspiring Frontend Developer",
  "description": "Welcome to my portfolio, where I showcase my projects, skills, and experience as a passionate developer with a focus on Java-based and front-end technologies, developing innovative solutions that drive business value and user engagement.",
  "location": "Lagos, Nigeria",
  "avatarUrl": "/images/profile.jpg",
  "tags": [
    {
      "id": 1,
      "label": "Clean-Code Developer",
      "hidden": false
    },
    {
      "id": 2,
      "label": "TS Academy Frontend Development Student",
      "hidden": false
    }
  ],
  "actionButtons": [
    {
      "id": 1,
      "label": "Contact Me",
      "path": "#contact",
      "variant": "primary",
      "hidden": false
    },
    {
      "id": 2,
      "label": "Tech-Stack",
      "path": "#tech-stack",
      "variant": "outline",
      "hidden": false
    },
    {
      "id": 3,
      "label": "Download CV",
      "path": "/resume.pdf",
      "variant": "outline",
      "hidden": false
    }
  ]
}

```

#### `PUT /api/hero-section`

**Request Body:**

```json
{
  "hidden": false,
  "greetings": "Hi there, I'm",
  "fullName": "RICHARD OKAFOR",
  "mainTitle": "Java Backend Developer & An Aspiring Frontend Developer",
  "description": "Updated personal summary...",
  "location": "Lagos, Nigeria",
  "avatarUrl": "/images/profile.jpg"
}

```

**Field Descriptions:**

* `visible`: Controls overall visibility of the Hero Hero layout block on the landing page.
* `tags[].visible`: Individual toggles to show/hide status badges underneath the hero text bio.
* `actionButtons[].variant`: Directs UI styling (`primary` for filled buttons, `outline` for bordered buttons).
* `actionButtons[].visible`: Dynamic display switch for hero action links.

---

### About Me Section

#### `GET /api/about-me`

**Response:** `200 OK`

```json
{
  "hidden": false,
  "sectionTitle": "About me",
  "headline": "Bridging Backend Stability With Frontend Inspiration",
  "bio": "I am a Java backend developer with almost 2 years of experience, specializing in building scalable and robust systems using Spring Boot and microservices architecture. I also have 2 years of experience working in a solar engineering company. I am currently expanding into front-end development.",
  "profileImageUrl": "/images/about-portrait.jpg",
  "experienceMetrics": {
    "hidden": false,
    "backendYears": "1+",
    "backendLabel": "Backend Years Experience",
    "frontendYears": "1",
    "frontendLabel": "Frontend Years Experience"
  },
  "quote": {
    "hidden": false,
    "text": "To me, Full-stack development involves engineering robust, scalable systems, bringing back-end stability and front-end inspiration to create seamless user experience."
  },
  "education": [
    {
      "id": 1,
      "title": "Software Engineering",
      "institution": "NIIT",
      "icon": "/icons/niit.svg",
      "hidden": false
    },
    {
      "id": 2,
      "title": "Spring Boot Certification",
      "institution": "Udemy",
      "icon": "/icons/udemy.svg",
      "hidden": false
    },
    {
      "id": 3,
      "title": "Frontend Development",
      "institution": "TS Academy",
      "icon": "/icons/ts-academy.svg",
      "hidden": false
    }
  ],
  "coreSkills": [
    { "id": 1, "name": "Teaching", "emoji": "🧠", "hidden": false },
    { "id": 2, "name": "Problem Solving", "emoji": "🔧", "hidden": false },
    { "id": 3, "name": "Communication", "emoji": "💬", "hidden": false },
    { "id": 4, "name": "Collaboration", "emoji": "🤝", "hidden": false },
    { "id": 5, "name": "Team working", "emoji": "👥", "hidden": false },
    { "id": 6, "name": "Version Control", "emoji": "🔀", "hidden": false },
    { "id": 7, "name": "Agile", "emoji": "♻️", "hidden": false }
  ]
}

```

**Field Descriptions:**

* `experienceMetrics.visible`: Toggles the numerical counters block (years of experience).
* `quote.visible`: Controls the callout box displaying the personal philosophy quote.
* `education[].visible`: Switch to toggle specific academic or certification badges.
* `coreSkills[].visible`: Individual skill tag visibility boolean.

---

### Tech Stack Section

#### `GET /api/tech-stack`

**Response:** `200 OK`

```json
[
  {
    "id": 1,
    "name": "Java Programming",
    "icon": "/icons/java.svg",
    "description": "Proficient in core Java with OOP principles, collections, streams, and exception handling for building robust backend applications.",
    "hidden": false,
    "indexPosition": 1
  },
  {
    "id": 2,
    "name": "Spring Boot",
    "icon": "/icons/spring.svg",
    "description": "Experience building RESTful APIs and microservices using Spring Boot, JPA, and Spring Security for enterprise-grade applications.",
    "hidden": false,
    "indexPosition": 2
  },
  {
    "id": 3,
    "name": "HTML & CSS",
    "icon": "/icons/html5.svg",
    "description": "Solid foundation in semantic HTML5 and CSS3 including Flexbox, Grid, and responsive design principles.",
    "hidden": false,
    "indexPosition": 3
  },
  {
    "id": 4,
    "name": "JavaScript",
    "icon": "/icons/javascript.svg",
    "description": "Growing proficiency in modern JavaScript including ES6+ features, DOM manipulation, and asynchronous programming.",
    "hidden": false,
    "indexPosition": 4
  }
]

```

**Field Descriptions:**

* `visible`: Dictates if a tech stack card renders on the grid.

---

### Stack Usage Section

#### `GET /api/stack-usage`

**Response:** `200 OK`

```json
{
  "hidden": false,
  "sectionTitle": "Stack Usage",
  "subtitle": "A percentage breakdown of how much I use each technology",
  "individualTechnologies": [
    { "id": 1, "name": "Java", "icon": "/icons/java.svg", "percentage": 78, "color": "#0056b3", "hidden": false },
    { "id": 2, "name": "Spring Boot", "icon": "/icons/spring.svg", "percentage": 65, "color": "#28a745", "hidden": false },
    { "id": 3, "name": "REST APIs", "icon": "/icons/api.svg", "percentage": 72, "color": "#007bff", "hidden": false },
    { "id": 4, "name": "SQL / JPA", "icon": "/icons/database.svg", "percentage": 60, "color": "#6f42c1", "hidden": false },
    { "id": 5, "name": "HTML & CSS", "icon": "/icons/html.svg", "percentage": 55, "color": "#fd7e14", "hidden": false },
    { "id": 6, "name": "JavaScript", "icon": "/icons/js.svg", "percentage": 42, "color": "#d97706", "hidden": false },
    { "id": 7, "name": "Git", "icon": "/icons/git.svg", "percentage": 68, "color": "#e83e8c", "hidden": false }
  ],
  "categoryOverview": [
    { "id": 1, "category": "Backend", "percentage": 72, "color": "#0056b3", "hidden": false },
    { "id": 2, "category": "Frontend", "percentage": 45, "color": "#fd7e14", "hidden": false },
    { "id": 3, "category": "DevOps / Tools", "percentage": 68, "color": "#28a745", "hidden": false }
  ],
  "proficiencyKey": [
    { "range": "70 – 100%", "description": "Professional / Production use", "hidden": false },
    { "range": "50 – 69%", "description": "Intermediate / Project-proven", "hidden": false },
    { "range": "30 – 49%", "description": "Learning / Actively practising", "hidden": false }
  ]
}

```

**Field Descriptions:**

* `individualTechnologies[].percentage`: Defines the width percentage of the linear progress indicator.
* `categoryOverview[].percentage`: Drives value rendering in the circular progress graphs.

---

### Growth Section

#### `GET /api/growth`

**Response:** `200 OK`

```json
{
  "hidden": false,
  "sectionTitle": "Growth",
  "subtitle": "What I am currently learning",
  "description": "Continuous learning is the key to unlocking full potential. By embracing new skills, I stay ahead of the curve, adapt to new challenges, and grow both personally and professionally.",
  "items": [
    {
      "id": 1,
      "title": "Frontend Development",
      "provider": "TS Academy",
      "status": "In Progress",
      "description": "Actively learning modern frontend development including React, Tailwind CSS, and component-based architecture to complement my backend expertise.",
      "technologies": ["React", "Tailwind CSS", "TypeScript"],
      "startDate": "08-02-2026",
      "endDate": "Present",
      "link": "https://github.com/username/project",
      "linkLabel": "What I worked on",
      "hidden": false
    },
    {
      "id": 2,
      "title": "AI Prompt Engineering",
      "provider": "Self-Learning",
      "status": "In Progress",
      "description": "Exploring AI-assisted development methodologies, learning to leverage LLM tools effectively to accelerate development and solve complex engineering challenges.",
      "technologies": ["LLMs", "Vibe Coding", "Automation"],
      "startDate": "20-03-2026",
      "endDate": "Present",
      "link": "https://github.com/username/project",
      "linkLabel": "What I worked on",
      "hidden": false
    }
  ],
  "quote": {
    "hidden": false,
    "text": "The future belongs to those who never stop learning. Every line of code I write today is an investment in the developer I become tomorrow."
  }
}

```

---

### Services Section

#### `GET /api/services`

**Response:** `200 OK`

```json
{
  "hidden": false,
  "sectionTitle": "Services",
  "subtitle": "What I do with my skills",
  "description": "As a developer with focused backend experience and ongoing frontend training, I am driven by a passion for creating seamless, user-centered applications that grow alongside evolving needs.",
  "services": [
    {
      "id": 1,
      "title": "API Development & Integration",
      "badge": "Backend",
      "subHeading": "REST · Microservices · Security",
      "description": "I design resilient, versioned APIs with secure authentication, solid form validation, and scalable communication patterns between microservices. From third-party integrations to clear documentation, I build APIs that are dependable in production.",
      "tags": ["Spring Security", "JWT Auth", "REST / JSON", "Swagger Docs"],
      "actionLabel": "Learn more",
      "actionUrl": "#contact",
      "hidden": false
    },
    {
      "id": 2,
      "title": "Full-Stack Development",
      "badge": "Full-Stack",
      "subHeading": "Java · Spring Boot · React",
      "description": "Combining backend expertise with growing frontend skills, I build end-to-end web applications — from scalable server-side APIs to responsive, component-driven UIs that deliver cohesive digital experiences.",
      "tags": ["Spring Boot", "React", "Tailwind CSS", "PostgreSQL"],
      "actionLabel": "Learn more",
      "actionUrl": "#contact",
      "hidden": false
    },
    {
      "id": 3,
      "title": "Backend Systems & Architecture",
      "badge": "Architecture",
      "subHeading": "Scalability · Reliability · Clean Code",
      "description": "I engineer robust, maintainable backend systems using best practices — SOLID principles, layered architecture, and microservices design — to deliver solutions that scale alongside business growth.",
      "tags": ["Microservices", "SOLID", "JPA / Hibernate", "Docker"],
      "actionLabel": "Learn more",
      "actionUrl": "#contact",
      "hidden": false
    },
    {
      "id": 4,
      "title": "Technical Consulting & Mentoring",
      "badge": "Consulting",
      "subHeading": "Teaching · Problem Solving · Growth",
      "description": "Leveraging my passion for clean code and continuous learning, I assist teams with code reviews, architecture discussions, and knowledge transfer to elevate engineering quality across projects.",
      "tags": ["Code Review", "Pair Programming", "Documentation", "Agile"],
      "actionLabel": "Learn more",
      "actionUrl": "#contact",
      "hidden": false
    }
  ]
}

```

---

### Resources Section

#### `GET /api/resources`

**Response:** `200 OK`

```json
{
  "hidden": false,
  "sectionTitle": "Resources",
  "subtitle": "References and tools I rely on every day",
  "description": "A curated collection of documentation, testing tools, and community references that keep me productive and learning across the full stack.",
  "categories": [
    {
      "id": "fullstack",
      "name": "Full Stack",
      "subtitle": "Foundation references",
      "count": 2,
      "hidden": false,
      "items": [
        {
          "id": 1,
          "title": "MDN Web Docs",
          "badge": "Reference",
          "description": "The go-to reference for HTML, CSS, and JavaScript — comprehensive, authoritative, and always up to date.",
          "link": "https://developer.mozilla.org/en-US",
          "hidden": false
        },
        {
          "id": 2,
          "title": "DevDocs",
          "badge": "Docs Hub",
          "description": "Aggregated, searchable API documentation for hundreds of languages and frameworks in one fast interface.",
          "link": "https://devdocs.io",
          "hidden": false
        }
      ]
    },
    {
      "id": "frontend",
      "name": "Frontend",
      "subtitle": "UI & testing toolkit",
      "count": 4,
      "hidden": false,
      "items": [
        {
          "id": 3,
          "title": "Vitest",
          "badge": "Testing",
          "description": "A blazing-fast unit test framework powered by Vite — my go-to for testing React components and utilities.",
          "link": "https://vitest.dev/guide/why.html",
          "hidden": false
        },
        {
          "id": 4,
          "title": "Testing Library",
          "badge": "Testing",
          "description": "User-centric testing utilities that encourage writing tests resembling real user interactions.",
          "link": "https://testing-library.com/docs",
          "hidden": false
        },
        {
          "id": 5,
          "title": "NPM JS",
          "badge": "Package Registry",
          "description": "The world's largest software registry — where I discover, evaluate, and manage JavaScript packages.",
          "link": "https://www.npmjs.com",
          "hidden": false
        },
        {
          "id": 6,
          "title": "React Router",
          "badge": "Routing",
          "description": "Declarative, component-based routing for React apps — handles navigation from simple SPAs to Full-stack frameworks.",
          "link": "https://reactrouter.com/start/modes",
          "hidden": false
        }
      ]
    },
    {
      "id": "backend",
      "name": "Backend",
      "subtitle": "Server-side essentials",
      "count": 4,
      "hidden": false,
      "items": [
        {
          "id": 7,
          "title": "Spring Docs",
          "badge": "Framework Docs",
          "description": "Official Spring Framework and Spring Boot documentation — my primary guide for building robust Java backends.",
          "link": "https://spring.io/docs",
          "hidden": false
        },
        {
          "id": 8,
          "title": "Baeldung",
          "badge": "Tutorials",
          "description": "In-depth tutorials and guides on Java, Spring Boot, REST APIs, and security. Invaluable for real-world patterns.",
          "link": "https://www.baeldung.com",
          "hidden": false
        },
        {
          "id": 9,
          "title": "Postman",
          "badge": "API Testing",
          "description": "The API platform I use to design, test, and document REST endpoints throughout development.",
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

```

---

### Projects Section

#### `GET /api/projects`

**Response:** `200 OK`

```json
{
  "hidden": false,
  "sectionTitle": "PROJECTS",
  "subtitle": "Showcasing scalable backend systems and full-stack experiments",
  "projects": [
    {
      "id": 1,
      "title": "Backend API",
      "description": "Coming soon — a detailed showcase of this project including architecture decisions, tech choices, and outcomes.",
      "imageUrl": "/images/placeholder.jpg",
      "githubLink": "https://github.com/username/project",
      "liveLink": "https://example.com",
      "technologies": ["Java", "Spring Boot", "MySQL"],
      "hidden": false,
      "indexPosition": 1
    },
    {
      "id": 2,
      "title": "Spring Microservice",
      "description": "Coming soon — a detailed showcase of this project including architecture decisions, tech choices, and outcomes.",
      "imageUrl": "/images/placeholder.jpg",
      "githubLink": "https://github.com/username/project",
      "liveLink": "https://example.com",
      "technologies": ["Spring Cloud", "Docker", "RabbitMQ"],
      "hidden": false,
      "indexPosition": 2
    },
    {
      "id": 3,
      "title": "Portfolio Site",
      "description": "Coming soon — a detailed showcase of this project including architecture decisions, tech choices, and outcomes.",
      "imageUrl": "/images/placeholder.jpg",
      "githubLink": "https://github.com/username/project",
      "liveLink": "https://example.com",
      "technologies": ["React", "Tailwind CSS", "Spring Boot"],
      "hidden": false,
      "indexPosition": 3
    }
  ]
}

```

---

### Contact Me Section

#### `GET /api/contact-me`

**Response:** `200 OK`

```json
{
  "hidden": false,
  "email": "contact@rekahdo.dev",
  "phone": "+2340000000000",
  "location": "Lagos, Nigeria",
  "socialLinks": [
    { "id": 1, "platform": "GitHub", "url": "https://github.com/username", "icon": "github", "hidden": false },
    { "id": 2, "platform": "LinkedIn", "url": "https://linkedin.com/in/username", "icon": "linkedin", "hidden": false },
    { "id": 3, "platform": "Twitter", "url": "https://twitter.com/username", "icon": "twitter", "hidden": false }
  ]
}

```

#### `POST /api/contact-me/messages`

**Request:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I would like to discuss a potential project collaboration."
}

```

**Response:** `201 Created`

```json
{
  "success": true,
  "message": "Your message has been sent successfully!"
}

```

---

### Footer Section

#### `GET /api/footer`

**Response:** `200 OK`

```json
{
  "hidden": false,
  "copyrightText": "© 2026 Richard Okafor (Rekahdo). All rights reserved.",
  "socialLinks": [
    { "platform": "GitHub", "url": "https://github.com/username", "hidden": false },
    { "platform": "LinkedIn", "url": "https://linkedin.com/in/username", "hidden": false }
  ],
  "quickLinks": [
    { "name": "Home", "path": "#home", "hidden": false },
    { "name": "About", "path": "#about", "hidden": false },
    { "name": "Tech-Stack", "path": "#tech-stack", "hidden": false },
    { "name": "Projects", "path": "#projects", "hidden": false },
    { "name": "Contact", "path": "#contact", "hidden": false }
  ]
}

```

---

## Error Responses

When standard validation errors or missing resources occur, endpoints return an structured JSON response:

```json
{
  "timestamp": "2026-09-03T12:15:00Z",
  "status": 400,
  "error": "Bad Request",
  "message": "Validation failed: 'name' field is required.",
  "path": "/api/tech-stack"
}

```