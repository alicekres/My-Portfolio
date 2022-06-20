import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import icon50 from '../../assets/images/icon50.png';
import linkedin50 from '../../assets/images/linkedin50.png';

import styles from './index.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={styles.email}>
                <a href="mailto:alice.kreslins@gmail.com">
                    alice.kreslins@gmail.com
                </a>
            </div>
            <div className={styles.socialLinks}>
                <a
                    href="https://github.com/alicekres"
                    title="Alice Kreslins Github profile"
                    target="_blank"
                    className={styles.github}
                >
                    <FiGithub size={50} color={'#ffaa55'} />
                </a>
                <a
                    href="https://www.linkedin.com/in/alice-kreslins-735017233/"
                    title="Alice Kreslins LinkedIn"
                    target="_blank"
                    className={styles.linkedin}
                >
                    <FiLinkedin size={50} color={'#ffaa55'} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
