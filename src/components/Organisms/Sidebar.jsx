import { useState, useEffect } from 'react'
import { ButtonToggle } from '../Atoms/ButtonToggle'
import { MenuList } from '../Molecules/MenuList'
import { ProfileCard } from '../Molecules/ProfileCard'
import profileImage from '../../assets/Ariel_Ladner.webp'

import styles from './Sidebar.module.css'

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => setIsOpen(!isOpen)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1025) {
                setIsOpen(true)
            }
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <div className={styles.sidebar}>
            <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
                <ProfileCard name="Ariel Ladner" imageSrc={profileImage} />
                <MenuList toggleSidebar={toggleSidebar} />
            </nav>

            <ButtonToggle classBtn={styles.btnopen} isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
    )
}
