import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export const SocialIcon = ({ href, label, classLink}) => {
    const icons = {
        GitHub: <FaGithub />,
        LinkedIn: <FaLinkedin />,
        Instagram: <FaInstagram />
    }
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classLink}>
            {icons[label]}
        </a>
    )
}
