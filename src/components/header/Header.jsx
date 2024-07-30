import React, { useEffect, useState } from "react";
import "./header.css";
import NavSmall from "./NavSmall";
import "aos/dist/aos.css";
import AOS from "aos";

const Header = () => {
    const [smallNavD, setSmallNavD] = useState(false);
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className="header">
            <h1 data-aos="fade-right">Daniel Allali</h1>
            <nav>
                <ul>
                    <a href="#">
                        <li>בית</li>
                    </a>
                    <a href="#services">
                        <li>שירותים/אודות</li>
                    </a>
                    <a href="#project">
                        <li>פרוייקט</li>
                    </a>
                    <a href="#contact">
                        <li>צור קשר</li>
                    </a>
                </ul>
            </nav>
            <h2
                onClick={() => {
                    setSmallNavD(true);
                }}
            >
                תפריט
            </h2>
            {smallNavD && <NavSmall setDisplay={setSmallNavD} />}
        </div>
    );
};

export default Header;
