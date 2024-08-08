import React, { useEffect, useState } from 'react'
import "./arrow.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Arrow = () => {
    const [isUp, setIsUp] = useState(false)
    useEffect(() => {
        const scrollChange = () => {
            if (window.scrollY >= 100) {
                setIsUp(true);
            }
            else {
                setIsUp(false);
            }
        }
        window.addEventListener("scroll", scrollChange);
    }, [])
    return (
        <a href="#">
            <div className='arrow'>
                <i className={`bi bi-caret-${isUp ? "up" : "down"}-fill`}></i>
            </div>
        </a>
    )
}

export default Arrow