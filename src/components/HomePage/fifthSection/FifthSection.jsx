import React, { useEffect } from "react";
import "./fifthSection.css";
import websiteVideo from "../../../media/images/websiteVideo2.mp4";
import techVideo from "../../../media/images/techVideo.mp4";
import personalityVideo from "../../../media/images/personalityVideo.mp4";

const FifthSection = () => {
    return (
        <div>
            <div>
                <h1 data-aos="fade-up">
                    למה <span>אני?</span>
                </h1>
            </div>
            <div>
                <div>
                    <video autoPlay muted loop src={websiteVideo}></video>
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
                    <video autoPlay muted loop src={techVideo}></video>
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
                    <video autoPlay muted loop src={personalityVideo}></video>
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
