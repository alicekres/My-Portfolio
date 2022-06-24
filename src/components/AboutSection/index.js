import React from 'react';

import styles from './index.module.css';

const AboutSection = () => {
    return (
        <>
            <div className={styles.text}>
                <h2>Hi! I'm Alice Kreslins</h2>
                <p>
                    At the moment I'm a tech trainee at futureproof and live in
                    small peaceful town in south-west of England.
                </p>
                <p>
                    I was born and raised in Estonia. As I loved to take care of
                    people and bring them joy - I decided to study nursing.
                    After finishing studies I moved to England where I worked as
                    a nurse for a time.
                </p>
                <p>
                    However, my husband who works as a front-end developer
                    sparked an interest in me for programming. After finishing a
                    task he often shared with me a little bit of code which I
                    didn't understand at all at the time.That excitement got me
                    curious and I started to find out and trying to understand
                    the concept of programming. At first it was just for fun but
                    as the time went on I realized that I'd like to try study
                    programming more seriously.
                </p>
                <p>
                    I started with simple courses in youtube by netninja about
                    css, html, and javascript. After that I took on courses at
                    Udemy and built my very first project based on the course by
                    Maximilian Shwartzmüller using JavaScript, React and NextJs.
                    The following step to that was starting my studies at
                    futureproof where we are covering large area of technologies
                    and most importantly simulate the working environment, using
                    agile working environment with stand-ups, retros,
                    collaboration and solving and/or trying to avoid merging
                    conflicts in Github.
                </p>

                <p>
                    I'm looking forward to working in a friendly atmosphere
                    where growing and challenges are part of everyday life and
                    where I can contribute with my knowledge that I have
                    aquired.
                </p>
            </div>
        </>
    );
};

export default AboutSection;
