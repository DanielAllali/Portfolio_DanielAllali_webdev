import React, { useEffect, useRef } from "react";
import "./contact.css";
import "aos/dist/aos.css";
import AOS from "aos";

const Contact = () => {
    const submitRef = useRef();
    useEffect(() => {
        AOS.init({ duration: 1000 });
        /*         document.addEventListener("mousemove", handleSubmitBtn);
         */
    }, []);
    /* useEffect(() => {
        if (submitRef.current) {
            console.log(submitRef.current.getBoundingClientRect().y);
        }
    }, []); */
    /* const handleSubmitBtn = (e) => {
        if (
            e.clientX >= 717 &&
            e.clientX <= 847 &&
            e.clientY >= 710 &&
            e.clientY <= 840
        ) {
            const rect = submitRef.current.getBoundingClientRect();
            const x = e.clientX - rect.x / 2;
            const y = e.clientY - rect.y / 2;
            console.log("x", x);
            console.log("y", y);
            submitRef.current.style.transform = `translate(${x}px, ${y}px)`;
        } else {
            submitRef.current.style.transform = `translate(0,0)`;
        }
    }; */
    return (
        <div>
            <h1 id="contact">צור קשר</h1>
            <form>
                <label htmlFor="user_name">
                    השם שלי הוא
                </label>
                <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    placeholder="דניאל אלאלי"
                />

                <label htmlFor="phone_number">
                    מספר טלפון שלי
                </label>
                <input
                    type="phone"
                    id="phone_number"
                    name="phone_number"
                    placeholder="050-658-1406"
                />

                <label htmlFor="user_email">
                    שלחו אימייל @
                </label>
                <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    placeholder="daniel.allali12@gmail.com"
                />

                <label htmlFor="message">
                    אני אומר
                </label>
                <input
                    type="text"
                    id="message"
                    name="message"
                    required
                    placeholder="שלום שלום"
                />

                <input
                    type="submit"
                    id="submitBtn"
                    value="שלח"
                    ref={submitRef}
                />
            </form>
        </div>
    );
};

export default Contact;
