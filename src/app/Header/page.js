"use client"
import React, { useState } from 'react';
import "../../../style/Header.css";
import Link from 'next/link';

import Image from 'next/image';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">
                <Link href="/" >
                    <div className="navbar-logo">

                        <img src="/assets/logo1.png" alt="CodeweaveTech Logo" className="logo" />
                        <span className="logo-text">CodeweaveTech</span>

                    </div>
                </Link>
                <div
                    className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <nav className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    <Link href="/">Home</Link>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
