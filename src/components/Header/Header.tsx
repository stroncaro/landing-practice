import React from 'react';
import Logo from '../shared/Logo'

const Header: React.FC = () => {
  return (
    <header id='page-header'>
      <Logo backgroundStyle='primary'/>
    </header>
  )
}

export default Header;