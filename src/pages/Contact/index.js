import React from 'react';
import { SiGithub } from 'react-icons/si';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { MdEmail } from 'react-icons/md';

import styles from './index.module.css';

const Contact = () => {
    return (
        <>
            <main className={styles.main}>
                <h2 className={styles.heading}>Let's get in touch!</h2>
                <div className={styles.description}>
                    <div className={styles.desktopLayout}>
                        <div className={styles.unit}>
                            <a
                                className={styles.a}
                                href="mailto:alice.kreslins@gmail.com"
                                title="email"
                            >
                                <MdEmail size={60} />
                                <p className={styles.paragraph}>Email</p>
                                <p className={styles.paragraph}>
                                    alice.kreslins@gmail.com
                                </p>
                            </a>
                        </div>

                        <div className={styles.unit}>
                            <a
                                className={styles.a}
                                href="https://github.com/alicekres"
                                title="Alice Kreslins Github profile"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <SiGithub size={60} />
                                <p className={styles.github}>GitHub</p>
                                <p className={styles.paragraph}>
                                    alicekres
                                </p>{' '}
                            </a>
                        </div>

                        <div className={styles.unit}>
                            <a
                                className={styles.a}
                                href="https://www.linkedin.com/in/alice-kreslins-735017233/"
                                title="Alice Kreslins LinkedIn"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <TiSocialLinkedinCircular size={80} />
                                <p className={styles.paragraph}>LinkedIn</p>
                                <p className={styles.paragraph}>
                                    Alice Kreslins
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Contact;
