import React, { useEffect, useState } from "react";
import "./faq.css";

const faqData = [
    {
        key: "one",
        he: "כמה זמן לוקח לבנות דף נחיתה?",
        heAnswer: "בדרך כלל בסביבות ה5-7 ימים אבל תלוי באתר שתבקשו.",
    },
    {
        key: "two",
        he: "האם אתה עוזר בהעלאה לאוויר?",
        heAnswer: "כן, אני עוזר בהגדרות שרת ודומיין כדי להעלות את האתר לאוויר.",
    },
    {
        key: "three",
        he: "מה קורה אחרי העלאה לאוויר?",
        heAnswer: "אפשר לקנות שירותי תחזוקה שלי לעוד פרטים תפנו אלי.",
    },
    {
        key: "four",
        he: "האם יש הגבלת גיל?",
        heAnswer:
            "חברים חייבים להיות לפחות בני 16 על מנת להשתמש בחדר הכושר באופן עצמאי. חברים מתחת לגיל 16 יכולים לגשת לחדר הכושר בליווי של אפוטרופוס ולהקפיד על הנחיות ספציפיות.",
    },
    {
        key: "five",
        he: "אילו מכשירים יש לכם בחדר הכושר?",
        heAnswer:
            "החדר כושר שלנו מצויד במגוון רחב של מכשירי כושר אירוביים, משקולות חופשיות, מכשירי התנגדות וכלי אימון פונקציונליים. כמו כן, יש לנו אזורים ייעודיים למתיחות ולאימונים פונקציונליים.",
    },
    {
        key: "six",
        he: "אילו אמצעי בטיחות יש לכם בחדר הכושר?",
        heAnswer:
            "אנו שמים דגש על הבטיחות שלכם באמצעות תחזוקה שוטפת של הציוד, נהלי ניקוי והדרכה של הצוות. כמו כן, יש לנו ערכות עזרה ראשונה זמינות וצוות מוסמך לטיפול במצבי חירום.",
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
            <h1 data-aos="fade-right">יש שאלות?</h1>
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
