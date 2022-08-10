import React from 'react'

const Country = ({ flag, name, population, region, capital }) => {
  return (
    <div className="country-card">
      <div className="country-card__flag">
        <img src={flag} alt={`flag of ${name}`}></img>
      </div>
      <div className="country-card-content">
        <h3 className="country-card-content__header">{name}</h3>
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
