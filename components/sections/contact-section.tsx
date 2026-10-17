import { Container } from "../shared-ui/container";
import { section } from "@/data/section";
import SendMessageForm from "../app-ui/send-message";
import ContactInfo from "../app-ui/contact-info";
import { contactData } from "@/data/contact";
import { Layout } from "../shared-ui/layout";

export const CONTACT_ID = "contact";

export default async function ContactSection() {
    const data = await contactData;
    const sec = section.contact;

    return (
        <Container
            id={CONTACT_ID}
            wrapperClassName="border-t border-border/40"
            className="justify-center spacing-base"
        >
            <Layout
                maxLgAxis={'y'}
                className="*:grow"

                top={<>
                    <ContactInfo data={data} />
                </>}

                bottom={<>
                    <SendMessageForm title={sec.title} subtitle={sec.subtitle} from={data.email} />
                </>}
            />
        </Container>
    );
}
