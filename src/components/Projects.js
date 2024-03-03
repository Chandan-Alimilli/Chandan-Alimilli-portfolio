import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>PROJECTS</h2>
                  <p>
                    These MERN stack projects showcase my proficiency in
                    developing end-to-end applications, utilizing MongoDB for
                    data storage, Express.js for server-side logic, React.js for
                    interactive front-end interfaces, and Node.js for building
                    scalable server applications. Each project demonstrates
                    practical skills in areas such as real-time updates, user
                    authentication, and seamless data flow.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Youtube</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">webflix</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Natours</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <div class="flex-container">
                          <p class="summary">
                            Designed and developed a comprehensive YouTube clone
                            using React, Redux, React Router, and custom CSS.
                            The project showcases a commitment to crafting a
                            user-friendly and visually engaging platform that
                            emulates the core functionalities of the original
                            YouTube. By leveraging a powerful combination of
                            frontend technologies, the clone achieves a dynamic
                            and responsive user interface, providing users with
                            a seamless and immersive video-sharing experience.
                            The project stands as a testament to the developer's
                            adaptability and creativity in the rapidly evolving
                            landscape of frontend development, contributing to
                            innovative and future-ready solutions for a dynamic
                            user base
                          </p>

                          <img
                            class="thumbnail"
                            onClick={() =>
                              handleIconClick(
                                "https://chandan-yotube.netlify.app"
                              )
                            }
                            src="https://assets.materialup.com/uploads/b72789f7-8bbe-4df8-967c-63445992db13/attachment.png"
                            alt="youtube_img"
                          />
                        </div>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleIconClick(
                              "https://chandan-yotube.netlify.app/"
                            );
                          }}
                        >
                          <button class="proj-btn">Youtube</button>
                        </a>

                        <div class="tech-summary">
                          <p>
                            The project incorporates state-of-the-art
                            technologies, with React serving as the foundation
                            for building modular components. Advanced state
                            management is implemented through Redux, ensuring
                            efficient data flow and enhancing the overall user
                            experience. React Router facilitates smooth
                            navigation, allowing users to seamlessly explore
                            content. Tailwind CSS is skillfully utilized to add
                            a polished and visually appealing design,
                            emphasizing a modern and aesthetically pleasing user
                            interface. The integration of these technologies
                            demonstrates a proficiency in frontend development,
                            highlighting the ability to seamlessly integrate
                            features for an enhanced user experience
                          </p>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div class="flex-container">
                          <p class="summary">
                            Built the Natours project utilizing the powerful
                            MERN stack, where expertise in Node.js, Express,
                            MongoDB, and React came together harmoniously.
                            Demonstrated a deep understanding of each
                            technology, showcasing proficiency in crafting a
                            well-rounded and efficient full-stack
                            application.This attention to detail reflects
                            expertise in full-stack development and a commitment
                            to creating applications that not only function
                            exceptionally but also provide an enjoyable
                            experience for the end user.
                          </p>

                          <img
                            className="thumbnail"
                            src="https://i.ytimg.com/vi/DnjrAJgDPIM/maxresdefault.jpg"
                            alt="Natours_img"
                          />
                        </div>
                        <div class="tech-summary">
                          <button class="proj-btn">Natours</button>
                          <p>
                            Engineered a robust backend infrastructure for the
                            Natours project, focusing on server-side logic and
                            seamless database interactions. Leveraged the
                            capabilities of Node.js and Express to create a
                            reliable and scalable server, while utilizing
                            MongoDB to ensure efficient data storage and
                            retrieval. The result is a feature-rich application
                            that excels in both performance and functionality
                          </p>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div class="flex-container">
                          <p class="summary">
                            Led the end-to-end development of an impressive
                            Netflix clone, aptly named Webflix, utilizing
                            cutting-edge technologies such as React, Redux,
                            React Router, Tailwind CSS, Express, and Node. This
                            project aimed at delivering a seamless streaming
                            experience with a dynamic and responsive user
                            interface, elevating the user's content consumption
                            journey. The tech stack, comprising React for
                            efficient component-based UI development, Redux for
                            state management, and React Router for smooth
                            navigation, ensured a highly interactive and
                            engaging platform. Tailwind CSS brought a modern and
                            polished design, enhancing the visual appeal and
                            user experience.
                          </p>
                          <img
                            class="thumbnail"
                            onClick={() =>
                              handleIconClick(
                                "https://chandan-webflix-gpt.netlify.app/"
                              )
                            }
                            src="https://miro.medium.com/v2/resize:fit:1400/1*8BtlgpxyjOPaLZXO6pVD0Q.jpeg"
                            alt="webflix_img"
                          />
                        </div>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleIconClick(
                              "https://chandan-webflix-gpt.netlify.app/"
                            );
                          }}
                        >
                          <button class="proj-btn">webflix GPT</button>
                        </a>
                        <div class="tech-summary">
                          <p>
                            One standout feature of the project was the robust
                            implementation of user authentication. Leveraging
                            the authentication capabilities of Express and Node,
                            the Netflix clone prioritized security, offering
                            users a personalized and secure environment. Through
                            continuous integration and feature enhancements, the
                            project showcased my full-stack development
                            expertise, combining frontend finesse with backend
                            security measures. This Netflix clone project not
                            only demonstrates my proficiency in the latest
                            technologies but also underscores my commitment to
                            user-centric design, security, and the holistic
                            development of innovative applications in the
                            rapidly evolving landscape of web development.
                          </p>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
