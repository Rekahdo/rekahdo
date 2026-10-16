import { Container } from "../shared-ui/container";
import { section } from "@/data/section";
import SendMessageForm from "../app-ui/send-message";
import ContactInfo from "../app-ui/contact-info";
import { contactData } from "@/data/contact";

export const CONTACT_ID = "contact";

export default async function ContactSection() {
    const data = await contactData;
    const sec = section.contact;

    return (
        <Container
            id={CONTACT_ID}
            py={'section'}
            px={'section'}
            wrapperClassName="border-t border-border/40"
            className="justify-center"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start w-full">
                <div className="lg:col-span-5 w-full">
                    <ContactInfo data={data} />
                </div>

                <div className="lg:col-span-7 w-full">
                    <SendMessageForm title={sec.title} subtitle={sec.subtitle} from={data.email} />
                </div>
            </div>
        </Container>
    );
}
