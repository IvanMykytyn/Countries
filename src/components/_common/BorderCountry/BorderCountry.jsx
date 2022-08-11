import './border-country.styles.scss'
import React from 'react'

const BorderCountry = ({ name }) => {
  return (
    <div className="border-country">
      <a href={`/country/${name}`} className="border-country__link">
        {name}
      </a>
    </div>
  )
}

export default BorderCountry
