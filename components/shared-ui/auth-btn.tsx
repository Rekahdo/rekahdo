'use client'

import { Authenticated, Unauthenticated } from "convex/react";
import { ButtonImpl, ButtonImplProps } from "./button-impl";
import { LogOut } from "lucide-react";
import { useTransition } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { ErrorType } from "@/lib/types";
import { DialogLoginForm, DialogSignUpForm } from "./auth-forms";

export function SignUpBtn(props: ButtonImplProps) {
    return (
        <Unauthenticated>
            <DialogSignUpForm buttonProps={props} />
        </Unauthenticated>
    )
}

export function LoginBtn(props: ButtonImplProps) {
    return (
        <Unauthenticated>
            <DialogLoginForm buttonProps={props} />
        </Unauthenticated>
    )
}

export function LogoutBtn(props: ButtonImplProps) {
    const [isPending, startTransition] = useTransition();

    function logout() {
        startTransition(async () => {
            await authClient.signOut({
                fetchOptions: {
                    onSuccess: () => {
                        toast.success("Logged out successfully");
                    },
                    onError: (error: ErrorType) => {
                        toast.error(error.error.message)
                    }
                }
            })
        })
    }

    return (
        <Authenticated>
            <ButtonImpl
                text="Logout"
                variant={'outline'}
                onClick={logout}
                isPending={isPending}
                icon={<LogOut />}
                showTextAt="sm" 
                {...props}
            />
        </Authenticated>
    )
}