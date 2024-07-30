import React from "react";
import "./home.css";
import Header from "../header/Header";
import FirstSection from "./firstSection/FirstSection";
import "bootstrap-icons/font/bootstrap-icons.css";
import SecondSection from "./secondSection/SecondSection";
import ThirdSection from "./thirdSection/ThirdSection.jsx";
import ForthSection from "./forthSection/ForthSection.jsx";
import FifthSection from "./fifthSection/FifthSection.jsx";
import Contact from "./contact/Contact.jsx";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <section className="firstSec">
                <FirstSection />
                <h1 style={{ color: "white" }}>
                    <i className="bi bi-caret-down-fill"></i>
                </h1>
            </section>
            <section className="secondSec">
                <SecondSection />
                <ul>
                    <li>
                        <h1>
                            <div></div>מי אני
                        </h1>
                        <p>
                            היי אני דניאל בן 14 מתל אביב,
                            <br />
                            למדתי בניית אתרים והתאהבתי בתחום, יש לי תשוקה לבנייה
                            ועיצוב של אתרים
                            <br />
                            ולמרות שאני מתחיל יש לי הרבה מה להציע ואני מבטיח
                            שתקבלו אתר מהיר יעיל ומעוצב בצורה שתבדיל אתכם
                            מהמתחרים.
                        </p>
                        <a href="#contact">
                            <button className="underlineBtn">צור קשר</button>
                        </a>
                    </li>
                </ul>
            </section>
            <section className="thirdSec">
                <ThirdSection />
            </section>
            <section className="forthSec">
                <ForthSection />
            </section>
            <section className="fifthSec">
                <FifthSection />
            </section>
            <section className="sixthSec">
                <Contact />
            </section>
        </div>
    );
};

export default Home;
