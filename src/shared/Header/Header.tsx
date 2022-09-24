import React from 'react';
import './Header.css';
import {
    Link
} from "react-router-dom";
const Header = () => {
    return (
        <div className='header'>
            <div className='header-logo'>
                <Link to="/">VA</Link>
            </div>

            <div className='header-links'>
                <div className='item'>
                    <a href="/documents/Varun Alla.pdf">Resume</a>
                </div>
                <div className='item'>
                    <a href="https://github.com/varunalla">GitHub</a>
                </div>
                <div className='item'>
                    <a href="https://www.linkedin.com/in/varunalla/">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}
export default Header;