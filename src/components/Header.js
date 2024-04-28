import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-scroll';

export default function Header() {
    return (
        <header>
            <Navbar key='md' expand='md' className="navbar-expand-lg mb-3">
                <Container fluid>
                    <Navbar.Brand id='mirim' className='me-auto asap' href="#">MIRIM</Navbar.Brand>
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
                            <Nav className="justify-content-end flex-grow-1 pe-3 navLinks">
                                <Link to='about' duration={500} offset={-80}>ABOUT</Link>
                                <Link to='experiences' duration={500} offset={-80}>EXPERIENCES</Link>
                                <Link to='skills' duration={500} offset={-80}>SKILLS</Link>
                                <Link to='projects' duration={500} offset={-80}>PROJECTS</Link>
                                <Link to='contact' duration={500} offset={-80}>CONTACT</Link>
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