import React, { useEffect } from "react";
import "./firstSection.css";
import "aos/dist/aos.css";
import AOS from "aos";

const FirstSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div>
            <div className="designdev">
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
            </div>
            <div className="myName">
                <h1 data-aos="slide-up">דניאל</h1>
                <h1 data-aos="slide-up">אלאלי</h1>
                <p>
                    אני עוזר לחבר בין עסקים ללקוחות ולהניע צמיחה עם עיצוב אלגנטי
                    ויעיל
                </p>
            </div>
        </div>
    );
};

export default FirstSection;
