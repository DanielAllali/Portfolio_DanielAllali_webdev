import React, { useEffect, useRef, useState } from "react";
import "./forthSection.css";

const ForthSection = () => {
    const div1 = useRef();
    const div2 = useRef();
    const div3 = useRef();
    const div4 = useRef();
    const wrapper = useRef();
    let scrollHijak = true;

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (
            div1.current &&
            div2.current &&
            div3.current &&
            div4.current &&
            wrapper.current
        ) {
            const wrapperY = wrapper.current.getBoundingClientRect().y;
            div1.current.style.display = "flex";
            div2.current.style.display = "flex";
            div3.current.style.display = "flex";
            div4.current.style.display = "flex";
            div1.current.style.position = "relative";
            div1.current.style.zIndex = "-1";
            div2.current.style.position = "relative";
            div2.current.style.zIndex = "-1";
            div3.current.style.position = "relative";
            div3.current.style.zIndex = "-1";
            div4.current.style.position = "relative";
            div4.current.style.zIndex = "-1";
            if (!scrollHijak && wrapperY >= 0) {
                scrollHijak = true;
                window.scrollTo({
                    top: window.scrollY + 400,
                    behavior: "instant",
                });
            }
            if (scrollHijak) {
                if (wrapperY <= 0 && wrapperY >= -100) {
                    div1.current.style.position = "fixed";
                    div1.current.style.zIndex = "99";
                    return;
                }
                if (wrapperY <= -100 && wrapperY >= -300) {
                    div2.current.style.position = "fixed";
                    div2.current.style.zIndex = "99";
                    return;
                }
                if (wrapperY <= -300 && wrapperY >= -500) {
                    div3.current.style.position = "fixed";
                    div3.current.style.zIndex = "99";
                    return;
                }
                if (wrapperY <= -500 && wrapperY >= -700) {
                    div4.current.style.position = "fixed";
                    div4.current.style.zIndex = "99";
                    return;
                }
            }
            if (wrapperY <= -700 || !scrollHijak) {
                if (scrollHijak) {
                    window.scrollTo({
                        top: window.scrollY - 700,
                        behavior: "instant",
                    });
                }
                scrollHijak = false;
                div1.current.style.position = "absolute";
                div2.current.style.position = "absolute";
                div3.current.style.position = "absolute";
                div4.current.style.position = "relative";
                div4.current.style.zIndex = "99";
                return;
            }
        }
    };

    return (
        <div ref={wrapper}>
            <div>
                <div ref={div1}>
                    <h1 style={{ color: "#F8F5EF" }}>UNDERSTAND</h1>
                    <h1>DESIGN</h1>
                    <h1>IMPLEMENT</h1>
                    <h1>ONBOARD</h1>
                </div>
                <div ref={div2}>
                    <h1>UNDERSTAND</h1>
                    <h1 style={{ color: "#F8F5EF" }}>DESIGN</h1>
                    <h1>IMPLEMENT</h1>
                    <h1>ONBOARD</h1>
                </div>
                <div ref={div3}>
                    <h1>UNDERSTAND</h1>
                    <h1>DESIGN</h1>
                    <h1 style={{ color: "#F8F5EF" }}>IMPLEMENT</h1>
                    <h1>ONBOARD</h1>
                </div>
                <div ref={div4}>
                    <h1>UNDERSTAND</h1>
                    <h1>DESIGN</h1>
                    <h1>IMPLEMENT</h1>
                    <h1 style={{ color: "#F8F5EF" }}>ONBOARD</h1>
                </div>
            </div>
        </div>
    );
};

export default ForthSection;
