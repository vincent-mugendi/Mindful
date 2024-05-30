import React, { useEffect, useState } from "react";
import "./ScreenLoader.css";  // Ensure this file is created and styled

const ScreenLoader = () => {
    const [text, setText] = useState("mindful");
    const [index, setIndex] = useState(1);
    const [adding, setAdding] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (adding) {
                if (index < text.length) {
                    setText((prevText) => prevText.slice(0, index) + '.' + prevText.slice(index));
                    setIndex((prevIndex) => prevIndex + 2);
                } else {
                    setAdding(false);
                }
            } else {
                if (index > 1) {
                    setText((prevText) => prevText.slice(0, index - 2) + prevText.slice(index - 1));
                    setIndex((prevIndex) => prevIndex - 2);
                } else {
                    setAdding(true);
                }
            }
        }, 150);  // Interval duration set to 100ms

        return () => clearInterval(interval);
    }, [index, adding, text.length]);

    return (
        <div className="loader">
            {text}
        </div>
    );
}

export default ScreenLoader;
