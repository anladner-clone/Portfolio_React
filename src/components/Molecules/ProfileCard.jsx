import { SocialIcon } from '../Atoms/SocialIcon'

import styles from './ProfileCard.module.css'

export const ProfileCard = ({ name, imageSrc }) => {
    return (
        <div className={styles.profile__card}>
            <img src={imageSrc} alt={name} className={styles.profile__img} />
            <h2 className={styles.profile__name}>{name}</h2>
            <div className={styles.social__icons}>
                <SocialIcon classLink={styles.social__link} href="https://www.instagram.com/ladner._.ariel" label="Instagram"/>
                <SocialIcon classLink={styles.social__link} href="https://github.com/anladner-clone" label="GitHub"/>
                <SocialIcon classLink={styles.social__link} href="https://www.linkedin.com/in/anladner/" label="LinkedIn"/>
            </div>
        </div>
    )
}