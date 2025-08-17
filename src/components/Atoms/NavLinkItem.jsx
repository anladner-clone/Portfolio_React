import { Link } from 'react-router-dom'
import { AiOutlineUser, AiOutlineMail, AiOutlineHome, AiOutlineSetting } from "react-icons/ai"

export const NavLinkItem = ({ to, label, onClick, classLink, classItem }) => {
    const icons = {
        'Home': <AiOutlineHome />,
        'Who Am I?': <AiOutlineUser />,
        'Projects': <AiOutlineSetting />,
        'Contact': <AiOutlineMail />
    }
    return (
        <li className={classItem}>
            <Link
                to={to}
                onClick={onClick}
                className={classLink}
            >   {icons[label]}
                {label}
            </Link>
        </li>
    )
}