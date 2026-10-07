'use client'

import { createStackAction } from "@/app/actions/stack";
import { ButtonImpl } from "@/components/shared-ui/button-impl";
import { H1 } from "@/components/shared-ui/headings";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { stackSchema } from "@/schemas/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { Control, Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export interface PageProps {

}

type StackItem = z.infer<typeof stackSchema>["languages"] extends (infer T)[] | undefined ? T : never;

interface StackArrayFieldProps {
    control: Control<z.infer<typeof stackSchema>>;
    name: "languages" | "tools" | "resources";
    label: string;
}

function StackArrayField({ control, name, label }: StackArrayFieldProps) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => {
                const value = (field.value ?? []) as NonNullable<StackItem[]>;

                function updateItem(index: number, patch: Partial<StackItem>) {
                    const next = value.map((item, i) =>
                        i === index ? { ...item, ...patch } : item
                    );
                    field.onChange(next);
                }

                function addItem() {
                    field.onChange([
                        ...value,
                        {
                            name: "",
                            iconSrc: "",
                            iconDarkSrc: "",
                            percentage: 0,
                            description: "",
                            usages: [],
                        },
                    ]);
                }

                function removeItem(index: number) {
                    field.onChange(value.filter((_, i) => i !== index));
                }

                return (
                    <Field>
                        <div className="flex items-center justify-between">
                            <FieldLabel>{label}</FieldLabel>
                            <button
                                type="button"
                                onClick={addItem}
                                className="text-sm underline"
                            >
                                + Add
                            </button>
                        </div>

                        <div className="flex flex-col gap-4">
                            {value.map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-md border p-4 grid gap-3"
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium">
                                            Item {index + 1}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => removeItem(index)}
                                            className="text-sm text-red-500 underline"
                                        >
                                            Remove
                                        </button>
                                    </div>

                                    <Input
                                        placeholder="Name"
                                        value={item.name}
                                        onChange={(e) => updateItem(index, { name: e.target.value })}
                                    />
                                    <Input
                                        placeholder="Icon Src"
                                        value={item.iconSrc}
                                        onChange={(e) => updateItem(index, { iconSrc: e.target.value })}
                                    />
                                    <Input
                                        placeholder="Icon Dark Src (optional)"
                                        value={item.iconDarkSrc ?? ""}
                                        onChange={(e) => updateItem(index, { iconDarkSrc: e.target.value })}
                                    />
                                    <Input
                                        type="number"
                                        placeholder="Percentage"
                                        value={item.percentage}
                                        onChange={(e) => updateItem(index, { percentage: Number(e.target.value) })}
                                    />
                                    <Input
                                        placeholder="Description"
                                        value={item.description}
                                        onChange={(e) => updateItem(index, { description: e.target.value })}
                                    />
                                    <Input
                                        placeholder="Usages (comma separated)"
                                        value={item.usages.join(", ")}
                                        onChange={(e) =>
                                            updateItem(index, {
                                                usages: e.target.value
                                                    .split(",")
                                                    .map((u) => u.trim())
                                                    .filter(Boolean),
                                            })
                                        }
                                    />
                                </div>
                            ))}
                        </div>

                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                );
            }}
        />
    );
}

export default function Page(props: PageProps) {

    const [isPending, startTransition] = useTransition();

    const { handleSubmit, control } = useForm({
        resolver: zodResolver(stackSchema),
        defaultValues: {
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
                    percentage: 30,
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
            ],
            tools: [
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
                    name: "Docker",
                    iconSrc: "/images/stack/docker.svg",
                    percentage: 30,
                    description:
                        "Containerizing applications, writing Dockerfiles, managing multi-container environments with Docker Compose, and simplifying deployment.",
                    usages: ["Containerization", "Docker Compose", "DevOps", "Deployments"],
                },
            ],
            resources: [
                {
                    name: "Figma",
                    iconSrc: "/images/stack/figma.svg",
                    percentage: 50,
                    description:
                        "Translating UI/UX wireframes, design systems, and visual prototypes into pixel-perfect frontend implementations.",
                    usages: ["UI/UX Prototyping", "Design Systems", "Wireframing"],
                },
                {
                    name: "Excalidraw",
                    iconSrc: "/images/stack/excalidraw.svg",
                    percentage: 50,
                    description:
                        "Sketching low-fidelity wireframes, system architecture diagrams, and virtual whiteboard brainstorming sessions.",
                    usages: ["Architecture Diagrams", "Wireframing", "Whiteboarding", "System Design"],
                },
            ],
        },
    })

    function submit(data: z.infer<typeof stackSchema>) {
        startTransition(async () => {
            await createStackAction(data);
            toast.success("Stack Uploaded Successfully");
        })
    }

    return (
        <div className="flex flex-col gap-6 max-w-6xl">
            <H1 title="Tech Stack"
                subtitle="Manage your stack, tools, and resources."
                className="text-center items-center" />

            <Card>
                <form onSubmit={handleSubmit(submit)}>
                    <CardContent className="grid gap-6">
                        <StackArrayField control={control} name="languages" label="Languages" />
                        <StackArrayField control={control} name="tools" label="Tools" />
                        <StackArrayField control={control} name="resources" label="Resources" />

                        <ButtonImpl type="submit" text="Submit" isPending={isPending} />
                    </CardContent>
                </form>
            </Card>
        </div>
    );
}