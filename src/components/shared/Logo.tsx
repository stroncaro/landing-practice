import React from "react";
import styles from "./Logo.module.css";

interface LogoProps {
  backgroundStyle: 'white' | 'primary';
}

const Logo: React.FC<LogoProps> = ({ backgroundStyle: colorStyle }) => {
  const colorClass: string = colorStyle === 'white' ? styles.logoWhite : styles.logoPrimary;

  return <div className={`${styles.logo} ${colorClass}`}>T</div>
}

export default Logo;