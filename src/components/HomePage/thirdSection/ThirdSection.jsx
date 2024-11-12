import React from "react";
import "./thirdSection.css";
import gymImg from "../../../media/images/ProActive_logo_circle.png";
import gymVideo from "../../../media/images/project_video.mp4";

const ThirdSection = () => {
    return (
        <div>
            <div id="project">
                <img src={gymImg} alt="image can't load try again" />
                <h1>PROACTIVE GYM</h1>
                <div>
                    <h2>עיצוב אישי</h2>
                    <h2>דף נחיתה</h2>
                    <h2>מהירות</h2>
                    <h2>התאמה לכל המסכים</h2>
                </div>
                <p>
                    פרויקט לדוגמה. אתר תדמית למכון כושר פקטיבי,
                    <br />
                    בשביל להראות את היכולות שלי בעיצוב מימוש של עיצוב מהירות
                    ויעילות של אתר.
                </p>
                <a
                    href="https://danielallali.github.io/Corporate_Gym_Website_example/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="underlineBtn">לאתר</button>
                </a>
            </div>
            <video autoPlay muted loop>
                <source src={gymVideo} type="video/mp4" />
                Your browser does not support the video.
            </video>
        </div>
    );
};

export default ThirdSection;
