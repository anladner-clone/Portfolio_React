import { Button } from '../Atoms/Button';

import styles from './ProjectCard.module.css'

export const ProjectCard = ({ title, description, link, image }) => {
  return (
    <article className={styles.card}>
      <img 
        src={image} 
        alt={`Captura del proyecto ${title}`} 
        className={styles.card__img}
      />

      <h3>{title}</h3>
      <p>{description}</p>

      <Button href={link}>Ver proyecto</Button>
    </article>
  );
};