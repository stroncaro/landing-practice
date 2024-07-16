import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  backgroundStyle: 'white' | 'primary';
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ backgroundStyle, text, onClick }) => {
  const className: string = `${styles.button} ${
    backgroundStyle === 'white'
    ? styles.buttonWhite
    : styles.buttonPrimary
  }`; 

  return <button onClick={onClick} className={className}>{text}</button>
}

export default Button;