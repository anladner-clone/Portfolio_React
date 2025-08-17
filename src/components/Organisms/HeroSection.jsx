import { Button } from "../Atoms/Button";

import styles from './HeroSection.module.css'

export const HeroSection = () => {
    return (
        <section className={`${styles.hero__section}`}>
            <h1 className={`${styles.hero__title}`}>I'm Ariel</h1>

            <p className={`${styles.hero__description}`}>Hi there! I'm passionate about technology and currently studying Information Systems Engineering. I love learning new things and I'm always looking for new opportunities to expand my knowledge.</p>

            <div className={`${styles.hero__btn_container}`}>
                <Button to="/contact" primary={true}>Connect</Button>
                <Button to="/about">My skills</Button>
            </div>
        </section>
    );
};
