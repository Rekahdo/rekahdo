import { Container } from "../shared-ui/container";
import { H2 } from "../shared-ui/headings";
import { section } from "@/data/section";
import { Flex } from "../shared-ui/layout";
import { contactMeData } from "@/data/contact-me";

export const CONTACT_ID = "contact";

export default async function ContactSection() {

    // const data = await fetchQuery(api.contact.get)
    const data = await contactMeData;
    const sec = section.contact;

    return (
        <Container
            id={CONTACT_ID}
            py={'section'}
        >
            <H2 title={sec.title} subtitle={sec.subtitle} />

            <Flex 
                top={
                    <>
                    
                    </>
                }

                bottom={
                    <>
                    
                    </>
                }
            />
        </Container>
    );
}