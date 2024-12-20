import React, { useEffect, useState } from "react";
import "./home.css";
import Header from "../header/Header";
import FirstSection from "./firstSection/FirstSection";
import "bootstrap-icons/font/bootstrap-icons.css";
import SecondSection from "./secondSection/SecondSection";
import ThirdSection from "./thirdSection/ThirdSection.jsx";
import FifthSection from "./fifthSection/FifthSection.jsx";
import Contact from "./contact/Contact.jsx";
import Arrow from "../arrow/Arrow.jsx";
import SeventhSection from "./seventhSection/SeventhSection.jsx";
import Footer from "./footer/Footer.jsx";
import Faq from "./faq/Faq.jsx";
import myImage from "../../media/images/myImage.jpg";
import myImage2 from "../../media/images/myImage2.jpg";

const Home = () => {
    const [imageSrc, setImageSrc] = useState(myImage);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1000) {
                setImageSrc(myImage2);
            } else {
                setImageSrc(myImage);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className="home">
            <Header />
            <Arrow />
            <section className="firstSec">
                <FirstSection />
            </section>
            <section className="secondSec">
                <SecondSection />
                <ul>
                    <li>
                        <div>
                            <h1 id="about">
                                מי אני<span>?</span>
                            </h1>

                            <p>
                                דניאל מתל אביב
                                <br />
                                מומחה FullStack, סטודנט בתכנית לנוער מוכשר
                                במתמטיקה של בר אילן
                                <br />
                                ובנימה אישית - יש לי תשוקה לתחום ואני בטוח שיחד
                                נבנה לך אתר מנצח!
                            </p>
                            <a
                                href="#contact"
                                className="underlineBtn"
                                aria-label="Contact"
                            >
                                צור קשר
                            </a>
                        </div>
                        <img src={imageSrc} alt="Portrait of me" />
                    </li>
                </ul>
            </section>

            <section className="fifthSec">
                <FifthSection />
            </section>
            <section className="seventhSection">
                <SeventhSection />
            </section>
            <section className="thirdSec">
                <ThirdSection />
            </section>
            <section id="faq">
                <Faq />
            </section>
            <section id="contact" className="sixthSec">
                <Contact />
            </section>
            <Footer />
        </div>
    );
};

export default Home;
