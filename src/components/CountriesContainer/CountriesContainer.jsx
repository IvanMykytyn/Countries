import React from 'react'
import './countries-container.styles.scss'
import { useSelector } from 'react-redux'

// components
import Country from './Country'

const CountriesContainer = () => {
  const { isLoading, countries } = useSelector((store) => store.country)

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  
  return (
    <div className="countries__container">
      {countries.map((country) => {
        return <Country key={country._id} {...country} />
      })}
    </div>
  )
}

export default CountriesContainer
