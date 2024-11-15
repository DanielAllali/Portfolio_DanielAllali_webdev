import React, { useEffect, useRef } from "react";
import "./secondSection.css";
import img1 from "../../../media/images/img1.jpg";
import img2 from "../../../media/images/img2.jpg";
import img3 from "../../../media/images/img3.jpg";
import img4 from "../../../media/images/img4.jpg";

const SecondSection = () => {
    const img1Ref = useRef();
    const img2Ref = useRef();
    const img2Ref2 = useRef();
    const img3Ref = useRef();
    const img4Ref = useRef();

    useEffect(() => {
        window.addEventListener("scroll", handleImages);
    }, []);
    const handleImages = () => {
        try {
            if (
                (img1Ref.current,
                img2Ref.current,
                img2Ref2.current,
                img3Ref.current,
                img4Ref.current)
            ) {
                img1Ref.current.style.zIndex = "1";
                img2Ref.current.style.zIndex = "1";
                img2Ref2.current.style.zIndex = "1";
                img3Ref.current.style.zIndex = "1";
                img4Ref.current.style.zIndex = "1";
                if (window.scrollY < 500) {
                    img1Ref.current.style.zIndex = "2";
                    return;
                }
                if (window.scrollY < 650) {
                    img2Ref.current.style.zIndex = "2";
                    return;
                }
                if (window.scrollY < 800) {
                    img2Ref2.current.style.zIndex = "2";
                    return;
                }
                if (window.scrollY < 950) {
                    img3Ref.current.style.zIndex = "2";
                    return;
                }
                if (window.scrollY < 1100) {
                    img4Ref.current.style.zIndex = "2";
                    return;
                }
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div id="services">
            <h1 data-aos="fade-up">שירותים</h1>
            {/* <p>
                בזכות יכולות העיצוב וחוויית המשתמש שאני מביא,
                <br /> אני מצליח להמציא את עצמי מחדש בכל פרויקט ולהביא תוצאה
                חדשנית ויצירתית בכל פעם.
            </p> */}
            {/* <p>
                חדשנות<span>.</span> יצירתיות<span>.</span> פונקציונליות
                <span>.</span> עיצוב חכם.
                <br />
                בכל פרויקט מחדש
            </p> */}
            <p>
                חדשנות
                <span>
                    <i class="bi bi-square-fill"></i>
                </span>{" "}
                יצירתיות
                <span>
                    <i class="bi bi-square-fill"></i>
                </span>{" "}
                פונקציונליות
                <span>
                    <i class="bi bi-square-fill"></i>
                </span>{" "}
                עיצוב חכם
                <span>
                    <i class="bi bi-square-fill"></i>
                </span>
                <br />
                בכל פרויקט מחדש
            </p>
            <div>
                <h2>יעילות</h2>
                <h2>שירות אישי</h2>
                <h2>דפי נחיתה</h2>
                <h2>אתרי אינטרנט</h2>
            </div>
            <div>
                <img ref={img1Ref} src={img1} alt="image" />
                <img ref={img2Ref} src={img2} alt="image" />
                <img ref={img2Ref2} src={img2} alt="image" />
                <img ref={img3Ref} src={img3} alt="image" />
                <img ref={img4Ref} src={img4} alt="image" />
            </div>
            <a href="#contact">
                <button className="underlineBtn">צור קשר</button>
            </a>
        </div>
    );
};

export default SecondSection;
