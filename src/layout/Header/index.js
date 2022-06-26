import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HamburgerMenu } from '../../components';
import { HamburgerCross } from '../../components';

import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './index.module.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    const toggleHamburgerMenu = () => {
        setHamburgerMenu((prevStatus) => !prevStatus);
    };

    const closeHamburgerMenuHandler = () => {
        setHamburgerMenu((prevStatus) => !prevStatus);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <NavLink to="/">
                    <img src={logo} alt="logo" className={styles.image} />
                </NavLink>
            </div>
            {hamburgerMenu ? (
                <nav className={styles.hamburgerItems}>
                    <ul className={styles.hamburgerul}>
                        <li
                            className={styles.hamburgerli}
                            onClick={closeHamburgerMenuHandler}
                        >
                            <NavLink to="/" className={styles.navlink}>
                                HOME
                            </NavLink>
                        </li>
                        <li
                            className={styles.hamburgerli}
                            onClick={closeHamburgerMenuHandler}
                        >
                            <NavLink to="/portfolio" className={styles.navlink}>
                                PORTFOLIO
                            </NavLink>
                        </li>
                        <li
                            className={styles.hamburgerli}
                            onClick={closeHamburgerMenuHandler}
                        >
                            <NavLink to="/about" className={styles.navlink}>
                                ABOUT
                            </NavLink>
                        </li>
                        <li
                            className={styles.hamburgerli}
                            onClick={closeHamburgerMenuHandler}
                        >
                            <NavLink to="/contact" className={styles.navlink}>
                                CONTACT
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            ) : (
                <nav className={styles.nav}>
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
            )}
            <button onClick={toggleHamburgerMenu} className={styles.hamburger}>
                {hamburgerMenu ? <HamburgerCross /> : <HamburgerMenu />}
            </button>
        </header>
    );
};

export default Header;
