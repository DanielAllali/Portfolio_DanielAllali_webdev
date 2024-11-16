import React, { useContext, useEffect, useRef, useState } from "react";
import "./header.css";
import NavSmall from "./NavSmall";
import { Context } from "../../Context";

const Header = () => {
    const { isHijack, setIsHijack } = useContext(Context);

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

    /*  const changeRoot = () => {
        setIsHijack(false);
        setTimeout(() => {
            setIsHijack(true);
        }, 1000);
    };
 */
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
                                <button className="button">
                                    עוד <span>&nbsp;▼</span>
                                </button>
                                <div className="dropdown-content">
                                    <a id="top" href="#services">
                                        שירותים
                                    </a>
                                    <a id="middle" href="#whyMe">
                                        למה אני
                                    </a>
                                    <a id="middle" href="#proccess">
                                        תהליך
                                    </a>
                                    <a id="middle" href="#project">
                                        דף לדוגמה
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
                    תפריט
                </h2>
            </div>
            {smallNavD && <NavSmall setDisplay={setSmallNavD} />}
        </>
    );
};

export default Header;
