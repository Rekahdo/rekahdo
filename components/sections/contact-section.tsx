import { Container } from "../shared-ui/container";
import { section } from "@/data/section";
import SendMessageForm from "../app-ui/send-message";
import Contact from "../app-ui/contact";
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
        >
            <Layout
                type={'flex'}
                maxLgAxis={'y'}
                className="max-lg:gap-8"

                topClassName="flex grow items-start"
                top={
                    <Contact data={data} />
                }

                bottomClassName="flex w-full lg:w-7/10"
                bottom={
                    <SendMessageForm title={sec.title} subtitle={sec.subtitle} from={data.email} />
                }
            />
        </Container>
    );
}