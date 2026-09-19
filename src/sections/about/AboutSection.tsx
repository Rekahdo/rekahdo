import { cn } from "cn"
import { Container } from "../../components/ui/container"
import { useAbout } from "../../hooks/context"
import { H2, H3 } from "../../components/ui/headings";
import { Image, type ImageType } from "../../components/ui/image";
import { Experience, type ExperienceType } from "../../components/ui/experience";
import { QuoteType } from "../../components/ui/quote";
import { Tag, type TagType } from "../../components/ui/tag";
import { Education } from "../../components/ui/education";

export type SectionType = {
    title: string;
    subtitle?: string;
}

export type AboutType = SectionType & {
    headline: string;
    bio: string;
    me: ImageType;
    experiences: ExperienceType[];
    quote: QuoteType
    education: Education[];
    skillTags: TagType[];
};

export function AboutSection() {

    const { data } = useAbout()!;

    const styles = cn(
        ""
    )

    return (
        <>
            {data &&
                <Container
                    bg={"secondary"}
                    height={"hero"}
                    py={"normal"}>

                    <section className={styles}>
                        <H2 title={data.title} />

                        <div>
                            <Image src={data.me.src} alt={data.me.alt} />

                            <section>
                                <H2 title={data.headline} />
                                <p>{data.bio}</p>

                                <div>
                                    {data.experiences.map((e, i) => (
                                        <Experience {...e} />
                                    ))}
                                </div>

                                <QuoteType text={data.quote.text} />

                                <div>
                                    <H3 title="core skills" />
                                    <div>
                                        {data.skillTags.map((tag, i) =>
                                            <Tag key={i} {...tag} />)}
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div>{
                            data.education.map((edu, i) => (
                                <Education key={i} {...edu} />
                            ))
                        }</div>
                    </section>
                </Container>
            }
        </>
    )
}
