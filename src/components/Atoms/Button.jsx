import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export const Button = ({
  children,
  to,
  href,
  onClick,
  primary = false
}) => {
  
  const className = `${styles.btn} ${primary ? styles.btn_primary : ""}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};