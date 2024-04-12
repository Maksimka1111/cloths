import {Link} from "react-router-dom";
import classes from './header.module.css'
import logo from './images/logo.jpg'
import React, { useState } from 'react';

const Header = (props) => {
    const [menuActive, setMenuActive] = useState(false);  
    return (
        <header className={classes.head}>
            <div className={menuActive ? classes.headerContent2 : classes.headerContent}>
                <img src={logo} alt="logo" />
                <ul>
                    <li><Link to="/" onClick={() => setMenuActive(!menuActive)}>Главная</Link></li>
                    <li><Link to="/production" onClick={() => setMenuActive(!menuActive)}>Производство</Link></li>
                    <li><Link to="/brend" onClick={() => setMenuActive(!menuActive)}>Наш бренд</Link></li>
                    <li><Link to="/contacts" onClick={() => setMenuActive(!menuActive)}>Контакты</Link></li>
                </ul>
            </div>
            <div className={menuActive ? 123 : classes.burger} onClick={() => setMenuActive(!menuActive)}>
                <span />
            </div>
        </header>
    );
}

export default Header