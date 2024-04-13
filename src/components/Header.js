import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function Header() {
    return (
        <>

            <Navbar key='md' expand='md' className="navbar-expand-lg mb-3">
                <Container fluid>
                    <Navbar.Brand className='me-auto' href="#" style={{ fontFamily: 'Asap', fontSize: '35px', fontWeight: 600 }} >MIRIM</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                                MIRIM
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link className="mx-lg-2" href="#action1">ABOUT</Nav.Link>
                                <Nav.Link className="mx-lg-2" href="#action2">EXPERIENCES</Nav.Link>
                                <Nav.Link className="mx-lg-2" href="#action2">PROJECTS</Nav.Link>
                                <Nav.Link className="mx-lg-2" href="#action2">SKILLS</Nav.Link>
                                <Nav.Link className="mx-lg-2" href="#action2">CONTACT</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </>
    );
}