import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import "aos/dist/aos.css";
import AOS from "aos";

const NavSmall = ({ setDisplay }) => {
    const navRef = useRef();
    const ulRef = useRef();
    useEffect(() => {
        if (navRef.current) {
            setTimeout(() => {
                navRef.current.style.height = "290px";
            }, 1);
        }
        AOS.init({ duration: 1000 });
    }, []);
    const handleClose = () => {
        if (navRef.current && ulRef.current) {
            setTimeout(() => {
                ulRef.current.style.transform = "translateY(-500px)";
                navRef.current.style.height = "0";
            }, 1);
            setTimeout(() => {
                setDisplay(false);
            }, 1000);
        }
    };
    return (
        <div className="smallNav" ref={navRef}>
            <div ref={ulRef}>
                <ul>
                    <a data-aos="fade-left" href="#" onClick={handleClose}>
                        <li>
                            <button className="btn">
                                <span className="btn-text-one">בית</span>
                                <span className="btn-text-two">בית</span>
                            </button>
                        </li>
                    </a>
                    <a
                        data-aos="fade-right"
                        href="#services"
                        onClick={handleClose}
                    >
                        <li>
                            <button className="btn">
                                <span className="btn-text-one">
                                    שירותים/אודות
                                </span>
                                <span className="btn-text-two">
                                    שירותים/אודות
                                </span>
                            </button>
                        </li>
                    </a>
                    <a
                        data-aos="fade-left"
                        href="#project"
                        onClick={handleClose}
                    >
                        <li>
                            <button className="btn">
                                <span className="btn-text-one">פרוייקט</span>
                                <span className="btn-text-two">פרוייקט</span>
                            </button>
                        </li>
                    </a>
                    <a
                        data-aos="fade-right"
                        href="#contact"
                        onClick={handleClose}
                    >
                        <li>
                            <button className="btn">
                                <span className="btn-text-one">צור קשר</span>
                                <span className="btn-text-two">צור קשר</span>
                            </button>
                        </li>
                    </a>
                </ul>
                <h2 data-aos="fade-up" onClick={handleClose}>
                    סגור
                </h2>
            </div>
        </div>
    );
};

export default NavSmall;
