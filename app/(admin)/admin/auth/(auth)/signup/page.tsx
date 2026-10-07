'use client'

import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { redirect, RedirectType, useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { useEffect, useTransition } from "react";
import { H2 } from "@/components/shared-ui/headings";
import { ButtonImpl, SignUpBtn } from "@/components/shared-ui/button-impl";
import { loginSchema, signUpSchema } from "@/schemas/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorType } from "@/lib/types";
import { ADMIN_DASHBOARD, ADMIN_LOGIN } from "../../page";
import { somethingWentWrong } from "@/convex/errors";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

interface PageProps {
}

export default function Page(props: PageProps) {

    toast.success("Sign up has been temporarily disabled")
    redirect(ADMIN_LOGIN, RedirectType.push);

    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const { handleSubmit, control } = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: "Richard Okafor",
            email: "okaforrichard76@gmail.com",
            password: "password1",
            adminApiKey: "really"
        }
    })

    function submit(parseData: z.infer<typeof signUpSchema>) {
        startTransition(async () => {
            const parsed = signUpSchema.safeParse(parseData)
            if (!parsed.success) throw somethingWentWrong();

            const { data } = await authClient.signUp.email({
                name: parsed.data.name,
                email: parsed.data.email,
                password: parsed.data.password,
                fetchOptions: {
                    onSuccess: async () => {
                        await fetchMutation(
                            api.role.createRole,
                            {
                                role: 'editor',
                                userId: data!.user.id,
                            },
                        )

                        toast.success("Signed up successfully");
                        redirect(ADMIN_DASHBOARD.root, RedirectType.push)
                    },
                    onError: (error: ErrorType) => {
                        toast.error(error.error.message);
                    },
                }
            })
        })
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle><H2 title="Sign Up" /></CardTitle>
                <CardDescription>Create an account to get started</CardDescription>
                <CardAction>
                    <ButtonImpl text="Login" variant={'ghost'} href={ADMIN_LOGIN} />
                </CardAction>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(submit)}>
                    <FieldGroup className="gap-4">
                        <Controller
                            name="name" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Full Name</FieldLabel>
                                    <Input aria-invalid={fieldState.invalid} placeholder="Joe Doe" {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="email" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Email</FieldLabel>
                                    <Input aria-invalid={fieldState.invalid} placeholder="okaforrichard76@gmail.com" {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="password" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Password</FieldLabel>
                                    <Input aria-invalid={fieldState.invalid} placeholder="********" {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="adminApiKey" control={control} render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Admin / API Key</FieldLabel>
                                    <Input aria-invalid={fieldState.invalid} {...field} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <ButtonImpl type="submit" isPending={isPending} text="Sign Up" height={'md'} />
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    );
}
