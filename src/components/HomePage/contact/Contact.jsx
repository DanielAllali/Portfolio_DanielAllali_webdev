import React, { useEffect, useRef, useState } from "react";
import "./contact.css";
import "aos/dist/aos.css";

const Contact = () => {
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
    return (
        <div>
            <div>
                <h1>צור קשר</h1>
                <p>תשאירו פרטים ואני אחזור אליכם בהקדם!</p>
                <form>
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
