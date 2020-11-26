import React, { useState } from "react";
import "./Navbar.css"

export default function Navbar() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <>
        <nav>
            <div className="logo">
                <h4>The Nav</h4>
            </div>
            <ul className={isClicked ? "nav-links nav-active" : "nav-links"}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
            <div className="burger" onClick={handleClick}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
        </>
    )
}
