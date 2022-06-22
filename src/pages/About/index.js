import React from 'react';
import { AboutPicture, AboutSection } from '../../components';

import styles from './index.module.css';

const About = () => {
    return (
        <>
            <section className={styles.section}>
                <AboutPicture />
                <AboutSection />
            </section>
        </>
    );
};

export default About;
