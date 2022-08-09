import React from 'react'
import './countries.styles.scss'

// icons
import {HiOutlineMoon} from 'react-icons/hi'

// components
import {SearchContainer, CountriesContainer} from '../../components'

const Countries = () => {
  return (
    <div className='countries'>

    <nav>
      <h1 className='header__text'>
        Where in the world?
      </h1>
      <button className='switch-theme'>
        <HiOutlineMoon size={20} className='switch-theme__icon'/>
        <p className='switch-theme__text'>Dark Mode</p>
      </button>
    </nav>
    <main>
      <SearchContainer />
      <CountriesContainer />
    </main>
    </div>
  )
}

export default Countries