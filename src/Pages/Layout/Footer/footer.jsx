import { Col, Container, Row } from "react-bootstrap";


export default function Footer() {
    return (
        <footer className="mt-5">
        <Container>
            <Row>
            <Col className="text-center">
                <p>
                &copy; 2023 Carrubba Samuel
                </p>
            </Col>
            </Row>
        </Container>
        </footer>
    );
}

