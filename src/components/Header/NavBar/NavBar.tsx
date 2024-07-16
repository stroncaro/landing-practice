import React from "react";
import styles from "./NavBar.module.css"

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li><a>Home</a></li>
        <li><a>Find a doctor</a></li>
        <li><a>Apps</a></li>
        <li><a>Testimonials</a></li>
        <li><a>About us</a></li>
        <li><a>Login</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;