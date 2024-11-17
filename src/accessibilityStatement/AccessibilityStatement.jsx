import React from "react";
import "./accessibilityStatement.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AccessibilityStatement = () => {
    const navigate = useNavigate();
    return (
        <>
            <Helmet>
                <title>Daniel Allali - נגישות</title>
                <meta
                    name="description"
                    content=".הצהרת נגישות של דניאל אלאלי בניית אתרים"
                />
            </Helmet>
            <div id="accessibilityStatement">
                <h1>פיתוח אתרים דניאל אלאלי - הצהרת נגישות</h1>
                עודכן: נובמבר 2024.
                <br />
                <h2>כללי</h2>
                <p>
                    פיתוח אתרים דניאל אלאלי שואף להבטיח שהשירותים יהיו נגישים
                    לאנשים עם מוגבלויות. דניאל אלאלי פיתח אתרים ומשאבים רבים על
                    מנת להקל על השימוש ולשפר את נגישות האתר לאנשים עם מוגבלויות,
                    מתוך אמונה חזקה שמאמצי
                </p>
                <a rel="nofollow" href="https://userway.org">
                    נגישות אתרים
                </a>
                <p>
                    תורמים לכל המשתמשים ושהזכות לחיות בכבוד, שוויון, נוחות
                    ועצמאות שייכת לכל אדם.
                </p>
                <h2>נגישות באתר daniel-allali.com</h2>
                <p>האתר daniel-allali.com מציע את</p>
                <a
                    rel="nofollow"
                    href="https://userway.org"
                    alt="Free Web Accessibility Widget"
                    title="Free Web Accessibility Widget"
                >
                    הווידג'ט לנגישות אתרים של UserWay
                </a>
                <p>
                    , המופעל על ידי שרת נגישות ייעודי. התוכנה מאפשרת
                    ל-daniel-allali.com לשפר את עמידותו בהנחיות נגישות תוכן אתרי
                    האינטרנט (WCAG 2.1).
                </p>
                <h2>הפעלה של תפריט הנגישות</h2>
                <p>
                    תפריט הנגישות של daniel-allali.com ניתן להפעיל על ידי לחיצה
                    על סמל תפריט הנגישות שמופיע בפינת העמוד. לאחר הפעלת התפריט,
                    יש להמתין רגע עד שהתפריט ייטען במלואו.
                </p>
                <h2>התחייבות</h2>
                <p>
                    פיתוח אתרים של דניאל אלאלי ממשיך במאמצים לשיפור מתמיד של
                    נגישות האתר והשירותים מתוך אמונה חזקה שזו אחריותנו המוסרית
                    המשותפת לאפשר שימוש נגיש וקל גם לאנשים עם מוגבלויות.
                </p>
                <br />
                <br />
                <p>
                    כחלק מהמאמצים המתמשכים לשיפור מתמיד ולתיקון בעיות נגישות,
                    אנו סורקים באופן קבוע את daniel-allali.com באמצעות
                </p>
                <a
                    rel="nofollow"
                    href="https://UserWay.org/scanner"
                    title="Free Website Accessibility Scanner"
                >
                    סורק הנגישות של UserWay
                </a>
                <p>
                    על מנת לזהות ולתקן כל בעיית נגישות אפשרית באתר. למרות
                    המאמצים שלנו להבטיח שכל הדפים והדברים ב-daniel-allali.com
                    יהיו נגישים באופן מלא, ייתכן שישנם תכנים שעדיין לא הותאמו
                    באופן מלא לסטנדרטים הנגישות המחמירים ביותר. יתכן שזה נגרם
                    מכך שלא מצאנו או זיהינו את הפתרון הטכנולוגי המתאים ביותר.
                </p>
                <h2>אנחנו כאן בשבילך</h2>
                <p>
                    אם אתה נתקל בקושי כלשהו עם תכנים באתר daniel-allali.com או
                    זקוק לעזרה בכל חלק של האתר, אנא צור איתנו קשר בשעות העבודה
                    הרגילות כפי שמפורט למטה, ונשמח לעזור.
                </p>
                <h2>צור קשר</h2>
                <p>
                    אם ברצונך לדווח על בעיית נגישות, יש לך שאלות או שאתה זקוק
                    לעזרה, אנא פנה אלי:
                </p>
                <br />
                <br />
                <p>דוא"ל: accessibility@daniel-allai.com</p>
                <button
                    onClick={() => {
                        navigate("/");
                    }}
                    aria-label="Back to main page"
                >
                    חזרה לאתר
                </button>
            </div>
        </>
    );
};

export default AccessibilityStatement;
