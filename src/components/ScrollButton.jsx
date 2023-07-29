import React, { useState, useEffect } from "react";
import { HiArrowNarrowUp } from 'react-icons/hi';

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.pageYOffset > 300);
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={`scroll-btn ${isVisible ? "show" : "hide"}`}
            onClick={handleClick}
        >
            <HiArrowNarrowUp />
        </div>
    );
};

export default ScrollButton;
