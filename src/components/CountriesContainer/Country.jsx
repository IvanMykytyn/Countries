import React from 'react'
import { useNavigate } from 'react-router-dom'

const Country = ({ flag, name, population, region, capital }) => {
  const navigate = useNavigate()

  return (
    <div className="country-item" onClick={() => navigate(`/country/${name}`)}>
      <div className="country-item__flag">
        <img src={flag} alt={`flag of ${name}`}></img>
      </div>
      <div className="country-item-content">
        <h3 className="country-item-content__header">{name}</h3>
        <p>
          <b>Population:</b> {population}
        </p>
        <p>
          <b>Region:</b> {region}
        </p>
        <p>
          <b>Capital:</b> {capital}
        </p>
      </div>
    </div>
  )
}

export default Country
