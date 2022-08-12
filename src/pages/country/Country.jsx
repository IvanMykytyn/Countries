import './country.styles.scss'
import React from 'react'

// components
import { Navbar, CountryCard } from '../../components'

// icons
import { BsArrowLeft } from 'react-icons/bs'

// react router dom
import { Link } from 'react-router-dom'

const Country = () => {
  return (
    <div className="country theme">
      <Navbar />
      <main>
        <div className="go-back">
          <Link to="/" className="go-back__link">
            <BsArrowLeft size={22} />
            <p>Back</p>
          </Link>
        </div>
        <CountryCard />
      </main>
    </div>
  )
}

export default Country
