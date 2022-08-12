import './navbar.styles.scss'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// icons
import { HiOutlineMoon, HiMoon } from 'react-icons/hi'

// actions
import { changeTheme } from '../../features/country/countrySlice'


const Navbar = () => {
  const dispatch = useDispatch()
  const { darkTheme } = useSelector((store) => store.country)

  const handleClick = () => {
    dispatch(changeTheme())
    document.getElementById('root').classList.toggle('dark')
  }

  return (
    <nav>
      <h1 className="header__text">Where in the world?</h1>
      <button type="button" className="switch-theme" onClick={handleClick}>
        {darkTheme ? (
          <HiMoon size={20} className="switch-theme__icon" />
        ) : (
          <HiOutlineMoon size={20} className="switch-theme__icon" />
        )}
        <p className="switch-theme__text">
          {darkTheme ? 'Light Mode' : 'Dark Mode'}
        </p>
      </button>
    </nav>
  )
}

export default Navbar
