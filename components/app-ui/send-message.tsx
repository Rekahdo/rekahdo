'use client'

import { Card, CardContent, CardHeader } from "../ui/card";
import { FieldGroup } from "../ui/field";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMessageSchema } from "@/schemas/zod-schemas";
import z from "zod";
import { cn } from "cn";
import { ButtonImpl } from "../shared-ui/button-impl";
import { CheckCircle2, Clock, Mail, RotateCcw, Send, Sparkles, Tag, TagPlus, User } from "lucide-react";
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
        <Card className={cn("w-full",
            "border-none py-0 bg-transparent backdrop-blur-lg gap-0",
            "rounded-3xl bg-gradient-to-b from-card/10 via-card/60 to-card/100",
            "backdrop-blur-xl shadow-2xl ring-1 ring-black/10",
            className
        )}>
            {!sent && (
                <CardHeader className="p-6! md:p-8! border-b border-border/40 bg-muted/40 animate-into-view gap-2 md:gap-3">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                        <Sparkles className="size-3.5" />
                        <span>Get in touch</span>
                    </div>

                    <H2 title={title} subtitle={subtitle} className="gap-2 md:gap-3" />
                </CardHeader>
            )}

            {sent
                ? <Sent onSendAgain={() => setSent(false)} />
                : <NotSent onSent={() => setSent(true)} from={from} />}
        </Card>
    );
}

function Sent({ onSendAgain }: { onSendAgain: () => void }) {

    return (
        <>
            <CardContent className="flex flex-col items-center text-center p-8 sm:p-12 gap-6 animate-into-view">
                <Ping
                    bg="bg-emerald-500/15"
                    waveBg="bg-emerald-500/30"
                    size="size-20"
                    className="mb-2"
                    icon={<CheckCircle2 className="size-10 text-emerald-600 dark:text-emerald-400" />}
                />

                <H3 className="justify-center" title="Message Sent"
                    subtitle="Thanks for reaching out. I&apos;ll get back to you as soon as I can." />

                <div className="inline-flex items-center gap-2.5 rounded-full border border-border/60 bg-muted/30 px-4 py-2 text-xs text-muted-foreground">
                    <Clock className="size-3.5 text-primary" />
                    <span>Typical response time: <strong className="font-semibold text-foreground">Under 24 hours</strong></span>
                </div>

                <ButtonImpl type="button"
                    height={'md'}
                    icon={<RotateCcw />}
                    onClick={onSendAgain}>

                    Send another message
                </ButtonImpl>
            </CardContent>
        </>
    );
}

function NotSent({ onSent, from }: { onSent: () => void, from: string }) {
    const [isPending, startTransition] = useTransition();

    const { handleSubmit, control, reset } = useForm<z.infer<typeof sendMessageSchema>>({
        resolver: zodResolver(sendMessageSchema),
        defaultValues: {
            name: "richard okafor",
            email: "okaforrichard76@gmail.com",
            subject: "Hire",
            message: "Hi, i want to hire you for a job",
        }
    })

    function submit(data: z.infer<typeof sendMessageSchema>) {
        startTransition(async () => {
            try {
                const response = await createSendMessageAction({ data, from });
                if (response.success) {
                    toast.success(response.message);
                    reset(); onSent();
                }
            } catch (e: any) {
                toast.error(e.message)
            }
        })
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <CardContent className="grid gap-6 md:gap-8 p-6 md:p-8 animate-into-view">
                <FieldGroup className="gap-6 md:gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
                                    textcase={'capitalize'}
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

                <div className="flex items-center justify-between max-sm:flex-col gap-6">
                    <div className="inline-flex items-center gap-2.5 rounded-full border border-border/60 bg-muted/30 px-4 py-2 text-xs text-muted-foreground">
                        <Clock className="size-3.5 text-primary" />
                        <span>Typical response time: <strong className="font-semibold text-foreground">Under 24 hours</strong></span>
                    </div>

                    <ButtonImpl
                        type="submit"
                        text="Send Message"
                        className="max-sm:min-w-5/10"
                        icon={<Send />}
                        height={'md'}
                        isPending={isPending}
                    />
                </div>

            </CardContent>
        </form>
    );
}