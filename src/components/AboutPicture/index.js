import React from 'react';

import styles from './index.module.css';
import picture from '../../assets/images/profile.jpg';

const AboutPicture = () => {
    return (
        <>
            <div className={styles.image}>
                <img src={picture} alt="side picture of Alice Kreslins" />
            </div>
        </>
    );
};

export default AboutPicture;
