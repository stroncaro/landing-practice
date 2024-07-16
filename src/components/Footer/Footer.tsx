import React from "react";
import Logo from "../shared/Logo";

import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer id='page-footer' className={styles.footer}>
      <div>
        <Logo backgroundStyle="white"/>
        <p>
          Trafalgar provides progressive, and
          affordable healthcare, accessible on
          mobile and online for everyone
        </p>
        <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
      </div>
      <div>
        <h1>Company</h1>
        <ul>
          <li><a>About</a></li>
          <li><a>Testimonials</a></li>
          <li><a>Find a doctor</a></li>
          <li><a>Apps</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;