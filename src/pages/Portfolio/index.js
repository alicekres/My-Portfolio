import React from 'react';

import { Projects } from '../../components';
import styles from './index.module.css';

const Portfolio = () => {
    return (
        <>
            <main className={`${styles.main} main`}>
                <h1 className={styles.h1}>Featured Projects</h1>
                <section className={styles.projects}>
                    <div className={styles.card}></div>
                </section>
                <Projects />
                {/* <img
                    src="https://i.ibb.co/8PyNwc5/photo-1590479773265-7464e5d48118-ixlib-rb-1-2.jpg"
                    alt="under construction"
                    className={styles.image}
                /> */}
            </main>
        </>
    );
};

export default Portfolio;
