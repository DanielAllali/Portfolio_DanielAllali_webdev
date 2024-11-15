import React, { useEffect, useState } from "react";
import "./faq.css";

const faqData = [
    {
        key: "one",
        he: "האם אתה מסייע בבניית האתר?",
        heAnswer:
            "בוודאי. אני מלווה את הלקוח משלב הרעיון, דרך מבנה האתר ועד ל- Look & Feel הנכון לעסק של הלקוח",
    },
    {
        key: "two",
        he: "מהו משך הזמן לבניית אתר?",
        heAnswer:
            "התשובה משתנה בהתאם למספר פרמטרים ובהם  מורכבות העבודה, גודל העבודה, זמינות הלקוח ועוד. לרוב אתר אינטרנט נבנה בטווח של 10 - 14 ימי עסקים ודף נחיתה בטווח של 3-7 ימי עבודה",
    },

    {
        key: "four",
        he: "האם אתה מסייע בהעלאת העבודה לאוויר?",
        heAnswer:
            "חשוב לי מאוד שהלקוח יסיים את התהליך כאשר הוא מרוצה ולכן אני מסייע גם בהעלאת אתר האינטרנט / דף הנחיתה לאוויר ובחירת דומיין",
    },
    {
        key: "five",
        he: "האם ניתנים שירותי תחזוקה?",
        heAnswer:
            "שירותי תחזוקה חודשיים ניתנים בתשלום נוסף. עלות השירות תלויה במורכבות התחזוקה ומשך הזמן הנדרש",
    },
    {
        key: "six",
        he: "האם העבודות עומדות בחוקי הנגישות?",
        heAnswer:
            "חוקי הנגישות מחמירים ביותר ועשויים להביא לקנסות כבדים. לפיכך כל העבודות שיוצאות ממני עומדות בחוקי הנגישות",
    },
];

const Faq = () => {
    const [openFaqs, setOpenFaqs] = useState({});

    const handleToggleFaq = (key) => {
        setOpenFaqs((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    return (
        <div className="faqs">
            <h1 data-aos="fade-right">
                שאלות<span>?</span>
            </h1>
            <ul data-aos="fade-right">
                {faqData.map(({ key, he, heAnswer }) => (
                    <li key={key} className={openFaqs[key] ? "expanded" : ""}>
                        <div>
                            <h2 style={{ direction: "rtl" }}>{he}</h2>
                            <button>
                                <label className="hamburger">
                                    <input
                                        onClick={() => handleToggleFaq(key)}
                                        type="checkbox"
                                    />
                                    <svg viewBox="0 0 32 32">
                                        <path
                                            className="line line-top-bottom"
                                            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                                        ></path>
                                        <path
                                            className="line"
                                            d="M7 16 27 16"
                                        ></path>
                                    </svg>
                                </label>
                            </button>
                        </div>
                        <p style={{ direction: "rtl" }}>{heAnswer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Faq;
