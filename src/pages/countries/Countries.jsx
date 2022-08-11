import React from 'react'
import './countries.styles.scss'

// components
import { SearchContainer, CountriesContainer, Navbar } from '../../components'

const Countries = () => {
  return (
    <div className="countries">
      <Navbar />
      <main>
        <SearchContainer />
        <CountriesContainer />
      </main>
    </div>
  )
}

export default Countries
