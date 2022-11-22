import React, { useRef, useEffect, useInsertionEffect } from "react";
import "./hero-section.css";
import { Container, Row, Col } from "reactstrap";
import { init } from "ityped";
import Profilimg from "../../assets/profil.png";

const HeroSection = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            showCursor: false,
            strings: [" Rico kurnia", " Web Developer", " Ponorogo"],
        });
    }, []);

    return (
        <section className="hero_section" id="home">
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="hero_content">
                            <p className="mb-3">
                                Welcome to my website
                            </p>
                            <h5 className="mb-4">Hello</h5>
                            <h2 className="hero_title mb-4">
                                I'm
                                <span ref={textRef}></span>
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet. Lorem
                                ipsum dolor sit amet consectetur
                                adipisicing elit. Amet, officiis.
                                Lorem ipsum dolor sit amet. Lorem
                                ipsum dolor sit amet consectetur
                                adipisicing elit. Harum, fugit?
                            </p>

                            <div className="hero_btns d-flex align-item-center gap-4">
                                <button className="btn hire_btn">
                                    <a href="#">Hire Me</a>
                                </button>
                                <button className="btn">
                                    Contact
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" md="6">
                        <div className="hero_img ">
                            <img src={Profilimg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;
