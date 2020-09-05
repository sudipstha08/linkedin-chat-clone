import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/icons/linkedin-logo.svg'
import MessageIcon from '../../assets/icons/message.svg'
import NetworkIcon from '../../assets/icons/network.svg'

import './style.scss'

const Header = () => {
  return (
    <nav className="header">
      <ul className="header__list">
        <div>
          <Link to="/" className="header__link">
            <img className="header__logo" src={Logo} alt="logo"/>
          </Link>
        </div>
        <div className="header__menu">
          <Link to="/my-network" className="header__link">
            <img src={NetworkIcon} alt=""/>
            My Network
          </Link>
          <Link to="/messaging" className="header__link">
            <img src={MessageIcon} alt=""/>
            Messaging
          </Link>
        </div>
      </ul>
    </nav>
  )
}

export default Header
