import { cn } from "cn"
import { Container } from "../../components/ui/container"

export function AboutSection(){

    const styles = cn(
        "p-"
    )

    return (
        <>
            <Container>
                <section className={styles}>
                    <h2>About Section</h2>
                </section>
            </Container>
        </>
    )
}
