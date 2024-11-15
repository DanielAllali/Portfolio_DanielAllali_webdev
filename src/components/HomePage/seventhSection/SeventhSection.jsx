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
            <h1 data-aos="fade-down">
                אז מה התהליך<span>?</span>
            </h1>
            <ul>
                <li data-aos={isSmall ? "fade-down" : "fade-down-right"}>
                    <h1>1</h1>
                    <h2>הבנת צרכי הלקוח</h2>
                    <ul>
                        <li>
                            <i class="bi bi-square-fill"></i>
                            חלק זה הינו קריטי להכרת הלקוח, קהל היעד שלו,
                            רצונותיו, מטרותיו, חזונו ועוד
                        </li>
                        <li>
                            <i class="bi bi-square-fill"></i>
                            זהו שלב האיפיון בו הלקוח יסביר את צרכיו ואני אתרגם
                            זאת לשפה המקצועית בה אשתמש לבניית האתר
                        </li>
                        <li>
                            <i class="bi bi-square-fill"></i>
                            לתהליך זה אקדיש זמן ניכר ואתן ללקוח לבטא את
                            רצונותיו, שכן כך אוכל להגיע לתוצאה הרצויה
                        </li>
                    </ul>
                </li>
                <li data-aos="fade-down">
                    <h1>2</h1>
                    <h2>בניית האתר</h2>
                    <ul>
                        <li>
                            <i class="bi bi-square-fill"></i>בשלב זה, פשוט אבנה
                            את האתר בהתאם לשלב הראשון
                        </li>
                        <li>
                            <i class="bi bi-square-fill"></i>
                            בחלק מהמקרים, אציג ללקוח עבודה ראשונית, על מנת לבצע
                            fine tuning נוסף כדי להגיע לתוצאה מירבית
                        </li>
                        <li>
                            <i class="bi bi-square-fill"></i>בסוף התהליך תוצג
                            העבודה ללקוח ואקבל ממנו משוב
                        </li>
                        <li>
                            <i class="bi bi-square-fill"></i>תיקונים יבוצעו
                            במידת הצורך
                        </li>
                    </ul>
                </li>
                <li data-aos={isSmall ? "fade-down" : "fade-down-left"}>
                    <h1>3</h1>
                    <h2>עלייה לאוויר</h2>
                    <ul>
                        <li>
                            <i class="bi bi-square-fill"></i>
                            לאחר שהלקוח יביע את שביעות רצונו, אעלה את האתר
                            לאוויר כדי להפוך אותו לפעיל
                        </li>
                        <li>
                            <i class="bi bi-square-fill"></i>מזל טוב, יש לכם
                            אתר!!
                        </li>
                    </ul>
                </li>
                <li data-aos={isSmall ? "fade-down" : "fade-down-left"}>
                    <h1>4</h1>
                    <h2>תחזוקה</h2>
                    <ul>
                        <li>
                            <i class="bi bi-square-fill"></i>בין שירותי, תחזוקה
                            שוטפת של האתר
                        </li>
                        <li>
                            <i class="bi bi-square-fill"></i>התחזוקה תתבצע
                            במסלול המתאים ללקוח
                        </li>
                        <li>
                            <i class="bi bi-square-fill"></i>התחזוקה שוטפת,
                            מהירה ויעילה
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default SeventhSection;
