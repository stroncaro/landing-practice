import React from "react";
import MenuIcon from "../MenuIcon/MenuIcon";
import styles from "./NavBar.module.css"

const NavBar: React.FC = () => {
  return (
    <div className={styles.navBar}>
      <MenuIcon />
      <nav>
        <ul>
          <li><a>Home</a></li>
          <li><a>Find a doctor</a></li>
          <li><a>Apps</a></li>
          <li><a>Testimonials</a></li>
          <li><a>About us</a></li>
          <li><a>Login</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;