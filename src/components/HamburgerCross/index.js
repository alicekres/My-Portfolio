import React from 'react';
import { ImCross } from 'react-icons/im';

import styles from './index.module.css';

const HamburgerCross = () => {
    return (
        <ImCross className={styles.hamburgerMenu} color="#5b2153" size={25} />
    );
};

export default HamburgerCross;
