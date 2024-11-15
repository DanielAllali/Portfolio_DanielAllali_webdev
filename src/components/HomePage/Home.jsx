import React, { useContext } from "react";
import "./home.css";
import Header from "../header/Header";
import FirstSection from "./firstSection/FirstSection";
import "bootstrap-icons/font/bootstrap-icons.css";
import SecondSection from "./secondSection/SecondSection";
import ThirdSection from "./thirdSection/ThirdSection.jsx";
import ForthSection from "./forthSection/ForthSection.jsx";
import FifthSection from "./fifthSection/FifthSection.jsx";
import Contact from "./contact/Contact.jsx";
import Arrow from "../arrow/Arrow.jsx";
import { Context } from "../../Context";
import SeventhSection from "./seventhSection/SeventhSection.jsx";
import Footer from "./footer/Footer.jsx";
import Faq from "./faq/Faq.jsx";
import myImage from "../../media/images/myImage.jpg";

const Home = () => {
    const { isHijack, setIsHijack } = useContext(Context);

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
                                ובנימה אישית - יש לי תשוקה לתחום ואני בטוב שיחד
                                נבנה לך אתר מנצח!
                            </p>
                            <a href="#contact">
                                <button className="underlineBtn">
                                    צור קשר
                                </button>
                            </a>
                        </div>
                        <img src={myImage} alt="My image" />
                    </li>
                </ul>
            </section>

            {/* <section className="forthSec">
                {isHijack && <ForthSection />}
            </section> */}
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
