import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-scroll';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
    const [show, setShow] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [height, setHeight] = useState(0);
    const componentRef = useRef(null);

    const toggleOffcanvas = () => {
        setShow(!show);
    };

    const checkMobile = () => {
        setMobile(window.innerWidth < 768);
    }

    useEffect(() => {
        if (componentRef.current) {
            setHeight(componentRef.current.clientHeight);
            console.log(height);
        }
    }, [height]);

    useEffect(() => {
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <header>
            <Navbar key='md' expand='md' className="navbar-expand-lg mb-3" ref={componentRef}>
                <Container fluid>
                    <Navbar.Brand className='me-auto mirim asap' href="#">MIRIM</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} onClick={() => { setShow(true) }} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement="end"
                        show={show}
                    >
                        <Offcanvas.Header closeButton onClick={() => { setShow(false) }}>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`} className='asap' style={{ fontSize: '25px', fontWeight: 600 }}>
                                MIRIM
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3 navLinks">
                                <Link to='about' duration={500} offset={-height} onClick={mobile ? toggleOffcanvas : null}>ABOUT</Link>
                                <Link to='experiences' duration={500} offset={-height} onClick={mobile ? toggleOffcanvas : null}>EXPERIENCES</Link>
                                <Link to='skills' duration={500} offset={-height} onClick={mobile ? toggleOffcanvas : null}>SKILLS</Link>
                                <Link to='projects' duration={500} offset={-height} onClick={mobile ? toggleOffcanvas : null}>PROJECTS</Link>
                                <Link to='contact' duration={500} offset={-height} onClick={mobile ? toggleOffcanvas : null}>CONTACT</Link>
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