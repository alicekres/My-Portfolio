import React from 'react';

import styles from './index.module.css';

const VideoButton = () => {
    return (
        <>
            <button className={styles.button}>
                <a
                    href="https://cohorts.getfutureproof.co.uk/auguste/alicekreslins"
                    target="_blank"
                    title="Alice Kreslins profile video"
                    className={styles.a}
                >
                    View my Profile Video
                </a>
            </button>
        </>
    );
};

export default VideoButton;
