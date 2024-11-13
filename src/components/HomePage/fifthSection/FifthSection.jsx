import React, { useEffect, useRef, useState } from "react";
import "./fifthSection.css";
import websiteVideo from "../../../media/images/websiteVideo.mp4";
import techVideo from "../../../media/images/techVideo.mp4";
import personalityVideo from "../../../media/images/personalityVideo.mp4";

const FifthSection = () => {
    const techVideoRef = useRef(null);
    const websiteVideoRef = useRef(null);
    const personalityVideoRef = useRef(null);

    const [videosStop, setVideosStop] = useState({
        tech: "play",
        website: "play",
        personality: "play",
    });

    const handleToggleStop = (video, videoName) => {
        if (video.current) {
            if (videosStop[videoName] && videosStop[videoName] === "play") {
                video.current.pause();
                setVideosStop({ ...videosStop, [videoName]: "stop" });
                return;
            }
            if (videosStop[videoName] && videosStop[videoName] === "stop") {
                video.current.play();
                setVideosStop({ ...videosStop, [videoName]: "play" });
                return;
            }
        }
    };
    return (
        <div id="whyMe">
            <div>
                <h1 data-aos="fade-up">
                    למה <span>אני?</span>
                </h1>
            </div>
            <div>
                <div>
                    <video
                        ref={websiteVideoRef}
                        autoPlay
                        muted
                        loop
                        src={websiteVideo}
                    ></video>
                    <button
                        className="stopVideoButton"
                        aria-label="toggle stop video button"
                        onClick={() => {
                            handleToggleStop(websiteVideoRef, "website");
                        }}
                    >
                        {videosStop["website"] === "play" ? (
                            <i className="bi bi-pause-fill"></i>
                        ) : (
                            <i className="bi bi-play-fill"></i>
                        )}
                    </button>
                </div>
                <div data-aos="fade-left" className="textDiv">
                    <h1>דפי נחיתה</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Vitae minus dolorum temporibus doloribus beatae
                        cum atque harum repudiandae, id quaerat veritatis
                        perspiciatis odio. Odit, molestiae!
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <video
                        ref={techVideoRef}
                        autoPlay
                        muted
                        loop
                        src={techVideo}
                    ></video>
                    <button
                        className="stopVideoButton"
                        aria-label="toggle stop video button"
                        onClick={() => {
                            handleToggleStop(techVideoRef, "tech");
                        }}
                    >
                        {videosStop["tech"] === "play" ? (
                            <i className="bi bi-pause-fill"></i>
                        ) : (
                            <i className="bi bi-play-fill"></i>
                        )}
                    </button>
                </div>
                <div data-aos="fade-right" className="textDiv">
                    <h1>פלטפורמות & כלים טכנולוגיים</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corrupti necessitatibus ipsa odio quaerat reprehenderit
                        soluta perspiciatis nam recusandae et. Corrupti nemo
                        quia dolorum temporibus eum.
                    </p>
                    <div>
                        <h2>React JS</h2>
                        <h2>HTML</h2>
                        <h2>CSS</h2>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <video
                        ref={personalityVideoRef}
                        autoPlay
                        muted
                        loop
                        src={personalityVideo}
                    ></video>
                    <button
                        className="stopVideoButton"
                        aria-label="toggle stop video button"
                        onClick={() => {
                            handleToggleStop(
                                personalityVideoRef,
                                "personality"
                            );
                        }}
                    >
                        {videosStop["personality"] === "play" ? (
                            <i className="bi bi-pause-fill"></i>
                        ) : (
                            <i className="bi bi-play-fill"></i>
                        )}
                    </button>
                </div>
                <div data-aos="fade-left" className="textDiv">
                    <h1>איכות ומקצועיות</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corrupti necessitatibus ipsa odio quaerat reprehenderit
                        soluta perspiciatis nam recusandae et. Corrupti nemo
                        quia dolorum temporibus eum.
                    </p>
                    <h1>אישיות</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Vitae minus dolorum temporibus doloribus beatae
                        cum atque harum repudiandae, id quaerat veritatis
                        perspiciatis odio. Odit, molestiae!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FifthSection;
