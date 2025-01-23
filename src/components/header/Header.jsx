import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import NavSmall from "./NavSmall";

const Header = () => {
    const [smallNavD, setSmallNavD] = useState(false);
    const [displayNav, setDisplayNav] = useState(false);
    const [visible, setVisible] = useState(true);
    const [prevY, setPrevY] = useState(window.scrollY);
    const header = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            if (prevY > currentY && prevY - currentY > 5) {
                setVisible(true);
            } else if (currentY > prevY && currentY - prevY > 5) {
                setVisible(false);
            }
            setPrevY(currentY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevY]);

    useEffect(() => {
        if (header.current) {
            header.current.style.transition = "transform 0.3s";
            header.current.style.transform = visible
                ? "translateY(0)"
                : "translateY(-120px)";
        }
    }, [visible]);

    return (
        <>
            <div ref={header} className="header">
                <h1 data-aos="fade-right">Daniel Allali</h1>
                <nav>
                    <ul>
                        <a href="#" /* onClick={changeRoot} */>
                            <li>בית</li>
                        </a>

                        <a href="#about" /* onClick={changeRoot} */>
                            <li>אודות</li>
                        </a>
                        <a href="#contact" /* onClick={changeRoot} */>
                            <li>צור קשר</li>
                        </a>
                        <li>
                            <div className="paste-button">
                                <button
                                    className="button"
                                    aria-label="More menu"
                                >
                                    עוד <span>&nbsp;▼</span>
                                </button>
                                <div className="dropdown-content">
                                    <a id="top" href="#examples">
                                        תיק עבודות
                                    </a>

                                    <a id="middle" href="#proccess">
                                        תהליך
                                    </a>
                                    <a id="middle" href="#maintenance">
                                        תחזוקה
                                    </a>
                                    <a id="bottom" href="#faq">
                                        שאלות נפוצות
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
                <h2
                    onClick={() => {
                        setSmallNavD(true);
                    }}
                >
                    <i className="bi bi-list"></i>
                </h2>
            </div>
            {smallNavD && <NavSmall setDisplay={setSmallNavD} />}
        </>
    );
};

export default Header;
