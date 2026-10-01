// components/Projects.tsx
import Image from "next/image";

export type ProjectStatus = "deployed" | "in-development" | "maintenance";

export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  github?: string;
  deployment?: string;
  liveDeploymentLink?: string;
  technologies: string[];
  indexPosition: number;
  status: ProjectStatus;
};

export type ProjectsType = {
  sectionTitle: string;
  subtitle: string;
  projects: Project[];
};

export const projectsData: ProjectsType = {
  sectionTitle: "PROJECTS",
  subtitle: "Showcasing scalable backend systems and full-stack experiments",
  projects: [
    {
      id: 1,
      title: "Backend API",
      description:
        "Coming soon — a detailed showcase of this project including architecture decisions, tech choices, and outcomes.",
      imageUrl: "https://picsum.photos/seed/backendapi/800/450",
      github: "https://github.com/username/project",
      liveDeploymentLink: "https://example.com",
      technologies: ["Java", "Spring Boot", "MySQL"],
      indexPosition: 1,
      status: "deployed",
    },
    {
      id: 2,
      title: "Spring Microservice",
      description:
        "Coming soon — a detailed showcase of this project including architecture decisions, tech choices, and outcomes.",
      imageUrl: "https://picsum.photos/seed/microservice/800/450",
      github: "https://github.com/username/project",
      deployment: "https://example.com",
      technologies: ["Spring Cloud", "Docker", "RabbitMQ"],
      indexPosition: 2,
      status: "in-development",
    },
    {
      id: 3,
      title: "Portfolio Site",
      description:
        "Coming soon — a detailed showcase of this project including architecture decisions, tech choices, and outcomes.",
      imageUrl: "https://picsum.photos/seed/portfolio/800/450",
      github: "https://github.com/username/project",
      deployment: "https://example.com",
      technologies: ["Next.js", "Tailwind CSS", "Spring Boot"],
      indexPosition: 3,
      status: "maintenance",
    },
  ],
};

const statusConfig: Record<
  ProjectStatus,
  {
    label: string;
    dot: string;
    badge: string;
    accent: string;
    glow: string;
    border: string;
  }
> = {
  deployed: {
     label: "Live",
    dot: "bg-emerald-500",
    badge:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    accent: "from-emerald-500 via-emerald-400 to-transparent",
    glow: "group-hover:shadow-emerald-500/20",
    border: "group-hover:border-emerald-500/50",
  },
  "in-development": {
    label: "In Development",
    dot: "bg-amber-500",
    badge:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
    accent: "from-amber-500 via-amber-400 to-transparent",
    glow: "group-hover:shadow-amber-500/20",
    border: "group-hover:border-amber-500/50",
  },
  maintenance: {
    label: "Maintenance",
    dot: "bg-orange-500",
    badge:
      "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30",
    accent: "from-orange-500 via-orange-400 to-transparent",
    glow: "group-hover:shadow-orange-500/20",
    border: "group-hover:border-orange-500/50",
  },
};

function StatusBadge({ status }: { status: ProjectStatus }) {
  const { label, dot, badge } = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-sans text-xs font-medium backdrop-blur-sm ${badge}`}
    >
      <span className={`h-2 w-2 rounded-full ${dot} animate-pulse`} />
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-background text-foreground py-20 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            {projectsData.sectionTitle}
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
          <p className="mt-4 font-sans text-base md:text-lg text-muted-foreground max-w-2xl">
            {projectsData.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.projects.map((project) => {
            const liveUrl = project.deployment ?? project.liveDeploymentLink;
            const cfg = statusConfig[project.status];

            return (
              <article
                key={project.id}
                className={`
                  group relative flex flex-col overflow-hidden rounded-xl
                  border border-border bg-card text-card-foreground
                  shadow-sm
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:shadow-2xl
                  ${cfg.border} ${cfg.glow}
                `}
              >
                {/* Animated top accent line */}
                <span
                  className={`
                    pointer-events-none absolute top-0 left-0 z-20 h-[2px] w-full
                    bg-gradient-to-r ${cfg.accent}
                    origin-left scale-x-0
                    transition-transform duration-500 ease-out
                    group-hover:scale-x-100
                  `}
                />

                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="
                      object-cover
                      transition-transform duration-[900ms] ease-out
                      group-hover:scale-110 group-hover:rotate-1
                    "
                  />

                  {/* Gradient overlay on hover */}
                  <div
                    className="
                      pointer-events-none absolute inset-0
                      bg-gradient-to-t from-black/60 via-black/0 to-transparent
                      opacity-0 transition-opacity duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* Index badge */}
                  <span
                    className="
                      absolute top-3 left-3 z-10 rounded-md bg-primary px-2.5 py-1
                      font-mono text-xs font-medium text-primary-foreground shadow
                      transition-all duration-500
                      group-hover:scale-110 group-hover:-rotate-3
                    "
                  >
                    {String(project.indexPosition).padStart(2, "0")}
                  </span>

                  {/* Status badge */}
                  <span
                    className="
                      absolute top-3 right-3 z-10
                      transition-all duration-500
                      group-hover:scale-105
                    "
                  >
                    <StatusBadge status={project.status} />
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3
                    className="
                      font-sans text-xl font-semibold text-card-foreground
                      transition-colors duration-300
                      group-hover:text-primary
                    "
                  >
                    {project.title}
                  </h3>

                  <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <li
                        key={tech}
                        style={{ transitionDelay: `${i * 40}ms` }}
                        className="
                          rounded-full border border-border bg-secondary px-3 py-1
                          font-mono text-xs text-secondary-foreground
                          transition-all duration-300
                          group-hover:border-primary/40 group-hover:bg-primary/10
                          group-hover:text-primary
                        "
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* Buttons */}
                  <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-border pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex flex-1 items-center justify-center gap-2
                          rounded-lg bg-secondary px-4 py-2.5
                          font-sans text-sm font-semibold text-secondary-foreground
                          shadow-sm
                          transition-all duration-300
                          hover:bg-secondary/80 hover:-translate-y-0.5 hover:shadow-md
                          active:scale-[0.98]
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                        "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                        </svg>
                        Code
                      </a>
                    )}
                    {liveUrl && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex flex-1 items-center justify-center gap-2
                          rounded-lg bg-primary px-4 py-2.5
                          font-sans text-sm font-semibold text-primary-foreground
                          shadow-sm
                          transition-all duration-300
                          hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg
                          active:scale-[0.98]
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                        "
                      >
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        </span>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}