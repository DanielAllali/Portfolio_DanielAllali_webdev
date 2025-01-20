import React from "react";
import "./thirdSection.css";
import navaWebsiteImg from "../../../media/images/navaWebsiteImg.png";
import gtrscreensWebsiteImg from "../../../media/images/gtrscreensWebsiteImg.png";
import בדרך from "../../../media/images/בדרך.png";

const ThirdSection = () => {
    return (
        <div id="examples">
            <h1 data-aos="fade-up">תיק עבודות</h1>
            <ul>
                <li data-aos="fade-up">
                    <img src={navaWebsiteImg} alt="Nava website" />
                    <h2>נאוה בכר - צורפת</h2>
                    <p>דניאל, זה ממש מושלם! אין עליך❤ תודה רבה</p>
                    <a
                        href="https://navabachar.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-arrow-up-right-circle"></i>
                    </a>
                </li>
                <li data-aos="fade-up">
                    <img src={gtrscreensWebsiteImg} alt="Gtr Screens website" />
                    <h2>Gtr Screens</h2>
                    <p>
                        למי שמתלבט, דניאל, נער בן 15, בנה עבורי את האתר לחברה
                        שלי בצורה מקצועית, מדויקת ומרשימה. הוא קשוב ללקוח, פותר
                        בעיות במהירות ומציע רעיונות יצירתיים שמעלים את הרמה.
                        מעבר ליכולות הטכניות הגבוהות, דניאל מביא איתו גישה
                        חיובית, חושב מחוץ לקופסה, ופשוט כיף לעבוד איתו. ממליץ
                        בחום!
                        <br /> —————————
                        <br /> גילעד פרץ CPO | GTR Screens
                    </p>
                    <a
                        href="https://gtrscreens.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-arrow-up-right-circle"></i>
                    </a>
                </li>
                <li data-aos="fade-up">
                    <img src={בדרך} alt="בדרך" />
                    <h2>בבנייה</h2>
                    <p>אתר בדרך</p>
                </li>
            </ul>
        </div>
    );
};

export default ThirdSection;
