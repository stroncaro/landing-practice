import React, { useState } from 'react';
import Logo from '../shared/Logo'
import NavBar from './NavBar/NavBar';
import MenuIcon from './MenuIcon/MenuIcon';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);

  const toggleNavBarVisibility = () => {
    setIsNavBarVisible(!isNavBarVisible);
  };

  return (
    <header id='page-header' className={styles.header}>
      <Logo backgroundStyle='primary'/>
      <MenuIcon onClick={toggleNavBarVisibility} />
      {isNavBarVisible && <NavBar /> }
    </header>
  )
}

export default Header;