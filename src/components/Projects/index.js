import React from 'react';

import styles from './index.module.css';
import londonJournal from '../../assets/images/londonJournal.png';
import habitTrackerImage from '../../assets/images/habitTrackerImage.png';
import dumbfoundedImage from '../../assets/images/dumbfoundedImage.png';
import randomBlogsImage from '../../assets/images/randomBlogsImage.png';

const Projects = () => {
    return (
        <>
            <section className={styles.projects}>
                <div className={styles.flipCard}>
                    <div className={styles.flipCardInner}>
                        <div className={styles.flipCardFront}>
                            <img
                                className={styles.imageStyles}
                                src={londonJournal}
                                alt="background of London at night"
                            />
                        </div>
                        <div className={styles.flipCardBack}>
                            <h3>The London Journal</h3>
                            <p className={styles.projectDescription}>
                                The London journal is an awesome application in
                                case travelling to London is in your mind. The
                                London Journal helps you to find out about
                                people's experiences there and make up your mind
                                about places to visit and places to avoid. Not
                                only that, you yourself feel free to leave
                                advice for others!
                            </p>
                            <div className={styles.buttons}>
                                <a
                                    className={styles.button}
                                    href="https://github.com/Izgardon/Lap-1-Portfolio-Project-Client"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Github
                                </a>

                                <a
                                    className={styles.button}
                                    href="https://london-journal.netlify.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.flipCard}>
                    <div className={styles.flipCardInner}>
                        <div className={styles.flipCardFront}>
                            <img
                                className={styles.imageStyles}
                                src={habitTrackerImage}
                                alt="habit tracker application login"
                            />
                        </div>
                        <div className={styles.flipCardBack}>
                            <h3>Habit Tracker</h3>
                            <p className={styles.projectDescription}>
                                Habit tracker is an application that allows you
                                to pick up a new habit. You can write down your
                                new commitment and frequency of which you wish
                                the habit to happen. It's a good start when you
                                want to turn your life around!
                            </p>
                            <div className={styles.buttons}>
                                <a
                                    className={styles.button}
                                    href="https://github.com/millman97/lap-2-frontend"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Github
                                </a>

                                <a
                                    className={styles.button}
                                    href="https://fp-habit-tracker.netlify.app"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.flipCard}>
                    <div className={styles.flipCardInner}>
                        <div className={styles.flipCardFront}>
                            <img
                                className={styles.imageStyles}
                                src={dumbfoundedImage}
                                alt="dumbfounded application login"
                            />
                        </div>
                        <div className={styles.flipCardBack}>
                            <h3>Dumbfounded?</h3>
                            <p className={styles.projectDescription}>
                                Dumbfounded? is a quiz game that allows you to
                                relax, have fun and get smarter! There are 3
                                different ways you can choose from how to play.
                                There is a choice of "Local game", online room
                                and "Ranking game". You can choose between 5
                                different topics and difficulty level. Go ahead
                                and enjoy!
                            </p>
                            <div className={styles.buttons}>
                                <a
                                    className={styles.button}
                                    href="https://github.com/Gioele-M/lap3_quiz_project_client"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Github
                                </a>

                                <a
                                    className={styles.button}
                                    href="https://dumbfounded.netlify.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.flipCard}>
                    <div className={styles.flipCardInner}>
                        <div className={styles.flipCardFront}>
                            <img
                                className={styles.imageStyles}
                                src={randomBlogsImage}
                                alt="random blogs application front page"
                            />
                        </div>
                        <div className={styles.flipCardBack}>
                            <h3>Random Blogs</h3>
                            <p className={styles.projectDescription}>
                                Random Blogs is an application that allows the
                                owner of the page write blogs and thoughts about
                                life and everything that comes with it. For
                                users who come to read the blogs there is an
                                opportunity to contact the owner.
                            </p>
                            <div className={styles.buttons}>
                                <a
                                    className={styles.button}
                                    href="https://github.com/alicekres/random-blogs"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Github
                                </a>

                                <a
                                    className={styles.button}
                                    href="https://blog-project-gukxpvjva-alicekres.vercel.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
