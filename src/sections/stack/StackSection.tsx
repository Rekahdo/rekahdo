import { cn } from "cn"
import { Container } from "../../components/ui/container"
import { useTechStack } from "../../hooks/context"
import { H2, H5 } from "../../components/ui/headings";
import type { SectionType } from "../about/AboutSection";
import { Image } from "../../components/ui/image";

export type LanguageType = {
    name: string;
    description: string;
    icon: string;
}

export type TechStackType = SectionType & {
    languages: LanguageType[];
}

export function TechStackSection() {

    const { data } = useTechStack()!;

    const styles = cn(
        ""
    )

    return (
        <>
            {data &&
                <Container
                    bg={"secondary"}
                    h={"hero"}
                    py={"py_10"}>

                    <section className={styles}>
                        <H2 title={data.title}/>

                        <div>{
                            data.languages.map((lang, i) => (
                                <div>
                                    <Image src={lang.icon} alt={lang.name}/>
                                    <H5 title={lang.name}/>
                                    <p>{lang.description}</p>
                                </div>
                            ))
                        }</div>
                    </section>
                </Container>
            }
        </>
    )
}
