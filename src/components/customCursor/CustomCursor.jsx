import React, { useEffect, useRef } from "react";
import "./customCursor.css";

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX: x, clientY: y } = e;
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
            }
        };

        const handleMouseEnter = () => {
            if (cursorRef.current) {
                cursorRef.current.classList.add("hover");
            }
        };

        const handleMouseLeave = () => {
            if (cursorRef.current) {
                cursorRef.current.classList.remove("hover");
            }
        };

        document.addEventListener("mousemove", moveCursor);
        document.querySelectorAll("a, button").forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            document.removeEventListener("mousemove", moveCursor);
            document.querySelectorAll("a, button").forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return <div className="custom-cursor" ref={cursorRef}></div>;
};

export default CustomCursor;
