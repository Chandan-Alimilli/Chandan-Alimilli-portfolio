import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import cvv from "../assets/img/cvv.png";
import linkedin from "../assets/img/nav-icon1.svg";
import gitIcon from "../assets/img/git.png";
import mailIcon from "../assets/img/mail (1).png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={cvv}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className="Certification">
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Certification</h2>
                    <p className="certificte">
                      Certified React Developer from Akshay Sani / Namaste Dev
                    </p>
                    <p className="certificte">
                      Certified Node , Express , MongoDB Developer from Jonas
                      Schmedtmann / Udemy
                    </p>
                    <p className="certificte">
                      Certified React Developer from Jonas Schmedtmann / Udemy
                    </p>
                  </div>
                </div>
              )}
            </TrackVisibility>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>

                  <div className="link-btns">
                    <a
                      className="icons"
                      href="#"
                      onClick={() =>
                        handleIconClick(
                          "https://www.linkedin.com/in/chandan-allimilli/"
                        )
                      }
                    >
                      <img src={linkedin} alt="Icon" />
                    </a>

                    {/* <a
                      href="#"
                      onClick={() => handleIconClick("URL_for_third_icon")}
                    >
                      <img src={mailIcon} alt="Icon" />
                    </a> */}
                    <a
                      href="#"
                      onClick={() =>
                        handleIconClick("https://github.com/Chandan-Alimilli")
                      }
                    >
                      <img src={gitIcon} alt="Icon" />
                    </a>
                  </div>

                  <div className="mail">
                    <h4>Mail : chandanallimilli0808@gmail.com</h4>
                    <h4> mobile : 9908085553 </h4>
                  </div>

                  <div className="context">
                    I hope my profile finds you well. I am reaching out to
                    express my interest in potential opportunities for
                    collaboration or employment. As a seasoned MERN Stack
                    Developer, I bring a wealth of experience in designing and
                    implementing scalable and responsive web applications. My
                    proficiency spans MongoDB, Express.js, React.js, and
                    Node.js, enabling me to deliver end-to-end solutions that
                    prioritize user experience and performance. With a
                    commitment to clean and efficient code, I have successfully
                    contributed to diverse projects, demonstrating adaptability
                    and innovation.
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
