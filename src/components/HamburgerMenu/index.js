import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import styles from './index.module.css';

const HamburgerMenu = () => {
    return (
        <GiHamburgerMenu
            className={styles.hamburgerMenu}
            color="#5b2153"
            size={25}
        />
    );
};

export default HamburgerMenu;
