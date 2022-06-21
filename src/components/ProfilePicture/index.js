import React from 'react';

import styles from './index.module.css';
// import picture from '../../assets/images/profile.jpg';
import picture from '../../assets/images/alice.jpg';

const ProfilePicture = () => {
    return (
        <img
            src={picture}
            className={styles.profileImage}
            alt="profile picture"
        />
    );
};

export default ProfilePicture;
