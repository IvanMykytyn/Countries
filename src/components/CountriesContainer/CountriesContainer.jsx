import React from 'react'
import './countries-container.styles.scss'
import { useSelector } from 'react-redux'

// components
import Country from './Country'
import Loading from '../Loading/Loading'

const CountriesContainer = () => {
  const { isLoading, searchCountries } = useSelector((store) => store.country)

  if (isLoading) {
    return (
      <div className="loading__container">
        <Loading />
      </div>
    )
  }
  if (searchCountries.length === 0) {
    return (
      <div className="countries__container__empty">
        <h1>No Сountries were found for this query.</h1>
      </div>
    )
  }

  return (
    <div className="countries__container">
      {searchCountries.map((country) => {
        return <Country key={country._id} {...country} />
      })}
    </div>
  )
}

export default CountriesContainer
