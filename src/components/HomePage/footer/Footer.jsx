import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer>
            <div>
                <header>
                    <h1>Daniel Allali</h1>
                    <button
                        onClick={() => {
                            navigate("/accessibility-statement");
                        }}
                        aria-label="Accessibility statement link"
                    >
                        הצהרת נגישות<i class="bi bi-universal-access"></i>
                    </button>
                </header>
                <hr />
                <main>
                    <h2>2025 כל זכויות שמורות עודכן לאחרונה ב: ינואר&copy; </h2>
                    <ul>
                        <li>
                            <a href="#contact">צור קשר</a>
                        </li>
                        <li>
                            <a href="#about">אודות</a>
                        </li>
                        <li>
                            <a href="#">בית</a>
                        </li>
                    </ul>
                </main>
            </div>
        </footer>
    );
};

export default Footer;
