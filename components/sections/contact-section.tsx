'use client'

import { fetchQuery } from "convex/nextjs";
import { Container } from "../shared-ui/container";
import { H2 } from "../shared-ui/headings";
import { section } from "@/data/section";
import { api } from "@/convex/_generated/api";

export const CONTACT_ID = "contact";

export default async function ContactSection() {

    const data = await fetchQuery(api.contact.get)!;
    const sec = section.contact;

    return (
        <Container
            id={CONTACT_ID}
            py={'section'}
        >
            <H2 title={sec.title} subtitle={sec.subtitle}>

            </H2>
        </Container>
    );
}