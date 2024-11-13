import React, { useState, useEffect } from "react";
import "./seventhSection.css";

const SeventhSection = () => {
    const [isSmall, setIsSmall] = useState(false);

    const handleResize = () => {
        if (window.innerWidth <= 800) {
            setIsSmall(true);
        } else {
            setIsSmall(false);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div id="proccess">
            <h1 data-aos="fade-down">אז מה התהליך?</h1>
            <ul>
                <li data-aos={isSmall ? "fade-down" : "fade-down-right"}>
                    <h1>1</h1>
                    <h2>שיחה</h2>
                    <p>
                        שיחה אישית איתי כדי להבין את הצרכים והדרישות שלך לעסק או
                        לפרויקט. בשיחה נדון על איך אפשר לממש את החזון שלך ולבנות
                        דף נחיתה שימשוך את הלקוחות המתאימים.
                    </p>
                </li>
                <li data-aos="fade-down">
                    <h1>2</h1>
                    <h2>הכנה</h2>
                    <p>
                        בשלב הזה, נבנה את דף הנחיתה שלך תוך התאמה אישית לכל
                        הצרכים שלך. אנחנו נוודא שהכל תקין, ברור, ונותן את התחושה
                        הנכונה ללקוחותיך.
                    </p>
                </li>
                <li data-aos={isSmall ? "fade-down" : "fade-down-left"}>
                    <h1>3</h1>
                    <h2>עלאה לאוויר</h2>
                    <p>
                        אני יכול לעזור בהעלאה לשרת, חיבור לדומיין, וכל דבר שצריך
                        כדי שהאתר יהיה באוויר ויתחיל לעבוד בשבילך.
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default SeventhSection;
