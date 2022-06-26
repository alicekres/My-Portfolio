import React from 'react';
import { AboutPicture, AboutSection } from '../../components';

import styles from './index.module.css';

const About = () => {
    return (
        <>
            <main className={`${styles.main} main`}>
                <section className={styles.description}>
                    <h1>Hi! I'm Alice Kreslins</h1>
                    <p className={styles.activity}>
                        At the moment I'm a tech trainee at futureproof and live
                        in small peaceful town in south-west of England.
                    </p>
                </section>
                <section className={styles.section}>
                    <AboutSection />
                    <AboutPicture />
                </section>
            </main>
        </>
    );
};

export default About;
