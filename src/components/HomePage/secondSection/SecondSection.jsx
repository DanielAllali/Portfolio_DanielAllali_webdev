import React, { useEffect, useRef } from "react";
import "./secondSection.css";
import img1 from "../../../media/images/img1.jpg";
import img2 from "../../../media/images/img2.jpg";
import img3 from "../../../media/images/img3.jpg";
import img4 from "../../../media/images/img4.jpg";

const SecondSection = () => {
    return (
        <div id="services">
            <h1 data-aos="fade-up">
                עיצוב ובניית דפי נחיתה שממירים מתעניינים
                <br />
                <span>ללקוחות משלמים</span>
            </h1>
            <p data-aos="fade-up">
                ?
                <span style={{ color: "#D8F1F9" }}>
                    נמאס לך לקבל לידים קרים
                </span>{" "}
                שלא מובילים לתוצאות
                <br />
                אני כאן כדי ליצור עבורך דף נחיתה
                <span style={{ color: "#FFB366" }}>
                    {" "}
                    שימשוך לידים איכותיים{" "}
                </span>
                ויהפוך לכלי עוצמתי לשיווק הממומן שלך.
                <br />
                .תשאיר פרטים, אני אצור איתך קשר ואני אצור לך דף נחיתה ממיר
            </p>

            <a href="#contact" className="underlineBtn" aria-label="Contact">
                צור קשר
            </a>
        </div>
    );
};

export default SecondSection;
