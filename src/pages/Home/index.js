import React from 'react';
import { ProfilePicture, VideoButton } from '../../components';

import styles from './index.module.css';

const Home = () => {
    return (
        <>
            <main className={`${styles.main} main`}>
                <h1 className={styles.h1}>ALICE KRESLINS</h1>
                <p className={styles.description}>
                    I'm a full-stack developer trainee based in the United
                    Kingdom
                </p>
                <ProfilePicture />
                <VideoButton />
            </main>
        </>
    );
};

export default Home;
