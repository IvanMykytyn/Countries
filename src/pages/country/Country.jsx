import './country.styles.scss'
import React from 'react'

// components
import { Navbar, CountryCard } from '../../components'

const Country = () => {
  return (
    <div className="country theme">
      <Navbar />
      <main>
        <CountryCard />
      </main>
    </div>
  )
}

export default Country
