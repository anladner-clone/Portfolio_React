import { NavLinkItem } from '../Atoms/NavLinkItem'

import styles from './MenuList.module.css'

export const MenuList = ({ toggleSidebar }) => {
  const isDesktop = (toggleSidebar) => {
    if (window.innerWidth < 1025) {
      toggleSidebar()
    }

    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  return (
    <ul className={styles.nav__list}>
      <NavLinkItem
        classLink={styles.nav__link}
        classItem={styles.nav__item}
        to="/" label="Home" onClick={()=>isDesktop(toggleSidebar)} />
      <NavLinkItem
        classLink={styles.nav__link}
        classItem={styles.nav__item}
        to="/about" label="Who Am I?" onClick={()=>isDesktop(toggleSidebar)} />
      <NavLinkItem
        classLink={styles.nav__link}
        classItem={styles.nav__item}
        to="/projects" label="Projects" onClick={()=>isDesktop(toggleSidebar)} />
      <NavLinkItem
        classLink={styles.nav__link}
        classItem={styles.nav__item}
        to="/contact" label="Contact" onClick={()=>isDesktop(toggleSidebar)} />
    </ul>
  )
}