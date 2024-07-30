import React from "react";
import "./fifthSection.css";
import websiteGif from "../../../media/images/websiteVideo.gif";
import reactGif from "../../../media/images/reactGif.gif";

const FifthSection = () => {
    return (
        <div>
            <h1>מה אני מציע, ולמה אני?</h1>
            <div>
                <img src={websiteGif} alt="your doesnt support this gif" />
                <div>
                    <h1>אתרי תדמית</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corrupti necessitatibus ipsa odio quaerat reprehenderit
                        soluta perspiciatis nam recusandae et. Corrupti nemo
                        quia dolorum temporibus eum.
                    </p>
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
                    <h1>פלטפורמות & כלים טכנולוגיים</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corrupti necessitatibus ipsa odio quaerat reprehenderit
                        soluta perspiciatis nam recusandae et. Corrupti nemo
                        quia dolorum temporibus eum.
                    </p>
                    <div>
                        <button className="underlineBtn">React JS</button>
                        <button className="underlineBtn">HTML</button>
                        <button className="underlineBtn">CSS</button>
                    </div>
                </div>
                <img src={reactGif} alt="your browser doest support this gif" />
            </div>
            <div>
                <img src="" alt="your browser doest support this gif" />
                <div>
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
