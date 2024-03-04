import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import mylogo from "../assets/img/chandan.png";
import linkedin from "../assets/img/nav-icon1.svg";
import gitlIcon from "../assets/img/git.png";
import mailIcon from "../assets/img/mail (1).png";

import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };

  const handleMailIconClick = (emailAddress) => {
    window.location.href = `mailto:${emailAddress}`;
  };
  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={mylogo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="#"
                  onClick={() =>
                    handleIconClick(
                      "https://www.linkedin.com/in/chandan-allimilli/"
                    )
                  }
                >
                  <img src={linkedin} alt="Icon" />
                </a>
                <a
                  href="#"
                  onClick={() =>
                    handleIconClick("https://github.com/Chandan-Alimilli")
                  }
                >
                  <img src={gitlIcon} alt="Icon" />
                </a>
                {/* <a
                  href="#"
                  onClick={() =>
                    handleMailIconClick("chandanallimilli0808@gmail.com")
                  }
                >
                  <img src={mailIcon} alt="Icon" />
                </a> */}

                {/* <button
                  onClick={() =>
                    handleMailIconClick("chandanallimilli0808@gmail.com")
                  }
                >
                  <img src={mailIcon} alt="Icon" />
                </button> */}
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Resume</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
