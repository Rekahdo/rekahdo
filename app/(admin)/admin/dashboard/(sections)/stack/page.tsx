'use client'

import { createStacksAction } from "@/app/actions/stack";
import { ButtonImpl } from "@/components/shared-ui/button-impl";
import { H1 } from "@/components/shared-ui/headings";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { stackSchema } from "@/schemas/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export interface PageProps {}

type StackItem = z.infer<typeof stackSchema>;

const multiStackSchema = z.object({
    stacks: z.array(stackSchema),
});

type MultiStackForm = z.infer<typeof multiStackSchema>;

const emptyStack: StackItem = {
    name: "",
    iconSrc: "",
    iconDarkSrc: undefined,
    percentage: 0,
    description: "",
    usages: [],
    type: "language",
};

export default function Page(props: PageProps) {
    const [isPending, startTransition] = useTransition();

    const { handleSubmit, control } = useForm<MultiStackForm>({
        resolver: zodResolver(multiStackSchema),
        defaultValues: {
            stacks: [
                {
                    name: "VS Code",
                    iconSrc: "/images/stack/vscode.svg",
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
                    iconSrc: "/images/stack/react.svg",
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
                    iconSrc: "/images/stack/nextjs.svg",
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
                    iconSrc: "/images/stack/typescript.svg",
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
                    iconSrc: "/images/stack/tailwind.svg",
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
                    iconSrc: "/images/stack/cva.svg",
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
                    iconSrc: "/images/stack/html.svg",
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
                    iconSrc: "/images/stack/css.svg",
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
                    iconSrc: "/images/stack/javascript.svg",
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
                    iconSrc: "/images/stack/convex.svg",
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
                    iconSrc: "/images/stack/better-auth.svg",
                    iconDarkSrc: "/images/stack/better-auth-dark.svg",
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
                    iconSrc: "/images/stack/vitest.svg",
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
                    iconSrc: "/images/stack/shadcn.svg",
                    iconDarkSrc: "/images/stack/shadcn-dark.svg",
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
                    iconSrc: "/images/stack/baseui.svg",
                    iconDarkSrc: "/images/stack/baseui-dark.svg",
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
                    iconSrc: "/images/stack/git.svg",
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
                    iconSrc: "/images/stack/github.svg",
                    iconDarkSrc: "/images/stack/github-dark.svg",
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
                    iconSrc: "/images/stack/figma.svg",
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
                    iconSrc: "/images/stack/excalidraw.svg",
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
                    iconSrc: "/images/stack/aws.svg",
                    iconDarkSrc: "/images/stack/aws-dark.svg",
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
                    iconSrc: "/images/stack/mysql.svg",
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
                    iconSrc: "/images/stack/mongo.svg",
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
                    iconSrc: "/images/stack/intellij.svg",
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
                    iconSrc: "/images/stack/webstorm.svg",
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
                    iconSrc: "/images/stack/java.svg",
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
                    iconSrc: "/images/stack/spring.svg",
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
                    iconSrc: "/images/stack/postman.svg",
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
                    iconSrc: "/images/stack/docker.svg",
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
            ],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "stacks",
    });

    function submit(data: MultiStackForm) {
        startTransition(async () => {
            await createStacksAction(data.stacks);
            toast.success("Stack Uploaded Successfully");
        });
    }

    return (
        <div className="flex flex-col gap-6 max-w-6xl">
            <H1
                title="Tech Stack"
                subtitle="Manage all your stack entries in one place."
                className="text-center items-center"
            />

            <Card>
                <form onSubmit={handleSubmit(submit)}>
                    <CardContent className="grid gap-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-medium">
                                Stack Items ({fields.length})
                            </h2>
                            <button
                                type="button"
                                onClick={() => append({ ...emptyStack })}
                                className="text-sm underline"
                            >
                                + Add Stack
                            </button>
                        </div>

                        {fields.map((field, index) => (
                            <div
                                key={field.id}
                                className="rounded-md border p-4 grid md:grid-cols-2 gap-4"
                            >
                                <div className="md:col-span-2 flex items-center justify-between">
                                    <span className="text-sm font-medium">
                                        {field.name || `Item ${index + 1}`}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => remove(index)}
                                        className="text-sm text-red-500 underline"
                                    >
                                        Remove
                                    </button>
                                </div>

                                <Controller
                                    name={`stacks.${index}.name`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field>
                                            <FieldLabel>Name</FieldLabel>
                                            <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name={`stacks.${index}.type`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field>
                                            <FieldLabel>Type</FieldLabel>
                                            <select
                                                aria-invalid={fieldState.invalid}
                                                {...field}
                                                className="h-9 w-full rounded-md border px-3 text-sm"
                                            >
                                                <option value="language">Language</option>
                                                <option value="tool">Tool</option>
                                                <option value="resource">Resource</option>
                                            </select>
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name={`stacks.${index}.iconSrc`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field>
                                            <FieldLabel>Icon Source</FieldLabel>
                                            <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name={`stacks.${index}.iconDarkSrc`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field>
                                            <FieldLabel>Icon Dark Source (optional)</FieldLabel>
                                            <Input
                                                type="text"
                                                aria-invalid={fieldState.invalid}
                                                value={field.value ?? ""}
                                                onChange={(e) =>
                                                    field.onChange(e.target.value || undefined)
                                                }
                                                onBlur={field.onBlur}
                                                name={field.name}
                                                ref={field.ref}
                                            />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name={`stacks.${index}.percentage`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field>
                                            <FieldLabel>Percentage</FieldLabel>
                                            <Input
                                                type="number"
                                                aria-invalid={fieldState.invalid}
                                                value={field.value}
                                                onChange={(e) => field.onChange(Number(e.target.value))}
                                                onBlur={field.onBlur}
                                                name={field.name}
                                                ref={field.ref}
                                            />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name={`stacks.${index}.description`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field className="md:col-span-2">
                                            <FieldLabel>Description</FieldLabel>
                                            <textarea
                                                aria-invalid={fieldState.invalid}
                                                {...field}
                                                className="min-h-24 w-full rounded-md border px-3 py-2 text-sm"
                                            />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name={`stacks.${index}.usages`}
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <Field className="md:col-span-2">
                                            <FieldLabel>Usages (comma separated)</FieldLabel>
                                            <Input
                                                type="text"
                                                aria-invalid={fieldState.invalid}
                                                value={field.value.map((u) => u.title).join(", ")}
                                                onChange={(e) =>
                                                    field.onChange(
                                                        e.target.value
                                                            .split(",")
                                                            .map((title) => ({ title: title.trim() }))
                                                    )
                                                }
                                                onBlur={field.onBlur}
                                                name={field.name}
                                                ref={field.ref}
                                            />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />
                            </div>
                        ))}

                        <ButtonImpl
                            type="submit"
                            text="Submit All"
                            isPending={isPending}
                        />
                    </CardContent>
                </form>
            </Card>
        </div>
    );
}