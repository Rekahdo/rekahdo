'use client'

import { toast } from "sonner";
import z from "zod";
import { ButtonImplProps } from "@/components/shared-ui/button-impl";
import { loginSchema, signUpSchema } from "@/schemas/zod-schemas";
import { somethingWentWrong } from "@/convex/errors";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { UseFormReturn } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { AppForm } from "./form";
import { LogIn, UserRoundPlus } from "lucide-react";
import { cn } from "cn";

// ==========================================
// SHARED CONFIGURATIONS
// ==========================================

const loginDefaults = {
    email: "",
    password: "",
};

const loginFields = [
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
] as const;

const signUpDefaults = {
    name: "",
    email: "",
    password: "",
    accessKey: "",
};

const signUpFields = [
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
] as const;

// ==========================================
// EXTERNAL SUBMIT FUNCTIONS
// ==========================================

export async function handleLoginSubmit(
    parsed: z.infer<typeof loginSchema>,
    onSuccess?: () => void
) {
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
        onSuccess?.();
    } catch {
        toast.error("An unexpected error occurred");
    }
}

export async function handleSignUpSubmit(
    parsed: z.infer<typeof signUpSchema>,
    form: UseFormReturn<z.infer<typeof signUpSchema>>,
    onSuccess?: () => void
) {
    const parsedData = signUpSchema.safeParse(parsed);
    if (!parsedData.success) throw somethingWentWrong();

    const adminKeyEnv = process.env.NEXT_PUBLIC_ADMIN_KEY;
    const managementKeyEnv = process.env.NEXT_PUBLIC_MANAGEMENT_KEY;

    if (
        adminKeyEnv !== parsedData.data.accessKey &&
        managementKeyEnv !== parsedData.data.accessKey
    ) {
        form.setError("accessKey", {
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
                onSuccess?.();
            },
            onError: (error: any) => {
                toast.error(error.error.message);
            },
        },
    });

    if (data?.user) {
        await fetchMutation(api.role.createRole, {
            role: isAdmin ? "admin" : "editor",
            userId: data.user.id,
        });
    }
}

// ==========================================
// CARD FORMS (INLINE)
// ==========================================

interface CardSignUpProps {
    onSuccess?: () => void;
    className?: string;
}

export function CardSignUpForm({ onSuccess, className }: CardSignUpProps) {
    return (
        <AppForm
            title="Sign Up"
            size="lg"
            submitText="Sign Up"
            schema={signUpSchema}
            defaultValues={signUpDefaults}
            fields={signUpFields as any}
            onSubmit={(parsed, form) => handleSignUpSubmit(parsed, form, onSuccess)}
            className={cn(" animate-into-view", className)}
        />
    );
}

interface CardLoginProps {
    onSuccess?: () => void;
    className?: string;
}

export function CardLoginForm({ onSuccess, className }: CardLoginProps) {
    return (
        <AppForm
            title="Login"
            size="md"
            submitText="Login"
            schema={loginSchema}
            defaultValues={loginDefaults}
            fields={loginFields as any}
            onSubmit={(parsed) => handleLoginSubmit(parsed, onSuccess)}
            className={cn(" animate-into-view", className)}
        />
    );
}

// ==========================================
// DIALOG FORMS
// ==========================================

interface DialogSignUpProps {
    buttonProps?: ButtonImplProps;
    className?: string;
}

export function DialogSignUpForm({ buttonProps, className }: DialogSignUpProps) {
    return (
        <AppForm
            ui={{
                type: "dialog",
                triggerText: "Sign Up",
                triggerIcon: <UserRoundPlus />,
                triggerVariant: "outline",
                triggerProps: buttonProps,
            }}
            title="Sign Up"
            size="lg"
            submitText="Sign Up"
            schema={signUpSchema}
            defaultValues={signUpDefaults}
            fields={signUpFields as any}
            onSubmit={(parsed, form) => handleSignUpSubmit(parsed, form)}
            className={cn("animate-into-view", className)}
        />
    );
}

interface DialogLoginFormProps {
    buttonProps?: ButtonImplProps;
    className?: string;
}

export function DialogLoginForm({ buttonProps, className }: DialogLoginFormProps) {
    return (
        <AppForm
            ui={{
                type: "dialog",
                triggerText: "Login",
                triggerIcon: <LogIn />,
                triggerProps: buttonProps,
            }}
            title="Login"
            size="sm"
            submitText="Login"
            schema={loginSchema}
            defaultValues={loginDefaults}
            fields={loginFields as any}
            onSubmit={(parsed) => handleLoginSubmit(parsed)}
            className={cn("animate-into-view", className)}
        />
    );
}