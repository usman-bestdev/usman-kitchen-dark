import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { buttonClasses, mainContainerClasses } from "./styles/appBar";
import Image from "next/image";

function AppBar() {
  const [expand, setExpand] = useState(false);
  const [navbarClass, setNavbarClass] = useState("bg-transparent");

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarClass("bg-dark");
    } else {
      setNavbarClass("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand={expand}
      className={` ${navbarClass} ${mainContainerClasses}`}
      sticky="top">
      <Container fluid>
        <Navbar.Toggle style={{ color: "white" }} />
        <Image src={"/logo.png"} width={160} height={50} alt="Logo image" />
        <Button className={buttonClasses} variant="outline">
          FIND A TABLE
        </Button>

        <Navbar.Offcanvas placement="start" className="bg-dark p-5 text-white">
          <Offcanvas.Header closeButton className="color-white">
            <Image src={"/logo.png"} width={160} height={50} alt="Logo image" />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 bg-dark">
              <Nav.Link href="/">HOME</Nav.Link>
              <NavDropdown title="MENUS">
                <NavDropdown.Item href="#action3">MENU 1</NavDropdown.Item>
                <NavDropdown.Item href="#action4">MENU 2</NavDropdown.Item>
                <NavDropdown.Item href="#action5">MENU 3</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/">ABOUT US</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default AppBar;
