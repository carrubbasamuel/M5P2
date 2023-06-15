import { Col, Container, Row } from "react-bootstrap";


export default function Footer() {
    return (
        <footer className="mt-5">
        <Container>
            <Row>
            <Col className="text-center">
                <p>
                &copy; 2021 <a href="#">Carrubba Samuel</a>
                </p>
            </Col>
            </Row>
        </Container>
        </footer>
    );
}

