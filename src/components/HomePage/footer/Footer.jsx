import React from "react";
import "./footer.css";
const Footer = () => {
    return (
        <footer>
            <div>
                <header>
                    <h1>Daniel Allali</h1>
                </header>
                <hr />
                <main>
                    <h2>&copy; 2024 All rights reserved</h2>
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
