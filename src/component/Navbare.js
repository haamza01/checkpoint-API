import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbare = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Users Global</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" href="#home">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/users" href="#link">
                                Users
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbare;
