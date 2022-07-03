import React from 'react';

import styles from './index.module.css';
import loginPicture from '../../assets/images/login.png';

const Project = () => {
    return (
        <>
            <div className={styles.card}>
                <a href="https://dumbfounded.netlify.app/" target="_blank">
                    <div className={styles.image}>
                        <img src={loginPicture} alt="Dumbfounded quiz game" />
                    </div>
                    <div className={styles.content}>
                        <h3>Dumbfounded Quiz Game</h3>
                        <p>
                            Dumbfounded? is an application that allows you to
                            relax, have fun and get smarter! This project was
                            built with a team of 5 using React, Redux and CSS.
                        </p>
                    </div>
                </a>
            </div>

            <div className={styles.card}>
                <a href="https://dumbfounded.netlify.app/" target="_blank">
                    <div className={styles.image}>
                        <img src={loginPicture} alt="Dumbfounded quiz game" />
                    </div>
                    <div className={styles.content}>
                        <h3>Dumbfounded Quiz Game</h3>
                        <p>
                            Dumbfounded? is an application that allows you to
                            relax, have fun and get smarter! This project was
                            built with a team of 5 using React, Redux and CSS.
                        </p>
                    </div>
                </a>
            </div>

            <div className={styles.card}>
                <a href="https://dumbfounded.netlify.app/" target="_blank">
                    <div className={styles.image}>
                        <img src={loginPicture} alt="Dumbfounded quiz game" />
                    </div>
                    <div className={styles.content}>
                        <h3>Dumbfounded Quiz Game</h3>
                        <p>
                            Dumbfounded? is an application that allows you to
                            relax, have fun and get smarter! This project was
                            built with a team of 5 using React, Redux and CSS.
                        </p>
                    </div>
                </a>
            </div>

            <div className={styles.card}>
                <a href="https://dumbfounded.netlify.app/" target="_blank">
                    <div className={styles.image}>
                        <img src={loginPicture} alt="Dumbfounded quiz game" />
                    </div>
                    <div className={styles.content}>
                        <h3>Dumbfounded Quiz Game</h3>
                        <p>
                            Dumbfounded? is an application that allows you to
                            relax, have fun and get smarter! This project was
                            built with a team of 5 using React, Redux and CSS.
                        </p>
                    </div>
                </a>
            </div>
        </>
    );
};

export default Project;
