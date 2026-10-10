'use client'

import { createAboutAction } from "@/app/actions/about";
import { ButtonImpl } from "@/components/shared-ui/button-impl";
import { H1 } from "@/components/shared-ui/headings";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { aboutSchema } from "@/schemas/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export interface PageProps {

}

export default function Page(props: PageProps) {

    const [isPending, startTransition] = useTransition();

    const { handleSubmit, control } = useForm({
        resolver: zodResolver(aboutSchema),
        defaultValues: {
            headline: "Frontend Engineer with Full-Stack Perspective",
            bio: "I am a Frontend Developer dedicated to building fast, scalable, and modular web applications using React, TypeScript, and modern CSS Frameworks. My engineering journey began on the backend, where working deeply with Java and Spring Boot instilled a strong foundation in Object-Oriented Programming (OOP) and system design. \n\nThat mindset directly shapes how I write client-side code today. I approach UI development by encapsulating logic and state into clean, reusable, object-like components designed for scalability and maintainability. \n\nBeyond frontend architecture, my background designing RESTful APIs, microservices, and databases allows me to bridge client-side interfaces with backend systems effortlessly. I am currently expanding my modern full-stack toolkit with Next.js, combining interactive React components with server-side capabilities.",
            me: {
                src: "/images/me/profile.svg",
                alt: "Richard Okafor About Me",
            },
            experiences: [
                { years: 1, title: "backend" },
                { years: 1, title: "frontend" },
            ],
            quote: {
                text: "To me, great frontend development isn't just about pixel-perfect layouts, it's also about understanding the entire data flow from backend APIs to client interactions to deliver a seamless user experience.",
            },
            educations: [
                {
                    institution: "NIIT",
                    course: "Software Engineering ",
                    certification: "/docs/NIIT_Certification.jpg",
                    website: "https://www.niit.com/nigeria/",
                    logo: "/images/icons/niit.svg",
                },
                {
                    institution: "Udemy",
                    course: "Spring Boot Certification",
                    certification: "/docs/Spring_Boot_Certification.pdf",
                    website: "https://www.udemy.com/share/107zyk3@s_qIkz9IEydVxtT386qxf7AS7Nsxngx0f8X-SVtA6ghsg0cXKOaMBzJDswfjXhBYTQ==/",
                    logo: "/images/icons/udemy.svg",
                },
                {
                    institution: "TS Academy",
                    course: "Frontend Development",
                    certification: "/docs/Frontend_Development_Certification.pdf",
                    website: "https://tsacademyonline.com/",
                    logo: "/images/icons/tsa.svg",
                },
            ],
            skillTags: [
                { title: "Teaching", emoji: "🧠" },
                { title: "Problem Solving", emoji: "🧩" },
                { title: "Logic Reasoning", emoji: "🔧" },
                { title: "Communication", emoji: "💬" },
                { title: "Collaboration", emoji: "🤝" },
                { title: "Team working", emoji: "👥" },
                { title: "Version Control", emoji: "🔀" },
                { title: "Agile", emoji: "♻️" },
            ],
        },
    })

    function submit(data: z.infer<typeof aboutSchema>) {
        startTransition(async () => {
            await createAboutAction(data);
            toast.success("About Uploaded Successfully");
        })
    }

    return (
        <div className="flex flex-col gap-6 max-w-6xl">
            <H1 title="About"
                subtitle="Update your about section content."
                className="text-center items-center" />

            <Card>
                <form onSubmit={handleSubmit(submit)}>
                    <CardContent className="grid md:grid-cols-2 gap-4">
                        <Controller
                            name="headline" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Headline</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="bio" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Bio</FieldLabel>
                                    <textarea
                                        aria-invalid={fieldState.invalid}
                                        {...field}
                                        className="min-h-32 w-full rounded-md border px-3 py-2 text-sm"
                                    />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="me.src" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Image Source</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="me.alt" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Image Alt</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="quote.text" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Quote</FieldLabel>
                                    <Input type="text" aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="experiences" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Experiences</FieldLabel>
                                    <Input
                                        type="text"
                                        aria-invalid={fieldState.invalid}
                                        value={field.value?.map((e) => `${e.years}:${e.title}`).join(", ") ?? ""}
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.value
                                                    .split(",")
                                                    .map((pair) => pair.split(":"))
                                                    .filter(([y, t]) => y && t)
                                                    .map(([years, title]) => ({
                                                        years: Number(years),
                                                        title: title.trim() as "backend" | "frontend",
                                                    }))
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

                        <Controller
                            name="educations" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Educations</FieldLabel>
                                    <Input
                                        type="text"
                                        aria-invalid={fieldState.invalid}
                                        value={
                                            field.value
                                                ?.map((ed) => `${ed.institution}|${ed.course}|${ed.certification}|${ed.website}|${ed.logo}`)
                                                .join(", ") ?? ""
                                        }
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.value
                                                    .split(",")
                                                    .map((entry) => entry.split("|"))
                                                    .filter((parts) => parts.length === 5)
                                                    .map(([institution, course, certification, website, logo]) => ({
                                                        institution: institution.trim(),
                                                        course: course.trim(),
                                                        certification: certification.trim(),
                                                        website: website.trim(),
                                                        logo: logo.trim(),
                                                    }))
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

                        <Controller
                            name="skillTags" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Skill Tags</FieldLabel>
                                    <Input
                                        type="text"
                                        aria-invalid={fieldState.invalid}
                                        value={field.value?.map((t) => `${t.title}:${t.emoji}`).join(", ") ?? ""}
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.value
                                                    .split(",")
                                                    .map((pair) => pair.split(":"))
                                                    .filter(([t, em]) => t && em)
                                                    .map(([title, emoji]) => ({
                                                        title: title.trim(),
                                                        emoji: emoji.trim(),
                                                    }))
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

                        <ButtonImpl type="submit" text="Submit" isPending={isPending} />
                    </CardContent>
                </form>
            </Card>
        </div>
    );
}