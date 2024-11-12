import React, { useEffect, useRef, useState } from "react";
import "./contact.css";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
    const form = useRef();

    const [fields, setFields] = useState({
        name: "",
        phone: "",
        email: "",
    });
    const [errs, setErrs] = useState({
        name: null,
        phone: null,
        email: null,
    });
    const handleChange = (e) => {
        const newFields = { ...fields, [e.target.name]: e.target.value };
        setFields(newFields);
        const newErrs = {
            name: verify.name(newFields.name),
            phone: verify.phone(newFields.phone),
            email: verify.email(newFields.email),
        };
        setErrs(newErrs);
    };
    const verify = {
        name: (v) => {
            if (v.length > 30) {
                return "אין סיכוי יש לך שם כזה ארוך...";
            }
            if (v.length < 1) {
                return "תכתוב/בי שם.";
            }
            return null;
        },
        email: (v) => {
            const emailReg = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
            if (!emailReg.test(v) && v !== "") {
                return "פורמט אימייל לא תקין.";
            }
            return null;
        },
        phone: (v) => {
            const phoneReg = /^\d{1,20}$/;
            if (!phoneReg.test(v) && v !== "") {
                return "מספר טלפון לא תקין.";
            }
            return null;
        },
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const allErrorsNull = Object.values(errs).every(
            (value) => value === null
        );

        if (allErrorsNull) {
            emailjs
                .sendForm(
                    "service_lung7g8", // Replace with your service ID
                    "template_fv8gtzs", // Replace with your template ID
                    form.current,
                    "3v6hm1iGwlUPjb8hU" // Replace with your public user ID
                )
                .then(
                    (result) => {
                        toast.success("הודעה נשלחה בהצלחה!");
                    },
                    (error) => {
                        toast.error(error.text ? error.text : "קרתה תקלה.");
                    }
                );
        } else {
            toast.error("קודם תתקן/י את השגיאות");
        }
    };
    return (
        <div>
            <div>
                <h1>צור קשר</h1>
                <p>תשאירו פרטים ואני אחזור אליכם בהקדם!</p>
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="user_name">השם שלי הוא</label>
                    <input
                        type="text"
                        id="user_name"
                        name="name"
                        required
                        placeholder="דניאל אלאלי"
                        onChange={handleChange}
                    />
                    {errs.name && <h2>{errs.name}</h2>}
                    <label htmlFor="phone_number">מספר הטלפון שלי</label>
                    <input
                        type="phone"
                        id="phone_number"
                        name="phone"
                        placeholder="050-658-1406"
                        onChange={handleChange}
                    />
                    {errs.phone && <h2>{errs.phone}</h2>}

                    <label htmlFor="user_email">האימייל שלי@</label>
                    <input
                        type="email"
                        id="user_email"
                        name="email"
                        required
                        placeholder="daniel.allali12@gmail.com"
                        onChange={handleChange}
                    />
                    {errs.email && <h2>{errs.email}</h2>}

                    <input type="submit" id="submitBtn" value="שלח" />
                </form>
            </div>
        </div>
    );
};

export default Contact;
