import { Container } from "../shared-ui/container";
import { section } from "@/data/section";
import SendMessageForm from "../app-ui/send-message";
import ContactInfo from "../app-ui/contact-info";
import { Layout } from "../shared-ui/layout";
import { contactData } from "@/data/contact";

export const CONTACT_ID = "contact";

export default async function ContactSection() {

    // const data = await fetchQuery(api.contact.get)
    const data = await contactData;

    const sec = section.contact;

    return (
        <Container
            id={CONTACT_ID}
            py={'section'}
            px={'section'}
            className="justify-center min-h-[90dvh] "
        >
            <Layout
                type={'flex'}
                maxMdAxis={'y'}
                className="max-md:gap-8"

                topClassName="justify-start"
                top={
                    <ContactInfo data={data} />
                }

                bottomClassName="flex w-full lg:w-7/10"
                bottom={
                    <SendMessageForm title={sec.title} subtitle={sec.subtitle} from={data.email} />
                }
            />
        </Container>
    );
}