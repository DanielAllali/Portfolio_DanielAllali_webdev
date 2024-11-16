import React, { useRef, useState } from "react";
import "./thirdSection.css";
import gymImg from "../../../media/images/ProActive_logo_circle.png";
import gymVideo from "../../../media/images/project_video.mp4";

const ThirdSection = () => {
    const videoRef = useRef(null);
    const [videoPlay, setVideoPlay] = useState(true);

    const handleToggleStop = () => {
        if (videoRef.current) {
            if (videoPlay) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setVideoPlay(!videoPlay);
        }
    };

    return (
        <div>
            <div id="project">
                <img src={gymImg} alt="image can't load try again" />
                <h1>PROACTIVE GYM</h1>
                <div>
                    <h2>תוצאות</h2>
                    <h2>אימונים אישיים</h2>
                    <h2>חוגים</h2>
                    <h2>חדר כושר מאובזר</h2>
                </div>
                {/* <p>
                    פרויקט לדוגמה. אתר תדמית למכון כושר פקטיבי,
                    <br />
                    בשביל להראות את היכולות שלי בעיצוב מימוש של עיצוב מהירות
                    ויעילות של אתר.
                </p> */}
                <p>
                    פרויקט לדוגמה - אתר אינטרנט של מכון כושר
                    <br />
                    הפרויקט מדגים יכולות עיצוב, מהירות תגובה ויציבות האתר
                    <br />
                    לתשומת ליבכם ה- Look & Feel וזרימת המידע של האתר
                </p>
                <a
                    href="https://danielallali.github.io/Corporate_Gym_Website_example/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="underlineBtn">לאתר</button>
                </a>
            </div>
            <div className="videoDiv">
                <video ref={videoRef} autoPlay muted loop playsInline>
                    <source src={gymVideo} type="video/mp4" />
                    Your browser does not support the video.
                </video>
                <button
                    className="stopVideoButton"
                    aria-label="toggle stop video button"
                    onClick={handleToggleStop}
                >
                    {videoPlay ? (
                        <i className="bi bi-pause-fill"></i>
                    ) : (
                        <i className="bi bi-play-fill"></i>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ThirdSection;
