import { Container } from "./container";

interface FooterProps {
    
}

export function Footer(props: FooterProps) {
    return (
        <Container as={"footer"}
            className="bg-blue-900 py-10"
        >
            <footer>THIS IS OUR FOOTER</footer>
        </Container>
    );
}
