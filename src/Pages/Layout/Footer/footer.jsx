import { Col, Container, Row } from "react-bootstrap";
import { TiSocialGithubCircular, TiSocialLinkedinCircular, TiSocialTwitter } from "react-icons/ti";
import { useSelector } from "react-redux";
import logoDark from "../../../asset/logo-dark.png";
import logoLight from "../../../asset/logo.png";

export default function Footer() {
    const mode = useSelector((state) => state.root.modeRedux.mode);

    return (
        <footer className="mt-5">
            <Container>
                <Row className="justify-content-center mt-3">
                    <Col className="text-center col-2">
                        <img
                            src={mode === 'light' ? logoLight : logoDark}
                            alt="Logo"
                            className="footer-logo"
                        />
                    </Col>
                </Row>
                <Row className="align-items-center mb-3">

                    <Col md={4} className="text-center fs-2 mb-3">
                        <a href="https://www.facebook.com">
                            <TiSocialLinkedinCircular className={`social-icon ${mode === 'light' ? 'text-dark' : 'text-light'}`} />
                        </a>
                        <a href="https://www.twitter.com">
                            <TiSocialGithubCircular className={`social-icon ${mode === 'light' ? 'text-dark' : 'text-light'}`} />
                        </a>
                        <a href="https://www.instagram.com">
                            <TiSocialTwitter className={`social-icon ${mode === 'light' ? 'text-dark' : 'text-light'}`} />
                        </a>
                    </Col>

                    <Col md={4} className="text-center">
                        <p>
                            &copy; 2023 Carrubba Samuel
                        </p>
                    </Col>
                    <Col md={4} className="text-end">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="/about">About</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/contact">Contact</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/terms">Terms of Service</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/privacy">Privacy Policy</a>
                            </li>
                        </ul>
                    </Col>
                </Row>



            </Container>
        </footer>
    );
}
