import React from "react";
import "./about.css";
import myImage from "../../../media/images/myImage.jpg";

const About = () => {
    return (
        <div id="about">
            <h1 data-aos="fade-up">למה אני?</h1>
            <h2 data-aos="fade-up">ומה הופך אותי לבחירה המתאימה ביותר עבורך</h2>
            <div>
                <p data-aos="fade-up">
                    נעים להכיר, אני דניאל אלאלי בן 15 מעצב ובונה דפי נחיתה
                    מקצועיים ,שיביאו תוצאות. <br />
                    אני מאמין שאין מקום לפשרות – כל דף שאני יוצר, אני שם דגש על
                    איכות גבוהה ושירות אישי שמוביל לתוצאות אמיתיות.
                </p>
                <img src={myImage} alt="My portrait" />
            </div>
            <a href="#contact" className="underlineBtn" aria-label="Contact">
                צור קשר{" "}
            </a>
        </div>
    );
};

export default About;
