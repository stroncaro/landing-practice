import React from "react";
import styles from "./Logo.module.css";

interface LogoProps {
  colorStyle: 'bright' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ colorStyle }) => {
  const colorClass: string = colorStyle === 'bright' ? styles.logoBright : styles.logoDark;

  return <div className={`${styles.logo} ${colorClass}`}>T</div>
}

export default Logo;