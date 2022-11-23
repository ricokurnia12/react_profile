import React, {useRef, useEffect } from "react";
import { Container } from "reactstrap";
import './header.css'

const navLinks = [
    {
        display: "Home",
        url: "#home",
    },
    {
        display: "About",
        url: "#about",
    },
    {
        display: "Services",
        url: "#services",
    },
    {
        display: "Portofolio",
        url: "#portofolio",
    },
    {
        display: "Contact",
        url: "#contact",
    },
];

const Header = () => {

    const headerRef = useRef(null)

    useEffect(()=>{
window.addEventListener(scroll, ()=>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('header_shrink')
    } else{
        headerRef.current.remove('header_shrink')
    }
})


    },[])
    return (
        <header className="header">
            <Container>
                <div className="navigation d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <h5>COCO</h5>
                    </div>
                    <div className="nav_menu">
                        <ul className="nav_list">
                            {navLinks.map((item, index) => (
                                <li className="nav_item" key={index}>
                                    <a href={item.url}>
                                        {item.display}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="nav_right d-flex align-items-center gap-4">
                        <button className="btn">Let's Talk</button>
                        <span className="mobile_menu"><i class="ri-menu-line"></i></span>
                    </div>
                </div>
            </Container>
        </header>
    );
};
