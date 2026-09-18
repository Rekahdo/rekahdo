import { cn } from "cn"
import { Container } from "../../components/ui/container"
import { useAbout } from "../../hooks/context"
import { H2 } from "../../components/ui/headings";

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
                    height={"hero"}>
                    <section className={styles}>
                        <H2 title={data.sectionTitle} />
                    </section>
                </Container>
            }
        </>
    )
}
