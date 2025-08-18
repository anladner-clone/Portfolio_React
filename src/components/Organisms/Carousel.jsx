import styles from './Carousel.module.css'

export const Carousel = ({ children }) => {

  return (
    <div className={styles.carousel__container}>

      <div>
        {Array.isArray(children)
          ? children.map((child, i) => (
            <div key={child?.key ?? i}>
              {child}
            </div>
          ))
          : (
            <div>
              {children}
            </div>
          )}
      </div>
    </div>
  );
};
