import React from "react";
import "./About.css";
import profilimg from "../../assets/profil.png";
import { Container, Row, Col } from "reactstrap";

const About = () => {
    return (
        <section id="about">
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                        <h2>About Me</h2>
                    </Col>
                    <Col lg="4" md="3">
                        <div className="about_btns d-flex flex-column align-items-center">
                            <button className="about_btn about_btn-active">
                                About me
                            </button>
                            <button className="about_btn">
                                Education
                            </button>
                            <button className="about_btn">
                                Skills
                            </button>
                            <button className="about_btn">
                                Awards
                            </button>
                        </div>
                    </Col>
                    <Col lg="8" md="9">
                        <div className="about_content_wrapper d-flex gap-5">
                            <div className="about_img">
                                <img src={profilimg} alt="" />
                            </div>
                            <div className="about_content w-75">
                                <h2>I'm Rico Kurnia Pujiantoro</h2>
                                <p>
                                    Lorem ipsum, dolor sit amet
                                    consectetur adipisicing elit.
                                    Commodi adipisci iusto, esse dicta
                                    possimus voluptatem aut libero
                                    blanditiis aspernatur quis.
                                </p>
                                <div className="social_links">
                                    <h6 className="mb-4">
                                        Connect with me:
                                    </h6>
                                    <span>
                                        <a href="#">
                                            <i class="ri-facebook-fill"></i>
                                        </a>
                                    </span>
                                    <span>
                                        <a href="#">
                                            <i class="ri-youtube-line"></i>
                                        </a>
                                    </span>
                                    <span>
                                        <a href="#">
                                            <i class="ri-github-fill"></i>
                                        </a>
                                    </span>
                                    <span>
                                        <a href="#">
                                            <i class="ri-instagram-line"></i>
                                        </a>
                                    </span>
                                    <span>
                                        <a href="#">
                                            <i class="ri-linkedin-box-fill"></i>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
