'use client'

import { Authenticated, Unauthenticated, useConvexAuth } from "convex/react";
import { WebBtnType } from "./buttons";
import Link from "next/link";
import { cn } from "cn";
import { Button, buttonVariants } from "../ui/button";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ErrorType } from "@/app/(auth)/auth/layout";
import { useTransition } from "react";
import { Loader } from "lucide-react";

// For Signout, Login and Logout Buttons
// https://labs.convex.dev/better-auth/basic-usage/authorization

export function SignUpBtn({
  text,
  visible = true,
  className,
  onClick,
  ...props
}: Omit<WebBtnType, "href">) {
  if (!visible) return null;

  return (
    <Unauthenticated>
      <Link href={"/auth/signup"} onClick={onClick} tabIndex={1}
        className={cn(buttonVariants({ ...props }), className)}>
        Sign Up
      </Link>
    </Unauthenticated>
  );
}

export function LoginBtn({
  text,
  visible = true,
  className,
  onClick,
  ...props
}: Omit<WebBtnType, "href">) {
  if (!visible) return null;

  return (
    <Unauthenticated>
      <Link href={"/auth/login"} onClick={onClick} tabIndex={1}
        className={cn(buttonVariants({ variant: "outline", ...props }), className)}>
        Login
      </Link>
    </Unauthenticated>
  );
}

export function LogoutBtn({
  text,
  visible = true,
  className,
  onClick,
  ...props
}: Omit<WebBtnType, "href">) {
  if (!visible) return null;

  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleLogout() {
    startTransition(() => {
      authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("Logged out successfully");
            router.push('/')
          },
          onError: (error: ErrorType) => {
            toast.error(error.error.message)
          }
        }
      })
      onClick?.();
    })
  }

  return (
    <Authenticated>
      <Button disabled={isPending} onClick={handleLogout} >{isPending ? (
        <>
          <Loader className="size-4 animate-spin" />
          <span>Loading...</span>
        </>
      ) : "Logout"}</Button>
    </Authenticated>
  );
}