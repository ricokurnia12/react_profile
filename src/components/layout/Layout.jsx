import React, { Fragment } from "react";
import { Header } from "../header/Header";
import About from "../about/About";
import HeroSection from "../hero-section/HeroSection";

const Layout = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection />
            <About />
        </Fragment>
    );
};

export default Layout;
