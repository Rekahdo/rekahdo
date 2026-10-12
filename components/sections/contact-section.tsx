import { Container } from "../shared-ui/container";
import { H2 } from "../shared-ui/headings";
import { section } from "@/data/section";
import { Flex } from "../shared-ui/layout";
import { contactMeData } from "@/data/contact-me";
import { PingTag } from "../shared-ui/ping";

export const CONTACT_ID = "contact";

export default async function ContactSection() {

    // const data = await fetchQuery(api.contact.get)
    const data = await contactMeData;
    const sec = section.contact;
    const date = new Date();

    return (
        <Container
            id={CONTACT_ID}
            py={'section'}
            px={'section'}
        >
            <H2 title={sec.title} subtitle={sec.subtitle}
                className="text-center mx-auto z" />

            <div className="flex justify-center mt-10">
                <PingTag className="p-6 px-8 gap-8" pingSize="size-4"
                    text="Still In Development" description={`Last Updated: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                />
            </div>

            {/* <Flex 
                top={
                    <>

                    </>
                }

                bottom={
                    <>

                    </>
                }
            /> */}
        </Container>
    );
}