import React, { useContext, useEffect, useRef, useState } from "react";
import "./header.css";

/* import { Context } from "../../Context";
 */
const NavSmall = ({ setDisplay }) => {
    /*     const { isHijack, setIsHijack } = useContext(Context);
     */
    const navRef = useRef();
    const ulRef = useRef();
    useEffect(() => {
        if (navRef.current) {
            setTimeout(() => {
                navRef.current.style.height = "320px";
            }, 1);
        }
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
    /* const changeRoot = () => {
        setIsHijack(false);
        setTimeout(() => {
            setIsHijack(true);
        }, 1000);
    } */
    return (
        <div className="smallNav" ref={navRef}>
            <div ref={ulRef}>
                <h2
                    aria-label="Close navigation"
                    data-aos="fade-bottom"
                    onClick={() => {
                        handleClose();
                        /* changeRoot() */
                    }}
                >
                    סגור
                </h2>
                <ul>
                    <a
                        data-aos="fade-left"
                        href="#"
                        onClick={() => {
                            handleClose();
                            /* changeRoot() */
                        }}
                    >
                        <li>
                            <button className="btn">
                                <span className="btn-text-one">בית</span>
                                <span className="btn-text-two">בית</span>
                            </button>
                        </li>
                    </a>

                    <a
                        data-aos="fade-right"
                        href="#about"
                        onClick={() => {
                            handleClose();
                            /* changeRoot() */
                        }}
                    >
                        <li>
                            <button className="btn">
                                <span className="btn-text-one">אודות</span>
                                <span className="btn-text-two">אודות</span>
                            </button>
                        </li>
                    </a>
                    <a
                        data-aos="fade-left"
                        href="#contact"
                        onClick={() => {
                            handleClose();
                            /* changeRoot() */
                        }}
                    >
                        <li>
                            <button className="btn">
                                <span className="btn-text-one">צור קשר</span>
                                <span className="btn-text-two">צור קשר</span>
                            </button>
                        </li>
                    </a>
                    <li data-aos="fade-right">
                        <div className="paste-button">
                            <button className="button">
                                עוד <span>&nbsp;▼</span>
                            </button>
                            <div className="dropdown-content">
                                <a
                                    id="top"
                                    href="#services"
                                    onClick={() => {
                                        handleClose();
                                        /* changeRoot() */
                                    }}
                                >
                                    שירותים
                                </a>
                                <a
                                    id="middle"
                                    href="#whyMe"
                                    onClick={() => {
                                        handleClose();
                                        /* changeRoot() */
                                    }}
                                >
                                    למה אני
                                </a>
                                <a
                                    id="middle"
                                    href="#proccess"
                                    onClick={() => {
                                        handleClose();
                                        /* changeRoot() */
                                    }}
                                >
                                    תהליך
                                </a>
                                <a
                                    id="middle"
                                    href="#project"
                                    onClick={() => {
                                        handleClose();
                                        /* changeRoot() */
                                    }}
                                >
                                    דף לדוגמה
                                </a>
                                <a
                                    id="bottom"
                                    href="#faq"
                                    onClick={() => {
                                        handleClose();
                                        /* changeRoot() */
                                    }}
                                >
                                    שאלות נפוצות
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavSmall;
