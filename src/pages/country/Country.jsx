import './country.styles.scss'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

// components
import { Navbar, CountryCard } from '../../components'

// actions
import { getCountry } from '../../features/country/countrySlice'

const Country = () => {
  const dispatch = useDispatch()
  const params = useParams()

  // get data about country
  useEffect(() => {
    dispatch(getCountry(params.name))
  }, [dispatch, params.name])

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
