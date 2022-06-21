import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './index.module.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.menuicon}>
                    <i className="fa fa-bars fa-2x"></i>
                </div>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <NavLink to="/">HOME</NavLink>
                    </li>
                    <li className={styles.li}>
                        <NavLink to="/portfolio">PORTFOLIO</NavLink>
                    </li>
                    <li className={styles.li}>
                        <NavLink to="/about">ABOUT</NavLink>
                    </li>
                    <li className={styles.li}>
                        <NavLink to="/contact">CONTACT</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
