import { cn } from "cn"
import { Container } from "../../components/ui/container"

export function AboutSection(){

    const styles = cn(
        ""
    )

    return (
        <>
            <Container section={"about"} padding={true}>
                <section className={styles}>
                    <h2>About Section</h2>
                </section>
            </Container>
        </>
    )
}
