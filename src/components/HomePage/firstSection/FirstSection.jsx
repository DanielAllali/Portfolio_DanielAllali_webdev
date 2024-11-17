import React, { useEffect, useRef, useState } from "react";
import "./firstSection.css";

const FirstSection = () => {
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
                    <h1 data-aos="fade-left" data-aos-duration="2000">
                        דניאל
                    </h1>
                    <h1 data-aos="fade-right" data-aos-duration="2000">
                        אלאלי
                    </h1>
                    <p>
                        מחבר בין עסקים ללקוחות, להנעה <br />
                        ולצמיחה, באמצעות עיצוב יעיל ואלגנטי
                    </p>
                </div>
            </header>
            <div>
                <i className="bi bi-arrow-down-short"></i>
                <h1>info@daniel-allali.com</h1>
            </div>
        </div>
    );
};

export default FirstSection;
