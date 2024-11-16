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
                    למה אני<span>?</span>
                </h1>
            </div>
            <div>
                <div>
                    <video
                        ref={websiteVideoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={websiteVideo} type="video/mp4" />
                        Your browser does not support the video.
                    </video>
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
                    <h1>מומחיות</h1>
                    <p>
                        <span>מקצועיות</span> - הכשרה וידע רחב בבניית אתרים ודפי
                        נחיתה
                        <br />
                        <span>שירות</span> - התאמה מלאה לצרכי הלקוח, סבלנות
                        וליווי אישי
                        <br />
                        <span>התאמה לחוקי הנגישות</span> - העבודות עומדים בכל
                        הרגולציה הרלוונטית
                        <br />
                        <span>עמידה בלוחות זמנים</span> - אין מה להוסיף...
                        <br />
                        <span>אחריות</span> - העבודות יוצאות ללקוח לאחר מגוון של
                        בקרות. ניתנת אחריות מלאה על העבודות
                        <br />
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <video ref={techVideoRef} autoPlay muted loop playsInline>
                        <source src={techVideo} type="video/mp4" />
                        Your browser does not support the video.
                    </video>
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
                    <h1>טכנולוגיה</h1>
                    <p>
                        <span>שפות תכנות</span> - React JS, HTML, CSS
                        <br />
                        <span>גמישות מלאה</span> - כתיבה בקוד (בשונה
                        מ-Wordpress, Wix וכדומה...) לצורך הגעה לתוצאה האופטימלית
                        ללא פשרות
                        <br />
                        <span>מהירות</span> - מאחר והכתיבה בקוד מותאמת "כמו
                        כפפה" ללקוח, לא קיימים תוספים המכבידים על האתר
                        <br />
                        <span>יציבות</span> - האתר אמין לאורך זמן ואינו סובל
                        מ"נפילות"
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <video
                        ref={personalityVideoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={personalityVideo} type="video/mp4" />
                        Your browser does not support the video.
                    </video>
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
                    <h1>
                        מדוע אני משתמש בקוד<span>?</span>
                    </h1>
                    <p>
                        קיימות 2 שיטות עיקריות לתכנות אתרים - כתיבה בקוד ובניית
                        אתר באמצעות תבנית.
                        <br /> בפרק להלן אסביר את הסיבות העיקריות לשימוש בקוד:
                        <br />
                        <span>גמישות </span> - גמישות גבוהה ובנייה בהתאם לצרכי
                        הלקוח, לעומת גמישות מוגבלת ושימוש בתבניות המגיעות AS IS
                        <br />
                        <span>בידול </span> - עיצוב ייחודי ומבדל, לעומת עיצוב
                        הדומה לאתרים אחרים <br />
                        <span>קידום אורגני </span> - ה- SEO (Search Engine
                        Optimization) יעיל יותר בשימוש בקוד, באופן שקידום האתר
                        באופן אורגני טובה יותר
                        <br />
                        <span>מהירות </span> - ביצועי האתר גבוהים בקוד, לעומת
                        תבניות המכילות פיצ'רים מובנים שאין בהם שימוש, דבר המכביד
                        על ביצועי האתר <br />
                        <span>קלות השימוש </span> - נוחות הלקוח גבוהה יותר, שכן
                        האתר ניבנה מראש לפי דרישות הלקוח ובידיעה שהלקוח יעבוד עם
                        האתר בהמשך
                        <br />
                        <span>צמיחה </span> - האתר יותאם לעקומת הצמיחה העסקית של
                        הלקוח וההתאמות יעשו בקלות
                        <br />
                        <span>פיצ'רים </span> - יכולת הטמעת פיצ'רים באתר <br />
                        <span>ממשקים </span> - אינטגרציה קלה לכל כלי חיצוני,
                        לעומת מגבלות בשימוש בתבנית וריבוי באגים
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FifthSection;
