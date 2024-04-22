import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header() {
    return (
        <header>
            <Navbar key='md' expand='md' className="navbar-expand-lg mb-3">
                <Container fluid>
                    <Navbar.Brand className='me-auto asap' href="#" style={{ fontSize: '35px', fontWeight: 600 }} >MIRIM</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`} className='asap' style={{ fontSize: '25px', fontWeight: 600 }}>
                                MIRIM
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link className="mx-lg-2" href="#about">ABOUT</Nav.Link>
                                <Nav.Link className="mx-lg-2" href="#experiences">EXPERIENCES</Nav.Link>
                                <Nav.Link className="mx-lg-2" href="#projects">PROJECTS</Nav.Link>
                                <Nav.Link className="mx-lg-2" href="#skills">SKILLS</Nav.Link>
                                <Nav.Link className="mx-lg-2" href="#contact">CONTACT</Nav.Link>
                                <button id='resumeBtn'>
                                    RESUME
                                </button>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </header>
    );
}