import { useRef, useState, useEffect, useCallback } from "react";
import styles from './Carousel.module.css'

export const Carousel = ({ children }) => {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateDisabled = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, clientWidth, scrollWidth } = el;
    setAtStart(scrollLeft <= 0);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateDisabled();
    const el = trackRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateDisabled, { passive: true });

    const ro = new ResizeObserver(updateDisabled);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", updateDisabled);
      ro.disconnect();
    };
  }, [updateDisabled]);

  const scrollPage = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth;
    el.scrollBy({
      left: dir === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.carousel__container}>
      {/* Botón anterior */}
      <button
        onClick={() => scrollPage("prev")}
        disabled={atStart}
        aria-label="Anterior"
        className={styles.btnBefore}
      >
        ⟵
      </button>

      {/* Carril desplazable */}
      <div
        ref={trackRef}
        className={styles.carousel}
      >
        {Array.isArray(children)
          ? children.map((child, i) => (
            <div
              key={child?.key ?? i}
              style={{
                flex: "0 0 auto",
                scrollSnapAlign: "start",
              }}
            >
              {child}
            </div>
          ))
          : (
            <div style={{ flex: "0 0 auto", scrollSnapAlign: "start" }}>
              {children}
            </div>
          )}
      </div>

      {/* Botón siguiente */}
      <button
        onClick={() => scrollPage("next")}
        disabled={atEnd}
        aria-label="Siguiente"
        className={styles.btnAfter}
      >
        ⟶
      </button>
    </div>
  );
};
