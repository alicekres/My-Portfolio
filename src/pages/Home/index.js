import React from 'react';

import styles from './index.module.css';

const Home = () => {
    return (
        <div className={styles.construction}>
            <h1 className={styles.h1}>
                Hi, at the moment this website is under construction!
            </h1>
            <img
                src="https://i.ibb.co/8PyNwc5/photo-1590479773265-7464e5d48118-ixlib-rb-1-2.jpg"
                alt="under construction"
                className={styles.image}
            />
        </div>
    );
};

export default Home;
