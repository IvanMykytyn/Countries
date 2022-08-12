import './navbar.styles.scss'
import React from 'react'

// icons
import { HiOutlineMoon } from 'react-icons/hi'

const Navbar = () => {
  return (
    <nav>
      <h1 className="header__text">Where in the world?</h1>
      <button
        type="button"
        className="switch-theme"
      >
        <HiOutlineMoon size={20} className="switch-theme__icon" />
        <p className="switch-theme__text">
          {true === 'light' ? 'Light Mode' : 'Dark Mode'}
        </p>
      </button>
    </nav>
  )
}

export default Navbar
