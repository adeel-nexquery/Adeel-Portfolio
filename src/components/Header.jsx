import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Header = ({ scrollToAboutSection, scrollToResumeSection, scrollToHomeSection, scrollToProjectSection }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState("/");
    const [inspectAttempts, setInspectAttempts] = useState(0);

    useEffect(() => {
        const handleContextMenu = e => {
            e.preventDefault();
            setInspectAttempts(inspectAttempts + 1);

            if (inspectAttempts >= 3) {
                alert("Stop trying to inspect!");
            }
        };

        document.addEventListener("contextmenu", handleContextMenu);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
        };
    }, [inspectAttempts]);


    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location])

    useEffect(() => {
        // Helper function to find the active section based on intersection observer
        const findActiveSection = () => {
            const sections = document.querySelectorAll("section");
            let isHomeActive = true;
            for (const section of sections) {
                const { top, bottom } = section.getBoundingClientRect();
                if (top <= 0 && bottom > 0) {
                    setActiveTab(`/${section.id}`);
                    isHomeActive = false;
                    break;
                }
            }
            if (isHomeActive) {
                setActiveTab("/home"); // Set activeTab to "/" to keep "Home" active
            }
        };

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsScrolled(currentScrollPos > 0);
            findActiveSection();
        };

        findActiveSection();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);




    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className={`fixed-top ${isScrolled ? "scrolled" : ""}`}>
                <Container>
                    <Navbar.Brand href="#home"><img
                        src={require('./images/Adeel.png')}
                        alt="logo"
                        className="adeellogo"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="header">
                        <Nav className="ms-auto me-auto">
                            <Nav.Link onClick={scrollToHomeSection} data-scroll-to="home" className={activeTab === "/home" ? "active" : ""}>Home</Nav.Link>
                            <Nav.Link onClick={scrollToAboutSection} data-scroll-to="aboutme" className={activeTab === "/aboutme" ? "active" : ""}>About Us</Nav.Link>
                            <Nav.Link onClick={scrollToResumeSection} data-scroll-to="summary" className={activeTab === "/summary" ? "active" : ""}>Resume</Nav.Link>
                            <Nav.Link onClick={scrollToProjectSection} data-scroll-to="project" className={activeTab === "/project" ? "active" : ""}>Projects</Nav.Link>
                            {/* <Nav.Link href="#pricing">Blog</Nav.Link> */}
                        </Nav>
                        <Nav className="d-lg-flex  d-block align-items-center my-lg-0  my-3" style={{ fontWeight: "600" }}>
                            <BsFillTelephoneFill className="me-1" />
                            <span>+92 301 4857067</span>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
