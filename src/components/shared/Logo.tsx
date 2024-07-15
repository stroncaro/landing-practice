import React from "react";
import styles from "./Logo.module.css";

const Logo: React.FC = () => {
  return <div className={`${styles.logo} ${styles.logoDark}`}>T</div>
}

export default Logo;