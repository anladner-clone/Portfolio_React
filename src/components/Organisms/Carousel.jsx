import styles from './Carousel.module.css'

export const Carousel = ({ children }) => {

  return (
    <div className={styles.carousel__container}>

      <div>

        {children}

      </div>
    </div>
  );
};
