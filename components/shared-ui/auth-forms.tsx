'use client'

import { toast } from "sonner";
import z from "zod";
import { ButtonImplProps } from "@/components/shared-ui/button-impl";
import { loginSchema } from "@/schemas/zod-schemas";
import { somethingWentWrong } from "@/convex/errors";
import { signUpSchema } from "@/schemas/zod-schemas";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import AppField from "./field";
import { UseFormReturn } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { DialogForm } from "./dialog-form";
import { LogIn, UserRoundPlus } from "lucide-react";
 "./dialog-form";

interface DialogSignUpProps {
    buttonProps?: ButtonImplProps;
}

export function DialogSignUpForm({ buttonProps }: DialogSignUpProps) {
    async function submit(
        parsed: z.infer<typeof signUpSchema>,
        { setError }: UseFormReturn<z.infer<typeof signUpSchema>>
    ) {
        const parsedData = signUpSchema.safeParse(parsed);
        if (!parsedData.success) throw somethingWentWrong();

        const adminKeyEnv = process.env.NEXT_PUBLIC_ADMIN_KEY;
        const managementKeyEnv = process.env.NEXT_PUBLIC_MANAGEMENT_KEY;

        if (
            adminKeyEnv !== parsedData.data.accessKey &&
            managementKeyEnv !== parsedData.data.accessKey
        ) {
            setError("accessKey", {
                type: "invalid-access-key",
                message: "Invalid access key",
            });
            return;
        }

        const isAdmin = adminKeyEnv === parsedData.data.accessKey;

        const { data } = await authClient.signUp.email({
            name: parsedData.data.name,
            email: parsedData.data.email,
            password: parsedData.data.password,
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Signed up successfully");
                },
                onError: (error: any) => {
                    toast.error(error.error.message);
                },
            },
        });

        await fetchMutation(api.role.createRole, {
            role: isAdmin ? "admin" : "editor",
            userId: data!.user.id,
        });
    }

    return (
        <DialogForm
            triggerText="Sign Up"
            triggerIcon={<UserRoundPlus />}
            triggerProps={buttonProps}
            title="Sign Up"
            size="lg"
            submitText="Sign Up"
            schema={signUpSchema}
            defaultValues={{
                name: "",
                email: "",
                password: "",
                accessKey: "",
            }}
            fields={[
                { name: "name", label: "Full Name", placeholder: "Joe Doe" },
                {
                    name: "email",
                    label: "Email",
                    placeholder: "jane@example.com",
                    type: "email",
                },
                {
                    name: "password",
                    label: "Password",
                    placeholder: "************",
                    type: "password",
                },
                {
                    name: "accessKey",
                    label: "Access Key",
                    placeholder: "access key",
                },
            ]}
            onSubmit={submit}
        />
    );
}

interface DialogLoginFormProps {
    buttonProps?: ButtonImplProps;
}

export function DialogLoginForm({ buttonProps }: DialogLoginFormProps) {
    async function submit(parsed: z.infer<typeof loginSchema>) {
        const parsedData = loginSchema.safeParse(parsed);
        if (!parsedData.success) {
            toast.error(somethingWentWrong().message);
            return;
        }

        try {
            const { error } = await authClient.signIn.email({
                ...parsedData.data,
            });

            if (error) {
                toast.error(error.message || "Failed to login");
                return;
            }

            toast.success("Logged in successfully");
        } catch {
            toast.error("An unexpected error occurred");
        }
    }

    return (
        <DialogForm
            triggerText="Login"
            triggerIcon={<LogIn />}
            triggerVariant="outline"
            triggerProps={buttonProps}
            title="Login"
            size="sm"
            submitText="Login"
            schema={loginSchema}
            defaultValues={{
                email: "",
                password: "",
            }}
            fields={[
                {
                    name: "email",
                    label: "Email",
                    placeholder: "jane@example.com",
                    type: "email",
                },
                {
                    name: "password",
                    label: "Password",
                    placeholder: "************",
                    type: "password",
                },
            ]}
            onSubmit={submit}
        />
    );
}