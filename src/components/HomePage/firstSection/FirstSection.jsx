import React, { useEffect, useRef, useState } from "react";
import "./firstSection.css";
import "aos/dist/aos.css";
import AOS from "aos";

const FirstSection = () => {
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        AOS.init({ duration: 1000 });
        const updateTime = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, "0");
            const minutes = String(now.getMinutes()).padStart(2, "0");
            const seconds = String(now.getSeconds()).padStart(2, "0");
            setCurrentTime(`${hours}:${minutes}:${seconds}`);
        };

        // Update time every second
        const timerId = setInterval(updateTime, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(timerId);
    }, []);
    return (
        <div>
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
                <h1>{currentTime}</h1>
            </div>
        </div>
    );
};

export default FirstSection;
