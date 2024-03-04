import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/chandan.png";
import linkedin from "../assets/img/nav-icon1.svg";
import gitlIcon from "../assets/img/git.png";
import mailIcon from "../assets/img/mail (1).png";

export const Footer = () => {
  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="#"
                onClick={() =>
                  handleIconClick(
                    "https://www.linkedin.com/in/alimilli-chandan-9a350b194/"
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
            </div>
            <p>That's All About MySelf . Have a good !</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
