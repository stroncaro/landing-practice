import React from "react";
import styles from "./MenuIcon.module.css";

interface MenuIconProps {
  onClick?: () => void;
}

const MenuIcon: React.FC<MenuIconProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles.menuIconContainer}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
};

export default MenuIcon;