'use client'

import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { redirect, RedirectType, useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { useTransition } from "react";
import { H2 } from "@/components/shared-ui/headings";
import { ButtonImpl, SignUpBtn } from "@/components/shared-ui/button-impl";
import { loginSchema } from "@/schemas/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorType } from "@/lib/types";
import { somethingWentWrong } from "@/convex/errors";
import { ADMIN_DASHBOARD, ADMIN_SIGNUP } from "../../../layout";

interface PageProps {
}

export default function Page(props: PageProps) {

    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const { handleSubmit, control } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    function submit(data: z.infer<typeof loginSchema>) {
        startTransition(async () => {
            const parsed = loginSchema.safeParse(data)
            if (!parsed.success) {
                toast.error(somethingWentWrong().message);
                return;
            }

            try {
                const { error } = await authClient.signIn.email({
                    ...parsed.data,
                });

                if (error) {
                    toast.error(error.message || "Failed to login");
                    return;
                }

                toast.success("Logged in successfully");
                router.push(ADMIN_DASHBOARD.root);

            } catch (error) {
                toast.error("An unexpected error occurred");
            }
        })
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle><H2 title="Login" /></CardTitle>
                <CardDescription>Enter your email and password to login to your account</CardDescription>
                <CardAction>
                    <ButtonImpl text="Sign Up" variant={'ghost'} href={ADMIN_SIGNUP} />
                </CardAction>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(submit)}>
                    <FieldGroup>
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
                                    <Input aria-invalid={fieldState.invalid} placeholder="************" {...field} type="password" />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <ButtonImpl isPending={isPending} type="submit" text="Login" height={'md'} />
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    );
}
