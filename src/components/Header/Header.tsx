import React from 'react';
import Logo from '../shared/Logo'
// import NavBar from './NavBar/NavBar';
import MenuIcon from './MenuIcon/MenuIcon';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header id='page-header' className={styles.header}>
      <Logo backgroundStyle='primary'/>
      <MenuIcon />
      {/* TODO: make collapsible navbar appear when menu button is clicked */}
      {/* <NavBar /> */}
    </header>
  )
}

export default Header;