import React, { useState, useEffect } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import styles from "./Carousel.module.css"

export const Carousel = ({ children }) => {
  const items = React.Children.toArray(children)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    setFade(true)
    const timer = setTimeout(() => setFade(false), 600) // mismo tiempo que el CSS
    return () => clearTimeout(timer)
  }, [selectedIndex])

  const next = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className={styles.carousel__container}>
      <button className={`${styles.carousel__btn} ${styles.carousel__btnLeft}`} onClick={prev}>
        <FaAngleLeft />
      </button>
      <div
        key={selectedIndex}
        className={`${styles.carousel__content} ${fade ? styles.fadeIn : ""}`}
      >
        {items[selectedIndex]}
      </div>
      <button className={`${styles.carousel__btn} ${styles.carousel__btnRight}`} onClick={next}>
        <FaAngleRight />
      </button>
    </div>
  )
}
