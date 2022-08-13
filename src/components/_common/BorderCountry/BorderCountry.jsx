import './border-country.styles.scss'
import React from 'react'

import { Link } from 'react-router-dom'

const BorderCountry = ({ name }) => {
  return (
    <div className="border-country">
      <Link to={`/country/${name}`} className="border-country__link">
        {name}
      </Link>
    </div>
  )
}

export default BorderCountry
