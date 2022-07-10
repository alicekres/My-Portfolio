import React from 'react';

import { Projects } from '../../components';
import styles from './index.module.css';

const Portfolio = () => {
    return (
        <>
            <main className={`${styles.main} main`}>
                <h1 className={styles.h1}>Featured Projects</h1>
                <Projects />
            </main>
        </>
    );
};

export default Portfolio;
