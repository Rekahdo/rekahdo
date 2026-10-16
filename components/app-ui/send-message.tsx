'use client'

import { Card, CardContent } from "../ui/card";
import { FieldGroup } from "../ui/field";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMessageSchema } from "@/schemas/zod-schemas";
import z from "zod";
import { cn } from "cn";
import { ButtonImpl } from "../shared-ui/button-impl";
import { CheckCircle2, Clock, Mail, RotateCcw, Send, Tag, User } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Ping } from "../shared-ui/ping";
import { H2, H3 } from "../shared-ui/headings";
import AppInput from "../shared-ui/field";
import { createSendMessageAction } from "@/app/actions/contact";

interface SendMessageFormProps {
    className?: string;
    title?: string;
    subtitle?: string;
    from: string;
}

export default function SendMessageForm({
    className, title, subtitle, from
}: SendMessageFormProps) {
    const [sent, setSent] = useState(false);

    return (
        <Card className={cn(
            "w-full rounded-2xl border border-border/80 bg-card p-6 sm:p-8 md:p-10 shadow-sm",
            className
        )}>
            {!sent && (title || subtitle) && (
                <div className="mb-8 space-y-1.5">
                    <H2 title={title} subtitle={subtitle} className="tracking-tight" />
                </div>
            )}

            {sent
                ? <Sent onSendAgain={() => setSent(false)} />
                : <NotSent onSent={() => setSent(true)} from={from} />}
        </Card>
    );
}

function Sent({ onSendAgain }: { onSendAgain: () => void }) {
    return (
        <div className="flex flex-col items-center text-center py-8 sm:py-12 gap-6 animate-into-view">
            <Ping
                bg="bg-emerald-500/15"
                waveBg="bg-emerald-500/30"
                size="size-16"
                className="mb-2"
                icon={<CheckCircle2 className="size-8 text-emerald-600 dark:text-emerald-400" />}
            />

            <H3
                className="justify-center"
                title="Message Sent"
                subtitle="Thanks for reaching out. I'll get back to you as soon as I can."
            />

            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-muted/40 px-4 py-1.5 text-xs text-muted-foreground">
                <Clock className="size-3.5 text-primary" />
                <span>Typical response time: <strong className="font-semibold text-foreground">Under 24 hours</strong></span>
            </div>

            <ButtonImpl
                type="button"
                height={'md'}
                icon={<RotateCcw />}
                onClick={onSendAgain}
                className="rounded-xl shadow-xs mt-2"
            >
                Send another message
            </ButtonImpl>
        </div>
    );
}

function NotSent({ onSent, from }: { onSent: () => void, from: string }) {
    const [isPending, startTransition] = useTransition();

    const { handleSubmit, control, reset } = useForm<z.infer<typeof sendMessageSchema>>({
        resolver: zodResolver(sendMessageSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        }
    });

    function submit(data: z.infer<typeof sendMessageSchema>) {
        startTransition(async () => {
            try {
                const response = await createSendMessageAction({ data, from });
                if (response.success) {
                    toast.success(response.message);
                    reset();
                    onSent();
                }
            } catch (e: any) {
                toast.error(e.message);
            }
        });
    }

    return (
        <form onSubmit={handleSubmit(submit)} className="space-y-6">
            <FieldGroup className="gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Controller
                        name="name"
                        control={control}
                        render={({ field, fieldState }) => (
                            <AppInput
                                label="Name"
                                textcase={'capitalize'}
                                important
                                field={field}
                                fieldState={fieldState}
                                isPending={isPending}
                                placeholder="Jane Doe"
                                startIcon={<User className="size-4" />}
                            />
                        )}
                    />

                    <Controller
                        name="email"
                        control={control}
                        render={({ field, fieldState }) => (
                            <AppInput
                                label="Email Address"
                                textcase={'lowercase'}
                                important
                                field={field}
                                fieldState={fieldState}
                                isPending={isPending}
                                placeholder="jane@example.com"
                                startIcon={<Mail className="size-4" />}
                            />
                        )}
                    />
                </div>

                <Controller
                    name="subject"
                    control={control}
                    render={({ field, fieldState }) => (
                        <AppInput
                            label="Subject"
                            textcase={'capitalize'}
                            important
                            field={field}
                            fieldState={fieldState}
                            isPending={isPending}
                            placeholder="Project inquiry, consulting, or hello"
                            startIcon={<Tag className="size-4" />}
                        />
                    )}
                />

                <Controller
                    name="message"
                    control={control}
                    render={({ field, fieldState }) => (
                        <AppInput
                            as="textarea"
                            label="Message"
                            important
                            field={field}
                            fieldState={fieldState}
                            isPending={isPending}
                            placeholder="Tell me a bit about your project, goals, and timeline..."
                        />
                    )}
                />
            </FieldGroup>

            <div className="flex items-center justify-between max-sm:flex-col-reverse gap-4 pt-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3.5 py-1.5 text-xs text-muted-foreground">
                    <Clock className="size-3.5 text-primary" />
                    <span>Response time: <strong className="font-semibold text-foreground">Under 24h</strong></span>
                </div>

                <ButtonImpl
                    type="submit"
                    text="Send Message"
                    className="max-sm:w-full rounded-xl px-6 shadow-sm"
                    icon={<Send className="size-4" />}
                    height={'md'}
                    isPending={isPending}
                />
            </div>
        </form>
    );
}
