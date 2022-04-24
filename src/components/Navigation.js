import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import icon from "../../static/icon.png"
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGoodreads,
} from "@fortawesome/free-brands-svg-icons"
const Navigation = () => {
  return (
    <div className="container-fluid p-0 m-0" id="home">
      <Navbar
        className="navigation justify-content-center"
        bg="dark"
        variant="dark"
        fixed="top"
      >
        <Container className="m-0" fluid>
          <Navbar.Brand href="#home" className="navbrand">
            <img alt="" src={icon} width="50" height="50" />{" "}
            <span className="brand">The Little Red House</span>
          </Navbar.Brand>

          <Navbar.Toggle
            className="d-block d-sm-none"
            aria-controls="offcanvasNavbar"
          />
          <Navbar.Toggle
            className="d-none d-sm-block d-md-none"
            aria-controls="offcanvasNavbar"
          />
          <Navbar.Toggle
            className="d-none d-md-block d-lg-none"
            aria-controls="offcanvasNavbar"
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Navigation
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 mt-2">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#author">About the author</Nav.Link>
                <Nav.Link href="#book">About the book</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
              <Nav className="links flex-row mt-4">
                <Nav.Link href="#home" className="me-4">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                    className="fa-facebook"
                  />
                </Nav.Link>
                <Nav.Link href="#features" className="me-4">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="2x"
                    className="fa-facebook"
                  />
                </Nav.Link>
                <Nav.Link href="#pricing" className="me-4">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    className="fa-facebook"
                  />
                </Nav.Link>
                <Nav.Link href="#pricing" className="me-4">
                  {" "}
                  <FontAwesomeIcon
                    icon={faGoodreads}
                    size="2x"
                    className="fa-facebook"
                  />
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <Nav className="d-none d-lg-flex d-xl-flex">
            <Nav.Link className="links" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="links" href="#author">
              About the author
            </Nav.Link>
            <Nav.Link className="links" href="#book">
              About the book
            </Nav.Link>
            <Nav.Link className="links" href="#contact">
              Contact
            </Nav.Link>
          </Nav>

          <Nav className="d-none d-lg-flex d-xl-flex">
            <Nav.Link className="logos" href="#home">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className="fa-facebook"
              />
            </Nav.Link>
            <Nav.Link className="logos" href="#features">
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                className="fa-facebook"
              />
            </Nav.Link>
            <Nav.Link className="logos" href="#pricing">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="fa-facebook"
              />
            </Nav.Link>
            <Nav.Link className="logos" href="#pricing">
              {" "}
              <FontAwesomeIcon
                icon={faGoodreads}
                size="2x"
                className="fa-facebook"
              />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
