'use client'

import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { useTransition } from "react";
import { H2 } from "@/components/shared-ui/headings";
import { ButtonImpl, ButtonImplProps } from "@/components/shared-ui/button-impl";
import { loginSchema } from "@/schemas/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { notAuthorized, somethingWentWrong } from "@/convex/errors";
import { signUpSchema } from "@/schemas/zod-schemas";
import { ErrorType } from "@/lib/types";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "../ui/dialog";
import { Button } from "../ui/button";
import AppField from "./field";
import { LogIn, UserRoundPlus } from "lucide-react";

interface DialogSignUpProps {
    buttonProps?: ButtonImplProps;
}

export function DialogSignUpForm(props: DialogSignUpProps) {
    const [isPending, startTransition] = useTransition();

    const { handleSubmit, control, setError } = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: "Richard Okafor",
            email: "okaforrichard76@gmail.com",
            password: "password1",
            accessKey: ""
        }
    })

    function submit(parseData: z.infer<typeof signUpSchema>) {
        startTransition(async () => {
            const parsed = signUpSchema.safeParse(parseData)
            if (!parsed.success) throw somethingWentWrong();

            const adminKeyEnv = process.env.NEXT_PUBLIC_ADMIN_KEY;
            const managementKeyEnv = process.env.NEXT_PUBLIC_MANAGEMENT_KEY;

            if (adminKeyEnv !== parsed.data.accessKey && managementKeyEnv !== parsed.data.accessKey) {
                setError("accessKey", {
                    type: "invalid-access-key",
                    message: "Invalid access key",
                });
                return;
            }

            let isAdmin = adminKeyEnv === parsed.data.accessKey;
            const { data } = await authClient.signUp.email({
                name: parsed.data.name,
                email: parsed.data.email,
                password: parsed.data.password,
                fetchOptions: {
                    onSuccess: async () => {
                        toast.success("Signed up successfully");
                    },
                    onError: (error: ErrorType) => {
                        toast.error(error.error.message);
                        return;
                    },
                }
            })

            await fetchMutation(
                api.role.createRole,
                {
                    role: isAdmin ? 'admin' : 'editor',
                    userId: data!.user.id,
                },
            )
        })
    }

    return (
        <Dialog>
            <DialogTrigger render={
                <ButtonImpl text="Sign Up" icon={<UserRoundPlus />} showTextAt="sm" {...props.buttonProps} />
            } />
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle><H2 title="Sign Up" /></DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(submit)}>
                    <FieldGroup>
                        <Controller name="name" control={control} render={({ field, fieldState }) => (<AppField
                            field={field} fieldState={fieldState} label="Full Name" placeholder="Joe Doe"
                        />)} />

                        <Controller name="email" control={control} render={({ field, fieldState }) => (<AppField
                            field={field} fieldState={fieldState} label="Email" placeholder="jane@example.com"
                        />)} />

                        <Controller name="password" control={control} render={({ field, fieldState }) => (<AppField
                            field={field} fieldState={fieldState} label="Password" placeholder="************" type="password"
                        />)} />

                        <Controller name="accessKey" control={control} render={({ field, fieldState }) => (<AppField
                            field={field} fieldState={fieldState} label="Access Key" placeholder="access key"
                        />)} />
                    </FieldGroup>

                    <DialogFooter>
                        <DialogClose render={<ButtonImpl variant={'outline'} text="Cancel" height={'md'} />} />
                        <ButtonImpl isPending={isPending} type="submit" text="Sign Up" height={'md'} />
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

interface DialogLoginFormProps {
    buttonProps?: ButtonImplProps;
}

export function DialogLoginForm(props: DialogLoginFormProps) {

    const [isPending, startTransition] = useTransition();

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
            } catch (error) {
                toast.error("An unexpected error occurred");
            }
        })
    }

    return (
        <Dialog>
            <DialogTrigger render={
                <ButtonImpl text="Login" variant={'outline'} icon={<LogIn />} showTextAt="sm" {...props.buttonProps} />
            } />

            <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                    <DialogTitle><H2 title="Login" /></DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(submit)}>
                    <FieldGroup>
                        <Controller name="email" control={control} render={({ field, fieldState }) => (<AppField
                            field={field} fieldState={fieldState} label="Email" placeholder="jane@example.com"
                        />)} />

                        <Controller name="password" control={control} render={({ field, fieldState }) => (<AppField
                            field={field} fieldState={fieldState} label="Password" placeholder="************" type="password"
                        />)} />
                    </FieldGroup>

                    <DialogFooter>
                        <DialogClose render={<ButtonImpl variant={'outline'} text="Cancel" height={'md'} />} />
                        <ButtonImpl isPending={isPending} type="submit" text="Login" height={'md'} />
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}