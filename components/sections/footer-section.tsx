import Link from "next/link";
import { footerData } from "@/data/footer";
import { Container } from "../shared-ui/container";
import { Layout } from "../shared-ui/layout";
import { Logo } from "../shared-ui/logo";
import { contactData } from "@/data/contact";
import { H2 } from "../shared-ui/headings";
import { aboutData } from "@/data/about";
import { cn } from "@/lib/utils";
import { Mail, Phone } from "lucide-react";
import { GithubIcon } from "../icons/lucide-github";
import { LinkedinIcon } from "../icons/lucide-linkedin";
import { WhatsappIcon } from "../icons/cib-whatsapp";

export interface FooterSectionProps { }

export const FOOTER_ID = "sec-footer";

export default async function FooterSection(props: FooterSectionProps) {
    const data = await footerData;
    const about = await aboutData;
    const contact = await contactData;

    const defaultWhatsAppMessage = encodeURIComponent(
        `Hi ${about.firstname || "Richard"}, I came across your portfolio and would love to connect!`
    );

    const whatsappHref = contact.whatsapp
        ? contact.whatsapp.startsWith("http")
            ? `${contact.whatsapp}${contact.whatsapp.includes("?") ? "&" : "?"}text=${defaultWhatsAppMessage}`
            : `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}?text=${defaultWhatsAppMessage}`
        : undefined;

    const socialLinks = [
        { name: "GitHub", href: contact.github, icon: <GithubIcon /> },
        { name: "LinkedIn", href: contact.linkedin, icon: <LinkedinIcon /> },
        { name: "X", href: contact.x, icon: <XIcon /> },
        { name: "Whatsapp", href: whatsappHref, icon: <WhatsappIcon /> },
    ].filter((item) => Boolean(item.href));

    const getInTouch = [
        { name: "Email", href: `mailto:${contact.email}`, label: contact.email, icon: <Mail /> },
        { name: "Phone", href: `tel:+${contact.phone}`, label: `+${contact.phone}`, icon: <Phone /> },
    ].filter((item) => Boolean(item.href));

    const textStyle = "text-xs md:text-sm select-none";
    const whiteForeground = "text-white/70";

    return (
        <Container
            id={FOOTER_ID}
            as="footer"
            py={'section'}
            px={'section'}
            background={'footer'}
            className={cn(textStyle, whiteForeground)}
        >
            <Layout
                maxSmAxis={"y"}
                className="py-10 border-y border-border/20 dark:border-border/80 max-sm:gap-10"
                topClassName="text-start items-start gap-6"
                top={
                    <>
                        <H2
                            title={about.firstname.concat(" ".concat(about.lastname))}
                            subtitle={about.stack}
                            className={cn(whiteForeground)}
                            subtitleClassName={cn(textStyle, whiteForeground)}
                        />

                        <div className="flex gap-2">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href!}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className={cn(
                                        "size-10 rounded-xl bg-white/10",
                                        "border border-black/20 hover:bg-white/20",
                                        "flex items-center justify-center transition-colors"
                                    )}
                                >
                                    <span className="*:size-5">{social.icon}</span>
                                </Link>
                            ))}
                        </div>
                    </>
                }
                bottomClassName="grow max-w-1/3 items-start gap-4 justify-start"
                bottom={
                    <>
                        <p className="uppercase font-semibold text-xs">Get in touch</p>
                        {getInTouch.map((touch) => (
                            <Link
                                key={touch.name}
                                href={touch.href}
                                className="flex items-center gap-2 p-0 transition-opacity hover:opacity-100"
                            >
                                <span className="*:size-4">{touch.icon}</span>
                                <p className="hover:underline">{touch.label}</p>
                            </Link>
                        ))}
                    </>
                }
            />

            <Layout
                maxSmAxis={"y"}
                className="pt-10"
                top={<Logo variant={'footer'} />}
                bottom={<p className="text-center sm:text-left">{data.copyright}</p>}
            />
        </Container>
    );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}