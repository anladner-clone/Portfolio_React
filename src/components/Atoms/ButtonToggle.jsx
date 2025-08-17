import { FaBars, FaTimes } from 'react-icons/fa'

export const ButtonToggle = ({ isOpen, toggleSidebar, classBtn }) => {
    return (
        <button
            onClick = {toggleSidebar}
            className = {classBtn}
        >
            {isOpen?<FaTimes />:<FaBars />}
        </button>
    )
}
