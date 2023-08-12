import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import {
  buttonClasses,
  inputClasses,
  mainContainerClasses,
} from "./styles/appBar";

function AppBar() {
  const [navbarClass, setNavbarClass] = useState("bg-transparent");

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarClass("appBarBackground");
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
      expand={"xl" || "lg" || "md"}
      className={` ${navbarClass} ${mainContainerClasses}`}
      sticky="top">
      <Container fluid>
        <Navbar.Toggle
          style={{ backgroundColor: "#121111", borderColor: "#e4c590" }}
        />
        <Image src={"/logo.png"} width={160} height={50} alt="Logo image" />

        <Navbar.Offcanvas placement="start" className={navbarClass}>
          <Offcanvas.Header closeButton className="color-white">
            <Image src={"/logo.png"} width={160} height={50} alt="Logo image" />
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav
              className={` justify-content-end flex-grow-1 pe-3 ${navbarClass} `}>
              <Nav.Link href="/" className="text-white">
                HOME
              </Nav.Link>
              <Nav.Link href="/" className="text-white">
                ABOUT US
              </Nav.Link>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  defaultValue={"Search"}
                  placeholder="Search"
                  className={inputClasses}
                />
                <Button className={buttonClasses} variant="outline">
                  Search
                </Button>
              </Form>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default AppBar;
