import React, { useEffect, useRef, useState } from "react";
import "./firstSection.css";
import "aos/dist/aos.css";
import AOS from "aos";

const FirstSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div id="top-page">
            {/* <div className="designdev">
                <div>
                    <h1 data-aos="slide-up">עיצוב &</h1>
                    <span>
                        <p>
                            React JS <br />
                            HTML
                            <br />
                            CSS
                        </p>
                        <h1 data-aos="slide-up">פיתוח</h1>
                    </span>
                </div>
            </div> */}

            <header>
                <div className="designdev"></div>
                <div className="myName">
                    <h1 data-aos="slide-up">דניאל</h1>
                    <h1 data-aos="slide-up">אלאלי</h1>
                    <p>
                        אני עוזר לחבר בין עסקים ללקוחות ולהניע צמיחה עם עיצוב
                        אלגנטי ויעיל
                    </p>
                </div>
            </header>
            <div>
                <h1>daniel.allali12@gmail.com</h1>
            </div>
        </div>
    );
};

export default FirstSection;
